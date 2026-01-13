const TopHeader = () => {
  return (
    <header className="bg-white border-b px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">HRMS</h1>

      <div className="flex items-center gap-4">
        <input
          className="border rounded px-3 py-1 text-sm"
          placeholder="Search employees"
        />
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default TopHeader;
