import styled from "styled-components";
import {Leftside} from "./Leftside";
import {Main} from "./Main";
import {Rightside} from "./Rightside";
import {Loader} from "../Loader/Loader"
import {  useEffect  } from "react";
import { fetchUserProfile } from "../../redux/actions/profileAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext"
 

export const Home = (props) => {
  const {user} = useAuth()
   const dispatch = useDispatch()
   const navigate = useNavigate()
  const { loading, error, isAuth, profile} = useSelector((state) => ({
    isAuth: state.userState.isAuth,
    loading: state.profileState.loading,
    profile: state.profileState.profile,
    error: state.profileState.error,
  }));


useEffect(() => {
  if(user){
    dispatch(fetchUserProfile(user.uid))
  }     
},[user])


  return  profile ?  (<Container>
      <Layout>
        <Leftside user={user} profile={profile}/>
        <Main user={user}  profile={profile}/>
        <Rightside/>
      </Layout>
    </Container>
  ) : <Loader />

};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

