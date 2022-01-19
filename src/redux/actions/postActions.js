
import { db } from "../../Firebase/firebase";
import { addPost, getArticles, updateArticle } from "../../Firebase/Firestore/addPost";
import {
  SETPOST_SUCCESS,
  SETPOST_LOADING,
  SETPOST_FAILIURE, 
  GETPOST_SUCCESS,
  GETPOST_LOADING,
  GETPOST_FAILIURE
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


  
export const getpost_success = (payload, id) => {
  return {
    type: GETPOST_SUCCESS,
    payload: [payload, id]
  };
};
export const getpost_failiure = (error) => {
  return {
     type: GETPOST_FAILIURE,
     payload: error
  };
};
export const getpost_loading = () => {
  return {
     type: GETPOST_LOADING,
  };
};

  
  export const addNewPost = (payload)=>(dispatch) => {
    dispatch(setpost_loading())
    try{
      addPost(payload)
      dispatch(setpost_success())
    }
    catch(e){
      dispatch(setpost_failiure(e))
    }
}



export const getNewArticles = ()=>(dispatch) => {
  dispatch(getpost_loading())
  try{
      let payload;
      let id;
      db.collection("articles")
        .orderBy("actor.date", "desc")
        .onSnapshot((snapshot) => {
          payload = snapshot.docs.map((doc) => doc.data());
          id = snapshot.docs.map((doc) => doc.id);
          dispatch(getpost_success(payload, id))
         
        });
      }
  catch(e){
    dispatch(getpost_failiure(e))
  }
}


export const updateTheArticles = (payload)=>(dispatch) => {
  dispatch(setpost_loading())
  try{
    updateArticle(payload)
    dispatch(setpost_success())
  }
  catch(e){
    dispatch(setpost_failiure(e))
  }
}
 
  
  

  







