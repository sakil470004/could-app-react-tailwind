import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, animateScroll as scroll, } from 'react-scroll'
function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNavToggle = () => setNav(!nav);
    const setNavOFF=()=>setNav(false);
    return (
        <div className='w-screen h-[80] z-10 bg-zinc-200 fixed drop-shadow-lg px-4 py-3'>

            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4  sm:text-4xl'
                    >BRAND.</h1>
                    <ul className='hidden md:flex'>
                        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                        <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                        <li><Link to="services" smooth={true} offset={-50} duration={500}>Support</Link></li>
                        <li><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                        <li><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
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
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
                </div>
            </div>


            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 select-none'}>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                        <li><Link onClick={setNavOFF} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                        <li><Link onClick={setNavOFF} to="services" smooth={true} offset={-50} duration={500}>Support</Link></li>
                        <li><Link onClick={setNavOFF} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                        <li><Link onClick={setNavOFF} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
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