import React from 'react'

function About() {
    return (
        <div name='about' className='w-full my-32'>
            <div className='m-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
                    <p className='text-3xl text-gray-500 py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, facere. Dignissimos, nulla perspiciatis et ducimus vitae, maiores neque id assumenda amet accusantium ea reiciendis repellendus quasi pariatur fugit voluptas impedit.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl text-indigo-500 font-bold'>100%</p>
                        <p className='text-gray-400 mt-2'>Completion</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl text-indigo-500 font-bold'>24/7</p>
                        <p className='text-gray-400 mt-2'>Delivery</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl text-indigo-500 font-bold'>100k</p>
                        <p className='text-gray-400 mt-2'>Transactions</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default About