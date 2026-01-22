import React from "react";
import StrictModeDemo from "./components/StrictModeDemo";
import FragmentDemo from "./components/FragmentDemo";
import ArrayFragmentDemo from "./components/ArrayFragmentDemo";
import CustomWrapper from "./components/CustomWrapper";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">React Wrapper Demos</h1>

      <StrictModeDemo />

      <CustomWrapper>
        <FragmentDemo />
      </CustomWrapper>

      <ArrayFragmentDemo />

      <CustomWrapper>
        <div className="p-4 border-2 border-yellow-500 rounded-md mb-4">
          <h2 className="font-bold text-lg mb-2">Custom Wrapper Demo</h2>
          <p>Custom wrapper internally uses Fragment, avoids extra DOM.</p>
        </div>
      </CustomWrapper>
    </div>
  );
}

export default App;
