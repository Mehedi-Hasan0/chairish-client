import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading/Loading';

const Featured = () => {
    const { data: featured = [], isLoading } = useQuery({
        queryKey: 'featured',
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/featured');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }

    return (
        <section>
            <div className='max-w-6xl mx-auto lg:pt-32 pt-16 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-0'>
                <div className=' flex items-center justify-between'>
                    <h3 className=' text-3xl font-medium text-[#2f2f2f]'>Featured Collections</h3>
                    <Link className=' underline underline-offset-2 hover:no-underline font-semibold'>View All</Link>
                </div>
                {
                    featured.map(item => <p>Name: {item.name}</p>)
                }
            </div>
        </section>
    );
};

export default Featured;