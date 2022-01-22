import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { deletePending, acceptPending } from "../../redux/actions/connectionAction";
import { pending } from "../../redux/actions/connectionAction";
import styled from "styled-components";

export const Pending = ({profile}) => {
    const dispatch = useDispatch()
    const [render, setRender] = useState()

    const { data} = useSelector((state) => ({
        data: state.connectionState.pending,
      }));

    const getPending = ()=>{

         dispatch(pending(profile.id)); 
    }
    const handleAccept = (toUser)=>{
         setRender(toUser)
        const fromUser = profile.id;
        dispatch(acceptPending(fromUser, toUser))
        getPending()
    }
    const handleDelete = (toUser)=>{
        setRender(toUser)
        const fromUser = profile.id;
         dispatch(deletePending(fromUser, toUser))
         getPending()
    }

    useEffect(()=>{
        getPending()
    }, [render])
    return data?.length>0 && (
        <ParentDiv>
            <h1>Invitations</h1>
           <div>
            {data.map((el)=>{
             return  <ChildDiv key={el.id}>
                  <div>
                   <Image src={el.profile_img ?  el.profile_img : "/images/user.svg"} />
                 </div>
                 <User>
                   <p>{el.first_name} {el.last_name}</p>
                  <p>{el.job_title}</p>
                 </User>
                 <div>
                  <RemoveBtn onClick={()=>handleDelete(el.id)}>Ignore</RemoveBtn>
                  <ActiveBtn onClick={()=>handleAccept(el.id)}>Accept</ActiveBtn>

                  </div>
            </ChildDiv>

            })
        }
        </div>
        
        </ParentDiv>
    )
}


const ParentDiv = styled.div`
    //  margin-top: 10%;
    //  dispay: flex;
    // flex-direction: column;
    background-color:#fff;
    box-sizing: border-box;
    padding: 2%;
    border-radius:4px;
`

const ChildDiv = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 0px 0px 0px;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;

    div{
        display: flex;   
    }
`

    const Image = styled.img `
     cursor: pointer;
    height: 70px;
    border-radius: 100%;
    /* border: 1px solid black;   */


 `
 const User = styled.div`
 /* border: 1px solid black;   */
         text-align: left;
         height: 70px;
         margin-left: 15px;
         display: flex;
         width: 45%;
         flex-direction: column;
         p{
             padding: 2px;
             margin-top: 10px;
         }
 `


 const RemoveBtn = styled.button`
   background-color: whitesmoke;
   padding: 10px;
   cursor: pointer;
 border: none;
  width: 85px;
margin: 20px;
  height: 36px;
 margin-right: 30px;
 &:hover {
        /* opacity: 0.5;   */
        background-color: lightgrey;
 border-radius: 3px;


     }
 `
 const ActiveBtn = styled.button`
 border: 1px solid #126BC4;
    border-radius: 20px;
    color: #126BC4;
    font-weight: bold;
    background-color: #fff;
    padding: 10px;
    width: 100px;
    margin-top: 20px;
    cursor: pointer;
    height: 36px;
   &:hover {
       background-color: #e2edfa;  
     }
 `