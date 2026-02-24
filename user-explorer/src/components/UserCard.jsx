function UserCard({ user }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-semibold text-gray-800">
        {user.name}
      </h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-500 text-sm">{user.phone}</p>
      <p className="text-blue-500 text-sm">{user.website}</p>

      <div className="mt-3 text-sm text-gray-600">
        <p>
          <span className="font-medium">Company:</span>{" "}
          {user.company.name}
        </p>
        <p>
          <span className="font-medium">City:</span>{" "}
          {user.address.city}
        </p>
      </div>
    </div>
  );
}

export default UserCard;