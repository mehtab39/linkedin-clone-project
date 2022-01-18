// import styled from "styled-components";
import styled from "styled-components";
import { Header } from "../Header/Header";

export const Home=()=>{

    return <div>
        <Container>
        <Header/>
        Home
        </Container>
        
    </div>
}

const Container=styled.div`
    padding-top: 52px;
    max-width: 100%;
`;