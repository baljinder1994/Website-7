import React from 'react'

const Home = () => {
  return (
    <>
       <section id="home" className='relative bg-black text-white overflow-hidden h-screen'>
        <div className='absolute top-0 left-10 w-40 h-40 bg-yellow-400 opacity-30 blur-3xl rounded-full'></div>
        <div className='absolute bottom-20 right-10 w-72 h-72 bg-yellow-500 opacity-20 blur-2xl rounded-full'></div>
        <div className='absolute top-1/3 right-1/4 w-24 h-24 bg-yellow-300 opacity-20 blur-2xl rotate-45'></div>
        

        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20 relative z-10'>
            <div className='flex-1 text-center md:text-left z-10'>
                <h1 className='text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white'>Simplify Your Workflow<br/> with{" "} <span className='text-yellow-400'>DigiBal</span> </h1>
                <p className='text-lg md:text-xl text-gray-300 mb-8'>Save time, reduce complexity, and focus on what matters most. Our solution streamlines your processes and boosts productivity</p>
               <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
                     <button className='px-8 py-3 text-black bg-yellow-400 hover:bg-yellow-500 rounded-lg text-lg font-semibold shadow-lg'>Get Started Free</button>
                     <button className='px-8 py-3 text-yellow-400 border border-yellow-400  hover:bg-gray-800 rounded-lg text-lg font-semibold shadow-lg'>Book a Demo</button>
               </div>
            </div>

            <div className='flex-1 mt-12 md:mt-0 relative z-10'>
                <img src="6.png"></img>
            </div>
        </div>
       </section>
    </>
  )
}

export default Home
