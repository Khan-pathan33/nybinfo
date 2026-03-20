import React from 'react'
import { TbArrowsSort } from "react-icons/tb";

const SortOptions = ({ setSort }) => {
  return (
    <div className="flex items-center gap-2">
      <TbArrowsSort className="text-xl" />
      <select
        className='p-2 border'
        onChange={(e) => setSort(e.target.value)}
      >
        <option value=''>Sort</option>
        <option value='priceLow'>Price Low → High</option>
        <option value='priceHigh'>Price High → Low</option>
        <option value='rating'>Rating</option>
      </select>
    </div>
  )
}

export default SortOptions