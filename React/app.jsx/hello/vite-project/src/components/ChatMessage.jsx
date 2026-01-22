import "./ChatMessage.css";

function ChatMessage({ message, sender }) {
  return (
    <div className={`message ${sender}`}>
      {sender === "bot" && <div className="avatar bot">🤖</div>}
      <div className="bubble">{message}</div>
      {sender === "user" && <div className="avatar user">👤</div>}
    </div>
  );
}

export default ChatMessage;
