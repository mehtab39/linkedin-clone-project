import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { deleteConnection } from "../../redux/actions/connectionAction";
import { connections } from "../../redux/actions/profileAction";


export const Connections = () => {
    const {currentUser, profile} = useAuth()
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const getConnections = ()=>{
            dispatch(connections(profile.id, setData)); 
    }
   
    const handleRemove = (id)=>{
          dispatch(deleteConnection(profile.id, id))
    }
    useEffect(()=>{
        getConnections()
    }, [profile])
    return (
        <div>
            <h2>Your connections</h2>
            {data.map((el)=>{
                return <div key={el.id}>
                  <img src={el?.profile_img}/>
                  <p>{el.email}</p>
                <button onClick={handleRemove}>Remove connection</button>
                </div>
            })
}
        
        </div>
    )
}
