import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
function Navbar() {
    const [nav , setNav]=useState(false);
    const handleNavToggle=()=>setNav(!nav);
    return (
        <div className='w-screen h-[80] z-10 bg-zinc-200 fixed drop-shadow-lg px-4 py-3'>

            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4  sm:text-4xl'
                    >BRAND.</h1>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platforms</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none text-black mr-4 bg-transparent'>
                        Sign In
                    </button>
                    <button className='px-8 py-3'>
                        Sign Up
                    </button>
                </div>
                <div onClick={handleNavToggle} className='md:hidden flex items-center'>
                  {!nav?  <MenuIcon  className='w-5' />: <XIcon  className='w-5' />}
                </div>
            </div>


            <ul className={!nav?'hidden': 'absolute bg-zinc-200 w-full px-8 select-none'}>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>About</li>
                <li className='border-b-2 border-zinc-300 w-full'>Support</li>
                <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
                <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
            <div className='flex flex-col my-4'>
                <button className=' text-indigo-600  bg-transparent px-8 py-3 mb-4' >
                    Sign In
                </button>
                <button className='px-8 py-3'>
                    Sign Up
                </button>
            </div>
            </ul>
        </div>

    )
}

export default Navbar