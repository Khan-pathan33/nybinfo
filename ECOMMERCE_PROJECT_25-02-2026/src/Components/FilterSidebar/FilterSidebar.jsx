import React from 'react'
import { FaFilter } from 'react-icons/fa';

function FilterSidebar({ setFilters }) {
    return (
        <div className='w-60 bg-gray-100 p-4 rounded'>
            
            <div className='flex items-center gap-2 mb-4'>
                 <FaFilter className="text-sm" />
            <h2 className='font-bold leading-none'>Filters</h2>
            </div>

            <select 
            className='w-full mb-3 p-2 border' onChange={
                (e)=>
                setFilters(prev => ({...prev, Category: e.target.value}))
            }>
                <option value=''>Category</option>
                <option value='Photography'>Photography</option>
                <option value='Catering'>Catering</option>
                <option value='Decoration'>Decoration</option>
            </select>

            <select className='w-full mb-3 p-2 border'
            onChange={
                (e) => setFilters(prev => ({...prev, price: e.target.value}))
                }>
                <option value=''>Max-Price</option>
                <option value='5000'>5000</option>
                <option value='10000'>10000</option>
            </select>

            <select className='w-full p-2 border'
            onChange={(e)=>
                setFilters(prev => ({...prev, rating: e.target.value}))
            }>
                <option value=''>Rating</option>
                <option value="4">4★ & above</option>
                <option value='3'>3★ & above</option>
            </select>

        </div>
    )
}
 export default FilterSidebar;