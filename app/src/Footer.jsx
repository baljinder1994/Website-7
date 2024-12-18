import React from 'react'

const Footer = () => {
  return (
   <footer className='bg-black text-white py-12'>
    <div className='container mx-auto px-6'>
        <div className='grid md:grid-cols-3 gap-12'>
            <div className='flex flex-col gap-4'>
                <h3 className='text-lg font-semibold'>Quick Links</h3>
                <ul className='space-y-2'>
                    <li><a className='hover:text-yellow-500'>Privacy Policy</a></li>
                    <li><a className='hover:text-yellow-500'>Terms of Services</a></li>
                    <li><a className='hover:text-yellow-500'>About Us</a></li>
                    <li><a className='hover:text-yellow-500'>Contact Us</a></li>
                </ul>
            </div>

            <div className='flex flex-col gap-4'>
                <h3 className='text-lg font-semibold'>Follow Us</h3>
                <div className='flex gap-6 text-gray-400'>
                   <a href="https://facebook.com" className='hover:text-yellow-500'>
                     <i className='fab fa-facebook'></i> Facebook
                   </a>
                   <a href="https://facebook.com" className='hover:text-yellow-500'>
                     <i className='fab fa-twitter'></i> Twitter
                   </a>
                   <a href="https://facebook.com" className='hover:text-yellow-500'>
                     <i className='fab fa-instagram'></i> Instagram
                   </a>
                   <a href="https://facebook.com" className='hover:text-yellow-500'>
                     <i className='fab fa-github'></i> Github
                   </a>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <h3 className='text-lg font-semibold'>Contact Us</h3>
                <ul className='space-y-2 text-gray-400'>
                    <li>Email:  <a href="mailto:contact@abc@gmail.com" className='hover:text-yellow-500'>abc@gmail.com</a></li>
                    <li>Phone:  <a href="tel:+1234567890" className='hover:text-yellow-500'>+1 (234) 567-890</a></li>
                    <li>Address:123 Saas Lane, Suiter-100, City,State,1234</li>
                </ul>
            </div>
        </div>

        <div className='text-center mt-12 text-gray-400 text-sm'>
            <p>&copy; 2024 DigiBal. All rights reserved.</p>
        </div>
    </div>
   </footer>
  )
}

export default Footer
