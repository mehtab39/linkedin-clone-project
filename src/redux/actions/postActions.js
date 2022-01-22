import { storage, db, timestamp } from "../../Firebase/firebase"
import "firebase/firestore";
import firebase from "firebase/app"
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


export const updateTheArticles =  (payload)=> async (dispatch) => {
  dispatch(setpost_loading())
  try{
    
    await db.collection("articles").doc(payload.id).update(payload.update);
    dispatch(setpost_success())
  }
  catch(e){
    dispatch(setpost_failiure(e))
  }
}



export const likeNotification = (from, to)=>(dispatch) => {
  dispatch(setpost_loading())
  try{
    sendLikeNotification(from, to)
    dispatch(setpost_success())
  }
  catch(e){
    dispatch(setpost_failiure(e))
  }
}

export const deletePost = (id) => async(dispatch) => {
  console.log('id:', id)
  dispatch(setpost_loading())
  try{
    const res = await db.collection("articles").doc(id).delete();
    dispatch(setpost_success())
  }
  catch(e){
    dispatch(setpost_failiure(e))
  }
}



export const addPost = (payload) =>{
		if (payload.image !== "") {

			const upload = storage.ref(`images/${payload.image.name}`).put(payload.image);
			upload.on(
				"state_changed",
				(snapshot) => {
					const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log('progress:', progress)
				},
				(err) => alert(err),
				async () => {
					const downloadURL = await upload.snapshot.ref.getDownloadURL();
					db.collection("articles").add({
						actor: {
							description: payload.user.email,
							title: payload.user.displayName || payload.username,
							date: timestamp(),
							image: payload.userImage,
						},
						video: payload.video,
						sharedImg: downloadURL,
						likes: {
							count: 0,
							whoLiked: [],
						},
						comments: 0,
						description: payload.description,
                        userProfile: payload.userProfile
					});
				
				}
			);
		} else if (payload.video) {
			
			db.collection("articles").add({
				actor: {
					description: payload.user.email,
					title: payload.user.displayName || payload.username,
					date: timestamp(),
					image: payload.userImage,
				},
				video: payload.video,
				sharedImg: "",
				likes: {
					count: 0,
					whoLiked: [],
				},
				comments: 0,
				description: payload.description,
        userProfile: payload.userProfile
			});
		
		} else if (payload.image === "" && payload.video === "") {
		
			db.collection("articles").add({
				actor: {
					description: payload.userTitle || payload.user.email,
					title: payload.user.displayName || payload.username,
					date: timestamp(),
					image: payload.userImage,
				},
				video: "",
				sharedImg: "",
				likes: {
					count: 0,
					whoLiked: [],
				},
				comments: 0,
				description: payload.description,
        userProfile: payload.userProfile
			});
	
		}
};



export const sendLikeNotification = async (user, post) => {
		try{
			const fromRef = db.collection("profile").doc(user);
			const toRef = db.collection("profile").doc(post.userProfile);
			const doc = await fromRef.get();
			const fromName = doc.data().username;
			const payload = {
		           type: "like",
		           whoLiked : fromName,
				   postTitle: post.description,
				   postImage: post.sharedImg || ""
			}
			const resTo = await toRef.update({
				notifications: firebase.firestore.FieldValue.arrayUnion(payload)
			});
			sendActivity(user, post)
			}
			catch(e){
				console.log('e:', e)
				return
		
			}
		
	 };

	 export const sendActivity = async (user, post) => {
		try{
			const fromRef = db.collection("profile").doc(user);
			const payload = {
		           type: "like",
				   postTitle: post.description,
				   postImage: post.sharedImg || ""
			}
			const resFrom = await fromRef.update({
				activity: firebase.firestore.FieldValue.arrayUnion(payload)
			});
			}
			catch(e){
				console.log('e:', e)
				return
		
			}
		
	 };


  
  

  







