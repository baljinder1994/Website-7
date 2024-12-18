import React, { useState } from 'react'

const FAQ = () => {
    const[activeIndex,setActiveIndex]=useState(null)

    const toggleAnswer=(index) =>{
        setActiveIndex(activeIndex === index ? null : index)
    }
    const faqs=[
        {
            question:'What is pricing for your product?',
            answer:'Our product offers flexible pricing plans based on your needs.'
        },
        {
            question:'What is pricing for your product?',
            answer:'Our product offers flexible pricing plans based on your needs.'
        },
        {
            question:'What is pricing for your product?',
            answer:'Our product offers flexible pricing plans based on your needs.'
        },
        {
            question:'What is pricing for your product?',
            answer:'Our product offers flexible pricing plans based on your needs.'
        },
    ]
  return (
    <>
   <section className='bg-black text-white py-20'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-extrabold text-center mb-12'>Frequently Asked Questions</h2>
        <div className='space-y-6'>
            {faqs.map((faq,index) =>(
                <div key={index} className='border-b border-gray-700 pb-4 cursor-pointer'
                 onClick={() => toggleAnswer(index)}
                >
                    <h3 className='text-2xl font-semibold'>{faq.question}</h3>

                    <div className='overflow-hidden'>
                        <p className={` ${activeIndex === index ? "max-h-screen" : "max-h-0" } text-lg text-gray-400 mt-2`}>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
   </section>

   <section className='bg-black text-white py-20'>
     <div  className='container mx-auto px-6 text-center'>
        <h2 className='text-4xl font-extrabold mb-6'>Ready to Simplify Your Workflow</h2>
        <p className='text-xl mb-8 text-gray-400'>
        Join thousands of users who have already streamlined their processes with [Product Name]. Sign up today and experience the difference.
      
        </p>
        <div className='flex justify-center gap-6 mb-8'>
            <a href="#home" className='bg-yellow-500 text-black py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-700'>Sign Up Now</a>
            <a href="#" className='bg-transparent border-2 border-yellow-500 text-yellow-500 py-3 px-8 rounded-lg'>Book a Demo</a>
        </div>

        <div className='flex justify-center gap-6 text-lg text-gray-400'>
            <a href='#'className='hover:text-white transition duration-300'>Support</a>
            <a href='#faqs'className='hover:text-white transition duration-300'>FAQs</a>
        </div>
     </div>
   </section>
   </>
  )
}

export default FAQ
