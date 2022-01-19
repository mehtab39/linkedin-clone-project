import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { deleteSent } from "../../redux/actions/connectionAction";
import { sentRequests } from "../../redux/actions/profileAction";


export const Sent = () => {
    const {currentUser, profile} = useAuth()
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const getSent = ()=>{
            dispatch(sentRequests(profile.id, setData)); 
    }
 
   
    const handleDelete = (toUser)=>{
        const fromUser = profile.id;
         dispatch(deleteSent(fromUser, toUser))
         console.log('fromUser, toUser:', fromUser, toUser)
    }
   
    useEffect(()=>{
        getSent()
    }, [profile])
    return (
        <div>
            <h2>You sent requests to these people</h2>
            {data.map((el)=>{
                return <div key={el.id}>
                  <img src={el?.profile_img}/>
                  <p>{el.email}</p>
                  <button onClick={()=>handleDelete(el.id)}>Cancel</button>
                  
                </div>
            })
}
        
        </div>
    )
}
