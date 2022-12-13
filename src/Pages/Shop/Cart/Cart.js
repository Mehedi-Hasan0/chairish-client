import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <section>
            <div className='max-w-6xl mx-auto lg:pb-40  py-20 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-0'>
                <div>
                    <h3 className='text-dark text-3xl font-semibold'>Shopping Cart</h3>
                    <p className=' text-sm mt-3'><Link to='/'>HomePage</Link> / <Link to='/shop'>Shop</Link> / <span className=' underline'>Shopping Cart</span></p>

                    <hr className='my-10 border-[]' />
                </div>
            </div>
        </section>
    );
};

export default Cart;