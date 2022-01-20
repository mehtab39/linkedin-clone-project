import { db } from "../firebase";



const initialProfile = (user) => ({
    first_name: user?.displayName?.split(" ")[0]||"",
    last_name: user?.displayName?.split(" ")[1]||"",
    username: (user?.displayName?.split(" ")[0] + user?.displayName?.split(" ")[1])||user?.email?.split("@")[0]||"",
    email: user?.email||"",
    userUID: user?.uid,
    address: "",
    company: "",
    experience: [],
    education: [],
    activity:[],
    notifications: [{
       type: "welcome",
       description: `Welcome, ${(user?.displayName?.split(" ")[0] + user?.displayName?.split(" ")[1])||user?.email?.split("@")[0]} to the LinkedIn community, You can update your profile`
      }],
    skills: [],
    profile_summary: "",
    job_title: "",
    profile_img: user?.providerData[0]?.photoURL||"",
    resume_path: "",
    connections: [],
    pending: [],
    waiting: [],
})

export const profileExist = (user)=>{
   let newProfile = initialProfile(user);
   console.log('newProfile:', newProfile)
 db.collection("profile")
   .where("userUID", "==", user.uid)
  .get()
  .then((querySnapshot) => {
     if(querySnapshot.docs.length===0){
        createProfile(user)
     }
})
}


 export const createProfile =  (user) =>{
    console.log('user:', user)
    try{
    let newProfile = initialProfile(user);
       console.log('newProfile:', newProfile)
       db.collection("profile").add(newProfile)
        .then((ref) => {
       console.log("Added doc with ID: ", ref.id);

    });
   }
   catch(e){
      console.log('e:', e)

   }
 
}



export const fetchProfile = (UID, setData)=>{
   db.collection("profile")
   .where("userUID", "==", UID)
   .get()
   .then((querySnapshot) => {
   const data = querySnapshot.docs.map((doc) => ({
       id: doc.id,
       ...doc.data(),
   })); 
   setData(data);
   console.log(data);

 });
}

export const getProfile = async (UID, setProfile)=>{
   let arr = []
   await db.collection("profile")
   .where("userUID", "==", UID)
   .get()
   .then((querySnapshot) => {
   const data = querySnapshot.docs.map((doc) => ({
       id: doc.id,
       ...doc.data(),
   })); 
 setProfile(data[0])
 });
}




export const updateProfile = async (collection, id, data) =>{
   const Ref = db.collection(collection).doc(id);
   const res = await Ref.update(data);
}