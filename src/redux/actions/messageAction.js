import {
  db, timestamp
} from "../../Firebase/firebase";
import "firebase/firestore";

import {
  MESSAGE_SUCCESS,
  MESSAGE_LOADING,
  MESSAGE_FAILIURE,
  SEND_SUCCESS 
  
} 
from "./actionTypes"


export const message_success = (data) => {
    return {
      type: MESSAGE_SUCCESS,
      payload: data,
    };
  };
  export const message_failiure = (error) => {
    return {
       type: MESSAGE_FAILIURE,
       payload: error
    };
  };
  export const message_loading = () => {
    return {
       type: MESSAGE_LOADING,
    };
  };

  export const send_success = () => {
    return {
       type: SEND_SUCCESS,
    };
  };

  export const getMessages = (from, to)=> async(dispatch) => {
    dispatch(message_loading())
    try{
        const docid  =to > from ? from+ "-" +to :to+"-"+from 
        const querySnap =  await db.collection('chatrooms')
        .doc(docid)
        .collection('messages')
        .orderBy('createdAt',"asc")
        .get()
        
       const allmsg = querySnap?.docs?.map(docsnap=>{
            console.log('docsnap:', docsnap)
            return {
                ...docsnap.data(),
                createdAt:docsnap.data().createdAt.toDate()
            }
        })
        dispatch(message_success(allmsg))
    }
    catch(e){
      console.log('e:', e)
      dispatch(message_failiure(e))
    }
}

export const sendTheMessage = (value, from, to )=>(dispatch) => {
    dispatch(message_loading())
    try{
      const msg = value;
      const mymsg = {
          msg,
          sentBy:from,
          sentTo:to,
          createdAt:new Date()
      }
     const docid  = from > to ? to+ "-" + from : from+"-"+to 
     db.collection('chatrooms')
     .doc(docid)
     .collection('messages')
     .add({...mymsg,createdAt:timestamp()})
      dispatch(send_success())
      dispatch(getMessages(from, to))
     
    }
    catch(e){
      dispatch(message_failiure(e))
    }
}















