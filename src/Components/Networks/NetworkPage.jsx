import { Suggestions } from "./Suggestions"
import { Pending } from "./Pending"
import { useAuth } from "../../contexts/AuthContext"
import { useEffect } from "react"
import styled from "styled-components"
import { RightConnection } from "./RightConnection"

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
            <RightConnection/>
            <Pending/>
            <Suggestions/>
        </NetworkPageMain>
    ): <div>Something went wrong...Please wait</div>
}


const NetworkPageMain = styled.div`
// text-align: center;
//     img{
//          height: 50px;
//          width: 50px
//      }
`