import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Select Your Role</h2>

      <button onClick={() => navigate("/hr")}>HR</button>
      <button onClick={() => navigate("/admin")}>Admin</button>
      <button onClick={() => navigate("/manager")}>Manager</button>
      <button onClick={() => navigate("/employee")}>Employee</button>
    </>
  );
};

export default Home;
