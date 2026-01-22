import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import "./ChatMessages.css";

function ChatMessages({ messages }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="messages" ref={containerRef}>
      {messages.map((msg) => (
        <ChatMessage key={msg.id} {...msg} />
      ))}
    </div>
  );
}

export default ChatMessages;
