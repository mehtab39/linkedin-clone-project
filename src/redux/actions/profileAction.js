import { fetchConnections, fetchPending, fetchSent, fetchSuggestions  } from "../../Firebase/Firestore/connections";
import { fetchProfile, updateProfile } from "../../Firebase/Firestore/addProfile";
import {
  PROFILE_SUCCESS,
  PROFILE_LOADING,
  PROFILE_FAILIURE 
} 
from "./actionTypes"


export const profile_success = () => {
    return {
      type: PROFILE_SUCCESS
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

  export const fetchUserProfile = (id, setData)=>(dispatch) => {
        dispatch(profile_loading)
        try{
          fetchProfile( id, setData);
          dispatch(profile_success)
        }
        catch(e){
          dispatch(profile_failiure(e))
        }
  }

  export const updateData = (collection, data, id)=>(dispatch)=>{
    // updateData("profile", data={form}, profile.id)
    dispatch(profile_loading())
    try{
      updateProfile(collection, data, id)
    dispatch(profile_success())
    }
    catch(e){
      dispatch(profile_failiure(e))
    }
  }


  
export const suggestions = (id, setData)=>(dispatch)=>{
  dispatch(profile_loading())
  try{
    fetchSuggestions( id, setData);
    dispatch(profile_success())
  }
  catch(e){
    dispatch(profile_failiure(e))
  }
}

  
export const connections = (id, setData)=>(dispatch)=>{
  dispatch(profile_loading())
  try{
    fetchConnections( id, setData);
    dispatch(profile_success())
  }
  catch(e){
    dispatch(profile_failiure(e))
  }
}

 
export const pending = (id, setData)=>(dispatch)=>{
  dispatch(profile_loading())
  try{
    fetchPending( id, setData);
    dispatch(profile_success())
  }
  catch(e){
    dispatch(profile_failiure(e))
  }
}




export const sentRequests = (id, setData)=>(dispatch)=>{
  dispatch(profile_loading())
  try{
    fetchSent( id, setData);
    dispatch(profile_success())
  }
  catch(e){
    dispatch(profile_failiure(e))
  }
}







