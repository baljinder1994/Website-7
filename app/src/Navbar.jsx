import React, { useState } from 'react'

const Navbar = () => {
    const[isOpen,setIsOpen]=useState(false)

    const toggleMenu=() =>{
        setIsOpen(!isOpen)
    }
  return (
   <>
     <nav className='bg-black text-white shadow-md '>
        <div className='max-w-7xl mx-auto px-6'>
            <div className='flex items-center justify-between py-5'>
                <div className='text-2xl font-extrabold text-yellow-500'>
                    <a>DigiBal</a>
                </div>

                <div className='hidden md:flex space-x-8'>
                    <a href="#home" className='hover:text-yellow-500'>Home</a>
                    <a href="#about" className='hover:text-yellow-500'>About</a>
                    <a href="#faqs" className='hover:text-yellow-500'>FAQ</a>
                    <a href="#price" className='hover:text-yellow-500'>Price</a>
                    
                </div>

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-yellow-500 '><i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i></button>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className='space-y-4 text-center  py-4'>
                    <a href="#home" className=' block text-white hover:text-yellow-500'>Home</a>
                    <a href="#home" className=' block text-white hover:text-yellow-500'>Home</a>
                    <a href="#home" className=' block text-white hover:text-yellow-500'>Home</a>
                    <a href="#home" className=' block text-white hover:text-yellow-500'>Home</a>
       
                </div>
            </div>

        </div>
     </nav>
   </>
  )
}

export default Navbar
