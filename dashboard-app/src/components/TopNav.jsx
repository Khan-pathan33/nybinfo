import { FaHome, FaUsers, FaChartLine } from "react-icons/fa";

const TopNav = () => {
  const menu = [
    { name: "Home", icon: <FaHome /> },
    { name: "Users", icon: <FaUsers /> },
    { name: "Reports", icon: <FaChartLine /> },
  ];

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex items-center justify-start space-x-6">
      {menu.map((item) => (
        <div
          key={item.name}
          className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 cursor-pointer transition"
        >
          {item.icon} <span className="font-medium">{item.name}</span>
        </div>
      ))}
    </nav>
  );
};

export default TopNav;
