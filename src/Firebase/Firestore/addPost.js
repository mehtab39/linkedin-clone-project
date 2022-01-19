import { storage, db, timestamp } from "../firebase"

export const addPost = (payload) =>{
 console.log('payload:', payload)
 return
//  if(payload.image!==undefined ){
//   const upload = storage.ref(`images/${payload.image.name}`).put(payload.image)
//   upload.on(
//     "state_changed",
//     (snapshot) => {
//       //progress function
//       const progress = Math.round(
//         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//       );
//       console.log(progress);
//     },
//     (error) => {
//       //error function
//       console.log(error);
//       alert(error.message);
//     },
//     () => {
//       //complete function
//       storage
//         .ref("images")
//         .child(payload.image.name)
//         .getDownloadURL()
//         .then((url) => {
//           //post image inside db
//           db.collection("posts").add({
//             timestamp: timestamp(),
//             caption: payload.description,
//             imageUrl: url,
//             username: uid,
//           });
//         });
//     }
//   );
//  }
//  else if(payload.description!==""){
//     db.collection("posts").add({
//         timestamp: timestamp(),
//         caption: payload.description,
//         username: uid,
//       });
//  }
}

export const getArticles = ()=>{
   let payload;
   db.collection("posts").orderBy("timestamp", "desc")
   .onSnapshot((snapshot)=>{
       payload = snapshot.docs.map((doc)=>doc.data())
       console.log('payload:', payload)
   })
}

