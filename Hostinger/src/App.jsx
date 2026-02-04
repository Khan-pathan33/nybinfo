import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs';

const App = () => {
 

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
   
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
    </div>
  );
};

export default App;


// import { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import TrustedBy from './components/TrustedBy';
// import Services from './components/Services';
// import OurWork from './components/OurWork';
// import Teams from './components/Teams';
// import ContactUs from './components/ContactUs';

// function App() {
//   const [theme, setTheme] = useState('light');

//   // Optional: persist theme
//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', theme === 'dark');
//   }, [theme]);

//   return (
//     <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
//       <Navbar theme={theme} setTheme={setTheme} />

//       {/* Rest of your page */}
//       {/* <section className="p-10">
//         <h1 className="text-3xl font-bold">Welcome</h1>
//         <p>This section will now change theme too.</p>
//       </section> */}
//        <Hero />
//        <TrustedBy />
//       <Services />
//        <OurWork />
//        <Teams />
//        <ContactUs />

//     </div>
//   );
// }

// export default App;
