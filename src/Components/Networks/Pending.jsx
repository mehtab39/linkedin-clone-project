import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { deletePending, acceptPending } from "../../redux/actions/connectionAction";
import { pending } from "../../redux/actions/profileAction";
import styled from "styled-components";

export const Pending = () => {
    const { profile} = useAuth()
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const getPending = ()=>{
            dispatch(pending(profile.id, setData)); 
    }
 
    const handleAccept = (toUser)=>{
        const fromUser = profile.id;
        dispatch(acceptPending(fromUser, toUser))
    }
    const handleDelete = (toUser)=>{
        const fromUser = profile.id;
         dispatch(deletePending(fromUser, toUser))
    }
   
    useEffect(()=>{
        getPending()
    }, [profile])
    return (
        <ParentDiv>
            <h2>Invitations</h2>
            <hr/>
           <div>
            {data.map((el)=>{
                return <div key={el.id}>
                    <div>
                  <img src={el?.profile_img}/>
                  </div>
                  <div>
                  <p>{el.email}</p>
                  <p>{el.title}</p>
                  </div>
                  <div>
                  <button onClick={()=>handleAccept(el.id)}>Accept</button>
                  </div>
                  <div>
                  <button onClick={()=>handleDelete(el.id)}>Ignore</button>
                  </div>
                  <hr/>
                </div>

            })
        }
        </div>
        
        </ParentDiv>
    )
}


const ParentDiv = styled.div`
     width: 50%;
     background-color: grey;

      div{
         dispay: inline-block
         
        
     }
`