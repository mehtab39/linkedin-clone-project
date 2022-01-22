import styled from "styled-components";
import React, { useEffect, useRef} from "react"
import { useDispatch} from "react-redux"
import { createAccount, signInWithGoogle} from "../../redux/actions/userActions"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const Joinnow=()=>{
    const navigate = useNavigate();
    const emailRef = useRef()
    const passwordRef = useRef()
    const { loading,error, errorMessage, isAuth } = useSelector((state) => ({
        isAuth: state.userState.isAuth,
        loading: state.userState.loading,
        error: state.userState.error,
        errorMessage: state.userState.errorMessage
      }));

    useEffect(() => {
        checkUser()
    }, [isAuth]);
    const checkUser = ()=>{
        if(isAuth){
            navigate("/home")
        }
    }
    
    const dispatch = useDispatch();
    const signInGoogle = ()=>{
        dispatch(signInWithGoogle())
      }
    async function handleSubmit(e) {
      e.preventDefault()
        dispatch(createAccount(emailRef.current.value, passwordRef.current.value))
    }
    return <>
     <Container>
            <Logo>
            <a href="/">
           <img src="/images/login-logo.svg" alt="" />
            </a>
            </Logo>
            <Heading>Make the most of your professional life</Heading>
            <Form >
            {error && <ErrorTag>{errorMessage.code.split("/")[1]}</ErrorTag>}
                <InsideForm>

                <label htmlFor="">Email or phone number</label>
                <input type="email" ref={emailRef} required />
                <label htmlFor="">Password (6 or more characters)</label>
                <input type="password" ref={passwordRef} required />

                <p className="txt">By clicking Agree & Join, you agree to the LinkedIn <span className="blue">User Agreement, Privacy Policy</span>, and <span className="blue">Cookie Policy.</span></p>

                <button disabled={loading} onClick={handleSubmit} className="agreebtn">Agree & Join</button>
                <button disabled={loading} onClick={signInGoogle} className="glbtn">
                <img src="/images/google.svg" alt="" /> 
                    Join with Google</button>


                <p className="txt1">Already on LinkedIn? <span className="blue">Sign in</span></p>

                <p className="txt1">Looking to create a page for a business? <span className="blue">Get help</span></p>   

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
    width: 48%;
    height: 100%;
    display:flex;
    margin: auto;
    flex-direction: column;
    background-color:#fff;
    opacity: 90%;
    border-radius: 8px;

    @media (max-width: 768px){
        width:90%;
        margin: auto;
        background-color:transparent;
    }
`;

const InsideForm=styled.div`
    padding-top: 40px;
    width:90%;
    display:flex;
    flex-direction: column;
    margin: auto;
    border-radius: 2px;

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
        cursor: pointer;
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
        display:flex;
        border: 1px solid #0a66c2;
        border-radius:20px;
        height: 45px;
        margin-bottom: 8px;
        margin-top:8px;
        color:#0a66c2;
        font-size: 20px;
        font-weight: 100;
        align-items: center;
        vertical-align: middle;
        justify-content: center;
    }

    .txt{
        font-size: 11px;
        text-align: center;
    }

    .txt1{
        text-align: center;
        margin: 10px;
        font-size: 12px;
        color:black;
    }

    @media (max-width: 768px){
        width:100%;
        margin: auto;
    }
   
    button{
        cursor: pointer;
    }
    button:disabled {
    opacity: 0.5;
    background-color: #c6d4e2;
    cursor: not-allowed;
  }

`;

const Logo=styled.div`
    padding-top: 18px;
    padding-bottom: 20px;
    width: 23%;
    margin: auto;
`;

const Heading=styled.p`
    font-size: 30px;
    text-align: center;
    padding-bottom: 18px;
    @media (max-width: 768px){
        font-size: 20px;

    }
`;


const ErrorTag = styled.p`
    color: red !important;
    text-align: center;
    padding: 2px;
    margin: 10px;
`



