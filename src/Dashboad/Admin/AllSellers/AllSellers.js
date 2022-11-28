import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Pages/Shared/Loading';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['allseller'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-aknathweb.vercel.app/allseller`);
            const data = await res.json();
            return data;
        }
    });

    const handleUpdateStatus = (id, verificationText) => {
        fetch(`https://assignment-12-server-aknathweb.vercel.app/seller/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ verificationText })
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    toast.success('Seller Verified successfully.')
                    refetch();
                }
            })
    }
    const handleDeleteSeller = (id) => {
        fetch(`https://assignment-12-server-aknathweb.vercel.app/seller/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Seller Delete successfully.')
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <div>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold bg-red-100 p-2'> All Sellers Information</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sellers.map((seller, index) =>
                                    <tr className="hover" key={index}>
                                        <th>{index + 1}</th>
                                        <td>{seller.name}
                                        </td>
                                        <td>{seller.email}</td>
                                        <td>
                                            {
                                                seller.status === 'Verified' ?
                                                    <strong className='p-1 text-green-900'>{seller.status}</strong>
                                                    : <button className='btn btn-warning btn-sm' onClick={() => handleUpdateStatus(seller._id, 'Verified')}>Verify</button>
                                            }
                                        </td>
                                        <td>
                                            <button className='btn btn-error btn-sm' onClick={() => handleDeleteSeller(seller._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSellers;