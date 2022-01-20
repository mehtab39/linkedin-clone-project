import styled from "styled-components";

export const About=()=>{
    return <Abt>
        <Div>
            <Head>
            <Title>About</Title>
            <img src="/images/pen.png" alt="" />
            </Head>
            <Text>Write about yourself</Text>
        </Div>
    </Abt>
}

const Abt=styled.div``;

const Div=styled.div`
    margin-top:10%;
    border-radius: 5px;
    img{
        width:15px;
    }
    display: flex;
    flex-direction: column;
    width: 55%;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    padding: 5%;
    box-sizing: border-box;
`;

const Title = styled.p`
    font-size: 20px;
    font-weight: 600;
`;


const Head=styled.div`
    display:flex;
    justify-content: space-between;
`;

const Text=styled.p`
    font-size:13px;
    color: rgba(0, 0, 0, 0.6);
`;
