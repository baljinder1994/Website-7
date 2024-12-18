import React from 'react'

const About = () => {
  return (
    <section id="about" className='bg-black text-white py-20'>
        <div className='container mx-auto px-6'>
            <div className='text-center mb-12'>
                <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>About Us & Trust</h2>
                <p className='text-lg text-gray-300'> Our mission is to provide innovative solutions that simplify your workflow and help you achieve your goals faster.
                </p>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center mb-12'>
                <div className='text-center md:text-left md:w-1/2'>
                    <h3 className='text-3xl font-semibold mb-4'>Our Vision</h3>
                    <p className='text-lg text-gray-300 mb-6'>We aim to revolutionize the way teams collaborate, making productivity and success easier for everyone.
                    </p>
                </div>

                <div className='md:w-1/2 text-center'>
                    <h3 className='text-3xl font-semibold mb-4'>Trusted by Leading Companies</h3>
                    <div className='flex justify-center space-x-8'>
                        <img src="lg1.png" className='h-10'></img>
                        <img src="lg2.png" className='h-10'></img>
                        <img src="lg1.png" className='h-10'></img>
                       
                    </div>
                </div>
            </div>

            <div className='text-center'>
                <h3 className='text-3xl font-semibold mb-4'>Awards & Certifications</h3>
                <div className='flex justify-center space-x-8'>
                    <img src="lg1.png" className='h-20'></img>
                    <img src="lg2.png" className='h-20'></img>
                    <img src="lg1.png" className='h-20'></img>
                 </div>
                
            </div>
        </div>
    </section>
  )
}

export default About
