import { db } from "../firebase";



const initialProfile = (uuid, email, profileimage) => ({
    first_name: "",
    last_name: "",
    username: "",
    email:email||"",
    userUID: uuid,
    address: "",
    company: "",
    experience: [],
    education: [],
    skills: [],
    profile_summary: "",
    job_title: "",
    profile_img: profileimage||"",
    resume_path: "",
    connections: [],
    pending: [],
    waiting: [],
})

export const profileExist = (uuid,email, profileImg)=>{
 db.collection("profile")
   .where("userUID", "==", uuid)
  .get()
  .then((querySnapshot) => {
     if(querySnapshot.docs.length===0){
        createProfile(uuid, email,  profileImg)
     }
})
}
 export const createProfile =  (uuid, email, profileImg) =>{
    let newProfile = initialProfile(uuid, email, profileImg);
       db.collection("profile").add(newProfile)
        .then((ref) => {
       console.log("Added doc with ID: ", ref.id);

    });
 
}