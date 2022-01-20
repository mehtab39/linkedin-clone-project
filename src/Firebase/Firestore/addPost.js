import { storage, db, timestamp } from "../firebase"


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
							title: payload.user.displayName,
							date: timestamp(),
							image: payload.user.photoURL,
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
					title: payload.user.displayName,
					date: timestamp(),
					image: payload.user.photoURL,
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
					description: payload.user.email,
					title: payload.user.displayName,
					date: timestamp(),
					image: payload.user.photoURL,
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


