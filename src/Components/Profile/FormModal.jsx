import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const obj={
    first_name: "",
    last_name: "",
    username: "",
    address: "",
    company: "",
    experience: [],
    education: [],
    skills: [],
    profile_summary: "",
    job_title: "",
    resume_path: "",
    connections: [],
    pending: [],
    waiting: [],
}


export const FormModal=({setFlag})=>{

    const {profile} = useAuth();
    const dispatch = useDispatch()
    const [form,setForm]=useState(obj)
    const [data,setData]=useState([])

    const handleChange=(e)=>
    {
        let {name,value}=e.target;

        if(name==="skills"||name==="education"||name==="experience")
        {
            value=[...form[name],value];
        }

        setForm({...form,[name]:value})
    }
  
    const handleSubmit=(e)=>
    {
        console.log(form);
      e.preventDefault()
    }
 

    return <>
    {/* { showModal==="open" && */}
    <Container>
    <FormData>
        <Head>
        <div>Enter your details</div>
        <Btn onClick={()=>setFlag(false)}>
        <img src="/images/close.png" alt="" />
        </Btn>
        </Head>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">First name*</label>
            <input name="first_name" onChange={handleChange} type="text" />
            <label htmlFor="">Last name*</label>
            <input name="last_name" onChange={handleChange} type="text" />
            <label htmlFor="">Location</label>
            <input name="address" onChange={handleChange} type="text" />
            <label htmlFor="">About</label>
            <textarea name="profile_summary" onChange={handleChange}></textarea>
             <label htmlFor="">Education</label>            
            <input name="education" onChange={handleChange} type="text" />
            <label htmlFor="">Skills</label>            
            <input name="skills" onChange={handleChange} type="text" />
            <label htmlFor="">Company</label>            
            <input name="company" onChange={handleChange} type="text" />
            <label htmlFor="">Experience</label>            
            <input name="experience" onChange={handleChange} type="text" />
            <label htmlFor="">Current Position</label>            
            <input name="job_title" onChange={handleChange} type="text" />
            <label htmlFor="">Resume</label>            
            <input name="resume_path" onChange={handleChange} type="text" />        
            <input type="submit" />
        </form>
    </FormData>
    </Container>
    
    </>
}

const Container=styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color:black;
    background-color:rgba(0, 0, 0, 0.8);
    animation: fadeIn 0.3s;
`;

const Content = styled.div`
  
    width: 100%;
    max-width: 552px; background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative; 
    display: flex;
    flex-direction: column;
    top: 32px;
    margin :0 auto;
`;

const Header=styled.div`
    button>img {
        width:20px;

    }

    display: block;
    padding: 16px 20px; 
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0 , 0.6);
    font-weight:400;
    display: flex;
    justify-content: space-between;align-items: center;
    button {
        height: 40px;
        width: 40px;
        min-width: auto; 
        color: rgba(0, 0, 0, 0.15);

        img{
            pointer-events: none;
        }

    }
`;
const SharedContent=styled.div`

    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;
`;

const UserInfo = styled.div`

    display: flex;
    align-items: center;
    padding: 12px 24px;
    svg,
    img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;

    }
    span{
        font-weight: 600;
        font-size:16px;
        line-height: 1.5;
        margin-left: 5px;
    }
`;

const ShareCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding:  12px 24px 12px 16px;

`;


const AssetButton = styled.button`
    display: flex;
    align-items: center;
    height:40px;
    min-width: auto;
    color:rgba(0, 0, 0 , 0.5);
`;

const AttachAsset = styled.div`
    align-items: center;
    display: flex;
    padding-left: 8px;

    ${AssetButton} {
        width: 40px;
        font-size: 20px;
    }

`;

const ShareComment=styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left:1px solid rgba(0, 0, 0, 0.15);
    ${AssetButton} {
        width: auto;
        margin-right:5px;
    }
`;

const PostButton = styled.button`
    min-width:60px;
    border-radius: 20px;
    padding-left:16px;
    padding-right:16px;
    background:${(props)=>props.disabled ? "rgba(0,0,0,0.8)":"#0a66c2"};
    color:white;
    &:hover {
        background:#004182;
    }
`;

const Editor=styled.div`
    padding: 12px 24px;
    textarea {
        width: 100%;
        min-height: 100px;
        resize: none;
    }

    input {
        width:100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }

`;

const UploadImage = styled.div`
    text-align:center;
    img {
        width: 100%;
    }
`;




const FormData=styled.div`
    width:40%;
    margin: auto;
    margin-top:8%;
    display: flex;
    overflow: scroll;
    height:400px;
    flex-direction: column;
    background-color: white;
    padding: 3%;
    border-radius:4px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    input,label,textarea{
        width:100%;
        height: 30px;
    }
    input,textarea{
        margin-bottom: 15px;
        border: none;
        background-color:rgba(0, 0, 0, 0.06);
        border-radius: 4px;
        outline-color: #0a66c2;
    }

`;

const Head=styled.div`
    display: flex;
    justify-content:space-between;
    
    button{
        width:5%;
    }

`;

const Btn= styled.button`
    img {
        width: 100%;
    }
`;