import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../features/uiSlice";
import { Link } from "react-router-dom";


export default function Sidebar(){
    const { sidebarOpen } = useSelector((s) => s.ui);
    const { role } = useSelector((s) => s.auth);
    const dispatch =useDispatch();

    return (
        <>
        {sidebarOpen && (
            <div className="fixed inset-0 bg-black/40 md:hidden"
            onClick={()=> dispatch(closeSidebar())}
            />
        )}

        <aside className={`fixed md:static z-50 w-64 h-screen bg-white/5 backdrop-blur shadow-soft
        transition-transfrom duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full " } md:translate-x-0 `} >
            <ul className="p-6 space-y-6 text-lg">
                <Link to='/'>Home</Link>
                <Link to='/courses'>Courses</Link>
                {role === "preimum" && <Link to="/premium">Advanced</Link>}
            </ul>
        </aside>
        </>
    )
}