import React from 'react'
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext"
const ProfilePic = () => {
    const {currentUser} = useAuth()
  return (
    <Container>
      <Cover>
         <img src="/images/cover.jpeg" alt=""/>
      </Cover>
      <EditCover>
          <img src="/images/pen.png" alt=""/>
      </EditCover>
      <UserProfile>
          <button>
          <img src= {currentUser?.photoURL ? currentUser?.photoURL:"/images/user.svg"} alt="" />
          </button>
      </UserProfile>
    </Container>
  )
}
const Container = styled.div`
  max-width: 55%;
  height: 70%;
  border-radius:30px
`;
const Cover = styled.div`
img{
    width:100%;
    border-radius:10px
}
`;
const UserProfile=styled.div`
width:12%;
height:12%;
position: absolute; 
top:21%;
margin-left:1.2%;
img{
    width:100%;
    border-radius:50%;   
}
`;
const EditCover = styled.div`
    width:30px; 
    position: absolute; 
    top:12%;
    margin-left:51%;
    color:white;
    img{
    width:100%;}
`;
export default ProfilePic
