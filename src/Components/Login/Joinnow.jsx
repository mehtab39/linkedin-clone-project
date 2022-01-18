import styled from "styled-components";
import React, { useRef, useState } from "react"
import { useDispatch} from "react-redux"
import { createAccount, signInWithGoogle} from "../../redux/actions/userActions"
import { useAuth } from "../../contexts/AuthContext"

export const Joinnow=()=>{
    // bring loading state from redux useSelector

    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
  

    const dispatch = useDispatch();

    const signInGoogle = ()=>{
        dispatch(signInWithGoogle())
      }

    async function handleSubmit(e) {
      e.preventDefault()
      try {
        setError("")
        dispatch(createAccount(emailRef.current.value, passwordRef.current.value, signup))

       } catch {
        setError("Failed to create an account")
      }
    }
    return <>
     <Container>
            <a href="/">
           <img src="/images/login-logo.svg" alt="" />
            </a>
            <h1>Make the most of your professional life</h1>
            <Form >
            {error && <p>{error}</p>}
                <InsideForm>
                <label htmlFor="">Email</label>
                <input type="email" ref={emailRef} required />
                <label htmlFor="">Password (6 or more characters)</label>
                <input type="password" ref={passwordRef} required />

                <p>By clicking Agree & Join, you agree to the LinkedIn <span className="blue">User Agreement, Privacy Policy</span>, and <span className="blue">Cookie Policy.</span></p>

                <button onClick={handleSubmit} className="agreebtn">Agree & Join</button>

                <button onClick={signInGoogle} className="glbtn">Join with Google</button>

                <p>Already on LinkedIn? <span>Sign in</span></p>

                <p>Looking to create a page for a business? <span>Get help</span></p>   

                </InsideForm>
            </Form>
        </Container>
        </>
        
    
}

const Container=styled.div`
    display:flex;
    flex-direction: column;
    width:60%;
    margin: auto;

    @media (max-width: 768px){
        width:100%;
    }

`;

const Form=styled.div`
    
    display:flex;
    margin: auto;
    flex-direction: column;
    background-color:#fff;

    @media (max-width: 768px){
        width:100%;
        background-color:none;
        margin: auto;
    }
`;

const InsideForm=styled.div`
    padding-top: 20px;
    width:90%;
    display:flex;
    flex-direction: column;
    margin: auto;

    label {
        color:rgba(0, 0, 0, 0.6);
        font-size:1rem;
        margin:0 0 4px;
    }

    input {
        margin-bottom: 5%;
        border:1px solid black;
        border-radius: 4px;
        height:32px;
        padding:0 10px;
    }

    p {
        color:rgba(0, 0, 0, 0.6);
        font-size:12px;
    }

    .blue{
        color: #0a66c2;
        font-weight: 100;
    }

    .agreebtn{
        background-color:#0a66c2; 
        border: none;
        border-radius:20px;
        height: 45px;
        margin-bottom: 8px;
        margin-top:8px;
        color:#fff;
        font-weight: 80;
    }

    .glbtn{
        border: 1px solid #0a66c2;
        border-radius:20px;
        height: 45px;
        margin-bottom: 8px;
        margin-top:8px;
        color:#0a66c2;
        font-size: 20px;
        font-weight: 100;
    }

    @media (max-width: 768px){
        width:100%;
        margin: auto;
    }

`