import { Suggestions } from "./Suggestions"
import { Pending } from "./Pending";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RightConnection } from "./RightConnection"
import { Rightside } from "../Home/Rightside";
import {Header} from "../Header/Header";
import {Loader} from "../Loader/Loader"

import {useAuth} from "../../contexts/AuthContext"

export const NetworkPage = () => {
  const {profile} = useAuth()
   
     
   
    return profile?.id ? (
        <NetworkPageMain>
            <Header/>
            <Rightside/>
            <Box>
            <Pending profile={profile}/>
            <Suggestions profile={profile}/>
            </Box>
        </NetworkPageMain>
    ): <Loader/>
}


const NetworkPageMain = styled.div`
    width:90%;
    margin: auto;
    display: flex;
    justify-content:space-between;
    margin-top: 5%;
    box-sizing: border-box;
`

const Box= styled.div`
    width:70%;
    display: flex;
    flex-direction: column;
`;




