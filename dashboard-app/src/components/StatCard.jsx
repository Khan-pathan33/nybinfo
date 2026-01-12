import { FaUsers, FaShoppingCart, FaDollarSign, FaBox } from "react-icons/fa";

const iconMap = {
  Users: { icon: <FaUsers />, bg: "bg-blue-100", text: "text-blue-600" },
  Sales: { icon: <FaShoppingCart />, bg: "bg-green-100", text: "text-green-600" },
  Orders: { icon: <FaBox />, bg: "bg-yellow-100", text: "text-yellow-600" },
  Revenue: { icon: <FaDollarSign />, bg: "bg-red-100", text: "text-red-600" },
};

const StatCard = ({ title, value }) => {
  const { icon, bg, text } = iconMap[title];
  return (
    <div className={`flex-1 min-w-[200px] p-4 rounded-xl shadow hover:shadow-xl transition cursor-pointer ${bg}`}>
      <div className="flex items-center justify-between mb-2">
        <p className={`font-medium ${text}`}>{title}</p>
        {icon}
      </div>
      <p className="text-2xl font-bold mb-2">{value}</p>
      <div className="h-10 bg-gray-300 rounded-full"></div>
    </div>
  );
};

export default StatCard;
