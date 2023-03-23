import React from 'react'
import { CheckIcon } from '@heroicons/react/outline';

function AllInOne() {
    const count = 8;
// create a dummy array to run this function may be there may other method i can use
    const smallNotification = new Array(count).fill(count).map((arr, index) => {
        return (
            <div key={index} className='flex'>
                <div><CheckIcon className={`w-7 mr-4 text-${(index + 1) % 2 ? 'green' : 'indigo'}-600`} /></div>
                <div>
                    <h3 className='font-bold text-lg'>Notifications</h3>
                    <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quo pariatur facilis officia assumenda eos minus eum error rerum amet?</p>
                </div>
            </div>
        )
    })
    return (
        <div name='platforms' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <h2 className='text-5xl font-bold text-center'>All_In_One Platforms</h2>
                <p className='text-2xl py-8 text-gray-500 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, eos. Amet consequatur dolore necessitatibus quod, dignissimos voluptatum at molestiae labore vel quisquam ullam blanditiis nesciunt ex omnis inventore ipsa provident?</p>

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4' >
                    {/* divide into small potion */}
                    {smallNotification}
                </div>
            </div>

        </div>
    )
}

export default AllInOne