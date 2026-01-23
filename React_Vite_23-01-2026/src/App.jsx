// import A from "./FunctionalComponents/A"
// import B from "./FunctionalComponents/B"
// import C from "./FunctionalComponents/C"
// import Child from "./FunctionalComponents/Child"
// import Child1 from "./FunctionalComponents/Child1"
// import ChildtoChild from "./ChildtoChild"

// function App (){
//   return (
//     <A />
//   )
// }

// export default App;
import React, { useState } from "react";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>
        React Props & Communication Demo
      </h1>
      <p style={{ color: "#555" }}>
        Parent → Child, Child → Parent, Child → Child, Parent → Parent, 
        and difference between passing / not passing props
      </p>

      {/* Parent 1 → Child 1 */}
      <Parent
        name="Parent1"
        msg="Message from Parent1"
        hasChildProps={true}
      />

      {/* Parent 2 → Child 2 */}
      <Parent
        name="Parent2"
        msg="Message from Parent2"
        hasChildProps={false} // child will not receive props
      />

      {/* Parent 3 → Child 3 */}
      <Parent
        name="Parent3"
        msg="Message from Parent3"
        hasChildProps={true}
      />

      {/* Parent 4 → Child 4 */}
      <Parent
        name="Parent4"
        msg="Message from Parent4"
        hasChildProps={false}
      />

      {/* Parent 5 → Child 5 */}
      <Parent
        name="Parent5"
        msg="Message from Parent5"
        hasChildProps={true}
      />

      {/* Invalid JSX Example */}
      {/* Uncommenting below line will throw error */}
      {/* <div><h2>Invalid JSX without closing div</h2> */}
    </div>
  );
}

// ================= Parent Component =================
function Parent({ name, msg, hasChildProps }) {
  const [childMsg, setChildMsg] = useState("");

  // Child → Parent communication
  const receiveFromChild = (childText) => setChildMsg(childText);

  return (
    <div
      style={{
        border: "3px solid #2980b9",
        padding: "15px",
        margin: "15px",
        borderRadius: "8px",
        backgroundColor: "#ecf0f1",
      }}
    >
      <h2 style={{ color: "#2980b9" }}>{name}</h2>
      <p>
        Parent message: <strong>{msg}</strong>
      </p>
      <p>
        Message from child:{" "}
        <span style={{ color: "#e74c3c" }}>
          {childMsg || "No message yet"}
        </span>
      </p>

      {/* Pass props or not based on hasChildProps */}
      <Child
        name={name.replace("Parent", "Child")}
        msg={hasChildProps ? msg : null}
        sendToParent={receiveFromChild}
      />
    </div>
  );
}

// ================= Child Component =================
function Child({ name, msg, sendToParent }) {
  const [childState, setChildState] = useState(
    msg ? `Received: ${msg}` : "No props received"
  );

  // Send data to parent
  const sendMessage = () => {
    sendToParent(`${name} says hello to ${msg ? "Parent" : "no parent"}`);
    setChildState("Message sent to Parent!");
  };

  // Child → Child communication
  const [childChildMsg, setChildChildMsg] = useState("Child internal msg");

  const sendToChild = () => setChildChildMsg("Child1 → Child2 communication!");

  return (
    <div
      style={{
        border: "2px solid #27ae60",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: msg ? "#dff9fb" : "#f6e58d", // highlight no-props differently
      }}
    >
      <h3 style={{ color: "#27ae60" }}>{name}</h3>
      <p>
        {msg ? `Prop from Parent: ${msg}` : "No prop received from Parent"}
      </p>
      <p>Internal state: {childState}</p>

      {/* Button to send to parent */}
      <button onClick={sendMessage} style={{ marginRight: "10px" }}>
        Send Message to Parent
      </button>

      {/* Button to update childChildMsg */}
      <button onClick={sendToChild}>Send Message to Child2</button>

      {/* Child → Child */}
      <Child1 msg={childChildMsg} />
    </div>
  );
}

// ================= Child1 Component =================
function Child1({ msg }) {
  return (
    <div
      style={{
        border: "2px dashed #8e44ad",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: "#f5f6fa",
      }}
    >
      <h4 style={{ color: "#8e44ad" }}>Child1 Component</h4>
      <p>Message from Child: {msg}</p>
    </div>
  );
}

export default App;
