import Functional from "./components/Functional";
import Class from "./components/Class";

function App() {
  return (
    <div style={appStyle}>
      <h1>Functional vs Class Components</h1>

      <div style={layout}>
        <Functional />
        <Class />
      </div>
    </div>
  );
}

const appStyle = {
  textAlign: "center",
  padding: "30px"
};

const layout = {
  display: "flex",
  gap: "30px",
  justifyContent: "center"
};

export default App;
