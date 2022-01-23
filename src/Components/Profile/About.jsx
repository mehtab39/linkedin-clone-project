import styled from "styled-components";

export const About=({data})=>{
    return <Abt>
        <Div>
            <Head>
            <Title>About</Title>      
            </Head>
            <Text>{data?.profile_summary? data?.profile_summary:  "Write about yourself"}</Text>
        </Div>
    </Abt>
}

const Abt=styled.div`
`;

const Div=styled.div`
    border-radius: 5px;
    display: flex;
    background-color:white;
    flex-direction: column;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    padding: 5%;
    box-sizing: border-box;
`;

const Title = styled.p`
    font-size: 20px;
    font-weight: 600;
`;
const Img = styled.div`
    width:26px;
    margin-left:30px;
    img{
        width:100%;
    }
`;

const Head=styled.div`
    display:flex;
    justify-content: space-between;
`;

const Text=styled.p`
    font-size:13px;
    color: rgba(0, 0, 0, 0.6);
`;
