import React, { useState, useEffect } from "react";

function ServiceListing1() {

  const servicesData = [
    
 { id: 1, title: "Tech Conference", category: "Tech", price: 20000, rating: 4.5, image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg" },
     { id: 2, title: "Wedding Planner", category: "Wedding", price: 50000, rating: 4.8, image: "https://images.pexels.com/photos/712651/pexels-photo-712651.jpeg" },
     { id: 3, title: "Birthday Organizer", category: "Birthday", price: 15000, rating: 4.2, image: "https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg" },
   { id: 4, title: "Corporate Event", category: "Business", price: 30000, rating: 4.6, image: "https://images.pexels.com/photos/7889241/pexels-photo-7889241.jpeg" }
 ];
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("relevance");
  const [view, setView] = useState("grid");
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce search
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(handler);
  }, [search]);

  // Fetch services based on search, category, sort
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let filtered = [...servicesData];

      if (debouncedSearch)
        filtered = filtered.filter(s => s.title.toLowerCase().includes(debouncedSearch.toLowerCase()));

      if (category)
        filtered = filtered.filter(s => s.category === category);

      if (sort === "priceLow")
        filtered.sort((a, b) => a.price - b.price);

      if (sort === "priceHigh")
        filtered.sort((a, b) => b.price - a.price);

      setServices(filtered);
      setLoading(false);
    }, 600);
  }, [debouncedSearch, category, sort]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) setFavorites(favorites.filter(f => f !== id));
    else setFavorites([...favorites, id]);
  };

  return (
    <div className="flex gap-6 p-6">

      {/* Filter Sidebar */}
      <div className="w-60 bg-white p-4 shadow rounded">
        <h2 className="font-bold mb-3">Filters</h2>
        <select className="w-full border p-2 mb-3" onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Tech">Tech</option>
          <option value="Wedding">Wedding</option>
          <option value="Birthday">Birthday</option>
          <option value="Business">Business</option>
        </select>
      </div>

      {/* Main Section */}
      <div className="flex-1">

        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search services..."
          className="w-full p-3 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Sort + View */}
        <div className="flex justify-between my-4">
          <select className="border p-2" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="relevance">Relevance</option>
            <option value="priceLow">Price Low → High</option>
            <option value="priceHigh">Price High → Low</option>
          </select>

          <div className="flex gap-2">
            <button className={`px-3 py-1 border ${view === "grid" ? "bg-blue-500 text-white" : ""}`} onClick={() => setView("grid")}>Grid</button>
            <button className={`px-3 py-1 border ${view === "list" ? "bg-blue-500 text-white" : ""}`} onClick={() => setView("list")}>List</button>
          </div>
        </div>

        {/* Services */}
        {loading ? (
          <div className="grid grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => <div key={i} className="animate-pulse bg-gray-200 h-60 rounded"></div>)}
          </div>
        ) : (
          <div className={view === "grid" ? "grid grid-cols-3 gap-4" : "flex flex-col gap-4"}>
            {services.map(service => (
              <div key={service.id} className="bg-white rounded-lg shadow hover:shadow-xl transition p-4">
                <img src={service.image} alt="" className="h-40 w-full object-cover rounded" />
                <div className="flex justify-between mt-2">
                  <h3 className="font-bold">{service.title}</h3>
                  <button onClick={() => toggleFavorite(service.id)}>
                    {favorites.includes(service.id) ? "❤️" : "🤍"}
                  </button>
                </div>
                <p className="text-gray-500">{service.category}</p>
                <p className="text-yellow-500">⭐ {service.rating}</p>
                <p className="font-semibold">₹ {service.price.toLocaleString("en-IN")}</p>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}

export default ServiceListing1;