import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { deleteConnection } from "../../redux/actions/connectionAction";
import { connections } from "../../redux/actions/connectionAction";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import {Header} from "../Header/Header"
import {Rightside} from "../Home/Rightside";
import { useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";


export const Connections = () => {
    const dispatch = useDispatch();
    const {profile}= useAuth()
    const {  data} = useSelector((state) => ({
        data: state.connectionState.connections
      }));
    const getConnections = ()=>{
        if(profile){
            dispatch(connections(profile?.id)); 
        }
    }
    useEffect(()=>{
        getConnections()
    }, [data]);

    const navigate = useNavigate()
    const handleMessage = (to) =>{
        const URL = "../../messages/" + to;
        navigate(URL)
    }
 

    const handleRemove = (id)=>{
          dispatch(deleteConnection(profile.id, id))
    }
    return  profile  ? (<Container>

        <Header/>
         <Main>
         <Rightside/>
        <Box>
        <Heading>Your connections</Heading>
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

             <RemoveBtn onClick={()=>handleRemove(el.id)}>Remove</RemoveBtn>
             <Msg onClick={()=>handleMessage(el.id)}>Message</Msg>

              </div>
        </ChildDiv>
        
        })
        }
        </div>
        
        </Box>
        </Main>
        </Container>):<Loader/>   
        
}


const Container= styled.div`
    width: 90%;
    margin: auto;
`;

const Heading = styled.h1`
    text-align: center;
    `

const ChildDiv = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 0px 0px 0px;
    border-radius: 5px;
    width: 90%;
    margin:auto;
    box-sizing: border-box;

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
background-color: whitesmoke;
   padding: 10px;
   cursor: pointer;
 border: none;
  width: 85px;
margin: 20px;
 margin-right: 30px;
 &:hover {
        /* opacity: 0.5;   */
        background-color: lightgrey;
        border-radius: 3px;  
}
`


const Box= styled.div`
    width: 70%;
    background-color: #fff;
`;

const Main= styled.div`
    display: flex;
    margin-top:5%;
    justify-content: space-between;
`;

const Msg= styled(RemoveBtn)``;