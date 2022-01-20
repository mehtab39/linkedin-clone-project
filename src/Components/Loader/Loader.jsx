import "./Loader.css"

export const Loader= ()=>  {
return(
    <div className="loading-screen">
    <div className="loading-animation">
    <img src="/images/linkedInLogo.png" className="logo" alt="" />
      <div className="loading-bar"></div>
    </div>
  </div>
)
}