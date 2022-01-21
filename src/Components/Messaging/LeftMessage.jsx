import {FaRegEdit} from "react-icons/fa";
import styled from "styled-components";
import {BsSearch} from "react-icons/bs"
import {BiDotsHorizontalRounded} from "react-icons/bi";

import {RiListSettingsFill} from "react-icons/ri";

export const LeftMessage = ({myConnections, chatFunction })=>{


    return (
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
                {myConnections.map((el, i)=>(
                    <Div onClick = {()=>{chatFunction(el)}} key={i}>
                    <div onClick = {()=>{chatFunction(el)}}>
                        <img className="userImages" src={el.profile_img ?  el.profile_img : "/images/user.svg"} alt=""/>
                    </div>
                    <UserDes>
                     <h2>{el.first_name ? el.first_name : el.username } {el.last_name} </h2>
                     <p onClick = {()=>{chatFunction(el)}}>Say 👋🏻 to {el.first_name ? el.first_name : el.username}</p>
                  </UserDes>
                
                 </Div>
                ))}
            </Inbox>
        </LeftMsg>)
}


const LeftMsg=styled.div`
    width: 45%;
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
        display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: flex-start;
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 20%) 0px 0px 0px 0px;
    width: 100%;
    margin-top: 2%;
    height: 75px;


    .ImgDiv{
        width:10%;
        border-radius:50%;
    }

    img{
        width: 80%;
    }
`;

const UserDes = styled.div`
      padding: 6px;
      color: black;
      p{
          margin-top: 10px;
      }
`