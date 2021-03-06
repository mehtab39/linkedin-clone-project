import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { updateData } from "../../redux/actions/profileAction";





export const FormModal=({setFlag,data})=>{

    const obj={
        experience: data.experience,
        education: data.education,
        skills: data.skills,
    }

    const {profile} = useAuth();
    const dispatch = useDispatch()
    const [form,setForm]=useState(obj);
    

    const handleChange=(e)=>
    {
        let {name,value}=e.target;

        if(name==="skills"||name==="education"||name==="experience")
        {
            form[name].push(value);
        }else{

            setForm({...form,[name]:value})
        }

    }
  
    const handleSubmit=(e)=>
    {
      e.preventDefault()
      setFlag(false);
      dispatch(updateData(form, profile.id));
      window.location.reload();

    }
 
 

    return <>
    {/* { showModal==="open" && */}
    <Container>
    <FormData>
        <Head>
        <div>Enter your details</div>
        <Btn onClick={()=>setFlag(false)}>
        X
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
            <br/>
             <label htmlFor="">Education</label>            
            <select name="education" id="" onChange={handleChange}>
                <option value="Secondary">Secondary</option>
                <option value="Senior_Secondary">Senior Secondary</option>
                <option value="M.E">B.tech(Mechanical Engineering)</option>
                <option value="C.E">B.tech(Computer Engineering)</option>
                <option value="E.E">B.tech(Electrical Engineering)</option>
                <option value="B.Sc">B.Sc</option>
                <option value="B.CA">B.CA</option>
                <option value="others">Others</option>
            </select>
            <br/>
            <label htmlFor="">Skills</label>            
            <select name="skills" id="" onChange={handleChange}>
                <option value="js">Javascript</option>
                <option value="react">React</option>
                <option value="mongodb">Mongodb</option>
                <option value="html">Html</option>
                <option value="css">Css</option>
                <option value="java">Java</option>
                <option value="dsa">Dsa</option>
                <option value="c++">C++</option>
                <option value="ps">Problem Solver</option>
            </select>
            <br/>
            <label htmlFor="">Company</label>            
            <input name="company" onChange={handleChange} type="text" />

            <label htmlFor="">ResumePath</label>            
            <input name="resume_path" onChange={handleChange} type="text" />

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

const FormData=styled.div`
    width:40%;
    margin: auto;
    margin-top:8%;
    display: flex;
    overflow: scroll;
    color: #041C32;
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
        background-color:#d9e7f5;
        border-radius: 4px;
        outline-color: #0a66c2;
    }

    input[type="submit"] {
        background-color: #0a66c2;
        color:#fff;
    }

    select{
        width:100%;
        margin-bottom: 15px;
        padding: 2%;
        outline-color: #0a66c2;
        border:1px solid #0a66c2;
    }

    option {
        width: 100%;
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
    display: flex;
    justify-content:center;
    width:3%;
`;