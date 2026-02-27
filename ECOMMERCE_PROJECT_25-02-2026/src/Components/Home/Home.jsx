import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Product from '../Products/Product'
import Cart from '../Cart/Cart'
import Wishlist from '../Wishlist/Wishlist'
import OrderSummary from '../OrderSummary/OrderSummary'

const Home = () => {

  const [searchTerm, setSearchTerm] = useState('')
   const [isScrolled, setIsScrolled] = useState(false)

  //  for clicked on wishlist and cart

  const [activePanel, setActivePanel] = useState(null)

  //for add to cart click on wishlist and cart
  const [cart, setCart] = useState([]);

  // Total Calculations   acc means accumulator 
  const subtotal =cart.reduce((acc, item)=> acc + item.price * item.quantity, 0)
  const totalItems=cart.reduce((acc, item)=> acc+ item.quantity, 0)
  const shippingFee = totalItems * 2;
  const orderTotal = subtotal + shippingFee
      
      useEffect(()=>{
       
        const changeNavbar = ()=>{
          setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', changeNavbar);
      },[])

      // handle scroll 

  const handleScroll = () =>{
    const section = document.getElementById('product-section')

    if(section){
      section.scrollIntoView({behavior: 'smooth'})
    }
  }

  //cart and wishlist tab function
  const handlePanel =(tabName)=>{

    setActivePanel(prev=>(
      prev === tabName ? null : tabName
    ))
  }

  //close panel function
  const handleClose =()=>setActivePanel(null)

  //remove item
  const removeItem=(product)=>{
    setCart(cart.filter(item=>item.id !== product.id))
  }

  //Quantity increment
  const quantityIncrement=(product)=>{
    setCart(cart.map(item=>
      item.id === product.id ? {...item, quantity : item.quantity +1} : item
    ))
  }

  //Quantity decrement
  const quantityDecrement=(product)=>{
    setCart(cart.map(item=>
      item.id === product.id && item.quantity > 1 ? {...item, quantity : item.quantity - 1} : item
    ))
  }

  //add to cart function
  const addToCart=(product)=>{
    const alreadyAdded= cart.find(item=>item.id === product.id)
    if(alreadyAdded){
      alert("item is already in the cart")
      return;
    }
//whatever item is added to cart starting point in quantity initially added in cart is 1
setCart([...cart,{ ...product, quantity: 1}])
  }
  return (
    <div>
      {/* navbar */}
        <Navbar handleScroll={handleScroll} setSearchTerm={setSearchTerm}
         isScrolled={isScrolled} handlePanel={handlePanel}
         totalItems={totalItems} />
        {/* banner */}
        <Banner />

        {/* product */}
        <Product searchTerm={searchTerm} addToCart={addToCart} />

        {/* cart tab */}
        <Cart activePanel={activePanel} handleClose={handleClose} cart={cart} removeItem={removeItem}
         quantityIncrement={quantityIncrement} 
        quantityDecrement={quantityDecrement}
        subtotal ={subtotal}
        shippingFee={shippingFee}
        orderTotal={orderTotal} />

        {/* wishlist tab */}
        <Wishlist activePanel={activePanel} handleClose={handleClose} />
        {/* ordersummary */}

        {/* <OrderSummary /> */}
    </div>
  )
}

export default Home