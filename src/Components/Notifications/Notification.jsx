import { useAuth } from "../../contexts/AuthContext"
import { useEffect, useState } from "react"
import styled from "styled-components";
import {Header} from "../Header/Header";


export const Notification = () => {
    const [notifications, setNotifications] = useState([])
    const {currentUser, profile} = useAuth()
    console.log(profile);
    const check = ()=>{
        if(profile){
            setNotifications(profile.notifications)   
        }
    }
    useEffect(() => {
            check()
    }, [profile], [])
   
    return <>
        <Header/>
    profile ? (
       <Box>
       
        {notifications.slice(0).reverse().map((el, i)=>{
            return <Childcontainer key={i}>
                <div>
                    {el.type=="welcome"? 
                     el.description 
                    : 
                    el.type=="acceptRequest"? 
                    <>
                     {el.image!=="" && <Image src={el.image}/>}
                     el.description 
                    </>
                    : 
                    <>
                     {el.postImage!=="" && <Image src={ el.postImage}/>}
                     {el.whoLiked} likes your post {el.postTitle} 
                    </>}
               </div>
               <hr/>
            </Childcontainer>
        })
    }
    </Box>


    ): <div>Something went wrong...Please wait</div>
    </>
}

const Image = styled.img`
    height: 60px;
    width: 60px;
    position: absolute;
    left: 0
`

const Childcontainer = styled.div`
    background-color: rgba(0,0,0,0.06);
    width:60%;
    display: flex;
    margin:auto;
    text-align: center;
    margin-top:2%;
    max-height: 60px;
`;

const Box= styled.div`
    margin-top: 5%;
`;