
import { db } from "../firebase";

export const fetchSuggestions = (id, setData)=>{

    db.collection("profile")
    .where("userUID", "!=", id)
    .get()
    .then((querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })); 
    console.log(data);
    setData(data);

})
}
