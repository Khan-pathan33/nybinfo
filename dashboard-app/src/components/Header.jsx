const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <div className="flex items-center gap-4">
        <div className="bg-gray-200 p-2 rounded-full cursor-pointer">🔔</div>
        <div className="bg-gray-200 p-2 rounded-full cursor-pointer">👤</div>
      </div>
    </header>
  );
};

export default Header;
