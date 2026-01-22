import React, { useState } from "react";
import {
  LayoutDashboard,
  Zap,
  BarChart3,
  Settings,
  FileText,
  Calendar,
  MessageSquare,
  CreditCard,
  Package,
  ShoppingBag,
  Users,
  ChevronDown,
} from "lucide-react";

const menuItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", badge: "New" },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    count: "2.4k",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permissions" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-commerce",
    submenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  { id: "inventory", icon: Package, label: "Inventory", count: "847" },
  { id: "transactions", icon: CreditCard, label: "Transactions" },
  { id: "messages", icon: MessageSquare, label: "Messages", badge: "12" },
  { id: "calendar", icon: Calendar, label: "Calendar" },
  { id: "reports-main", icon: FileText, label: "Reports" },
  { id: "settings", icon: Settings, label: "Settings" },
];

function Sidebar({ collapsed, currentPage, onPageChange }) {
  const [expandedItems, setExpandedItems] = useState(new Set(["analytics"]));

  const toggleExpanded = (id) => {
    const newSet = new Set(expandedItems);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setExpandedItems(newSet);
  };

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-72"
      } transition-all duration-300
      bg-white dark:bg-slate-900
      border-r border-slate-200 dark:border-slate-700
      flex flex-col`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="font-bold text-slate-800 dark:text-white">
                Nexus
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = currentPage === item.id;

          return (
            <div key={item.id}>
              <button
                onClick={() =>
                  item.submenu ? toggleExpanded(item.id) : onPageChange(item.id)
                }
                className={`w-full flex items-center justify-between p-3 rounded-xl transition
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  {!collapsed && (
                    <>
                      <span className="font-medium">{item.label}</span>
                      {item.badge && (
                        <span className="ml-2 px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {item.count && (
                        <span className="ml-2 px-2 py-0.5 text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full">
                          {item.count}
                        </span>
                      )}
                    </>
                  )}
                </div>

                {!collapsed && item.submenu && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedItems.has(item.id) ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Submenu */}
              {!collapsed && item.submenu && expandedItems.has(item.id) && (
                <div className="ml-11 mt-1 space-y-1">
                  {item.submenu.map((subitem) => (
                    <button
                      key={subitem.id}
                      onClick={() => onPageChange(subitem.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition
                      ${
                        currentPage === subitem.id
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                          : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      {subitem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User Profile */}
      {!collapsed && (
        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 p-3 rounded-xl">
            <img
              src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-slate-800 dark:text-white">
                Alex Johnson
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Administrator
              </p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
