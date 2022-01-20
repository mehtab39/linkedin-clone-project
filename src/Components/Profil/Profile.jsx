import React from 'react'
import styled from "styled-components";
import ProfilePic from './ProfilePic';
import {Header} from "../Header/Header"
import {About} from "./About";
import {Form} from "./Form"
import {useState} from "react";
import Modal from "react-modal"


const Profile = () => {
  const [isOpen,setIsOpen]=useState(false);

  const handleClick=()=>{
    setIsOpen(prev=>!prev);
  }

  return (
   <Container>
       <Header/>
       <ProfilePic handleClick={handleClick}/>
       <About/>
       
       <Modal className="Modal" isOpen={isOpen}><Form handleClick={handleClick}/></Modal>
   </Container>
  )
}

const Container = styled.div`
  padding-top: 62px;
  max-width: 100%;

  .Modal {
    /* margin-top: 60%; */
    /* width:80%; */
    margin: auto;
    align-items: center;
    background-color:white;

  }

`;
export default Profile
