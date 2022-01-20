import { Suggestions } from "./Suggestions"
import { Pending } from "./Pending"
import { useAuth } from "../../contexts/AuthContext"
import { useEffect } from "react"
import styled from "styled-components"

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
            <Suggestions/>
            <Pending/>
        </NetworkPageMain>
    ): <div>Something went wrong...Please wait</div>
}


const NetworkPageMain = styled.div`
text-align: center;
    img{
         height: 50px;
         width: 50px
     }
`