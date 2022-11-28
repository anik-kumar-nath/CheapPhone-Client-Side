import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../../Shared/Loading';
import BookedModal from './BookedModal';
import CategoryProduct from './CategoryProduct';

const CategoryItems = () => {
    const category = useLoaderData();
    const { data: categoryPhone, isLoading: isLoading1 } = useQuery({
        queryKey: [category],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-aknathweb.vercel.app/category/${category}`);
            const data = await res.json();
            return data;
        }
    });

    const [bookedInfo, setBookedInfo] = useState({});
    const { loading } = useContext(AuthContext);
    const { data: categoryProducts, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-aknathweb.vercel.app/products/${category}`);
            const data = await res.json();
            return data;
        }
    });
    if (isLoading || loading || isLoading1) {
        return <Loading></Loading>
    }
    const handleBooked = (buyerName, buyerEmail, productId, productImage, productName, price, sellerLocation, sellerMobile) => {
        setBookedInfo({ buyerName, buyerEmail, productId, productImage, productName, price, sellerLocation, sellerMobile });
    }
    const handleReportItem = (reporterName, reporterEmail, productId, productImage, productName) => {
        fetch('https://assignment-12-server-aknathweb.vercel.app/addreport', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ productId, productImage, productName, reporterName, reporterEmail })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("your report added Successfully")
                }
            })
    }
    return (
        <div className='p-4'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold'> List of {categoryPhone?.phoneType} </h1>
            <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    categoryProducts.map((product) => <CategoryProduct handleReportItem={handleReportItem} handleBooked={handleBooked} key={product._id} product={product}></CategoryProduct>)
                }
                <BookedModal Booked={bookedInfo} refetch={refetch}></BookedModal>
            </div>
        </div>
    );
};

export default CategoryItems;