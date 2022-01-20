import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { deleteSent } from "../../redux/actions/connectionAction";
import { sentRequests } from "../../redux/actions/profileAction";
import styled from "styled-components"

export const Sent = () => {
    const {profile} = useAuth()
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const getSent = ()=>{
        if(profile){
            dispatch(sentRequests(profile?.id, setData));   
        }
    }
   
    const handleDelete = (toUser)=>{
        const fromUser = profile.id;
         dispatch(deleteSent(fromUser, toUser))
    }
   
    useEffect(()=>{
        getSent()
    }, [profile])
    return    profile ? (
        <SentPageMain>
            <h2>You sent requests to these people</h2>
            {data.map((el)=>{
                return <div key={el.id}>
                  <img src={el?.profile_img}/>
                  <p>{el.email}</p>
                  <button onClick={()=>handleDelete(el.id)}>Cancel</button>
                  
                </div>
            })
}
        
        </SentPageMain>
    ): <div>Wait</div>
}



const SentPageMain = styled.div`
text-align: center;
    img{
         height: 50px;
         width: 50px
     }
`