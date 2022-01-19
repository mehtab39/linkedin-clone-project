import { Connections } from "./Connections"
import { Suggestions } from "./Suggestions"
import { Pending } from "./Pending"
import { Sent } from "./Sent"
import { useAuth } from "../../contexts/AuthContext"
import { useEffect } from "react"


export const NetworkPage = () => {
    const {currentUser, profile} = useAuth()
    console.log('currentUser:', currentUser)
    console.log('profile:', profile)
    const check = ()=>{
        if(profile){
            console.log("got profile")
        }
    }
    useEffect(() => {
            check()
    }, [profile], [])
   
    return profile ? (
        <div>
            <Suggestions/>
            <Connections/>
            <Pending/>
            <Sent/>
        </div>
    ): <div>Something went wrong...Please wait</div>
}
