import styled from "styled-components";
import React, { useRef, useEffect } from "react"
import { signin,signInWithGoogle} from "../../redux/actions/userActions"
import { useDispatch, useSelector  } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
export const Sign=(props)=>{
    const {user} = useAuth()
    const emailRef = useRef()
    const passwordRef = useRef()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading,error, errorMessage } = useSelector((state) => ({
        loading: state.userState.loading,
        error: state.userState.error,
        errorMessage: state.userState.errorMessage
      }));

    useEffect(() => {
        checkUser()
    }, [user]);
    const checkUser = ()=>{
        if(user){
            navigate("/home")
        }
    }
    
  function handleSubmit(e) {
      e.preventDefault()
        dispatch(signin(emailRef.current.value, passwordRef.current.value)) 
    }
    const signInGoogle = ()=>{
      dispatch(signInWithGoogle())
    }
    return (<> 
            <Logo>
            <a href="/">
                    <img src="/images/login-logo.svg" alt="" />
            </a>
            </Logo>
        <Container>
            <Incontainer>
            <h3>Sign in</h3>
            <p>Stay updated on your professional world</p>

            <Form>
            {error && <ErrorTag>{errorMessage.code.split("/")[1]}</ErrorTag>}
                <input type="email" ref={emailRef} required placeholder="Enter Email" />
                <input type="password" ref={passwordRef} required placeholder="Password" />
                <button disabled={loading} onClick={handleSubmit} className="agreebtn">Sign in </button>
                <span>
                    <hr/>
                </span>
                <button disabled={loading} onClick={signInGoogle} className="glbtn">
                <img src="/images/google.svg" alt="" /> 
                    Sign in with google</button>
            </Form>
            </Incontainer>
        </Container>
            <Out>
            <p>New to LinkedIn? <span className="blue"><Link to="../join">Join now</Link></span></p>
            </Out>
        </>
    );
};

const Container= styled.div`
    display:flex;
    flex-direction: column;
    width:28%;
    margin: auto;
    font-style: sans-serif;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px 0px;
    border-radius:4px;

    @media (max-width: 768px){
        width:60%;
        box-shadow: none;
    }
    heading {
        font-size:30px;
        font-weight:450;
    }

    p{
        font-size:14px;
        line-height: 20px;
        color:#000000;
        margin-top: 8px;
        margin-bottom: 10px;
    }

`;

const Incontainer= styled.div`
    padding-top: 10%;
    width: 90%;
    margin: auto;
    padding-bottom: 10%;

`;

const Form= styled.div`
    display:flex;
    flex-direction: column;
    input {
        margin-bottom: 5%;
        border:1px solid black;
        border-radius: 4px;
        height:50px;
        padding:0 10px;
        outline-color: #0a66c2;
        font-size: 18px;
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
    width: 8%;
    /* display: flex; */
    margin-left:5%;
    @media (max-width:768px){
        width:20%;
    }
`;

const Out=styled.div`
    padding: 20px;
    text-align: center;

    .blue{
        color:#0a66c2;
        text-decoration: none !important;
    }
    
`;

const ErrorTag = styled.p`
    color: red !important;
`