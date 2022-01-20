import './App.css';
import {Login} from "./Components/Login/Login";
import {Routes,Route} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {Joinnow} from "./Components/Login/Joinnow";
import { Sign } from './Components/Login/Signin';
import { NetworkPage } from './Components/Networks/NetworkPage';
import PrivateRoute from './Components/Privateroute';
import Profile from './Components/Profil/Profile';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Login/>} ></Route>
   
 
        <Route path="/join" element={<Joinnow/>}></Route>
        <Route path="/sign" element={<Sign/>}></Route>
        <Route
         path="/network"
          element={
            <PrivateRoute>
            <NetworkPage/>
            </PrivateRoute>
          }
        />
         <Route
         path="/home"
          element={
            <PrivateRoute>
           <Home/>
            </PrivateRoute>
          }
        />
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
