import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import imahe6 from '../assets/imahe6.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div>
            <div className='bg-200 text-white h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
                <h1 className='text-3xl font-bold primary-color ml-4'>
                    <img src={imahe6} alt="Logo" className='inline-block h-auto max-w-[200px] mt-2 mr-10' />
                </h1>

                <ul className='hidden md:flex text-gray-800 font-sans'>
                    <li className='p-5 hover:underline'> 
                        <a href='#About'>About</a>
                    </li>
                    <li className='p-5 hover:underline'>
                        <a href='#Work'>Work</a>
                    </li>
                    <li className='p-5 hover:underline'> 
                        <a href='#Contact'>Contact</a>
                    </li>
                </ul>

                <div onClick={handleNav} className='block md:hidden mr-6'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

            
                <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className='text-3xl primary-color m-4'>J.Vargas</h1>
                    <ul className='p-8 text-2xl'>
                        <li className='p-2 hover:underline'> 
                            <a href="#about">About</a>
                        </li>
                        <li className='p-2 hover:underline'>
                            <a href="#work">Work</a>
                        </li>
                        <li className='p-2 hover:underline'>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
