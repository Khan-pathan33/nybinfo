import React, { useEffect, useState } from 'react'
import FilterSidebar from "../Components/FilterSidebar/FilterSidebar";
import SortOptions from '../Components/SortOptions/SortOptions';
import ViewToggle from '../Components/ViewToggle/ViewToggle';
import ServiceCard from '../Components/ServiceCard/ServiceCard';
import Pagination from '../Components/Pagination/Pagination';
import useDebounce from '../hooks/useDebounce';
import ServiceListing1 from '../Components/ServiceListing1';
import ProviderDetail from '../Components/ProviderDetails/ProviderDetails';
import Text3D from '../Components/3D-Text/Text3D';

const servicesData=[
    {
        id: 1,
        name: 'Wedding Photography',
        category: "Photography",
        price: 5000,
        rating: 4.5
    },
    {
        id: 2,
        name: 'Event Catering',
        category: 'Catering',
        price: 8000,
        rating:4.2
    },
    {
        id: 3,
        name: 'Birthday Decoration',
        category: 'Decoration',
        price: 3000,
        rating: 4.7
    },
    {
        id: 4,
        name: 'Corporate Photography',
        category: 'Decoration',
        price: 6000,
        rating:4.1
    },
    {
        id: 5,
        name: 'Luxury Catering',
        category: 'Catering',
        price: 20000,
        rating: 4.8
    }
]

const ServiceListing = () => {
    const [filters, setFilters] = useState({})
     const [sort, setSort] = useState("")
     const [view, setView] = useState("grid")
     const [page, setPage] = useState(1)
     const [services,setServices] = useState([])
     const [loading, setLoading] = useState(false)

     const debouncedFilters = useDebounce(filters, 400);
    

    const itemsPerPage=3;
    
    useEffect(()=> {
        setLoading(true);
        setTimeout(()=>{

    let filtered = servicesData.filter(service => {
        return(
            (!debouncedFilters.category || service.category === filters.category) &&
            (!debouncedFilters.price || service.price <= filters.price) &&
            (!debouncedFilters.rating || service.rating >= filters.rating)
        );
    })

    if (sort === 'priceLow') filtered.sort((a,b) => a.price - b.price);
    if(sort === 'priceHigh') filtered.sort((a,b) => b.price - a.price)
        if(sort === 'rating') filtered.sort((a,b)=> b.rating - a.rating);
    
    const start = (page - 1) * itemsPerPage;
    setServices(filtered.slice(start,start+itemsPerPage))
    // const services = filtered.slice(start, start + itemsPerPage);

    // const totalPages = Math.ceil(filtered.length/ itemsPerPage)
  setLoading(false)
},800);
    },[debouncedFilters,sort,page]);
  return (
    <div className='flex p-6 gap-6'>
        <FilterSidebar setFilters={setFilters}/>
        <div className='flex-1'>
            <div className='flex justify-between mb-4'>
                <SortOptions setSort={setSort} />
                <ViewToggle setView={setView} />
                
            </div>
            <div className={view=== 'grid' ? 'grid grid-cols-3 gap-4': "flex flex-col gap-4"}>
                {services.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}

            </div>
              <Pagination
          page={page}
          setPage={setPage}
        //   totalPages={totalPages}
        />

        <ServiceListing1 />
        <ProviderDetail />
        </div>
         
    </div>
  )
}

export default ServiceListing