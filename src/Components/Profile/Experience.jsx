import React from 'react'
import styled from "styled-components";

export const Experience=({data})=>{
    return <Abt>
        <Div>
            <Head>
            <Title>My Resume</Title>      
            </Head>
            <Text href={data?data.resume_path:""} target="_blank">{data.username}</Text>
        </Div>
    </Abt>
}

const Abt=styled.div`
max-width: 100%;
`;

const Div=styled.div`
    margin-top:20px;
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

const Head=styled.div`
    display:flex;
    justify-content: space-between;
`;

const Text=styled.a`
    font-size:13px;
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
`;
