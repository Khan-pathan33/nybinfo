import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const C = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="p-4 bg-yellow-100 rounded shadow">
      <h2 className="font-bold text-lg">Component C</h2>
      <p>Current Name: {user.name}</p>
      <p>Current Age: {user.age}</p>
    </div>
  );
};

export default C; // ✅ Default export
