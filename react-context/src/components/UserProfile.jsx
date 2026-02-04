import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { user, updateUser } = useContext(UserContext);

  return (
    <div className="p-6 bg-white rounded shadow-md w-96 mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <p>
        <span className="font-semibold">Name:</span> {user.name}
      </p>
      <p>
        <span className="font-semibold">Age:</span> {user.age}
      </p>

      <div className="mt-4 flex gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => updateUser({ name: "Jane Doe" })}
        >
          Change Name
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => updateUser({ age: user.age + 1 })}
        >
          Increase Age
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
