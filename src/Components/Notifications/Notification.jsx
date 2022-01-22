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
            return       <Childcontainer key={i}>
                <div>
                    {el.type=="welcome"? 
                     el.description 
                    : 
                    
                    el.type=="acceptRequest"? 
                
                    <ImDe>
                        <div>    {el.image!=="" && <Image src={el.image}/>}    </div>
                     <div style={{marginTop:"30px"}}>
                     {el.description}        </div>
                    </ImDe>
                    : 
                    <Like>
                        <div>{el.postImage!=="" && <Image src={ el.postImage}/>}</div>

                     <div>{el.whoLiked} likes your post :-  {el.postTitle}</div>
                      
                    </Like>     }
               </div>
               {/* <hr/> */}
            </Childcontainer>
        })
    }
    </Box>


    ): <div>Something went wrong...Please wait</div>
    </>
}


const Image = styled.img`
height: 80%;
width: 70 %;
margin-right:20px;
// padding-top: 20px;
// border: 2px solid black;
border-radius:40px;

`
;
const ImDe= styled.div`
width: 50%;
height: 100px;
background-color: #E1F5FE;
margin-top: 0px;
margin-bottom: 0px;
// margin-left: 400px;
margin: auto;
margin-top:10px;

// text-align: center;
// padding-bottom: 10px;
display: flex;
// flex-direction: vertical;
// align-content: space-between;

&>div{
    
}

`
;
const Like= styled.div`
background-color: #E1F5FE;
margin-top: 0px;
// margin-bottom: 30px;
width: 50%;
height: 40px;
margin:auto;
// margin-top:10px;

overflow: hidden;

display: flex;
// flex-direction: vertical;

`
;

const Childcontainer = styled.div`
margin-top: 40px;
// border-radius: 70px;
// background-color: #E1F5FE;
// // background-color: yellow;


    
`;

const Box= styled.div`
margin-top: 60px;
    
`;