import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Product from '../Products/Product'
import Cart from '../Cart/Cart'

const Home = () => {

  const [searchTerm, setSearchTerm] = useState('')
   const [isScrolled, setIsScrolled] = useState(false)
      
      useEffect(()=>{
       
        const changeNavbar = ()=>{
          setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', changeNavbar);
      },[])

  const handleScroll = () =>{
    const section = document.getElementById('product-section')

    if(section){
      section.scrollIntoView({behavior: 'smooth'})
    }
  }
  return (
    <div>
        <Navbar handleScroll={handleScroll} setSearchTerm={setSearchTerm} isScrolled={isScrolled} />
        {/* banner */}
        <Banner />
        <Product searchTerm={searchTerm} />
        <Cart />

    </div>
  )
}

export default Home