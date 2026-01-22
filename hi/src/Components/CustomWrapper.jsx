import React from "react";

export default function CustomWrapper({ children }) {
  // Internally uses React.Fragment
  return <>{children}</>;
}
