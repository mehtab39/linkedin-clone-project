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

  const generateId = (from, to) =>{
    return (from > to ? to+ "-" + from : from+"-"+to )
  }

  export const getMessages = (from, to)=> async(dispatch) => {
    dispatch(message_loading())
    try{
        const docid  = generateId(from, to)
        const querySnap =  await db.collection('chatrooms')
        .doc(docid)
        .collection('messages')
        .orderBy('createdAt',"desc")
        .get()
        console.log(querySnap)
       const allmsg = querySnap?.docs?.map(docsnap=>{
            return {
                ...docsnap.data()
            }
        })
        dispatch(message_success(allmsg))
    }
    catch(e){
      console.log('p:', e)
      dispatch(message_failiure(e))
    }
}

export const sendTheMessage = (value, from, to )=>(dispatch) => {
    dispatch(message_loading())
    try{
      const mymsg = {
          msg: value,
          sentBy: from.id || from,
          sentToUsername: to.username || "",
          sentTo:  to.id || to,
          createdAt:new Date()
      }
      console.log(mymsg)
     const docid  = generateId(mymsg.sentBy, mymsg.sentTo)
     db.collection('chatrooms')
     .doc(docid)
     .collection('messages')
     .add({...mymsg,createdAt:timestamp()})
      dispatch(send_success())
      dispatch(getMessages(mymsg.sentBy, mymsg.sentTo))
    }
    catch(e){
      dispatch(message_failiure(e))
    }
}















