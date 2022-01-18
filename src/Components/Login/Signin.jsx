import styled from "styled-components";

export const Sign=(props)=>{
    return (
        
        <Container>
            <heading>Sign in</heading>
            <p>Stay updated on your professional world</p>

            <Form>
                <input type="text" placeholder="Email or Phone" />
                <input type="text" placeholder="Password" />
            </Form>
            <button>Sign in </button>
            <button>Sign in with Apple</button>

            <div>
                <span><hr /></span>
                <span>or</span>
                <span><hr /></span>
            </div>

            <p>New to LinkedIn? <span>Join now</span></p>
        </Container>
    );
};

const Container= styled.div`
    display:flex;
    flex-direction: column;
    width:40%;
    margin: auto;

    @media (max-width: 768px){
        width:60%;
    }
    heading {
        font-size:25px;
        font-weight:600;
    }

    p{
        font-size:14px;
        line-height: 20px;
        color:#000000
    }

`;

const Form= styled.div`
    display:flex;
    flex-direction: column;
    height:24px;
    input {
        line-height:24px;
    }
`;

