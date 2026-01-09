// import React from "react";

// export default function FragmentScreen() {
//   return (
//     <>
//       <h2 className="font-bold">Fragment Example</h2>
//       <p>No extra div added!</p>
//     </>
//   );
// }


import { Fragment } from "react";

function Items() {
  return (
    <Fragment>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </Fragment>
  );
}

export default function FragmentScreen() {
  return (
    <div className="bg-indigo-200 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">📂 Fragment Demo</h1>
      <ul className="p-4 bg-white rounded shadow list-disc">
        <Items />
      </ul>
    </div>
  );
}
