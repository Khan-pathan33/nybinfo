import React from 'react'
import Sweater from '../../assets/sweater.png'

const Cart = () => {
  return (
    <div className='flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 bottom-0  z-40 left-auto w-[400px] border-1 border-zinc-300 py-7 '>
      {/* heading */}
      <div className='px-10'>
      <h3 className='text-3xl font-bold text-zinc-800 text-center'>Your Cart</h3>
      </div>

      {/* cart items */}
      <div className='flex-1'>
      <div className='bg-white px-5 py-1 border-y-1 border-zinc-300'>
        {/* cart image */}
        <div className='w-20 h-20 '>
            <img src={Sweater} className='w-full h-full object-contain' />
        </div>

      </div>
      </div>

      {/* cart total */}
<div className='px-10 border-y border-zinc-300'>
  <div className='flex justify-between pt-2'>
    <span className='text-zinc-800 '>
      Subtotal
    </span>
    <span className='text-zinc-800 '>
      $0.00
    </span>
  </div>
  <div className='flex justify-between py-2'>
    <span className='text-zinc-800 '>
      Shipping & Handling
    </span>
    <span className='text-zinc-800 '>
      $0.00
    </span>
  </div>
  <div className='flex justify-between py-2 border-t border-zinc-300'>
    <span className='text-lg text-blue-600 font-bold '>
      Order Total
    </span>
    <span className='text-lg text-blue-600 font-bold '>
      $0.00
    </span>
  </div>
</div>

    {/* buttons */}

<div className='flex gap-x-2 px-10'>
  <button className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700'>
    Close
  </button>
  <button className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700'>
    Checkout
  </button>
</div>
    </div>
  )
}

export default Cart