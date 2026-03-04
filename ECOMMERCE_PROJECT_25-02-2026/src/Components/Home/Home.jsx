// import React, { useEffect, useState } from 'react'
// import Navbar from '../Navbar/Navbar'
// import Banner from '../Banner/Banner'
// import Product from '../Products/Product'
// import Cart from '../Cart/Cart'
// import Wishlist from '../Wishlist/Wishlist'
// import OrderSummary from '../OrderSummary/OrderSummary'
// import OrderPlace from '../OrderPlace/OrderPlace'


// const Home = () => {

//   const [searchTerm, setSearchTerm] = useState('')
//    const [isScrolled, setIsScrolled] = useState(false)

//   //  for clicked on wishlist and cart

//   const [activePanel, setActivePanel] = useState(null)
//   //checkout clicked then the order summary will be showned 
//   const [orderSummary, setOrderSummary] = useState(false)
//   const [orderPlaced, setOrderPlaced] = useState(false)

//   //for add to cart click on wishlist and cart  using json.parse can convert arrays and objects into string  
//   const [cart, setCart] = useState(()=>{
//     const storeCart = localStorage.getItem('cart')
//     return storeCart ? JSON.parse(storeCart) : []
//   });

//   //wishlist add
//   const [wishlist, setWishlist] = useState(()=>{
//     const storeWishlist = localStorage.getItem('wishlist')
//     return storeWishlist ? JSON.parse(storeWishlist): []
//   }
// )
//   // Total Calculations   acc means accumulator 
//   const subtotal =cart.reduce((acc, item)=> acc + item.price * item.quantity, 0)
//   const totalItems=cart.reduce((acc, item)=> acc+ item.quantity, 0)
//   const shippingFee = totalItems * 2;
//   const orderTotal = subtotal + shippingFee
      
//       useEffect(()=>{
       
//         const changeNavbar = ()=>{
//           setIsScrolled(window.scrollY > 10)
//         }

//         window.addEventListener('scroll', changeNavbar);
//       },[])
// // save items to localstorage if we store as an array or object it doesnt store it store as an [object, object] by using json stringify we can store the cart
//       useEffect(()=>{
//         localStorage.setItem('cart', JSON.stringify(cart))
//         localStorage.setItem('wishlist', JSON.stringify(wishlist))

//       },[cart, wishlist])

//       // handle scroll 

//   const handleScroll = () =>{
//     const section = document.getElementById('product-section')

//     if(section){
//       section.scrollIntoView({behavior: 'smooth'})
//     }
//   }

//   //cart and wishlist tab function
//   const handlePanel =(tabName)=>{

//     setActivePanel(prev=>(
//       prev === tabName ? null : tabName
//     ))
//   }

//   //close panel function
//   const handleClose =()=>setActivePanel(null)

//   //remove item
//   const removeItem=(product)=>{
//     setCart(cart.filter(item=>item.id !== product.id))
//   }

//   //Quantity increment
//   const quantityIncrement=(product)=>{
//     setCart(cart.map(item=>
//       item.id === product.id ? {...item, quantity : item.quantity +1} : item
//     ))
//   }

//   //Quantity decrement
//   const quantityDecrement=(product)=>{
//     setCart(cart.map(item=>
//       item.id === product.id && item.quantity > 1 ? {...item, quantity : item.quantity - 1} : item
//     ))
//   }

//   //add to cart function
//   const addToCart=(product)=>{
//     const alreadyAdded= cart.find(item=>item.id === product.id)
//     if(alreadyAdded){
//       alert("item is already in the cart")
//       return;
//     }
// //whatever item is added to cart starting point in quantity initially added in cart is 1
// setCart([...cart,{ ...product, quantity: 1}])
//   }

//   // wishlist function
//   const addToWishlist =(product) =>{
// // some is an array method some also checks but returns something else not filter(returns array with multiple items ) but some return boolean true or false 
//     const isWishlist = wishlist.some(item => item.id === product.id)

//     if(isWishlist){
//       setWishlist(wishlist.filter(item =>item.id !== product.id))
//     }
//     else{
//       const addDate = new Date().toLocaleString('en-GB')
//     setWishlist([...wishlist, {...product, addDate}])
//     }  
//   }

//   // clear wishlist
//   const clearWishlist =()=>{
//     setWishlist([])
//   }

//   return (
//     <div>
//       {/* navbar */}
//         <Navbar handleScroll={handleScroll} setSearchTerm={setSearchTerm}
//          isScrolled={isScrolled} handlePanel={handlePanel}
//          totalItems={totalItems} 
//          wishlist={wishlist}/>
//         {/* banner */}
//         <Banner />

//         {/* product */}
//         <Product searchTerm={searchTerm} addToCart={addToCart}
//         addToWishlist={addToWishlist}
//         wishlist ={wishlist}
//          />

//         {/* cart tab */}
//         <Cart activePanel={activePanel} handleClose={handleClose} cart={cart} removeItem={removeItem}
//          quantityIncrement={quantityIncrement} 
//         quantityDecrement={quantityDecrement}
//         subtotal ={subtotal}
//         shippingFee={shippingFee}
//         orderTotal={orderTotal}
//         setOrderSummary={setOrderSummary} />

//         {/* wishlist tab */}
//         <Wishlist activePanel={activePanel} handleClose={handleClose}
//         wishlist={wishlist} 
//         addToCart={addToCart}
//         clearWishlist ={clearWishlist}/>
       

//       {
//         orderSummary && 
//           <OrderSummary 
//         cart={cart}
//         subtotal={subtotal}
//         shippingFee={shippingFee} 
//         orderTotal={orderTotal}
//          setOrderPlaced= {setOrderPlaced}
//          setOrderSummary={setOrderSummary}
//          setCart={setCart} />
       
//       }

//       {/* order placed */}
//         {
//           orderPlaced &&
//           <OrderPlace
//           setOrderPlaced={setOrderPlaced} />
//         }
//     </div>
//   )
// }

// export default Home



// import React, { useEffect, useState } from 'react'
// import Navbar from '../Navbar/Navbar'
// import Banner from '../Banner/Banner'
// import Product from '../Products/Product'
// import Cart from '../Cart/Cart'
// import Wishlist from '../Wishlist/Wishlist'
// import OrderSummary from '../OrderSummary/OrderSummary'
// import OrderPlace from '../OrderPlace/OrderPlace'


// const Home = () => {

//   const [searchTerm, setSearchTerm] = useState('')
//    const [isScrolled, setIsScrolled] = useState(false)

//   //  for clicked on wishlist and cart

//   const [activePanel, setActivePanel] = useState(null)
//   //checkout clicked then the order summary will be showned 
//   const [orderSummary, setOrderSummary] = useState(false)
//   const [orderPlaced, setOrderPlaced] = useState(false)

//   //for add to cart click on wishlist and cart  using json.parse can convert arrays and objects into string  
//   const [cart, setCart] = useState(()=>{
//     const storeCart = localStorage.getItem('cart')
//     return storeCart ? JSON.parse(storeCart) : []
//   });

//   //wishlist add
//   const [wishlist, setWishlist] = useState(()=>{
//     const storeWishlist = localStorage.getItem('wishlist')
//     return storeWishlist ? JSON.parse(storeWishlist): []
//   }
// )
//   // Total Calculations   acc means accumulator 
//   const subtotal =cart.reduce((acc, item)=> acc + item.price * item.quantity, 0)
//   const totalItems=cart.reduce((acc, item)=> acc+ item.quantity, 0)
//   const shippingFee = totalItems * 2;
//   const orderTotal = subtotal + shippingFee
      
//       useEffect(()=>{
       
//         const changeNavbar = ()=>{
//           setIsScrolled(window.scrollY > 10)
//         }

//         window.addEventListener('scroll', changeNavbar);
//       },[])
// // save items to localstorage if we store as an array or object it doesnt store it store as an [object, object] by using json stringify we can store the cart
//       useEffect(()=>{
//         localStorage.setItem('cart', JSON.stringify(cart))
//         localStorage.setItem('wishlist', JSON.stringify(wishlist))

//       },[cart, wishlist])

//       // handle scroll 

//   const handleScroll = () =>{
//     const section = document.getElementById('product-section')

//     if(section){
//       section.scrollIntoView({behavior: 'smooth'})
//     }
//   }

//   //cart and wishlist tab function
//   const handlePanel =(tabName)=>{

//     setActivePanel(prev=>(
//       prev === tabName ? null : tabName
//     ))
//   }

//   //close panel function
//   const handleClose =()=>setActivePanel(null)

//   //remove item
//   const removeItem=(product)=>{
//     setCart(cart.filter(item=>item.id !== product.id))
//   }

//   //Quantity increment
//   const quantityIncrement=(product)=>{
//     setCart(cart.map(item=>
//       item.id === product.id ? {...item, quantity : item.quantity +1} : item
//     ))
//   }

//   //Quantity decrement
//   const quantityDecrement=(product)=>{
//     setCart(cart.map(item=>
//       item.id === product.id && item.quantity > 1 ? {...item, quantity : item.quantity - 1} : item
//     ))
//   }

//   //add to cart function
//   const addToCart=(product)=>{
//     const alreadyAdded= cart.find(item=>item.id === product.id)
//     if(alreadyAdded){
//       alert("item is already in the cart")
//       return;
//     }
// //whatever item is added to cart starting point in quantity initially added in cart is 1
// setCart([...cart,{ ...product, quantity: 1}])
//   }

//   // wishlist function
//   const addToWishlist =(product) =>{
// // some is an array method some also checks but returns something else not filter(returns array with multiple items ) but some return boolean true or false 
//     const isWishlist = wishlist.some(item => item.id === product.id)

//     if(isWishlist){
//       setWishlist(wishlist.filter(item =>item.id !== product.id))
//     }
//     else{
//       const addDate = new Date().toLocaleString('en-GB')
//     setWishlist([...wishlist, {...product, addDate}])
//     }  
//   }

//   // clear wishlist
//   const clearWishlist =()=>{
//     setWishlist([])
//   }

//   return (
//     <div>
//       {/* navbar */}
//         <Navbar handleScroll={handleScroll} setSearchTerm={setSearchTerm}
//          isScrolled={isScrolled} handlePanel={handlePanel}
//          totalItems={totalItems} 
//          wishlist={wishlist}/>
//         {/* banner */}
//         <Banner />

//         {/* product */}
//         <Product searchTerm={searchTerm} addToCart={addToCart}
//         addToWishlist={addToWishlist}
//         wishlist ={wishlist}
//          />

//         {/* cart tab */}
//         <Cart activePanel={activePanel} handleClose={handleClose} cart={cart} removeItem={removeItem}
//          quantityIncrement={quantityIncrement} 
//         quantityDecrement={quantityDecrement}
//         subtotal ={subtotal}
//         shippingFee={shippingFee}
//         orderTotal={orderTotal}
//         setOrderSummary={setOrderSummary} />

//         {/* wishlist tab */}
//         <Wishlist activePanel={activePanel} handleClose={handleClose}
//         wishlist={wishlist} 
//         addToCart={addToCart}
//         clearWishlist ={clearWishlist}/>
       

//       {
//         orderSummary && 
//           <OrderSummary 
//         cart={cart}
//         subtotal={subtotal}
//         shippingFee={shippingFee} 
//         orderTotal={orderTotal}
//          setOrderPlaced= {setOrderPlaced}
//          setOrderSummary={setOrderSummary}
//          setCart={setCart} />
       
//       }

//       {/* order placed */}
//         {
//           orderPlaced &&
//           <OrderPlace
//           setOrderPlaced={setOrderPlaced} />
//         }
//     </div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'  // ✅ for navigation
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Product from '../Products/Product'
import Cart from '../Cart/Cart'
import Wishlist from '../Wishlist/Wishlist'
import OrderSummary from '../OrderSummary/OrderSummary'
import OrderPlace from '../OrderPlace/OrderPlace'
import LandingPage from '../LandingPage/LandingPage'

const Home = () => {
  const navigate = useNavigate()

  // 🔹 Login check
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === "true"
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [navigate])

  const [searchTerm, setSearchTerm] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [activePanel, setActivePanel] = useState(null)
  const [orderSummary, setOrderSummary] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const [cart, setCart] = useState(() => {
    const storeCart = localStorage.getItem('cart')
    return storeCart ? JSON.parse(storeCart) : []
  })

  const [wishlist, setWishlist] = useState(() => {
    const storeWishlist = localStorage.getItem('wishlist')
    return storeWishlist ? JSON.parse(storeWishlist) : []
  })

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
  const shippingFee = totalItems * 2
  const orderTotal = subtotal + shippingFee

  useEffect(() => {
    const changeNavbar = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', changeNavbar)
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [cart, wishlist])

  const handleScroll = () => {
    const section = document.getElementById('product-section')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  const handlePanel = (tabName) => setActivePanel(prev => (prev === tabName ? null : tabName))
  const handleClose = () => setActivePanel(null)
  const removeItem = (product) => setCart(cart.filter(item => item.id !== product.id))
  const quantityIncrement = (product) => setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
  const quantityDecrement = (product) => setCart(cart.map(item => item.id === product.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item))
  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) return alert("item is already in the cart")
    setCart([...cart, { ...product, quantity: 1 }])
  }
  const addToWishlist = (product) => {
    if (wishlist.some(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id))
    } else {
      const addDate = new Date().toLocaleString('en-GB')
      setWishlist([...wishlist, { ...product, addDate }])
    }
  }
  const clearWishlist = () => setWishlist([])

  return (
    <div>
      <Navbar handleScroll={handleScroll} setSearchTerm={setSearchTerm} isScrolled={isScrolled} handlePanel={handlePanel} totalItems={totalItems} wishlist={wishlist} />
      <Banner />
      <Product searchTerm={searchTerm} addToCart={addToCart} addToWishlist={addToWishlist} wishlist={wishlist} />
      <Cart activePanel={activePanel} handleClose={handleClose} cart={cart} removeItem={removeItem} quantityIncrement={quantityIncrement} quantityDecrement={quantityDecrement} subtotal={subtotal} shippingFee={shippingFee} orderTotal={orderTotal} setOrderSummary={setOrderSummary} />
      <Wishlist activePanel={activePanel} handleClose={handleClose} wishlist={wishlist} addToCart={addToCart} clearWishlist={clearWishlist} />
      {orderSummary && <OrderSummary cart={cart} subtotal={subtotal} shippingFee={shippingFee} orderTotal={orderTotal} setOrderPlaced={setOrderPlaced} setOrderSummary={setOrderSummary} setCart={setCart} />}
      {orderPlaced && <OrderPlace setOrderPlaced={setOrderPlaced} />}
      <LandingPage />
    </div>
  )
}

export default Home