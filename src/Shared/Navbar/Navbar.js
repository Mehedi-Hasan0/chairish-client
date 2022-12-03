import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import user from '../../assets/user.svg';
import cart from '../../assets/cart.svg';
import menu from '../../assets/icon/menu.svg';
import close from '../../assets/icon/close.svg';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className=' bg-primary py-2 text-white'>
            <div className=' lg:flex hidden justify-between items-center max-w-6xl lg:mx-16 xl:mx-auto'>
                <Link className='text-3xl font-semibold' to='/'>Chairish</Link>
                <div className='nav_link'>
                    <Link className='text-sm nav-link nav-link-ltr' to='/'>Home</Link>
                    <Link className='text-sm nav-link nav-link-ltr' to='/shop'>Shop</Link>
                    <Link className='text-sm nav-link nav-link-ltr' to='/aboutus'>About Us</Link>
                    <Link className='text-sm nav-link nav-link-ltr' to='/services'>Services</Link>
                    <Link className='text-sm nav-link nav-link-ltr' to='/blog'>Blog</Link>
                    <Link className='text-sm nav-link nav-link-ltr' to='/contactus'>Contact Us</Link>
                </div>
                <div className='flex w-16 justify-between'>
                    <img className=' cursor-pointer' src={user} alt="user" />
                    <img className=' cursor-pointer' src={cart} alt="cart" />
                </div>
            </div>

            <div className='lg:hidden flex items-center justify-between py-3 px-5 sm:px-9 md:px-12'>
                <Link className='text-2xl font-semibold' to='/'>Chairish</Link>
                <img src={toggle ? close : menu} alt='menu' className='w-6 object-contain cursor-pointer opacity-70' onClick={() => setToggle((previous) => !previous)} />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-primary absolute top-14 right-0 w-full h-full flex-col opacity-100`}>
                    {/* <img src={toggle ? close : menu} alt='menu' className='w-6 object-contain mb-7 cursor-pointer' onClick={() => setToggle((previous) => !previous)} /> */}
                    <div className='flex flex-col md:text-lg text-base text-white z-50 bg-primary w-full relative text-center justify-between h-36'>

                        <Link className='text-base nav-link-mobile' to='/'>Home</Link>
                        <Link className='text-base nav-link-mobile' to='/shop'>Shop</Link>
                        <Link className='text-base nav-link-mobile' to='/aboutus'>About Us</Link>
                        <Link className='text-base nav-link-mobile' to='/services'>Services</Link>
                        <Link className='text-base nav-link-mobile' to='/blog'>Blog</Link>
                        <Link className='text-base nav-link-mobile' to='/contactus'>Contact Us</Link>
                        <div className='flex w-16 justify-between mx-auto mt-3'>
                            <img className=' cursor-pointer' src={user} alt="user" />
                            <img className=' cursor-pointer' src={cart} alt="cart" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;