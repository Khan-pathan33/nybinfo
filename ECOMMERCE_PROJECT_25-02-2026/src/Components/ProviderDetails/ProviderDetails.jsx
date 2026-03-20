// import React, { useState } from "react";

// function ProviderDetail() {

//   const provider = {
//     name: "Rahul Events",
//     rating: 4.8,
//     location: "Hyderabad",
//     description: "Professional event planner specializing in weddings and corporate events.",
//     contact: "9876543210",
//     portfolio: [
//       "https://picsum.photos/300/200?1",
//       "https://picsum.photos/300/200?2",
//       "https://picsum.photos/300/200?3",
//       "https://picsum.photos/300/200?4"
//     ],
//     services: [
//       { name: "Wedding Planning", price: 50000 },
//       { name: "Corporate Event Setup", price: 30000 },
//       { name: "Birthday Decoration", price: 15000 }
//     ],
//     reviews: [
//       { user: "Priya", rating: 5, comment: "Amazing decoration and service!" },
//       { user: "Arjun", rating: 4, comment: "Very professional team." }
//     ],
//     availability: [
//       { date: "20 July", available: true },
//       { date: "25 July", available: true },
//       { date: "30 July", available: false }
//     ]
//   };

//   const [showContact, setShowContact] = useState(false);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">

//       {/* Provider Header */}
//       <div className="bg-white p-6 rounded shadow mb-6">
//         <h1 className="text-3xl font-bold">{provider.name}</h1>
//         <p className="text-gray-600">⭐ {provider.rating}</p>
//         <p className="text-gray-600">📍 {provider.location}</p>
//         <p className="mt-2">{provider.description}</p>

//         <button
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={() => setShowContact(true)}
//         >
//           Show Contact
//         </button>

//         {showContact && (
//           <p className="mt-2 font-semibold">📞 {provider.contact}</p>
//         )}
//       </div>

//       {/* Portfolio Gallery */}
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {provider.portfolio.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt="portfolio"
//               loading="lazy"
//               className="rounded shadow"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Services */}
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-4">Service Offerings</h2>

//         <div className="bg-white rounded shadow p-4">
//           {provider.services.map((service, index) => (
//             <div key={index} className="flex justify-between border-b py-2">
//               <span>{service.name}</span>
//               <span className="font-semibold">₹ {service.price.toLocaleString("en-IN")}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Reviews */}
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

//         <div className="space-y-3">
//           {provider.reviews.map((review, index) => (
//             <div key={index} className="bg-white p-4 rounded shadow">
//               <p className="font-semibold">{review.user}</p>
//               <p className="text-yellow-500">⭐ {review.rating}</p>
//               <p className="text-gray-600">{review.comment}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Availability */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">Availability</h2>

//         <div className="bg-white p-4 rounded shadow">
//           {provider.availability.map((day, index) => (
//             <div key={index} className="flex justify-between py-2 border-b">
//               <span>{day.date}</span>
//               <span className={day.available ? "text-green-600" : "text-red-500"}>
//                 {day.available ? "Available" : "Booked"}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

// export default ProviderDetail;


import React, { useState } from "react";

function ProviderDetail() {

  const provider = {
    name: "Events",
    rating: 4.8,
    reviewsCount: 128,
    location: "Hyderabad",
    description:
      "Professional event planner specializing in weddings and corporate events.",
    contact: "9999999999",
    image: "https://picsum.photos/100",

    portfolio: [
      "https://picsum.photos/400/250?1",
      "https://picsum.photos/400/250?2",
      "https://picsum.photos/400/250?3",
      "https://picsum.photos/400/250?4"
    ],

    services: [
      { name: "Wedding Planning", price: 50000 },
      { name: "Corporate Event Setup", price: 30000 },
      { name: "Birthday Decoration", price: 15000 }
    ],

    reviews: [
      {
        user: "Priya",
        rating: 5,
        comment: "Amazing decoration and service!",
        date: "2 weeks ago"
      },
      {
        user: "Arjun",
        rating: 4,
        comment: "Very professional team.",
        date: "1 month ago"
      }
    ],

    availability: [
      { date: "20 July", available: true },
      { date: "25 July", available: true },
      { date: "30 July", available: false }
    ]
  };

  const [showContact, setShowContact] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Provider Header */}
      <div className="bg-white p-6 rounded shadow mb-6 flex items-center gap-4">

        <img
          src={provider.image}
          alt="provider"
          className="w-20 h-20 rounded-full object-cover"
        />

        <div className="flex-1">

          <h1 className="text-3xl font-bold">{provider.name}</h1>

          {/* Star Rating */}
          <div className="flex items-center gap-2 text-yellow-500">
            {"★".repeat(Math.floor(provider.rating))}
            {"☆".repeat(5 - Math.floor(provider.rating))}
            <span className="text-gray-600 text-sm">
              ({provider.reviewsCount} reviews)
            </span>
          </div>

          <p className="text-gray-600">📍 {provider.location}</p>

          <p className="mt-1 text-gray-700">{provider.description}</p>

          <div className="mt-3 flex gap-3">

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowContact(true)}
            >
              Show Contact
            </button>

            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Book Service
            </button>

            <button
              onClick={() => setFavorite(!favorite)}
              className="text-2xl"
            >
              {favorite ? "❤️" : "🤍"}
            </button>

          </div>

          {showContact && (
            <p className="mt-2 font-semibold">📞 {provider.contact}</p>
          )}

        </div>
      </div>

      {/* Portfolio */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {provider.portfolio.map((img, index) => (

            <img
              key={index}
              src={img}
              alt="portfolio"
              loading="lazy"
              onClick={() => setSelectedImage(img)}
              className="rounded shadow hover:scale-105 transition duration-300 cursor-pointer"
            />

          ))}

        </div>
      </div>

      {/* Portfolio Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            className="max-h-[80%] rounded shadow-lg"
          />
        </div>
      )}

      {/* Services */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Service Offerings</h2>

        <div className="bg-white rounded shadow p-4">

          {provider.services.map((service, index) => (

            <div
              key={index}
              className="flex justify-between items-center border-b py-3"
            >

              <span>{service.name}</span>

              <div className="flex items-center gap-3">

                <span className="font-semibold">
                  ₹ {service.price.toLocaleString("en-IN")}
                </span>

                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                  Book
                </button>

              </div>

            </div>

          ))}

        </div>
      </div>

      {/* Reviews */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

        <div className="space-y-3">

          {provider.reviews.map((review, index) => (

            <div key={index} className="bg-white p-4 rounded shadow">

              <div className="flex justify-between">
                <p className="font-semibold">{review.user}</p>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>

              <p className="text-yellow-500">⭐ {review.rating}</p>

              <p className="text-gray-600">{review.comment}</p>

            </div>

          ))}

        </div>
      </div>

      {/* Availability */}
      <div>

        <h2 className="text-2xl font-semibold mb-4">Availability</h2>

        <div className="bg-white p-4 rounded shadow">

          {provider.availability.map((day, index) => (

            <div
              key={index}
              className="flex justify-between items-center py-3 border-b"
            >

              <span>{day.date}</span>

              {day.available ? (

                <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                  Available
                </button>

              ) : (

                <span className="text-red-500">Booked</span>

              )}

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default ProviderDetail;