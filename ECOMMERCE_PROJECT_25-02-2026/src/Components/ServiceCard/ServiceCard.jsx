import React from 'react'

const ServiceCard = ({ service }) => {
  return (
   <div className="border p-4 rounded shadow">

      <h3 className="font-semibold">{service.name}</h3>

      <p>Category: {service.category}</p>

      <p>Price: ₹{service.price}</p>

      <p>Rating: ⭐ {service.rating}</p>

    </div>
  )
}

export default ServiceCard