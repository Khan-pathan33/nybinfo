import { FaHome, FaUsers, FaChartLine } from "react-icons/fa";

const Sidebar = () => {
  const menu = [
    { name: "Home", icon: <FaHome /> },
    { name: "Users", icon: <FaUsers /> },
    { name: "Reports", icon: <FaChartLine /> },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-6">Admin</h2>
      <ul className="space-y-4">
        {menu.map((item) => (
          <li key={item.name} className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded cursor-pointer">
            {item.icon} <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
