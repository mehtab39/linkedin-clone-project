import { useAuth } from "../../contexts/AuthContext"
import { useEffect, useState } from "react"
import styled from "styled-components";
import {Header} from "../Header/Header";
import {Rightside} from "../Home/Rightside";
import { useSelector } from "react-redux";


export const Notification = () => {
    const [notifications, setNotifications] = useState([])
    const { loading, error, isAuth, profile, user} = useSelector((state) => ({
        isAuth: state.userState.isAuth,
        loading: state.profileState.loading,
        profile: state.profileState.profile,
        error: state.profileState.error,
        user: state.userState.user, 
      }));
    
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
        <Container>
        <Rightside/>
        {profile ? (
        <Box>
       
        {notifications.slice(0).reverse().map((el, i)=>{
            return <Childcontainer key={i}>
                <div>
                    {el.type==="welcome"? 
                     el.description 
                    : 
                    
                    el.type==="acceptRequest"? 
                
                    <ImDe>
                    <div>{el.image!=="" && <Image src={el.image}/>}</div>
                    <div style={{marginTop:"30px"}}>
                     {el.description}        </div>
                    </ImDe>
                    : 
                    <Like>
                        <div>{el.postImage!=="" && <Image src={ el.postImage}/>}</div>

                     <div>{el.whoLiked} likes your post :-  {el.postTitle}</div>
                      
                    </Like>     }
               </div>
            </Childcontainer>
        })
    }
    </Box>


    ): <div>Something went wrong...Please wait</div>}
    </Container>
    </>
}


const Container= styled.div`
    margin-top:10%;
    display: flex;
    width:90%;
    margin: auto;
    justify-content: space-between;
`;

const Image = styled.img`
    height: 80%;
    width: 70%;
    border-radius:40px;
`
;
const ImDe= styled.div`
    display: flex;
`;

const Like= styled.div`
    width: 50%;
    height: 40px;
    display: flex;
`;

const Childcontainer = styled.div`
   background-color:rgba(0,0,0,0.08);
`;

const Box= styled.div`
    background-color:#fff;
    width: 60%;
`;