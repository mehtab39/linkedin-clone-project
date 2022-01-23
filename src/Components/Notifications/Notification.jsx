import { useAuth } from "../../contexts/AuthContext"
import { useEffect, useState } from "react"
import styled from "styled-components";
import {Header} from "../Header/Header";
import {Rightside} from "../Home/Rightside";
import { useSelector } from "react-redux";


export const Notification = () => {
    const [notifications, setNotifications] = useState([])

    const {profile} = useAuth();

    console.log(profile);

    const check = ()=>{
        if(profile){
            setNotifications(profile.notifications)   
        }
    }

    console.log(notifications);

    useEffect(() => {
            check()
    }, [profile], [])
   
    return <>
        <Header/>
        <Container>
        <div className="right">
        <Rightside/>
        </div>
        
        {profile.notifications ? (
        <Box>
        {notifications?.map((el, i)=>{
            return <Childcontainer key={i}>
                <div>
                    {el.type==="welcome"? 

                        <ImDe>

                        <ImageBox>
                            {el.image!=="" && <Image src="images/user.svg"/>}
                        </ImageBox>
                        <Des>
                            {el.description}        
                        </Des>
                        </ImDe>

                    //  <Text>el.description </Text>
                    : 
                    
                    el.type==="acceptRequest"? 
                
                    <ImDe>

                        <ImageBox>
                            {el.image!=="" && <Image src={el.image}/>}
                        </ImageBox>
                        <Des>
                            {el.description}        
                        </Des>
                    </ImDe>
                    : 
                    <Like>
                        <ImageBox>
                            {el.postImage!=="" && <Image src={ el.postImage}/>}
                        </ImageBox>

                        <Des>
                            {el.whoLiked} likes your post :-  {el.postTitle}
                        </Des>
                      
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
   width: 90%;
   display: flex;
   margin: auto;
   margin-top:5%;
   justify-content: space-between;
   font-size: 12px;
   box-sizing: border-box;

   @media(max-width: 768px){
       /* &:nth-child(1){
           display:none;
       } */
       .right{
           display: none;
       }

       margin-top:15%;
   }

`;

const Image = styled.img`
`
;
const ImDe= styled.div`
    display: flex;
   justify-content:space-between;

`;

const Like= styled.div`
   display: flex;
   justify-content:space-between;
`;

const Childcontainer = styled.div`
    width: 70%;
    display: flex;
    border: 2px solid rgba(0,0,0,0.06);
    margin: auto;
    margin-top: 2%;
   border-radius:5px;
   padding: 1%;
   box-sizing: border-box;


  img {
      width: 100%;
      border-radius: 50%;
  }

  @media (max-width: 768px){
       width:100%;
       
   }


`;

const Box= styled.div`
   width: 60%;
   border-radius:5px;
   background-color:#fff;
   box-sizing: border-box;

   @media (max-width: 768px){
       width:100%;

   }

`;
const Text= styled.div``;

const ImageBox= styled.div`
    width: 40px;
    align-items: center;
    padding: 1%;
`;

const Des= styled.div`
    width: 70%;
`;