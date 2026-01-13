const TopMenu = () => {
  return (
    <nav className="bg-blue-700 text-white px-6 py-2 flex gap-6 text-sm">
      <span className="cursor-pointer font-semibold">Dashboard</span>
      <span className="cursor-pointer">Calendar</span>
      <span className="cursor-pointer">Tasks</span>
      <span className="cursor-pointer">Documents</span>
      <span className="cursor-pointer">Employees</span>
    </nav>
  );
};

export default TopMenu;
