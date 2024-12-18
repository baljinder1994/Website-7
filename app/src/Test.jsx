import React from 'react'

const Test = () => {
    const testinomial=[
        {
            id:1,
            name:'Baljinder kaur',
            role:'CEO,TechCorp',
            quote:'This product completely transformed our worflow.',
            photo:'6.png'
        },
        {
            id:2,
            name:'Baljinder kaur',
            role:'CEO,TechCorp',
            quote:'This product completely transformed our worflow.',
            photo:'6.png'
        },
        {
            id:3,
            name:'Baljinder kaur',
            role:'CEO,TechCorp',
            quote:'This product completely transformed our worflow.',
            photo:'6.png'
        },

    ]
  return (
    <section id="test" className='bg-black text-white py-20'>
        <div className='container mx-auto px-6 text-center'>
            <h2 className='text-4xl md:text-5xl'>Hear From Our Customers</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {testinomial.map((test) =>(
                    <div key={test.id} className='bg-black p-6 shadow-lg border border-yellow-500 rounded-lg mt-5'>
                       <img src='baby.jpg' className='w-16 h-16 rounded-full mx-auto mb-4'></img>
                       <p className='text-gray-300 italic mb-4'>{test.quote}</p>
                       <h4 className='font-semibold text-white text-lg'>{test.name}</h4>
                       <p className='text-gray-400 text-sm'>{test.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Test
