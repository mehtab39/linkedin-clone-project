import {Header} from "../Header/Header";
import {Rightside} from "../Home/Rightside";
import {Footer} from "../Footer/Footer"
import {Loader} from "../Loader/Loader"
import "./Message.css";
import styled from "styled-components";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {useState, useEffect, useRef} from "react"
import { useAuth } from "../../contexts/AuthContext";
import { getMessages, sendTheMessage } from "../../redux/actions/messageAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ChatMessage } from "./Chat";
import { useParams } from "react-router-dom";
import { LeftMessage } from "./LeftMessage";
import { connections } from "../../redux/actions/connectionAction";

const goToBottom = ()=>{
    document.getElementsByClassName('chatDiv')[0].scrollTop = document.getElementsByClassName('chatDiv')[0].scrollHeight;
}

export const Message=()=>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const [chatter, setChatter] = useState({});
    const {profile} = useAuth();
    const { loading, messages,  myConnections} = useSelector((state) => ({
        loading: state.messageState.loading,
        messages: state.messageState.messages,
        myConnections: state.connectionState.connections
      }));
    
    const getConnections = ()=>{
        if(profile){
            dispatch(connections(profile?.id)); 
        }
    }
    useEffect(()=>{
        getConnections()
    }, [profile]);

     const chatFunction = (params)=>{
        if(profile?.id){
        if(params) setChatter(params);
        else if(id) setChatter(id);
        dispatch(getMessages(profile.id, params?.id || chatter)) 
        dummy.current.scrollIntoView({ behavior: 'smooth' });
        goToBottom()
        }
    }
     
   
    
    useEffect(()=>{
        if(myConnections.length > 0 && id==undefined){
            goToBottom()
            chatFunction(myConnections[0])
        } 
    },[myConnections])
  
  
     
   
const dummy = useRef();
const [formValue, setFormValue] = useState('');
 const sendMessage = async (e) => {
    e.preventDefault();
    if(profile.id){
        dispatch(sendTheMessage(formValue, profile, chatter )) 
        setFormValue('');
    }
   
  }
    return  profile?.id && (myConnections.length>0) ? (<>
        <Header/>
        <Container>
            <Msg>
               <LeftMessage myConnections={myConnections}  chatFunction={chatFunction}/>
 <RightMsg>
    <Title>
                        <div className="idiv">
                            <img src="/images/send.png" alt=""/>
                        </div>
                        <p>{chatter.username? chatter.username : id }</p>
                        <div className="icon">
                            <BiDotsHorizontalRounded/>
                        </div>
    </Title>
    <main className="chatDiv">
     {messages && messages.map((msg, i) => <ChatMessage key={i} message={msg} profile={profile} user={chatter} />)}
     <span ref={dummy}></span>
    </main>

    <div className="chatForm">
    <form onSubmit={sendMessage}>
      <input className="msgInput" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Write a message..." />
      <button className="msgBtn" type="submit" disabled={!formValue}>Send</button>
    </form>
    </div>
</RightMsg>
  </Msg>
            <Right>
            <Rightside/>
            </Right>
            
        </Container>
        <Footer/>
    </>) : <Loader />
}

const Container=styled.div`
    display:flex;
    width:90%;
    margin: auto;
    justify-content: space-between;
`;

const Msg=styled.div`
    width:68%;
    margin-top: 8%;
    align-items: left;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 0px 0px 0px;
`;

const Right=styled.div`
    margin-top: 8%;
`;



const RightMsg=styled.div`
    width:55%;
    height: 500px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 0px 0px 0px;
`;


const Title=styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 0px 0px 0px;
   

    .idiv{
        width:5%;
    }

    img{
        width:100%;
    }
    p{
        text-transform: uppercase;
        color: black;
        font-weight: bold;
        margin-top: 4px;
    }
    
`;



