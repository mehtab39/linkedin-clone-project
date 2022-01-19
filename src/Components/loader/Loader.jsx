
import "./loader.css"
import logo from "../images/png0.png"


export const Loader= ()=>  {
return(
    <div class="loading-screen">
    <div class="loading-animation">
    <img src={logo} className="w-1/10 h-8 mb-2 ml-7 " alt="" />
      <div class="loading-bar"></div>
    </div>
  </div>
)
}