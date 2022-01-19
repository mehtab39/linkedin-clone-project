// Suggestions
// suggest CONNECTION of people who are
// != current user && ! in the connection, pending and waiting array


// sending request
// append userid pending + append another user id waiting 
// send notifications to another person



// accepting request
// append  connection array in both users 
// pop waiting of one and pending of another
// send notifications to first person


//have to add connection reducer an actionTypes
import { sendConnectionHandle, deleteMyConnection, acceptPendingConnection, deletePendingConnection, deleteSentConnection } from "../../Firebase/Firestore/connections";
import {
    CONNECTION_SUCCESS,
    CONNECTION_LOADING,
    CONNECTION_FAILIURE 
  } 
  from "./actionTypes"
  
  
  export const connection_success = () => {
      return {
        type: CONNECTION_SUCCESS
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

export const sendConnection = (from, to) => (dispatch)=>{
        dispatch(connection_loading())
        try{
        sendConnectionHandle(from, to)
        dispatch(connection_success())
        }
        catch(e){
          console.log('e:', e)
          dispatch(connection_failiure(e))
        }
  }

  
export const acceptPending = (from, to) => (dispatch)=>{
  dispatch(connection_loading())
  try{
  acceptPendingConnection(from, to)
  dispatch(connection_success())
  }
  catch(e){
    console.log('e:', e)
    dispatch(connection_failiure(e))
  }
}

export const  deletePending = (from, to) => (dispatch)=>{
  dispatch(connection_loading())
  try{
     deletePendingConnection(from, to)
     dispatch(connection_success())
  }
  catch(e){
    console.log('e:', e)
    dispatch(connection_failiure(e))
  }
}





export const  deleteSent = (from, to) => (dispatch)=>{
    console.log('from, to:', from, to)
    dispatch(connection_loading)
  try{
    console.log("hi")
     deleteSentConnection(from, to)
      dispatch(connection_success)
  }
  catch(e){
    console.log('e:', e)
    dispatch(connection_failiure(e))
  }
}

export const deleteConnection = (from, to) => (dispatch)=>{
  dispatch(connection_loading)
try{

   deleteMyConnection(from, to)
  dispatch(connection_success)
}
catch(e){
  console.log('e:', e)
  dispatch(connection_failiure(e))
}
}





