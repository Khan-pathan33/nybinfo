import Header from "../components/Header";
import TopNav from "../components/TopNav";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <TopNav /> {/* Row-wise top navigation */}
      <main className="p-6 bg-gray-100 flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default DashboardLayout;
