import { Suggestions } from "./Suggestions"
import { Pending } from "./Pending"
import { useAuth } from "../../contexts/AuthContext"
import { useEffect } from "react"
import styled from "styled-components"
// import { RightConnection } from "./RightConnection"
import { Rightside } from "../Home/Rightside"
import {Header} from "../Header/Header"

export const NetworkPage = () => {
    const {profile} = useAuth()
    const check = ()=>{
        if(profile){
            console.log("got profile")
        }
    }
    useEffect(() => {
            check()
    }, [profile], [])
   
    return profile ? (
        <NetworkPageMain>
            <Header/>
            <Rightside/>
            <Box>
            <Pending/>
            <Suggestions/>
            </Box>
        </NetworkPageMain>
    ): <div>Something went wrong...Please wait</div>
}


const NetworkPageMain = styled.div`
    width:90%;
    margin: auto;
    display: flex;
    justify-content:space-between;
    margin-top: 5%;
    box-sizing: border-box;
// text-align: center;
//     img{
//          height: 50px;
//          width: 50px
//      }
`

const Box= styled.div`
    width:70%;
    /* display: flex;
    flex-direction: column; */
`;