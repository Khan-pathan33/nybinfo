// // import { Star } from "lucide-react";

// // const FeaturedServiceProviderCard = ({
// //   name,
// //   service,
// //   rating,
// //   reviews,
// //   price,
// //   avatar,
// //   banner,
// //   location,
// //   tags = [],
// //   verified = false,
// // }) => {
// //   return (
// //     <div className="group max-w-sm bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">

// //       {/* Banner */}
// //       <div className="relative">
// //         <img
// //           src={banner}
// //           alt="banner"
// //           className="w-full h-32 object-cover group-hover:scale-105 transition duration-300"
// //         />

// //         {/* Avatar */}
// //         <div className="absolute -bottom-8 left-5">
// //           <img
// //             src={avatar}
// //             alt={name}
// //             className="w-16 h-16 rounded-full border-4 border-white object-cover"
// //           />
// //         </div>
// //       </div>

// //       {/* Content */}
// //       <div className="pt-10 p-5">

// //         {/* Name */}
// //         <div className="flex items-center gap-2">
// //           <h3 className="text-lg font-semibold text-gray-800">
// //             {name}
// //           </h3>

// //           {verified && (
// //             <span className="text-blue-500 text-sm">✔</span>
// //           )}
// //         </div>

// //         <p className="text-sm text-gray-500">{service}</p>

// //         {/* Rating */}
// //         <div className="flex items-center mt-2 text-yellow-500 text-sm">
// //           <Star size={16} fill="currentColor" />
// //           <span className="ml-1">{rating}</span>
// //           <span className="text-gray-400 ml-1">({reviews})</span>
// //         </div>

// //         {/* Location */}
// //         <p className="text-xs text-gray-400 mt-1">
// //           📍 {location}
// //         </p>

// //         {/* Tags */}
// //         <div className="flex flex-wrap gap-2 mt-3">
// //           {tags.map((tag, index) => (
// //             <span
// //               key={index}
// //               className="text-xs bg-gray-100 px-2 py-1 rounded-md"
// //             >
// //               {tag}
// //             </span>
// //           ))}
// //         </div>

// //         {/* Price + Button */}
// //         <div className="flex items-center justify-between mt-4">

// //           <span className="text-lg font-semibold text-gray-800">
// //             ${price}
// //           </span>

// //           <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
// //             View Profile
// //           </button>

// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default FeaturedServiceProviderCard;

// const FeaturedServiceProviderCard = ({
//   name,
//   service,
//   rating,
//   reviews,
//   image,
//   location,
// }) => {
//   return (
//     <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">
      
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-48 object-cover"
//       />

//       <div className="p-5">

//         <h3 className="text-xl font-semibold text-gray-800">
//           {name}
//         </h3>

//         <p className="text-sm text-gray-500">
//           {service}
//         </p>

//         <div className="flex items-center mt-2 text-yellow-500">
//           ⭐ {rating}
//           <span className="text-gray-500 ml-2 text-sm">
//             ({reviews} reviews)
//           </span>
//         </div>

//         <p className="text-sm text-gray-400 mt-1">
//           📍 {location}
//         </p>

//         <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//           View Profile
//         </button>

//       </div>
//     </div>
//   );
// };

// export default FeaturedServiceProviderCard;
import React from 'react'

const design = () => {
  return (
    <div className="w-[440px] h-[265px] bg-white rounded-xl shadow-lg border border-border overflow-hidden flex flex-col relative group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
            {/* Image Placeholder */}
            <div className="flex-1 bg-gray-200 w-full">
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop" alt="Event" className="w-full h-full object-cover" />
            </div>

            {/* Tags Overlay */}
            <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/90 px-3 py-1 rounded-full font-poppins text-[14px] text-gray-800 font-medium shadow-sm backdrop-blur-sm">
                    Events
                </span>
                <span className="bg-white/90 px-3 py-1 rounded-full font-poppins text-[14px] text-gray-800 font-medium shadow-sm backdrop-blur-sm">
                    220+ events
                </span>
            </div>

            {/* Content */}
            <div className="p-5 bg-white z-10">
                <h3 className="font-poppins font-medium text-[26px] text-primary-dark leading-tight mb-1">
                    Vibely Events
                </h3>
                <p className="font-poppins font-medium text-[14px] text-muted">
                    Popular for Corporate , Wedding Events
                </p>
            </div>
        </div>
  )
}

export default design