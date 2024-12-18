import React from 'react'

const Price = () => {
    const pricingPlans=[
        {
            id:1,
            name:'Free Plan',
            price:'$0',
            description:'Perfect for individuals or small teams',
            features:[
                "1 Project",
                "5 Users",
                "Basic Support",
                "Limited Storage"
            ],
            cta:'Start Free Trial'
        },
        {
            id:2,
            name:'Pro Plan',
            price:'$19/month',
            description:'Perfect for individuals or small teams',
            features:[
                "1 Project",
                "5 Users",
                "Basic Support",
                "Limited Storage"
            ],
            cta:'Start Free Trial'
        },
        {
            id:3,
            name:'Free Plan',
            price:'$0',
            description:'Perfect for individuals or small teams',
            features:[
                "1 Project",
                "5 Users",
                "Basic Support",
                "Limited Storage"
            ],
            cta:'Start Now'
        }
    ]
  return (
   <section className='bg-black text-white py-20'>
    <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
            <h2 className='text-4xl  md:text-5xl font-extrabold mb-4'>Choose Your Plan</h2>
            <p className='text-lg text-gray-300'>Find the perfect plan that fits your needs.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            {pricingPlans.map((plan) =>(
                <div key={plan.id} className='bg-gray-800 p-8 rounded-lg shadow-lg text-center'>
                    <h3 className='text-3xl font-bold text-white mb-4'>{plan.name}</h3>
                    <p className='text-xl text-gray-400 mb-4'>{plan.price}</p>
                    <p className='text-lg text-gray-300 mb-6'>{plan.description}</p>

                    <ul className='text-left mb-6'>
                        {plan.features.map((feature,index) =>(
                            <li key={index} className='text-gray-300 mb-2'>{feature}</li>
                        ))}
                    </ul>

                    <button className='border-2 border-yellow-500 px-8 py-3 rounded-lg hover:bg-yellow-500 transition-all hover:text-black'>{plan.cta}</button>
                </div>
            ))}
        </div>
    </div>
   </section>
  )
}

export default Price
