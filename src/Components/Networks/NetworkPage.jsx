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
            <div>
            <RightConnection/>
            </div>
            <LeftConnection>
              <Pending/>
              <Suggestions/>
            </LeftConnection>
        </NetworkPageMain>
    ): <div>Something went wrong...Please wait</div>
}


const NetworkPageMain = styled.div`
   display: grid;
   grid-template-columns: 20% 80%
`

const LeftConnection = styled.div`
    display: flex;
    flex-direction: column
    `