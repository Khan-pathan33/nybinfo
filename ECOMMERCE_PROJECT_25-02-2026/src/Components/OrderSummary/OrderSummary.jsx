// import React from 'react'

// const OrderSummary = ({cart, subtotal, shippingFee, orderTotal, setOrderPlaced, setOrderSummary, setCart }) => {

//     const handlePlaceOrder =() => {
//         setOrderSummary(false)
//         setOrderPlaced(true)
//         setCart([])
//     }
//   return (
//    <section className='flex justify-center items-center bg-black/95 fixed inset-0 z-40'>
//     <div className='bg-zinc-100 p-8 w-[600px] rounded-lg border-1 border-zinc-300 '>
//         <h2 className='text-3xl text-zinc-800 font-bold mb-5 text-center'>Order Summary</h2>

//         <div>
//             <div>
//                 {
//                     cart.map(item=> (
//                         <div key={item.id} className='flex justify-between items-center border-b-1 border-zinc-300'>
//                             <span className='text-zinc-800 py-2'>{item.name}(x{item.quantity})</span>
//                             <span className='text-zinc-800 py-2'>${(item.price * item.quantity).toFixed(2)}</span>
//                         </div>

//                     ))
//                 }
//             </div>

//             <div className='flex justify-between pt-3'> 
//                 <span className='text-zinc-800'>subTotal</span>
//                 <span className='text-zinc-800'>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className='flex justify-between py-3'> 
//                 <span className='text-zinc-800'>Shipping & Handling</span>
//                 <span className='text-zinc-800'>${shippingFee.toFixed(2)}</span>
//             </div>
//             <div className='flex justify-between pt-3 border-t-1 border-zinc-300 mb-5 '> 
//                 <span className='text-blue-600 font-bold text-xl'>Order Total</span>
//                 <span className='text-blue-600 font-bold text-xl'>${orderTotal.toFixed(2)}</span>
//             </div>   
//         </div>
//         <div className='flex mt-10 gap-x-3'>
//             <button className='bg-zinc-800 flex-1 py-3 active:bg-zinc-900 text-white rounded-lg ' onClick={()=>setOrderSummary(false)}>Cancel</button>
//             <button className='bg-blue-800 flex-1 py-3 active:bg-blue-900 text-white rounded-lg ' onClick={handlePlaceOrder}>Place order</button>

//         </div>
       
//     </div>

//    </section>
//   )
// }

// export default OrderSummary


import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const OrderSummary = ({ cart, subtotal, shippingFee, orderTotal, setOrderPlaced, setOrderSummary, setCart }) => {

    const handlePlaceOrder = () => {
        setOrderSummary(false)
        setOrderPlaced(true)
        setCart([])
    }

    // Framer Motion variants for modal
    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.05, type: 'spring', stiffness: 100 }
        })
    }

    return (
        <AnimatePresence>
            <motion.section 
                className='flex justify-center items-center bg-black/95 fixed inset-0 z-40'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div 
                    className='bg-zinc-100 p-8 w-[600px] rounded-lg border-1 border-zinc-300'
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <h2 className='text-3xl text-zinc-800 font-bold mb-5 text-center'>Order Summary</h2>

                    <div>
                        <div>
                            {cart.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    className='flex justify-between items-center border-b-1 border-zinc-300'
                                    custom={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <span className='text-zinc-800 py-2'>{item.name}(x{item.quantity})</span>
                                    <span className='text-zinc-800 py-2'>${(item.price * item.quantity).toFixed(2)}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className='flex justify-between pt-3'> 
                            <span className='text-zinc-800'>subTotal</span>
                            <span className='text-zinc-800'>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className='flex justify-between py-3'> 
                            <span className='text-zinc-800'>Shipping & Handling</span>
                            <span className='text-zinc-800'>${shippingFee.toFixed(2)}</span>
                        </div>
                        <div className='flex justify-between pt-3 border-t-1 border-zinc-300 mb-5'> 
                            <span className='text-blue-600 font-bold text-xl'>Order Total</span>
                            <span className='text-blue-600 font-bold text-xl'>${orderTotal.toFixed(2)}</span>
                        </div>   
                    </div>

                    <div className='flex mt-10 gap-x-3'>
                        <motion.button
                            className='bg-zinc-800 flex-1 py-3 text-white rounded-lg'
                            onClick={() => setOrderSummary(false)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Cancel
                        </motion.button>

                        <motion.button
                            className='bg-blue-800 flex-1 py-3 text-white rounded-lg'
                            onClick={handlePlaceOrder}
                            whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Place order
                        </motion.button>
                    </div>
                </motion.div>
            </motion.section>
        </AnimatePresence>
    )
}

export default OrderSummary