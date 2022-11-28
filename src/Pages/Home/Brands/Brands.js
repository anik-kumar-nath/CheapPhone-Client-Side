import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading';

const Brands = () => {
    const { data: Brands, isLoading } = useQuery({
        queryKey: ['brands'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-aknathweb.vercel.app/brands`);
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='py-4'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold py-4'> Our Popular Brands </h1>
            <div className='flex gap-3 justify-center flex-wrap '>
                {
                    isLoading ?
                        <Loading></Loading>
                        :
                        Brands.map((brand) =>
                            <div key={brand._id} className="w-24 md:w-36 rounded-xl">
                                <img src={brand.brandLogo} alt='brand' />
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default Brands;