import React from 'react'
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext"
const ProfilePic = ({handleClick}) => {
    const {currentUser} = useAuth()
    console.log(currentUser)
  return (
    <Container>
      <Cover>
         <img src="/images/cover.jpeg" alt=""/>
      </Cover>
      <EditCover>
          <img onClick={handleClick} src="/images/pen.png" alt=""/>
      </EditCover>
      <UserProfile>
          <img src= {currentUser?.photoURL ? currentUser?.photoURL:"/images/user.svg"} alt="" />
      </UserProfile>
      <Details>
        <Name>{(currentUser?.displayName)?currentUser?.displayName:"Update your profile"}</Name>
        <Email>{(currentUser?.email)?currentUser?.email:"Update your Email"}</Email>
          <Location>
               Location <p>Contact Info</p>
          </Location>
      </Details>
    </Container>
  )
}
const Container = styled.div`
  max-width: 100%;
  height: 70%;
  border-radius:30px;
  @media (max-width: 768px) {
     width:100%;
  }
`;
const Cover = styled.div`
img{
    width:100%;
    border-radius:10px
}
@media (max-width: 768px) {
     width:100%;
  }
`;
const UserProfile=styled.div`
width:11%;
position: absolute; 
margin-top:-6%;
margin-left:1.2%;
img{
    width:100%;
    height:100%;
    border-radius:50%;
  }
`;
const EditCover = styled.div`
    width:26px; 
    position: absolute; 
    margin-top:-12%;
    margin-left:51%;
    color:white;
    img{
    width:100%;}
`;
const Details = styled.div`
background-color:white;
width:100%;
height:300px;
margin-top:-100px;
border-radius:10px;
`;
const Name= styled.div`
font-size:25px;
font-weight:900;
color: rgba(0, 0, 0, 0.9);
margin-left:3.5%;
padding-top:180px;
`;
const Email = styled.div`
color: #0a66c2;
margin-left:3.5%;
`;
const Location = styled.div`
color: rgba(0, 0, 0, 0.9);
margin-left:3.5%;
margin-top:10px;
display:flex;
p{
  color: #0a66c2;
  margin-left:10px;
}
`;
export default ProfilePic
