import "./Message.css"
export const ChatMessage = ({message,  profile, user}) => {
    const messageClass = message.sentBy == profile?.id ? 'sent' : 'received';
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={messageClass==="sent" ? profile.profile_img : user.profile_img } />
        <p>{message.msg}</p>
      </div>
    </>)
  }