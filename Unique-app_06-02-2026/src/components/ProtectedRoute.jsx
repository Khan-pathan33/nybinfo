// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//     const {role} = useSelector((s) => s.auth);
//     return role=== "premium" ? children : <Navigate to="/login" />
// }


import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { loggedIn, premium } = useSelector(s => s.auth);

  if (!loggedIn) return <Navigate to="/login" />;
  if (!premium) return <Navigate to="/courses" />;

  return children;
}
