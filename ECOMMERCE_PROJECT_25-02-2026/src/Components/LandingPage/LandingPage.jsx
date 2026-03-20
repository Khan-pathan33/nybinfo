import React from "react";

function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Dynamic Banner Section */}
      <div className="bg-blue-600 text-white text-center p-6">
        <h1 className="text-4xl font-bold">Welcome to Vibley Event Marketplace</h1>
        <p className="mt-2">Discover, plan, and organize your next event with ease!</p>
      </div>

      {/* Service Categories Section */}
      <section className="py-8 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Explore Event Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Conferences', 'Workshops', 'Meetups', 'Webinars'].map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition">
              <h3 className="text-xl font-medium">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Providers Section */}
      <section className="bg-white py-8 px-6">
        <h2 className="text-3xl font-semibold text-center flex justify-center items-center mb-6">Featured Event Organizers</h2>
        <div className="flex overflow-x-auto  space-x-6">
          {['Services', 'TechEvents', 'Wellness Hub', 'Creative Workshops'].map((organizer, index) => (
            <div key={index} className="flex-none w-64 p-4 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-lg font-medium">{organizer}</h3>
              <p className="mt-2 text-gray-600">Leading organizer of high-quality events</p>
            </div>
          ))}
        </div>
      </section>

      {/* Event Types Grid Section */}
      <section className="py-8 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-6">Popular Event Types</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Business Events', 'Tech Events', 'Birthday Parties', 'Wedding'].map((eventType, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium">{eventType}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="bg-white py-8 px-6">
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search services/events by name, location, or category..."
            className="w-full p-4 bg-gray-100 rounded-lg shadow-lg focus:outline-none border border-1 focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </section>

      {/* Empty State or Loading Section */}
      <div className="flex-1 flex items-center justify-center">
        <p className="text-xl text-gray-500">No content available at the moment.</p>
      </div>
    </div>
  );
}

export default LandingPage;