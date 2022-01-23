import './App.css';
import {Login} from "./Components/Login/Login";
import {Routes,Route} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {Joinnow} from "./Components/Login/Joinnow";
import { Sign } from './Components/Login/Signin';
import { NetworkPage } from './Components/Networks/NetworkPage';
import { Sent } from './Components/Networks/Sent';
import { Connections } from './Components/Networks/Connections';
import PrivateRoute from './Components/Privateroute';
import { Notification } from './Components/Notifications/Notification';
import { PageNotFoundError } from './Components/PageNotFound/PageNotFound';
import { Message } from './Components/Messaging/Message';
import Profile from "./Components/Profile/Profile";
// import Footer from "./Components/Footer/Rightfooter"


function App() {
  return (
    <div className="App">
     <Routes>
    
      <Route path="/" element={<Login/>} ></Route>
      <Route path="/join" element={<Joinnow/>}></Route>
      <Route path="/sign" element={<Sign/>}></Route>
        <Route
         path="/networks/"
          element={
            <PrivateRoute>
            <NetworkPage/>
            </PrivateRoute>
          }
        />
           <Route
         path="/networks/sent"
          element={
            <PrivateRoute>
            <Sent/>
            </PrivateRoute>
          }
        />
            <Route
         path="/networks/connections"
          element={
            <PrivateRoute>
            <Connections/>
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
            <Route
         path="/messages"
          element={
            <PrivateRoute>
           <Message/>
            </PrivateRoute>
          }
        />
         <Route
         path="/messages/:id"
          element={
            <PrivateRoute>
           <Message/>
            </PrivateRoute>
          }
        />

         <Route
         path="/notification"
          element={
            <PrivateRoute>
               <Notification/>
            </PrivateRoute>
          }
        />
         <Route
         path="/profile"
          element={
            <PrivateRoute>
               <Profile/>
            </PrivateRoute>
          }
        />
        <Route
         path="/profile/:username"
          element={
            <PrivateRoute>
               <Profile/>
            </PrivateRoute>
          }
        />

          {/* <Route path="/foot" element={<Footer/>}></Route> */}
         <Route path='*' element={<PageNotFoundError/>} />
      </Routes>
    </div>
  );
}

export default App;
