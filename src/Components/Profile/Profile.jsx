import React from 'react'
import styled from "styled-components";
import ProfilePic from './ProfilePic';
import {Header} from "../Header/Header"
import {About} from "./About";
import {useState} from "react";
import { Rightside } from '../Home/Rightside';
import { Experience } from './Experience';
import { Skills } from './Skills';
import { Education } from './Education';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Loader } from '../Loader/Loader';
import { getProfileByUsername } from '../../redux/actions/profileAction';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Profile = () => {
  const dispatch= useDispatch()
  const {username} = useParams();
  const {profile} = useAuth();
  const profileFunction = ()=>{
   if(username!==undefined && profile.username){
    dispatch(getProfileByUsername(username))
   }
   else if(profile.username && username==undefined){
    dispatch(getProfileByUsername(profile.username))
   }
        
  }
const {data, noData} = useSelector((state) => ({
  data : state.profileState.profileSection,
  noData : state.profileState.profileError
}))

useEffect(() => {
  profileFunction()
}, [profile])
   

  return noData ?
   <div>No profile found</div>
    : data?.id ? (
    <>
     <Header/>
      <Container>
        <Left>
         <ProfilePic data={data}/>
         <About data={data}/>
         <Experience data={data.experience}/>
         <Education data={data.education}/>
         <Skills data={data.skills}/>
        </Left>
       <Rightside/>
      </Container>
   </>
  ) : <Loader/>
}

const Container = styled.div`
  padding-top: 62px;
  max-width: 100%;
  display: flex;
`;
const Left = styled.div`
width:55%;
margin-left:140px;
margin-right:20px;
`

export default Profile