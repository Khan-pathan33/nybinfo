import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import B from "./B"; // ✅ Default import matches default export

const A = () => {
  const { user, updateUser } = useContext(UserContext);

  return (
    <div className="p-4 bg-white rounded shadow mb-4">
      <h2 className="font-bold text-lg">Component A</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
        onClick={() => updateUser({ name: "Alice" })}
      >
        Change Name to Alice
      </button>

      <B /> {/* render child B */}
    </div>
  );
};

export default A;
