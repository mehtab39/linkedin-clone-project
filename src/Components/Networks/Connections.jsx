import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { deleteConnection } from "../../redux/actions/connectionAction";
import { connections } from "../../redux/actions/profileAction";
import styled from "styled-components"

export const Connections = () => {
    const { profile} = useAuth()
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const getConnections = ()=>{
        if(profile){
            dispatch(connections(profile?.id, setData)); 
        }
    }
   
    const handleRemove = (id)=>{
          dispatch(deleteConnection(profile.id, id))
    }
    useEffect(()=>{
        getConnections()
    }, [profile])
    return profile ? (
        <div>
        <Heading>Your connections</Heading>
        <div>
        {data.map((el)=>{
         return  <ChildDiv key={el.id}>
              <div>
               <Image src={el.profile_img ?  el.profile_img : "/images/user.svg"} />
             </div>
             <User>
               <p>{el.first_name} {el.last_name}</p>
              <p>{el.job_title}</p>
             </User>
             <div>
             <RemoveBtn onClick={()=>handleRemove(el.id)}>Remove connection</RemoveBtn>
            
        
              </div>
        </ChildDiv>
        
        })
        }
        </div>
        
        </div>
        ):<div>Something went wrong...Please wait</div>
        
}



const Heading = styled.h1`
    text-align: center;
    `

const ChildDiv = styled.div`
padding: 10px;
display: flex;
box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 0px 0px 0px;
justify-content: space-between;
width: 40%;
div{
display: flex;   
}
`

const Image = styled.img `
cursor: pointer;
height: 70px;
border-radius: 100%;



`
const User = styled.div`

text-align: left;
height: 70px;
margin-left: 15px;
display: flex;
width: 45%;
flex-direction: column;
p{
 padding: 2px;
 margin-top: 10px;
}
`
const RemoveBtn = styled.button`
border: 1px solid #126BC4;
border-radius: 20px;
color: #126BC4;
font-weight: bold;
background-color: #fff;
padding: 10px;
width: 180px;
margin-top: 20px;
cursor: pointer;
height: 36px;
&:hover {
background-color: #e2edfa;  
}
`

