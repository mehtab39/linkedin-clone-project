
import { addPost } from "../../Firebase/Firestore/addPost";
import {
  SETPOST_SUCCESS,
  SETPOST_LOADING,
  SETPOST_FAILIURE 
} 
from "./actionTypes"


export const setpost_success = () => {
    return {
      type: SETPOST_SUCCESS
    };
  };
  export const setpost_failiure = (error) => {
    return {
       type: SETPOST_FAILIURE,
       payload: error
    };
  };
  export const setpost_loading = () => {
    return {
       type: SETPOST_LOADING,
    };
  };

  export const addNewPost = (form, id)=>(dispatch) => {
        dispatch(setpost_loading())
        try{
          addPost(form, id)
          dispatch(setpost_success())
        }
        catch(e){
          dispatch(setpost_failiure(e))
        }
  }


  










// import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
// const washingtonRef = doc(db, "cities", "DC");
// // Atomically add a new region to the "regions" array field.
// await updateDoc(washingtonRef, {
//     regions: arrayUnion("greater_virginia")
// });
// // Atomically remove a region from the "regions" array field.
// await updateDoc(washingtonRef, {
//     regions: arrayRemove("east_coast")
// });