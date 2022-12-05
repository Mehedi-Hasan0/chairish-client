import React from 'react';

const FeaturedCards = ({ item }) => {
    const { name, price, description, img, how_it_fits, ratings, product_details, quality_care, _id } = item;
    console.log(item);
    return (
        <div className=''>
            <div className=' bg-[#dce5e4] rounded-3xl'>
                <img src={img} alt="" className='mx-auto' />
            </div>
            <div className=' mt-3 p-4'>
                <h4 className=' mb-1 text-dark text-lg font-semibold'>{name}</h4>
                <p className=' mb-3 text-sm text-dark opacity-90'>{product_details.slice(0, 50)}..</p>
                <div className=' flex items-center justify-between'>
                    <p className=''>Price: {price}</p>
                    <button className=' btn btn-dark text-white rounded-full'>See Details</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCards;