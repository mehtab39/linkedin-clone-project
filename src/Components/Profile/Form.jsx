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
export const Form=({handleClick})=>{
    const {profile} = useAuth();
    const dispatch = useDispatch()
    const [form,setForm]=useState(obj)
    const [data,setData]=useState([])
    const handleChange=(e)=>
    {
        let {name,value}=e.target;
        // if(name=="skills"||name=="education"||name=="experience")
        // {
        //     value=[...name,value]
        // }
        setForm({...form,[name]:value})
    }
  
    const handleSubmit=(e)=>
    {
      e.preventDefault()
    }
    return <FormData>
        <Head>
        <div>Enter your details</div>
        <Btn onClick={handleClick}>
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
            {/* <label htmlFor="">Company</label>            
            <input name="company" onChange={handleChange} type="text" />
            <label htmlFor="">Experience</label>            
            <input name="experience" onChange={handleChange} type="text" />
            <label htmlFor="">Current Position</label>            
            <input name="job_title" onChange={handleChange} type="text" />
            <label htmlFor="">Resume</label>            
            <input name="resume_path" onChange={handleChange} type="text" />         */}
            <input type="submit" />
        </form>
    </FormData>
}

const Btn= styled.button`
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