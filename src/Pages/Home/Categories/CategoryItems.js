import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CategoryProduct from './CategoryProduct';

const CategoryItems = () => {
    const category = useLoaderData();
    const { data: categoryProducts, isLoading, refetch } = useQuery({
        queryKey: ['myproducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/${category}`);
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='p-4'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold'> List of Categories</h1>
            <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    categoryProducts.map((product) => <CategoryProduct key={product._id} product={product}></CategoryProduct>)
                }
            </div>
        </div>
    );
};

export default CategoryItems;