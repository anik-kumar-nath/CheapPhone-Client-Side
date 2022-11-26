import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../../Shared/Loading';
import BookedModal from './BookedModal';
import CategoryProduct from './CategoryProduct';

const CategoryItems = () => {
    const [bookedInfo, setBookedInfo] = useState({});
    const { loading } = useContext(AuthContext);
    const category = useLoaderData();
    const { data: categoryProducts, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/${category}`);
            const data = await res.json();
            return data;
        }
    });
    if (isLoading || loading) {
        return <Loading></Loading>
    }
    const handleBooked = (buyerName, buyerEmail, productId, productImage, productName, price, sellerLocation, sellerMobile) => {
        setBookedInfo({ buyerName, buyerEmail, productId, productImage, productName, price, sellerLocation, sellerMobile });
    }
    return (
        <div className='p-4'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold'> List of Categories</h1>
            <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    categoryProducts.map((product) => <CategoryProduct handleBooked={handleBooked} key={product._id} product={product}></CategoryProduct>)
                }
                <BookedModal Booked={bookedInfo} refetch={refetch}></BookedModal>
            </div>
        </div>
    );
};

export default CategoryItems;