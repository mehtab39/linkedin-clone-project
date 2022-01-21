import {Header} from "../Header/Header";
import {Rightside} from "../Home/Rightside"
import "./Message.css"
import styled from "styled-components";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {FaRegEdit} from "react-icons/fa";
import {useState, useEffect, useRef} from "react"
import {BsSearch} from "react-icons/bs"
import { useAuth } from "../../contexts/AuthContext";
import {RiListSettingsFill} from "react-icons/ri";
import { getMessages, sendTheMessage } from "../../redux/actions/messageAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ChatMessage } from "./Chat";
import { useParams } from "react-router-dom";
import { connections } from "../../redux/actions/profileAction";


// this arr will come from profile.lastmessages
let arr=[{
    name:"Pummy",
    img:"/images/send.png",
    date:"20/01/2022"
},{
    name:"Pummy",
    img:"/images/send.png",
    date:"20/01/2022"
},{
    name:"Pummy",
    img:"/images/send.png",
    date:"20/01/2022"
},{
    name:"Pummy",
    img:"/images/send.png",
    date:"20/01/2022"
},{
    name:"Pummy",
    img:"/images/send.png",
    date:"20/01/2022"
},{
    name:"Pummy",
    img:"/images/send.png",
    date:"20/01/2022"
},{
    name:"Pummy",
    img:"/images/send.png",
    date:"20/01/2022"
},{
    name:"Pummy",
    img:"/images/send.png",
    date:"20/01/2022"
},{
    name:"Pummy",
    img:"/images/send.png",
    date:"20/01/2022"
}]

export const Message=()=>{


    // const [Connections, setConnections] = useState([]);
    // const getConnections = ()=>{
    //     if(profile){
    //         dispatch(connections(profile?.id, setConnections)); 
    //     }
    // }
    // useEffect(()=>{
    //     getConnections()
    // }, [profile]);

    // const navigate = useNavigate()
    // const handleMessage = (to) =>{
    //     const URL = "../../messages/" + to;
    //     navigate(URL)
    // }


    const {id} = useParams()
    const {profile} = useAuth()
    const dispatch = useDispatch();
    const { loading,messages } = useSelector((state) => ({
		loading: state.messageState.loading,
        messages: state.messageState.messages,
      }));

      const recieveMessage =  ()=>{
          if(profile?.id){
            dispatch(getMessages(profile?.id, id))
          }
      }
      console.log(messages)
    useEffect(()=>{
        recieveMessage()
    },[profile])
  
const dummy = useRef();
const [formValue, setFormValue] = useState('');
 

  const sendMessage = async (e) => {
    e.preventDefault();
    if(profile.id){
        dispatch(sendTheMessage(formValue,profile?.id, id )) 
        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
   
  }
    return  profile?.id ? (<>
        <Header/>
        <Container>
            <Msg>
                <LeftMsg>
                    <Head>
                        <p>Messaging</p>
                        <div>
                            <BiDotsHorizontalRounded/>
                            <FaRegEdit/>
                        </div>
                    </Head>
                    <Input>
                        <BsSearch/>
                        <input type="text" placeholder="Search messages" />
                        <RiListSettingsFill/>
                    </Input>
                    <hr/>
                    <Inbox>
                        {arr.map((e, i)=>(
                            <Div key={i}>
                            <div className="ImgDiv">
                                <img src="/images/send.png" alt=""/>
                            </div>
                            <div>{e.name}</div>
                            <div>{e.date}</div>
                            </Div>
                        ))}
                    </Inbox>
                </LeftMsg>
                <RightMsg>


                (<>
                    <Title>
                        <div className="idiv">
                            <img src="/images/send.png" alt=""/>
                        </div>
                        <p>Name</p>
                        <div className="icon">
                            <BiDotsHorizontalRounded/>
                        </div>
                    </Title>

    <main className="chatDiv">

      {messages && messages.map((msg, i) => <ChatMessage key={i} message={msg} profile={profile} />)}

      <span ref={dummy}></span>

    </main>

    <form className="chatForm" onSubmit={sendMessage}>

      <input className="msgInput" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="type a message" />
      <button className="msgBtn" type="submit" disabled={!formValue}>Send</button>

    </form>
  </>)
                 
                </RightMsg>
            </Msg>
            <Right>
            <Rightside/>
            </Right>
        </Container>
    </>) : <>Ok</>
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

const LeftMsg=styled.div`
    width: 45%;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 0px 0px 0px;
`;

const RightMsg=styled.div`
    width:55%;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 0px 0px 0px;
`;

const Head=styled.div`
    display: flex;
    padding:10px;
    justify-content: space-between;

    p{
        font-weight: 400;
        font-size: 15px;
    }

    div{
        width: 25%;
        display: flex;
        justify-content: space-between;

    }
`;

const Input=styled.div`
    padding: 4px;
    display: flex;
    justify-content: space-between;
    padding:10px;
    align-items: center;

    input{
        flex-grow: 1;
        height: 25px;
        background-color:#eef3f8;
        border: none;
        border-radius: 3px;
        margin: 5px;
        outline-color:rgba(0,0,0,0.4);
        padding-left: 10px;
    }

`;

const Inbox = styled.div`
    overflow: scroll;
    height: 400px;
`;

const Div = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 0px 0px 0px;
    width: 90%;
    margin: auto;
    margin-top:2%;
    height: 50px;

    .ImgDiv{
        width:10%;
        border-radius:50%;
        background-color:rgba(0,0,0,0.3);
    }

    img{
        width: 100%;
    }
`;

const Title=styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;


    .idiv{
        width:5%;
    }

    img{
        width:100%;
    }
    
`;

const Box=styled.div``;
const Display=styled.div``;
const Text=styled.div`
  text-align: center;
`; 