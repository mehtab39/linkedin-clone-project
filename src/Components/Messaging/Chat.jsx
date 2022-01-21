import "./Message.css"
export const ChatMessage = ({message,  profile}) => {
    const messageClass = message.sentBy == profile?.id ? 'sent' : 'received';
    return (<>
      <div className={`message ${messageClass}`}>
        <img src='https://api.adorable.io/avatars/23/abott@adorable.png' />
        <p>{message.msg}</p>
      </div>
    </>)
  }