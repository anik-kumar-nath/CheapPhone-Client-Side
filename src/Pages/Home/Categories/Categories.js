import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import CategoryCard from './CategoryCard';
import Loading from '../../Shared/Loading';

const Categories = () => {
    const { data: phoneCategory = [], isLoading } = useQuery({
        queryKey: ['phonecategory'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/phonecategory`);
            const data = await res.json();
            return data;
        }
    });

    return (
        <div className='p-4'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold'> List of Categories</h1>
            {
                isLoading ?
                    <div className='flex justify-center items-center'>
                        <Loading></Loading>
                    </div>
                    :
                    <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                        {
                            phoneCategory && phoneCategory.map((phone) => <CategoryCard key={phone._id} phoneInformation={phone}></CategoryCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default Categories;