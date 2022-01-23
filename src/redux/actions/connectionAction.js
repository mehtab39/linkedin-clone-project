
import {
  db
} from "../../Firebase/firebase";
import "firebase/firestore";
import firebase from "firebase/app"

 import {
    CONNECTION_SUCCESS,
    CONNECTION_LOADING,
    CONNECTION_FAILIURE,
    SUGGESTION_SUCCESS,
    PENDING_SUCCESS,
    SENT_SUCCESS,
    USERACTIVITY_SUCCESS,
    NO_CONNECTIONS
  } 
  from "./actionTypes"
  
  
  export const connection_success = (payload) => {
      return {
        type: CONNECTION_SUCCESS,
        payload: payload,
      };
    };

    export const suggestions_success = (payload) => {
    
      return {
        type: SUGGESTION_SUCCESS,
        payload: payload,
      };
    };

    export const pending_success = (payload) => {
      return {
        type: PENDING_SUCCESS,
        payload: payload,
      };
    };

    

    export const no_connections = () => {
      return {
        type: NO_CONNECTIONS,
      };
    };

export const sent_success = (payload) => {
      return {
        type: SENT_SUCCESS,
        payload: payload,
      };
    };

export const useractivity_success = (payload) => {
      return {
        type: USERACTIVITY_SUCCESS,
        payload: payload,
      };
    };
  
export const connection_failiure = (error) => {
      return {
         type: CONNECTION_FAILIURE,
         payload: error
      };
    };

export const connection_loading = () => {
      return {
         type: CONNECTION_LOADING,
      };
    };
   

export const sendConnection = (from, to) => async(dispatch)=>{
        dispatch(connection_loading())
          try{
            const fromRef = db.collection("profile").doc(from);
            const toRef = db.collection("profile").doc(to);
            const resFrom = await fromRef.update({
                waiting: firebase.firestore.FieldValue.arrayUnion(to)
            });
            const resTo = await toRef.update({
                pending: firebase.firestore.FieldValue.arrayUnion(from)
            });
        dispatch(useractivity_success())
        }
        catch(e){
          dispatch(connection_failiure(e))
        }
  }

export const acceptPending =(from, to) =>async (dispatch)=>{
  dispatch(connection_loading())
  try{
           const fromRef = db.collection("profile").doc(from);
          const toRef = db.collection("profile").doc(to);
          const resFrom = await fromRef.update({
              pending: firebase.firestore.FieldValue.arrayRemove(to),
              connections: firebase.firestore.FieldValue.arrayUnion(to)
          
          });
          const resTo = await toRef.update({
              waiting: firebase.firestore.FieldValue.arrayRemove(from),
              connections: firebase.firestore.FieldValue.arrayUnion(from)
          });
          acceptRequestNotification(from, to);
          dispatch(useractivity_success())
  }
  catch(e){
    dispatch(connection_failiure(e))
  }
}

export const  deletePending = (from, to) => async(dispatch)=>{
      dispatch(connection_loading())
      try{
          const fromRef = db.collection("profile").doc(from);
          const toRef = db.collection("profile").doc(to);
          const resFrom = await fromRef.update({
              pending: firebase.firestore.FieldValue.arrayRemove(to)
        });
          const resTo = await toRef.update({
               waiting: firebase.firestore.FieldValue.arrayRemove(from)
          });
          dispatch(useractivity_success())
      }catch(e){
                 dispatch(connection_failiure(e))
       }
}

export const  deleteSent = (from, to) => async(dispatch)=>{

    dispatch(connection_loading)
  try{
          const fromRef = db.collection("profile").doc(from);
          const toRef = db.collection("profile").doc(to);
          const resFrom = await fromRef.update({
              waiting: firebase.firestore.FieldValue.arrayRemove(to)
        });
          const resTo = await toRef.update({
               pending: firebase.firestore.FieldValue.arrayRemove(from)
          });
          dispatch(useractivity_success())  
  }
  catch(e){
    dispatch(connection_failiure(e))
  }
}

export const deleteConnection =(from, to) =>async (dispatch)=>{
  dispatch(connection_loading())
    try{
        const fromRef = db.collection("profile").doc(from);
        const toRef = db.collection("profile").doc(to);
        const resFrom = await fromRef.update({
              connections: firebase.firestore.FieldValue.arrayRemove(to)
      });
        const resTo = await toRef.update({
             connections: firebase.firestore.FieldValue.arrayRemove(from)
        });
  dispatch(useractivity_success())
}
catch(e){
  dispatch(connection_failiure(e))
}
}

export const acceptRequestNotification = async(from, to) =>{
  try{
  const fromRef = db.collection("profile").doc(from);
  const toRef = db.collection("profile").doc(to);
  const doc = await fromRef.get();
  const fromName = doc.data().username;
  const fromImage = doc.data().profile_img;
  const payload = {
      type: "acceptRequest",
      image: fromImage,
      description: `Congratulations, ${fromName} accepted your invitation, you and ${fromName} are now connections`
  }
  const resTo = await toRef.update({
      notifications: firebase.firestore.FieldValue.arrayUnion(payload)
  });
  }
  catch(e){
    
      return
  }

}

export const suggestions = (id)=>async(dispatch)=>{
  dispatch(connection_loading())
  try{
  db.collection("profile")
  .where("userUID", "!=", id)
  .limit(12)
  .get()
  .then((querySnapshot) => {
  const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
  })); 
  dispatch(suggestions_success(data))

   })
  }
  catch(e){
    dispatch(connection_failiure(e))
  }
}
 
export const connections = (id)=>async(dispatch)=>{
  dispatch(connection_loading())
  try{
      await  db.collection("profile")
          .where("connections", "array-contains-any", [id])
          .get()
          .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
          })); 
          if(data.length===0){ dispatch(no_connections()) }
          dispatch(connection_success(data))
      })
      }
  catch(e){
    dispatch(connection_failiure(e))
  }
}

export const pending = (id)=>async(dispatch)=>{

  dispatch(connection_loading())
  try{
      await db.collection("profile")
         .where("waiting", "array-contains-any", [id])
         .get()
         .then((querySnapshot) => {
         const data = querySnapshot.docs.map((doc) => ({
             id: doc.id,
             ...doc.data(),
         })); 
         dispatch(pending_success(data))
     })
     }
  catch(e){
    dispatch(connection_failiure(e))
  }
}

export const sentRequests = (id)=>async(dispatch)=>{
  dispatch(connection_loading())
  try{
    await db.collection("profile")
    .where("pending", "array-contains-any", [id])
    .get()
    .then((querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })); 
  
    dispatch(sent_success(data))
   })  
  }
  catch(e){
    dispatch(connection_failiure(e))
  }
}







