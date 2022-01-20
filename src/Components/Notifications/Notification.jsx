import { useAuth } from "../../contexts/AuthContext"
import { useEffect, useState } from "react"
import styled from "styled-components";

const Image = styled.img`
    height: 60px;
    width: 60px;
    position: absolute;
    left: 0
`

const Childcontainer = styled.div`
    overflow: hidden;
    text-align: center;
    max-height: 60px;
    position: relative;
    background-color: grey; 
`


export const Notification = () => {
    const [notifications, setNotifications] = useState([])
    const {currentUser, profile} = useAuth()

    const check = ()=>{
        if(profile){
            setNotifications(profile.notifications)   
        }
    }
    useEffect(() => {
            check()
    }, [profile], [])
   
    return profile ? (
       <>
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
                     {el.whoLiked} likes your post "{el.postTitle}"
                    </>}
               </div>
               <hr/>
            </Childcontainer>
        })
    }
    </>


    ): <div>Something went wrong...Please wait</div>
}

