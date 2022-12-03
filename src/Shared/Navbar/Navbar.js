import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import user from '../../assets/user.svg';
import cart from '../../assets/cart.svg';

const Navbar = () => {
    return (
        <nav className=' bg-primary p-5 text-white'>
            <div className=' flex justify-around items-center'>
                <Link className='text-3xl font-semibold' to='/'>Chairish</Link>
                <div className='nav_link'>
                    <Link className='text-sm' to='/'>Home</Link>
                    <Link className='text-sm' to='/shop'>Shop</Link>
                    <Link className='text-sm' to='/aboutus'>About Us</Link>
                    <Link className='text-sm' to='/services'>Services</Link>
                    <Link className='text-sm' to='/blog'>Blog</Link>
                    <Link className='text-sm' to='/contactus'>Contact Us</Link>
                </div>
                <div className='flex w-16 justify-between'>
                    <img src={user} alt="" />
                    <img src={cart} alt="" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;