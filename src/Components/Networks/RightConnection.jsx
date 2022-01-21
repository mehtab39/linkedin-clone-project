
import { useAuth } from "../../contexts/AuthContext";
import styled from "styled-components"

export const RightConnection = () => {
    const {profile} = useAuth()

    return <Container>
    {profile ? (
        <>
          <h2>Manage my network</h2>
          <p>Your connections</p>
          <p>Pages</p>
          <p>People I follow</p>
          <p>Groups</p>
          <p>Events</p>
          <p>Pages</p>
          </>
          
    ):<></>}
    </Container>

}
   
const Container=styled.div`
    display :flex ;
    flex-direction: column;
    width:20%;
`;