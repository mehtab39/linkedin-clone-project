import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { sendConnection } from "../../redux/actions/connectionAction";
import { suggestions } from "../../redux/actions/profileAction";
import styled from "styled-components"

export const Suggestions = () => {
    const {currentUser, profile} = useAuth()
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const getSuggestions = ()=>{
           dispatch(suggestions(currentUser.uid, setData));
    }
    const handleConnect = (toUser)=>{
         const fromUser = profile.id;
          dispatch(sendConnection(fromUser, toUser))
    }
    useEffect(()=>{
        getSuggestions()
    }, [])
    return (
        <div>
            <h2>People you may know</h2>
            <ParentDiv>
      {data.map((el)=>{
                return <div key={el.userUID}>
                  <img src={el?.profile_img}/>
                  <p>{el.email}</p>
                  <button onClick={()=>handleConnect(el.id)}>Connect</button>
            </div>
            })
}
</ParentDiv>              
        </div>
    )
}


const ParentDiv= styled.div`
display: grid;
  grid-template-columns: auto auto auto auto;
`