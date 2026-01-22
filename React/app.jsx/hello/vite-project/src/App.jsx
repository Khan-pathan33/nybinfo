import { useState } from "react";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [inputPosition, setInputPosition] = useState("top"); // "top" or "bottom"

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      message: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        message: getBotReply(input),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 400);
  };

  const togglePosition = () => {
    setInputPosition((prev) => (prev === "top" ? "bottom" : "top"));
  };

  const inputBox = (
    <div className="top-input">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Send a message to Chatbot"
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
      <button className="toggle-btn" onClick={togglePosition}>
        Move to {inputPosition === "top" ? "bottom" : "top"}
      </button>
    </div>
  );

  return (
    <div className="chat-container">
      {inputPosition === "top" && inputBox}
      <ChatMessages messages={messages} />
      {inputPosition === "bottom" && inputBox}
    </div>
  );
}

function getBotReply(text) {
  const lower = text.toLowerCase();

  if (lower.includes("hello") || lower.includes("hi")) {
    return "Hello! How can I help you?";
  }
  if (lower.includes("date")) {
    return "Today is " + new Date().toDateString();
  }
  if (lower.includes("coin") || lower.includes("flip")) {
    return Math.random() > 0.5 ? "You got heads" : "You got tails";
  }
  return "Sorry, I didn't understand that.";
}

export default App;
