
import { auth, googleProvider} from "../../Firebase/firebase";
import { profileExist, createProfile } from "../../Firebase/Firestore/addProfile";
import {
    SIGNIN_LOADING,
    SIGNIN_FAILIURE,
    SIGNIN_SUCCESS,
    SIGNOUT_SUCCESS
} from "./actionTypes"


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
  export const signin_success = (user) => {
    return {
       type:SIGNIN_SUCCESS,
       payload: user
    };
  };
  export const signout = ()=>{
      return{
         type: SIGNOUT_SUCCESS
      } 
  }


 export const setUser = ()=>(dispatch) => {
     auth.onAuthStateChanged(async (user) => {
         if(user){
             return dispatch(signin_success(user))
         }
         return dispatch(signout())
      })
   }
  export const logout = () => async (dispatch)=>{
    dispatch(signin_loading())
     try {
          await auth.signOut()
          dispatch(setUser())
        } catch(err){
            dispatch(signin_failiure(err));
      }
    }
      
  
  export const signin = (email, password) => async(dispatch) => {
      dispatch(signin_loading())
       try{
           await auth.signInWithEmailAndPassword(email, password)
            dispatch(setUser())
       }
       catch(err){
             console.log(err);
             dispatch(signin_failiure(err));
       }
  }

  export const createAccount = (email, password, signup) => async(dispatch) => {
    dispatch(signin_loading())
     try{
           const data =  await signup(email, password);
          if(data) createProfile(data.user.uid, data.user?.email, "")
          dispatch(setUser())
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
             profileExist(user.uid ,user.email, user.providerData[0].photoURL)
             dispatch(setUser())
     })
    }
     catch (error) {
        console.log(error.message)
      }
}
//If in future we need to do these tasks 

//     return auth.sendPasswordResetEmail(email)
//    return currentUser.updateEmail(email)
//   return currentUser.updatePassword(password)
  