import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Counter from './components/Counter';
import ColorChanger from './components/ColorChanger';

function App() {
  return (
    <Provider store={store}>
      <div className="max-w-md mx-auto mt-10 p-6 font-sans">
        <h1 className="text-3xl font-bold mb-6 text-center">Redux Toolkit Demo</h1>
        <Counter />
        <ColorChanger />
        <div className="mt-6 text-gray-600 text-sm">
          <p><strong>Explanation:</strong></p>
          <ul className="list-disc ml-5">
            <li><strong>Store:</strong> holds global state (`store`).</li>
            <li><strong>Slice:</strong> defines initial state, reducers, and actions (`counterSlice`, `colorSlice`).</li>
            <li><strong>Actions:</strong> functions that describe state changes (`increment`, `decrement`, etc.).</li>
            <li><strong>Reducer:</strong> logic inside slice that updates state.</li>
            <li><strong>Dispatch:</strong> triggers actions to update state (`dispatch(counterSlice.actions.increment())`).</li>
            <li><strong>Provider:</strong> wraps app to give access to Redux store.</li>
          </ul>
        </div>
      </div>
    </Provider>
  );
}

export default App;













// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './Components/Header'

// function App() {
//   const [Count, setCount] = useState(0)

//   return (
//     <div>
//       <Header />
     
//     </div>
//   )
// }

// export default App
