import TopHeader from "../components/TopHeader";
import TopMenu from "../components/TopMenu";

const HRLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <TopHeader />
      <TopMenu />
      <main className="p-6 flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default HRLayout;
