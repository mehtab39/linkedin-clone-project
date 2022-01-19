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


export const updateProfile = async (collection, id, data) =>{
    const Ref = db.collection(collection).doc(id);
    const res = await Ref.update(data);
}