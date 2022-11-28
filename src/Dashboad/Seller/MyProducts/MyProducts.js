import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import Loading from '../../../Pages/Shared/Loading';
import MyProductCard from './MyProductCard';

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['myproducts'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-aknathweb.vercel.app/myproducts?email=${user.email}`);
            const data = await res.json();
            return data;
        }
    });

    // console.log(products)
    if (isLoading || loading) {
        return <Loading></Loading>
    }
    if (!loading) {
        refetch();
    }

    const handleProductDelete = id => {
        fetch(`https://assignment-12-server-aknathweb.vercel.app/myproducts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Delete successfully.')
                    refetch();
                }
            })
    }
    const handleAdvertise = (productId, productImage, productName, originalPrice, resalePrice, yearUse, addingDate) => {
        fetch('https://assignment-12-server-aknathweb.vercel.app/addadvertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ productId, productImage, productName, originalPrice, resalePrice, yearUse, addingDate })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Advertise Product Successfully")
                }
            })
    }

    return (
        <div className='p-4'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold'> List of Categories</h1>
            <div className='my-4 grid grid-cols-1 md:grid-cols-2 gap-2'>
                {
                    products && products.map((product) => <MyProductCard key={product._id} handleProductDelete={handleProductDelete} handleAdvertise={handleAdvertise} product={product}></MyProductCard>)
                }
            </div>
        </div>
    );
};

export default MyProducts;