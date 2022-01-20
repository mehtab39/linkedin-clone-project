
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


// i will check this later
// export const fetchSuggestions = (id, setData)=>{
//     let array = []
//     db.collection("profile")
//     .where("userUID", "!=", id)
//     .get()
//     .then((querySnapshot) => {
//     const data = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//     })); 
//     data.forEach((el)=>{
//     db.collection("profile")
//     .where("waiting", "array-contains-any", id)
//     .get()
//     .then((querySnapshot) => {
//     const waitingArray = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//     }));
//     if(waitingArray.length===0) {
//     db.collection("profile")
//     .where("connection", "array-contains-any", id)
//     .get()
//     .then((querySnapshot) => {
//     const connectionArray = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//     }));
//     }
//     if(connectionArray.length===0) {
//         db.collection("profile")
//         .where("pending", "array-contains-any", id)
//         .get()
//         .then((querySnapshot) => {
//         const pendingArray = querySnapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//         }));
//     }
//     if(pendingArray.length===0){
//          array.push(el)
//     }
// }
//     }
//      setData(array);
//      console.log(array);
//   });

// }// main closing 