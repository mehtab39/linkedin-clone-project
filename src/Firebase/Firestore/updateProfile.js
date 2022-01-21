import { db } from "../firebase";

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




export const updateProfile = async (data,id) =>{
    const Ref = db.collection("profile").doc(id);
    const res = await Ref.update(data);
}