import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sendConnection, suggestions } from "../../redux/actions/connectionAction";
import styled from "styled-components"
import { useSelector } from "react-redux";
import {useAuth} from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom";

export const Suggestions = () => {
  const {user, profile} = useAuth();
  const [sendingRequest, setSendingRequest]=useState(0);
  const dispatch = useDispatch()
  const { loading,data, error,  } = useSelector((state) => ({
      loading: state.connectionState.loading,
      error: state.profileState.error,
      data: state.connectionState.suggestions,
    }));
    const getSuggestions = ()=>{
      dispatch(suggestions(user.uid));
}
const navigate = useNavigate()
 const gotouser = (username)=>{
    navigate(`../profile/${username}`)
 }

    const handleConnect = (toUser)=>{
        const fromUser = profile.id;
        setSendingRequest(toUser);
        dispatch(sendConnection(fromUser, toUser))
    }
    useEffect(()=>{
        getSuggestions()
    }, [])
   

    return data?.length>0 && (
      <Container>
        <h2>People you may know</h2>
        <ParentDiv>
            {data.map((el)=>{
            return( <Card key={el.userUID}>
            <Image>
            <img onClick={()=>gotouser(el?.username)} src={el.profile_img ?  el.profile_img : "/images/user.svg"} alt="" />
            </Image>
            <h1>{el?.username}</h1>
            {/* <Name>{el.first_name} {el.last_name}</Name> */}
            <p>{el.job_title}</p>
            <Button onClick={()=>handleConnect(el.id)}>{sendingRequest === el.id ? "Pending" : "Connect"}</Button>
                    </Card>)
              })
            }
        </ParentDiv>              
      </Container>
    )
}


const Container = styled.div`
  
  margin-top:5% ;
  box-sizing: border-box;
  background-color:#fff;
  border-radius:5px;
  height:60%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  h2 {
    padding:10px;
  }
`;

const ParentDiv= styled.div`
  display: grid;
  width:90%;
  overflow: scroll;
  height:90%;
  margin: auto;
  grid-template-columns: 22.5% 22.5% 22.5% 22.5%;
  grid-gap: 2%;
  box-sizing: border-box;
  @media(max-width: 768px){
    grid-template-columns:48% 48%;
    grid-gap:2% ;
  }
`

// const Name = styled.p`
//   text-align: center;
//   font-size: 12px;
// `
const Card  = styled.div`
    padding: 15%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    font-family: arial;
    box-sizing: border-box;
    border-radius:5px;
    justify-content:space-between;
    h1{
      text-align: center;
    }
    p{
      font-size:12px;
      text-align: center;
    }
`;
  
 const Image = styled.div `
  width: 60%;
  margin: auto;
  img{
    border-radius:50%;
    width: 100%;
  }
`;
 
  
  const Button = styled.button`
  @media (max-width: 700px) {
    /* padding:15%; */
    width:80%;
  }
    border: 1px solid #126BC4;
    border-radius: 20px;
    color: #126BC4;
    background-color: #fff;
    width: 80%;
    height: 20%;
    display: flex;
    margin: auto;
    justify-content:center;
    padding-top: 5px;
   &:hover {
       background-color: #e2edfa;  
     }
    
  `
  