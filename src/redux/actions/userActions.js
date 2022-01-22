
import { auth, googleProvider} from "../../Firebase/firebase";
import {
    SIGNIN_LOADING,
    SIGNIN_FAILIURE,
    SIGNIN_SUCCESS,
    SIGNOUT_SUCCESS
} from "./actionTypes"
import { createProfile, profileExist } from "./profileAction";


export const signin_loading = () => {
    return {
      type: SIGNIN_LOADING
    };
  };
  export const signin_failiure = (error) => {
    return {
       type: SIGNIN_FAILIURE,
       payload: error
    };
  };
  export const signin_success = () => {
    return {
       type:SIGNIN_SUCCESS,
    };
  };
  export const signout = ()=>{
      return{
         type: SIGNOUT_SUCCESS
      } 
  }

  export const logout = () => async (dispatch)=>{
    dispatch(signin_loading())
     try {
          await auth.signOut()
          dispatch(signout())
        } catch(err){
            dispatch(signin_failiure(err));
      }
    }
      
  
  export const signin = (email, password) => async(dispatch) => {
      dispatch(signin_loading())
       try{
           await auth.signInWithEmailAndPassword(email, password)
           dispatch(signin_success())
       }
       catch(err){
             console.log(err);
             dispatch(signin_failiure(err));
       }
  }

  export const createAccount = (email, password) => async(dispatch) => {
    dispatch(signin_loading())
     try{
    const data = await auth.createUserWithEmailAndPassword(email, password)
     if(data) createProfile(data.user)
     dispatch(signin_success())
     }
     catch(err){
           dispatch(signin_failiure(err));
     }
}

export const signInWithGoogle = () => (dispatch) => {
    dispatch(signin_loading())
     try{
        auth.signInWithPopup(googleProvider)
        .then((res)=> {
             const user = res.user;
             profileExist(user)
     })
    }
     catch (error) {
      dispatch(signin_failiure(error))
      }
}
