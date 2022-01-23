import { v4 as uuid_v4 } from "uuid";
import { db } from "../../Firebase/firebase";
import {
  PROFILE_SUCCESS,
  PROFILE_LOADING,
  PROFILE_FAILIURE,
  UPDATE_SUCCESS,
  PROFILE_FOUND_SUCCESS,
  PROFILE_NOT_FOUND
} 
from "./actionTypes"


export const profile_success = (profile) => {
 
  return {
    type: PROFILE_SUCCESS,
    payload: profile   
   };
};
export const profile_found_success = (profile) => {
  return {
    type: PROFILE_FOUND_SUCCESS,
    payload: profile   
   };
};
export const profile_not_found = (profile) => {
  return {
    type: PROFILE_NOT_FOUND,
   };
};

export const update_success = (profile) => {
 
  return {
    type: UPDATE_SUCCESS,
    payload: profile   
   };
};

  export const profile_failiure = (error) => {
    return {
       type: PROFILE_FAILIURE,
       payload: error
    };
  };
  export const profile_loading = () => {
    return {
       type: PROFILE_LOADING,
    };
  };

  export const fetchUserProfile = (id)=> async(dispatch) => {
     dispatch(profile_loading())
        try{
          await db.collection("profile")
          .where("userUID", "==", id)
          .get()
          .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
      
              id: doc.id,
              ...doc.data(),
          })); 
         

          dispatch(profile_success(data[0]))
        });
                
        }
        catch(e){
          dispatch(profile_failiure(e))
        }
  }
  export const globalProfile = async (id, setData) => {
       await db.collection("profile")
       .where("userUID", "==", id)
       .get()
       .then((querySnapshot) => {
       const data = querySnapshot.docs.map((doc) => ({
           id: doc.id,
           ...doc.data(),
       })); 
       setData(data[0])
     });         
}

  export const updateData = (collection, data, id)=>(dispatch)=>{
    dispatch(profile_loading())
    try{
      updateProfile(collection, data, id)
    dispatch(update_success())
    }
    catch(e){
      dispatch(profile_failiure(e))
    }
  }


const initialProfile = (user) => ({
    first_name: user?.displayName?.split(" ")[0]||"",
    last_name: user?.displayName?.split(" ")[1]||"",
    username: (user?.displayName?.split(" ")[0] + user?.displayName?.split(" ")[1])||user?.email?.split("@")[0]||uuid_v4(),
    email: user?.email||"",
    userUID: user?.uid,
    address: "",
    company: "",
    experience: [],
    education: [],
    activity:[],
    notifications: [{
       type: "welcome",
       description: `Welcome, ${(user?.displayName?.split(" ")[0] + user?.displayName?.split(" ")[1])||user?.email?.split("@")[0]} to the LinkedIn community, You can update your profile`
      }],
    skills: [],
    profile_summary: "",
    job_title: "",
    profile_img: user?.providerData[0]?.photoURL||"",
    resume_path: "",
    connections: [],
    pending: [],
    waiting: [],
})

export const profileExist = (user)=>{
   let newProfile = initialProfile(user);
   console.log('newProfile:', newProfile)
 db.collection("profile")
   .where("userUID", "==", user.uid)
  .get()
  .then((querySnapshot) => {
     if(querySnapshot.docs.length===0){
        createProfile(user)
     }
})
}


 export const createProfile =  (user) =>{
    try{
    let newProfile = initialProfile(user);
       console.log('newProfile:', newProfile)
       db.collection("profile").add(newProfile)
        .then((ref) => {
       console.log("Added doc with ID: ", ref.id);

    });
   }
   catch(e){
      console.log('e:', e)

   }
}


export const  getProfileByUsername =  (username) => async(dispatch) =>{
    await db.collection("profile")
    .where("username", "==", username)
    .get()
    .then((querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    if(data.length===0){
       dispatch(profile_not_found())
       return
    }
    dispatch(profile_found_success(data[0]))

  });         
}








export const updateProfile = async (data, id) =>{
   const Ref = db.collection("profile").doc(id);
   const res = await Ref.update(data);
}