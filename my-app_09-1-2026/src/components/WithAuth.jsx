// src/components/withAuth.jsx
import React from "react";

export function withAuth(Component) {
  return function AuthWrapper(props) {
    const isLoggedIn = true; // example

    if (!isLoggedIn) {
      return <div className="p-4 text-red-500 font-bold">Please login</div>;
    }

    return <Component {...props} />;
  };
}

// src/components/Dashboard.jsx
function Dashboard() {
  return <div className="p-4 text-green-500">Welcome to Dashboard</div>;
}

export default withAuth(Dashboard);
