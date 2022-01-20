import { storage, db, timestamp } from "../firebase"

import "firebase/firestore";
import firebase from "firebase/app"
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






 
  export const updateArticle = (payload) => {
       db.collection("articles").doc(payload.id).update(payload.update);
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

	 export const deleteMyPost = async(id) => {
		const res = await db.collection("articles").doc(id).delete();
		 console.log(res);
		 return
		
	 };
 
	 