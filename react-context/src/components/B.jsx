import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const B = () => {
  const { user, updateUser } = useContext(UserContext);

  return (
    <div className="p-4 bg-gray-100 rounded shadow mb-4">
      <h2 className="font-bold text-lg">Component B</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button
        className="mt-2 px-3 py-1 bg-green-500 text-white rounded"
        onClick={() => updateUser({ age: user.age + 1 })}
      >
        Increase Age
      </button>
    </div>
  );
};

export default B; // ✅ Must be default export
