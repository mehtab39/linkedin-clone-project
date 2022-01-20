import {
    db
} from "../firebase";
import "firebase/firestore";
import firebase from "firebase/app"



export const sendConnectionHandle = async (from, to) => {
    try{
        const fromRef = db.collection("profile").doc(from);
        const toRef = db.collection("profile").doc(to);
        const resFrom = await fromRef.update({
            waiting: firebase.firestore.FieldValue.arrayUnion(to)
        });
        const resTo = await toRef.update({
            pending: firebase.firestore.FieldValue.arrayUnion(from)
        });
    }
    catch(e){
        console.log('e:', e)
        return

    }
}

export const fetchConnections = async(id, setData)=>{
    await  db.collection("profile")
        .where("connections", "array-contains-any", [id])
        .get()
        .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })); 
        console.log("my connections are:",data);
        setData(data);
    
    })
    
    }


    export const fetchPending = async(id, setData)=>{
        // we will find all profiles whose waiting has this id
       await db.collection("profile")
          .where("waiting", "array-contains-any", [id])
          .get()
          .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
          })); 
          
          setData(data);
      
      })
      
      }


      export const fetchSent = async (id, setData)=>{
        await db.collection("profile")
          .where("pending", "array-contains-any", [id])
          .get()
          .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
          })); 
          setData(data);
      })
      
     }


      export const acceptPendingConnection = async (from, to) => {
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
        }
        catch(e){
            console.log('e:', e)
            return
    
        }
    }

    export const deletePendingConnection = async (from, to) => {
        console.log('from, to:', from, to)
        try{
            const fromRef = db.collection("profile").doc(from);
            const toRef = db.collection("profile").doc(to);
            const resFrom = await fromRef.update({
                pending: firebase.firestore.FieldValue.arrayRemove(to)
          });
            const resTo = await toRef.update({
                 waiting: firebase.firestore.FieldValue.arrayRemove(from)
            });
        }
        catch(e){
            console.log('e:', e)
            return
    
        }
    }

    export const deleteSentConnection = async (from, to) => {
        try{
            const fromRef = db.collection("profile").doc(from);
            const toRef = db.collection("profile").doc(to);
            const resFrom = await fromRef.update({
                waiting: firebase.firestore.FieldValue.arrayRemove(to)
          });
            const resTo = await toRef.update({
                 pending: firebase.firestore.FieldValue.arrayRemove(from)
            });
        console.log(fromRef, toRef)
        }
        catch(e){
            console.log('e:', e)
            return
    
        }
    }

    export const deleteMyConnection = async (from, to) => {
        try{
            const fromRef = db.collection("profile").doc(from);
            const toRef = db.collection("profile").doc(to);
            const resFrom = await fromRef.update({
                connections: firebase.firestore.FieldValue.arrayRemove(to)
          });
            const resTo = await toRef.update({
                 connections: firebase.firestore.FieldValue.arrayRemove(from)
            });
        }
        catch(e){
            console.log('e:', e)
            return
    
        }
    }
    
    




    //   acceptPendingConnection, deleteP

// export const sendConnectionHandle = async (from, to) => {
//     const fromUser = doc(db, "profile", from);
//     const toUser = doc(db, "profile", to);

//     await updateDoc(fromUser, {
//         waiting: arrayUnion(to)
//     });
//     await updateDoc(toUser, {
//         waiting: arrayUnion(from)
//     });

// }



// // Atomically remove a region from the "regions" array field.
// await updateDoc(washingtonRef, {
//     regions: arrayRemove("east_coast")
//  });



// const washingtonRef = doc(db, "cities", "DC");

// await updateDoc(washingtonRef, {
//     regions: arrayUnion("greater_virginia")
// });