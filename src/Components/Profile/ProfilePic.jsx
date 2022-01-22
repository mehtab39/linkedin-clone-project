import React from 'react'
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext"
import { FormModal } from './FormModal';
import {useState} from "react";
const ProfilePic = ({data}) => {
  console.log('data:', data)
  const {profile} = useAuth()
  const [flag,setFlag]=useState(false);
  return (
    <Container>
      <Cover>
         <img src="/images/cover.jpeg" alt=""/>
      </Cover>
      <EditCover>
       {profile.id == data.id &&   <img style={{cursor:"pointer"}} onClick={()=>{setFlag(true)}} src="/images/pen.png" alt=""/>}
      </EditCover>
      <UserProfile>
          <img src= {data?.profile_img ? data?.profile_img:"/images/user.svg"} alt="" />
      </UserProfile>
      <Details>
        <Name>{(data?.first_name)? (<p> {data?.first_name} {data?.last_name} </p>): profile.id == data.id ? "Update your data" : ""}</Name>
        <Position><b>{(data?.job_title)?data?.job_title:""}</b></Position>
          <Location>
               <p>{(data?.address)?data?.address:""}</p>
               <p>Contact Info</p>
          </Location>
      </Details>
      {flag? <FormModal setFlag={setFlag}/> : ""}
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
const Position = styled.div`
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
