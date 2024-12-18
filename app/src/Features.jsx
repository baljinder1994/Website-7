import React from 'react'

const Features = () => {
  return (
   <section id="features" className='bg-black text-white  py-20'>
     <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-4'>Why Choose DigiBal</h2>
            <p  className='text-lg text-gray-300'>Unlock the power of simplicity and efficiency with features tailored to solve your challanges.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 mb-6 bg-yellow-400 rounded-full flex items-center justify-center'>
                    <i className='fas fa-cogs text-black'></i>
                </div>
                <h3 className='text-2xl font-semibold text-white mb-2'>Feture 1</h3>
                <p className='text-gray-300'>Streamline your workflow with powerful tools designed for maximum productivity.</p>
            </div>
            <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 mb-6 bg-yellow-400 rounded-full flex items-center justify-center'>
                    <i className='fas fa-chart-line text-black'></i>
                </div>
                <h3 className='text-2xl font-semibold text-white mb-2'>Feture 1</h3>
                <p className='text-gray-300'>Streamline your workflow with powerful tools designed for maximum productivity.</p>
            </div>
            <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 mb-6 bg-yellow-400 rounded-full flex items-center justify-center'>
                    <i className='fas fa-info text-black'></i>
                </div>
                <h3 className='text-2xl font-semibold text-white mb-2'>Feture 1</h3>
                <p className='text-gray-300'>Streamline your workflow with powerful tools designed for maximum productivity.</p>
            </div>
        </div>
     </div>
   </section>
  )
}

export default Features
