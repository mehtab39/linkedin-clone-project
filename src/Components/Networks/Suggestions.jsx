import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { sendConnection } from "../../redux/actions/connectionAction";
import { suggestions } from "../../redux/actions/profileAction";
import styled from "styled-components"


export const Suggestions = () => {
    const {currentUser, profile} = useAuth();
    const [sendingRequest, setSendingRequest]=useState(0)
 
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const getSuggestions = ()=>{
           dispatch(suggestions(currentUser.uid, setData));
    }
    const handleConnect = (toUser)=>{
         const fromUser = profile.id;
         setSendingRequest(toUser);
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
       return( <Card key={el.userUID}>
          <Image src={el.profile_img ?  el.profile_img : "/images/user.svg"} />
          <h1>{el?.username}</h1>
          <Name>{el.first_name} {el.last_name}</Name>
          <p>{el.job_title}</p>
          <p> <Button onClick={()=>handleConnect(el.id)}>{sendingRequest === el.id ? "Pending" : "Connect"}</Button></p>
        </Card>)
 })
}
</ParentDiv>              
        </div>
    )
}


const ParentDiv= styled.div`
 display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  grid-gap: 3%;
 justify-content: center;
 div{
     min-width: 200px;
     max-width: 200px;
     min-height: 220px;
     max-height: 220px;
     padding: 3%;
     position: relative;
     color: black;
  
 }
 @media (max-width: 900px) {
    grid-template-columns: 40% 40%;
    grid-gap: 0.5%;
 }
 @media (max-width: 700px) {
      flex: 1 46%;
    }
 @media (max-width: 500px) {
    display: flex;
    flex-direction: column;

 }
`

const Name = styled.p`
   
   font-size: 22px;

`
const Card  = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: auto;
    text-align: center;
    font-family: arial;
   
  `
  
 const Image = styled.img `
    height: 70px;
    border-radius: 100%;
    z-index: 1000
 `
 
  
  const Button = styled.button`
  @media (max-width: 700px) {
    color: white;
    background-color: blue
  }
  border: 1px solid #126BC4;
    border-radius: 20px;
    color: #126BC4;
    font-weight: bold;
    background-color: #fff;
    padding: 10px;
    width: 100px;
    margin-top: 20px;
    cursor: pointer;
    height: 36px;
   &:hover {
       background-color: #e2edfa;  
     }
    
  `
  