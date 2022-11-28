import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading';
import AdvertiseItem from './AdvertiseItem';

const Advertise = () => {
    const { data: advertiseItems, isLoading } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-aknathweb.vercel.app/advertise`);
            const data = await res.json();
            return data;
        }
    });

    return (
        <div className='p-4'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold'> List of Advertise Items </h1>
            <div className='flex gap-3 justify-center flex-wrap'>
                {
                    isLoading ?
                        <Loading></Loading>
                        :
                        advertiseItems.map((advertiseItem) => <AdvertiseItem key={advertiseItem._id} advertiseItem={advertiseItem}></AdvertiseItem>)
                }
            </div>
        </div>
    );
};

export default Advertise;