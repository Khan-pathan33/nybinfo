// // // // // import React from 'react'
// // // // // // import Accordian from './Components/Accordian';
// // // // // import Design from './Components/Design';

// // // // // const App = ()=>{
// // // // //   return (
    
// // // // //       // <Accordian />

// // // // //       <Design />
    
// // // // //   )

// // // // // }

// // // // // export default App;


// // // // import React from "react";

// // // // export default function App() {

// // // //   const events = [
// // // //     {
// // // //       title: "Music Festival",
// // // //       date: "15 July 2026",
// // // //       location: "Hyderabad",
// // // //       image: "https://images.unsplash.com/photo-1506157786151-b8491531f063"
// // // //     },
// // // //     {
// // // //       title: "Tech Conference",
// // // //       date: "20 July 2026",
// // // //       location: "Bangalore",
// // // //       image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">

// // // //       <h1 className="text-3xl font-bold mb-10">Upcoming Events</h1>

// // // //       <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">

// // // //         {events.map((event, i) => (
// // // //           <div
// // // //             key={i}
// // // //             className="relative h-[300px] rounded-xl overflow-hidden shadow-lg group"
// // // //           >

// // // //             {/* Image */}
// // // //             <img
// // // //               src={event.image}
// // // //               alt={event.title}
// // // //               className="absolute inset-0 w-[30px] h-[30px] object-cover group-hover:scale-110 transition duration-500"
// // // //             />

// // // //             {/* Overlay */}
// // // //             <div className="absolute inset-0 bg-black/50"></div>

// // // //             {/* Content */}
// // // //             <div className="absolute bottom-0 p-6 text-white">
// // // //               <h2 className="text-2xl font-semibold">{event.title}</h2>
// // // //               <p className="text-sm">📅 {event.date}</p>
// // // //               <p className="text-sm">📍 {event.location}</p>

// // // //               <button className="mt-3 px-4 py-1 bg-white text-black rounded">
// // // //                 Register
// // // //               </button>
// // // //             </div>

// // // //           </div>
// // // //         ))}

// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }


// // // import React, { useState, useEffect, useRef } from "react";

// // // const images = [
// // //   "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
// // //   "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
// // //   "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
// // //   "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
// // // ];

// // // export default function App() {
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const timeoutRef = useRef(null);
// // //   const delay = 4000; // 4 seconds autoplay delay

// // //   // Clear and reset autoplay timeout
// // //   const resetTimeout = () => {
// // //     if (timeoutRef.current) {
// // //       clearTimeout(timeoutRef.current);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     resetTimeout();
// // //     timeoutRef.current = setTimeout(() => {
// // //       setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
// // //     }, delay);

// // //     return () => {
// // //       resetTimeout();
// // //     };
// // //   }, [currentIndex]);

// // //   const prevSlide = () => {
// // //     resetTimeout();
// // //     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// // //   };

// // //   const nextSlide = () => {
// // //     resetTimeout();
// // //     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
// // //   };

// // //   const goToSlide = (index) => {
// // //     resetTimeout();
// // //     setCurrentIndex(index);
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
// // //       <div className="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-lg">
// // //         {/* Images Container */}
// // //         <div
// // //           className="flex transition-transform duration-700 ease-in-out"
// // //           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
// // //         >
// // //           {images.map((img, i) => (
// // //             <img
// // //               key={i}
// // //               src={img}
// // //               alt={`Slide ${i + 1}`}
// // //               className="w-full flex-shrink-0 object-cover h-64 md:h-96"
// // //               loading="lazy"
// // //               draggable={false}
// // //             />
// // //           ))}
// // //         </div>

// // //         {/* Left Arrow */}
// // //         <button
// // //           onClick={prevSlide}
// // //           className="absolute top-1/2 left-3 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow"
// // //           aria-label="Previous Slide"
// // //         >
// // //           ‹
// // //         </button>

// // //         {/* Right Arrow */}
// // //         <button
// // //           onClick={nextSlide}
// // //           className="absolute top-1/2 right-3 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow"
// // //           aria-label="Next Slide"
// // //         >
// // //           ›
// // //         </button>

// // //         {/* Dots */}
// // //         <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3">
// // //           {images.map((_, idx) => (
// // //             <button
// // //               key={idx}
// // //               onClick={() => goToSlide(idx)}
// // //               className={`w-3 h-3 rounded-full transition-colors ${
// // //                 currentIndex === idx ? "bg-blue-600" : "bg-gray-300"
// // //               }`}
// // //               aria-label={`Go to slide ${idx + 1}`}
// // //             />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React, { useState, useEffect, useRef } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const images = [
// //   "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
// //   "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
// //   "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
// //   "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&w=800&q=80",
// // ];

// // export default function App() {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [hovering, setHovering] = useState(false);
// //   const timeoutRef = useRef(null);
// //   const delay = 4000;

// //   // Reset autoplay timer
// //   const resetTimeout = () => {
// //     if (timeoutRef.current) clearTimeout(timeoutRef.current);
// //   };

// //   useEffect(() => {
// //     if (!hovering) {
// //       resetTimeout();
// //       timeoutRef.current = setTimeout(() => {
// //         setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
// //       }, delay);
// //     }
// //     return () => resetTimeout();
// //   }, [currentIndex, hovering]);

// //   const prevSlide = () => {
// //     resetTimeout();
// //     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// //   };

// //   const nextSlide = () => {
// //     resetTimeout();
// //     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
// //   };

// //   const goToSlide = (index) => {
// //     resetTimeout();
// //     setCurrentIndex(index);
// //   };

// //   // Motion variants for sliding
// //   const variants = {
// //     enter: (direction) => ({
// //       x: direction > 0 ? 300 : -300,
// //       opacity: 0,
// //       scale: 0.8,
// //     }),
// //     center: {
// //       x: 0,
// //       opacity: 1,
// //       scale: 1,
// //     },
// //     exit: (direction) => ({
// //       x: direction < 0 ? 300 : -300,
// //       opacity: 0,
// //       scale: 0.8,
// //     }),
// //   };

// //   // Track direction of slide (1 = next, -1 = prev)
// //   const [direction, setDirection] = useState(1);

// //   const paginate = (newDirection) => {
// //     setDirection(newDirection);
// //     setCurrentIndex((prev) => {
// //       let nextIndex = prev + newDirection;
// //       if (nextIndex < 0) return images.length - 1;
// //       if (nextIndex >= images.length) return 0;
// //       return nextIndex;
// //     });
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
// //       <div
// //         className="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-lg"
// //         onMouseEnter={() => setHovering(true)}
// //         onMouseLeave={() => setHovering(false)}
// //       >
// //         <AnimatePresence
// //           custom={direction}
// //           initial={false}
// //           mode="wait"
// //         >
// //           <motion.img
// //             key={currentIndex}
// //             src={images[currentIndex]}
// //             alt={`Slide ${currentIndex + 1}`}
// //             custom={direction}
// //             variants={variants}
// //             initial="enter"
// //             animate="center"
// //             exit="exit"
// //             transition={{
// //               x: { type: "spring", stiffness: 300, damping: 30 },
// //               opacity: { duration: 0.4 },
// //               scale: { duration: 0.4 },
// //             }}
// //             className="w-full h-64 md:h-96 object-cover select-none cursor-pointer"
// //             draggable={false}
// //             whileHover={{ scale: 1.05 }}
// //           />
// //         </AnimatePresence>

// //         {/* Left Arrow */}
// //         <button
// //           onClick={() => paginate(-1)}
// //           className="absolute top-1/2 left-3 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-3 shadow z-10"
// //           aria-label="Previous Slide"
// //         >
// //           ‹
// //         </button>

// //         {/* Right Arrow */}
// //         <button
// //           onClick={() => paginate(1)}
// //           className="absolute top-1/2 right-3 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-3 shadow z-10"
// //           aria-label="Next Slide"
// //         >
// //           ›
// //         </button>

// //         {/* Dots */}
// //         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-10">
// //           {images.map((_, idx) => (
// //             <button
// //               key={idx}
// //               onClick={() => goToSlide(idx)}
// //               className={`w-4 h-4 rounded-full transition-colors ${
// //                 currentIndex === idx ? "bg-blue-600" : "bg-gray-300"
// //               }`}
// //               aria-label={`Go to slide ${idx + 1}`}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//   {
//     image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
//     title: "Music Festival",
//     subtitle: "Feel the rhythm",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
//     title: "Tech Conference",
//     subtitle: "Innovate and Inspire",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
//     title: "Startup Meetup",
//     subtitle: "Network & Grow",
//   },
// ];

// export default function App() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [hovering, setHovering] = useState(false);
//   const timeoutRef = useRef(null);
//   const delay = 5000;

//   const resetTimeout = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   };

//   useEffect(() => {
//     if (!hovering) {
//       resetTimeout();
//       timeoutRef.current = setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % slides.length);
//       }, delay);
//     }
//     return () => resetTimeout();
//   }, [currentIndex, hovering]);

//   const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div
//         className="relative w-full max-w-4xl h-96 rounded-xl overflow-hidden shadow-lg"
//         onMouseEnter={() => setHovering(true)}
//         onMouseLeave={() => setHovering(false)}
//       >
//         <AnimatePresence initial={false}>
//           {slides.map((slide, index) =>
//             index === currentIndex ? (
//               <motion.div
//                 key={index}
//                 className="absolute inset-0"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 {/* Image with hover parallax */}
//                 <motion.img
//                   src={slide.image}
//                   alt={slide.title}
//                   className="w-full h-full object-cover select-none"
//                   whileHover={{ scale: 1.05, rotate: 1 }}
//                   transition={{ type: "spring", stiffness: 100 }}
//                   draggable={false}
//                 />

//                 {/* Caption overlay */}
//                 <motion.div
//                   className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full"
//                   initial={{ y: 50, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: 50, opacity: 0 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   <h2 className="text-3xl font-bold text-white">
//                     {slide.title}
//                   </h2>
//                   <p className="text-white opacity-80">{slide.subtitle}</p>
//                 </motion.div>
//               </motion.div>
//             ) : null
//           )}
//         </AnimatePresence>

//         {/* Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute top-1/2 left-3 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-3 shadow z-10"
//         >
//           ‹
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-3 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-3 shadow z-10"
//         >
//           ›
//         </button>

//         {/* Dots */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-10">
//           {slides.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentIndex(idx)}
//               className={`w-4 h-4 rounded-full transition-colors ${
//                 idx === currentIndex ? "bg-blue-600" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Progress bar */}
//         <motion.div
//           className="absolute bottom-0 left-0 h-1 bg-blue-500"
//           key={currentIndex}
//           initial={{ width: 0 }}
//           animate={{ width: "100%" }}
//           transition={{ duration: delay / 1000, ease: "linear" }}
//         />
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Summer Music Fest 2026",
    subtitle: "Experience live music under the stars",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    title: "Innovation Tech Summit",
    subtitle: "Discover the future of technology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    title: "Startup Networking Meetup",
    subtitle: "Connect with entrepreneurs and investors",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    title: "Creative Photography Workshop",
    subtitle: "Capture the world through your lens",
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const timeoutRef = useRef(null);
  const delay = 5000;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (!hovering) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, delay);
    }
    return () => resetTimeout();
  }, [currentIndex, hovering]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div
        className="relative w-full max-w-4xl h-96 rounded-xl overflow-hidden shadow-lg"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <AnimatePresence initial={false}>
          {slides.map((slide, index) =>
            index === currentIndex ? (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Image with hover effect */}
                <motion.img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover select-none"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  draggable={false}
                />

                {/* Caption overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
                  <p className="text-white opacity-80">{slide.subtitle}</p>
                </motion.div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-3 shadow z-10"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-3 shadow z-10"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-4 h-4 rounded-full transition-colors ${
                idx === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-blue-500"
          key={currentIndex}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: delay / 1000, ease: "linear" }}
        />
      </div>
    </div>
  );
}