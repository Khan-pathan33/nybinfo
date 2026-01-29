// import A from "./FunctionalComponents/A"
// import B from "./FunctionalComponents/B"
// import C from "./FunctionalComponents/C"
// import Child from "./FunctionalComponents/Child"
// import Child1 from "./FunctionalComponents/Child1"
// import ChildtoChild from "./ChildtoChild"
// import A from "./FunctionalComponents.jsx/A";

// function App (){
//   return (
//     <A />
//   )
// }

// export default App;




// import React, { useState } from "react";

// function App() {
//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1 style={{ textAlign: "center", color: "#2c3e50" }}>
//         React Props & Communication Demo
//       </h1>
//       <p style={{ color: "#555" }}>
//         Parent → Child, Child → Parent, Child → Child, Parent → Parent, 
//         and difference between passing / not passing props
//       </p>

//       {/* Parent 1 → Child 1 */}
//       <Parent
//         name="Parent1"
//         msg="Message from Parent1"
//         hasChildProps={true}
//       />

//       {/* Parent 2 → Child 2 */}
//       <Parent
//         name="Parent2"
//         msg="Message from Parent2"
//         hasChildProps={false} // child will not receive props
//       />

//       {/* Parent 3 → Child 3 */}
//       <Parent
//         name="Parent3"
//         msg="Message from Parent3"
//         hasChildProps={true}
//       />

//       {/* Parent 4 → Child 4 */}
//       <Parent
//         name="Parent4"
//         msg="Message from Parent4"
//         hasChildProps={false}
//       />

//       {/* Parent 5 → Child 5 */}
//       <Parent
//         name="Parent5"
//         msg="Message from Parent5"
//         hasChildProps={true}
//       />

//       {/* Invalid JSX Example */}
//       {/* Uncommenting below line will throw error */}
//       {/* <div><h2>Invalid JSX without closing div</h2> */}
//     </div>
//   );
// }

// // ================= Parent Component =================
// function Parent({ name, msg, hasChildProps }) {
//   const [childMsg, setChildMsg] = useState("");

//   // Child → Parent communication
//   const receiveFromChild = (childText) => setChildMsg(childText);

//   return (
//     <div
//       style={{
//         border: "3px solid #2980b9",
//         padding: "15px",
//         margin: "15px",
//         borderRadius: "8px",
//         backgroundColor: "#ecf0f1",
//       }}
//     >
//       <h2 style={{ color: "#2980b9" }}>{name}</h2>
//       <p>
//         Parent message: <strong>{msg}</strong>
//       </p>
//       <p>
//         Message from child:{" "}
//         <span style={{ color: "#e74c3c" }}>
//           {childMsg || "No message yet"}
//         </span>
//       </p>

//       {/* Pass props or not based on hasChildProps */}
//       <Child
//         name={name.replace("Parent", "Child")}
//         msg={hasChildProps ? msg : null}
//         sendToParent={receiveFromChild}
//       />
//     </div>
//   );
// }

// // ================= Child Component =================
// function Child({ name, msg, sendToParent }) {
//   const [childState, setChildState] = useState(
//     msg ? `Received: ${msg}` : "No props received"
//   );

//   // Send data to parent
//   const sendMessage = () => {
//     sendToParent(`${name} says hello to ${msg ? "Parent" : "no parent"}`);
//     setChildState("Message sent to Parent!");
//   };

//   // Child → Child communication
//   const [childChildMsg, setChildChildMsg] = useState("Child internal msg");

//   const sendToChild = () => setChildChildMsg("Child1 → Child2 communication!");

//   return (
//     <div
//       style={{
//         border: "2px solid #27ae60",
//         padding: "10px",
//         margin: "10px",
//         borderRadius: "8px",
//         backgroundColor: msg ? "#dff9fb" : "#f6e58d", // highlight no-props differently
//       }}
//     >
//       <h3 style={{ color: "#27ae60" }}>{name}</h3>
//       <p>
//         {msg ? `Prop from Parent: ${msg}` : "No prop received from Parent"}
//       </p>
//       <p>Internal state: {childState}</p>

//       {/* Button to send to parent */}
//       <button onClick={sendMessage} style={{ marginRight: "10px" }}>
//         Send Message to Parent
//       </button>

//       {/* Button to update childChildMsg */}
//       <button onClick={sendToChild}>Send Message to Child2</button>

//       {/* Child → Child */}
//       <Child1 msg={childChildMsg} />
//     </div>
//   );
// }

// // ================= Child1 Component =================
// function Child1({ msg }) {
//   return (
//     <div
//       style={{
//         border: "2px dashed #8e44ad",
//         padding: "10px",
//         margin: "10px",
//         borderRadius: "8px",
//         backgroundColor: "#f5f6fa",
//       }}
//     >
//       <h4 style={{ color: "#8e44ad" }}>Child1 Component</h4>
//       <p>Message from Child: {msg}</p>
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";

// export default function App() {
//   return (
//     <div>
//       <h1>useState</h1>
//       <A />
//     </div>
//   );
// }

// /* -------- A (Parent) -------- */
// function A() {
//   const [value, setValue] = useState("Initial value from A");

//   return (
//     <div>
//       <h2>A (Parent)</h2>
//       <p>Value in A: {value}</p>

//       <B setValue={setValue} />
//       <C value={value} />

//       <F />
//       <G />
//       <H />
//     </div>
//   );
// }

// /* -------- B (Child of A) -------- */
// function B({ setValue }) {
//   return (
//     <div>
//       <h3>B (Child of A)</h3>
//       <D setValue={setValue} />
//     </div>
//   );
// }

// /* -------- C (Child of A) -------- */
// function C({ value }) {
//   return (
//     <div>
//       <h3>C (Child of A)</h3>
//       <E value={value} />
//     </div>
//   );
// }

// /* -------- D (Child of B) -------- */
// function D({ setValue }) {
//   return (
//     <div>
//       <h4>D (Child of B)</h4>
//       <button onClick={() => setValue("Value updated from D")}>
//         Update Value
//       </button>

//       <I />
//     </div>
//   );
// }

// /* -------- I (Child of D) -------- */
// function I() {
//   return <p>I (Child of D)</p>;
// }

// /* -------- E (Child of C) -------- */
// function E({ value }) {
//   return (
//     <div>
//       <h4>E (Child of C)</h4>
//       <p>Received Value: {value}</p>
//     </div>
//   );
// }

// /* -------- F, G, H -------- */
// function F() {
//   return <p>F Component</p>;
// }

// function G() {
//   return <p>G Component</p>;
  
// }

// function H() {
//   return <p>H Component</p>;
// }

// import { useState } from "react";

// export default function App() {
//   return (
//     <div>
     
//       <ParentToParent />
//       <ChildToChild />
//       <ParentToChild />
//       <ChildToParent />
//     </div>
//   );
// }

// /* -------- Parent → Parent with Increment -------- */
// function ParentToParent() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Parent → Parent</h2>
//       <p>Parent Count: {count}</p>
//       <PPChildA count={count} setCount={setCount} />
//       <PPChildB count={count} />
//       <PPChildC />
//     </div>
//   );
// }

// function PPChildA({ count, setCount }) {
//   return (
//     <div>
//       <p>Child A can increment Parent Count</p>
//       <button onClick={() => setCount(count + 1)}>Increment Parent</button>
//     </div>
//   );
// }

// function PPChildB({ count }) {
//   return <p>Child B sees Parent Count: {count}</p>;
// }

// function PPChildC() {
//   return <p>Child C is independent</p>;
// }

// /* -------- Child → Child -------- */
// function ChildToChild() {
//   const [sharedValue, setSharedValue] = useState(100);

//   return (
//     <div>
//       <h2>Child → Child</h2>
//       <p>Shared Value: {sharedValue}</p>
//       <CCChildA sharedValue={sharedValue} />
//       <CCChildB sharedValue={sharedValue} />
//       <CCChildC sharedValue={sharedValue} />
//     </div>
//   );
// }

// function CCChildA({ sharedValue }) {
//   return <p>Child A sees: {sharedValue}</p>;
// }

// function CCChildB({ sharedValue }) {
//   return <p>Child B sees: {sharedValue}</p>;
// }

// function CCChildC({ sharedValue }) {
//   return <p>Child C sees: {sharedValue}</p>;
// }

// /* -------- Parent → Child -------- */
// function ParentToChild() {
//   const [message, setMessage] = useState("Hello from Parent");

//   return (
//     <div>
//       <h2>Parent → Child</h2>
//       <ChildPC message={message} />
//     </div>
//   );
// }

// function ChildPC({ message }) {
//   return <p>Child received message: {message}</p>;
// }

// /* -------- Child → Parent with Increment -------- */
// function ChildToParent() {
//   const [value, setValue] = useState(0);

//   return (
//     <div>
//       <h2>Child → Parent</h2>
//       <p>Parent Value: {value}</p>
//       <ChildCP setValue={setValue} />
//     </div>
//   );
// }

// function ChildCP({ setValue }) {
//   return (
//     <div>
//       <button onClick={() => setValue(prev => prev + 1)}>Increment Parent</button>
//     </div>
//   );
// }


// import { useState } from "react";

// export default function App() {
//   return (
//     <div>
//       <h1>Single File React Project</h1>
//       <A />
//     </div>
//   );
// }

// /* -------- A (Parent Component) -------- */
// function A() {
//   const [data, setData] = useState("Initial data from A");

//   return (
//     <div>
//       <h2>A (Parent)</h2>
//       <p>Current Data: {data}</p>

//       <B setData={setData} />
//       <C data={data} />
//     </div>
//   );
// }

// /* -------- B (Child of A) -------- */
// function B({ setData }) {
//   return (
//     <div>
//       <h3>B (Child of A)</h3>
//       <D setData={setData} />
//     </div>
//   );
// }

// /* -------- D (Child of B) -------- */
// function D({ setData }) {
//   return (
//     <div>
//       <h4>D (Child of B)</h4>
//       <button onClick={() => setData("Updated from D component")}>
//         Update Data
//       </button>

//       <I />
//     </div>
//   );
// }

// /* -------- I (Child of D) -------- */
// function I() {
//   return <p>I (Child of D)</p>;
// }

// /* -------- C (Child of A) -------- */
// function C({ data }) {
//   return (
//     <div>
//       <h3>C (Child of A)</h3>
//       <E data={data} />
//     </div>
//   );
// }

// /* -------- E (Child of C) -------- */
// function E({ data }) {
//   return (
//     <div>
//       <h4>E (Child of C)</h4>
//       <p>Received Data: {data}</p>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   return (
//     <div style={{ background: "#040714", minHeight: "100vh", color: "white" }}>
//       <Header />
//       <Home />
//     </div>
//   );
// }

// /* ---------- Header ---------- */
// function Header() {
//   return (
//     <div style={styles.header}>
//       <h2>Disney+</h2>
//       <div style={styles.nav}>
//         <span>Home</span>
//         <span>Search</span>
//         <span>Watchlist</span>
//         <span>Movies</span>
//         <span>Series</span>
//       </div>
//     </div>
//   );
// }

// /* ---------- Home ---------- */
// function Home() {
//   const [category, setCategory] = useState("All");

//   return (
//     <div style={{ padding: 20 }}>
//       <Categories setCategory={setCategory} />
//       <Movies category={category} />
//     </div>
//   );
// }

// /* ---------- Categories ---------- */
// function Categories({ setCategory }) {
//   const categories = ["All", "Disney", "Pixar", "Marvel", "Star Wars"];

//   return (
//     <div style={styles.categories}>
//       {categories.map((cat) => (
//         <button
//           key={cat}
//           style={styles.button}
//           onClick={() => setCategory(cat)}
//         >
//           {cat}
//         </button>
//       ))}
//     </div>
//   );
// }

// /* ---------- Movies ---------- */
// function Movies({ category }) {
//   const movies = [
//     { title: "Lion King", type: "Disney" },
//     { title: "Frozen", type: "Disney" },
//     { title: "Toy Story", type: "Pixar" },
//     { title: "Avengers", type: "Marvel" },
//     { title: "Iron Man", type: "Marvel" },
//     { title: "Star Wars", type: "Star Wars" },
//   ];

//   const filteredMovies =
//     category === "All"
//       ? movies
//       : movies.filter((movie) => movie.type === category);

//   return (
//     <div>
//       <h3>{category} Movies</h3>
//       <div style={styles.movies}>
//         {filteredMovies.map((movie, index) => (
//           <MovieCard key={index} title={movie.title} />
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ---------- Movie Card ---------- */
// function MovieCard({ title }) {
//   return (
//     <div style={styles.card}>
//       <div style={styles.poster}>🎬</div>
//       <p>{title}</p>
//     </div>
//   );
// }

// /* ---------- Styles ---------- */
// const styles = {
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "15px 30px",
//     background: "#090b13",
//   },
//   nav: {
//     display: "flex",
//     gap: "15px",
//     fontSize: "14px",
//   },
//   categories: {
//     display: "flex",
//     gap: "10px",
//     marginBottom: "20px",
//   },
//   button: {
//     background: "#1f80e0",
//     border: "none",
//     padding: "8px 12px",
//     color: "white",
//     cursor: "pointer",
//     borderRadius: "4px",
//   },
//   movies: {
//     display: "flex",
//     gap: "15px",
//     flexWrap: "wrap",
//   },
//   card: {
//     width: "140px",
//     background: "#111",
//     padding: "10px",
//     borderRadius: "6px",
//     textAlign: "center",
//   },
//   poster: {
//     fontSize: "40px",
//     marginBottom: "10px",
//   },
// };



// import React, { useState } from "react";

// /* =====================
//    Parent Component A
// ===================== */
// const A = () => {
//   const [message, setMessage] = useState("Hello from A");

//   return (
//     <div style={{ padding: "20px", border: "2px solid black" }}>
//       <h2>Component A</h2>
//       <p>{message}</p>

//       {/* Nested children */}
//       <B message={message} setMessage={setMessage} />
//       <C message={message} setMessage={setMessage} />
//       <D message={message} setMessage={setMessage} />
//       <E message={message} setMessage={setMessage} />
//     </div>
//   );
// };

// /* =====================
//    Child B → has I
// ===================== */
// const B = ({ message, setMessage }) => {
//   return (
//     <div style={{ marginLeft: "20px", marginTop: "10px" }}>
//       <h3>Component B</h3>
//       <p>{message}</p>
//       <button onClick={() => setMessage("Updated by B")}>
//         Update from B
//       </button>

//       <I message={message} />
//     </div>
//   );
// };

// /* =====================
//    Child C → has E & F
// ===================== */
// const C = ({ message, setMessage }) => {
//   return (
//     <div style={{ marginLeft: "20px", marginTop: "10px" }}>
//       <h3>Component C</h3>
//       <p>{message}</p>

//       <E message={message} setMessage={setMessage} />
//       <F message={message} />
//     </div>
//   );
// };

// /* =====================
//    Child D → has B
// ===================== */
// const D = ({ message, setMessage }) => {
//   return (
//     <div style={{ marginLeft: "20px", marginTop: "10px" }}>
//       <h3>Component D</h3>
//       <B message={message} setMessage={setMessage} />
//     </div>
//   );
// };

// /* =====================
//    Child E → has I
// ===================== */
// const E = ({ message, setMessage }) => {
//   return (
//     <div style={{ marginLeft: "20px", marginTop: "10px" }}>
//       <h3>Component E</h3>
//       <p>{message}</p>

//       <I message={message} />
//     </div>
//   );
// };

// /* =====================
//    Child F
// ===================== */
// const F = ({ message }) => {
//   return (
//     <div style={{ marginLeft: "20px", marginTop: "10px" }}>
//       <h3>Component F</h3>
//       <p>Message from Parent: {message}</p>
//     </div>
//   );
// };

// /* =====================
//    Child I
// ===================== */
// const I = ({ message }) => {
//   return (
//     <div style={{ marginLeft: "40px", marginTop: "5px" }}>
//       <h4>Component I</h4>
//       <p>Message from Parent: {message}</p>
//     </div>
//   );
// };

// export default A;
