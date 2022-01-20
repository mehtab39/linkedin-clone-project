import React from 'react'
import styled from "styled-components";
import ProfilePic from './ProfilePic';
import {Header} from "../Header/Header"
import {About} from "./About";
import {Form} from "./Form"
import {useState} from "react";
import Modal from "react-modal"
import { Rightside } from '../Home/Rightside';
import { Experience } from './Experience';
import { Skills } from './Skills';
import { Education } from './Education';


const Profile = () => {
  const [isOpen,setIsOpen]=useState(false);

  const handleClick=()=>{
    setIsOpen(prev=>!prev);
  }

  return (
    <>
     <Header/>
   <Container>
        <Left>
         <ProfilePic handleClick={handleClick}/>
         <About/>
         <Modal className="Modal" isOpen={isOpen}><Form handleClick={handleClick}/></Modal>
         <Experience/>
         <Education/>
         <Skills/>
        </Left>
       <Rightside/>
   </Container>
   </>
  )
}

const Container = styled.div`
  padding-top: 62px;
  max-width: 100%;
  display: flex;
  .Modal {
    align-items: center;
    background-color:white;
  }
`;
const Left = styled.div`
width:55%;
margin-left:140px;
margin-right:20px;
`

export default Profile
