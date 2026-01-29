import React from 'react'

function Header() {
  return (
    <header className='w-full' bg-white shadow-md>
        <nav className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
            {/* logo */}
            <div className='text-2xl font-bold text-indigo-600'>
                ReactHeader
            </div>
            {/* Menu */}
            <ul className='hidden md:flex space-x-8 text-gray-700 font-medium'>
                <li className='hover:text-indigo-600 cursor-pointer'>Home</li>
                <li className='hover:text-indigo-600 cursor-pointer'>About</li>
                 <li className='hover:text-indigo-600 cursor-pointer'>Services</li>
                  <li className='hover:text-indigo-600 cursor-pointer'>Contact</li>
            </ul>
            {/*Button */}
            <button className='hidden md:block bg-indigo-600 text-white px-5 py-2 
            rounded-lg hover:bg-indigo-700 transistion'>Login</button>

            {/* Mobile menu icon */}
            <div className='md:hidden text-2xl cursor-pointer'>
                
            </div>
            
        </nav>
    </header>
  )
}

export default Header


