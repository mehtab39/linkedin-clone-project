import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { deleteSent, sentRequests } from "../../redux/actions/connectionAction";
import styled from "styled-components"
import { Loader } from "../Loader/Loader";

export const Sent = () => {
    const [render, setRender] = useState()
    const {profile}= useAuth()
    const dispatch = useDispatch();
    const {data} = useSelector((state) => ({
        data: state.connectionState.sent,
      }));

    const getSent = ()=>{
        if(profile){
            dispatch(sentRequests(profile.id));   
        }
    }
   
    const handleDelete = (toUser)=>{
        const fromUser = profile.id;
        setRender(toUser)
        dispatch(deleteSent(fromUser, toUser))
    }

    console.log(data)
   
    useEffect(()=>{
        getSent()
    }, [render, data])
    return data && (
<div>
<Heading>You sent requests to these people</Heading>
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
     <RemoveBtn onClick={()=>handleDelete(el.id)}>Cancel</RemoveBtn>
    

      </div>
</ChildDiv>

})
}
</div>

</div>
)

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

