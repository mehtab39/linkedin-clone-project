import React from 'react'
import styled from "styled-components";
import ProfilePic from './ProfilePic';
import {Header} from "../Header/Header"
const Profile = () => {
  return (
   <Container>
       <Header/>
       <ProfilePic/>
   </Container>
  )
}

const Container = styled.div`
  padding-top: 62px;
  max-width: 100%;
`;
export default Profile
