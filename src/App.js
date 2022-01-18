import './App.css';
import {Login} from "./Components/Login/Login";
import {Routes,Route} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {Joinnow} from "./Components/Login/Joinnow";

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Login/>} ></Route>
       <Route path="/home" element={<Home/>}>
       </Route>
         <Route path="/join" element={<Joinnow/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
