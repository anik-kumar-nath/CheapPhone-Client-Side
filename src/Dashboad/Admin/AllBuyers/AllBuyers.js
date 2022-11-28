import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Pages/Shared/Loading';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: buyers, isLoading, refetch } = useQuery({
        queryKey: ['allbuyer'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-aknathweb.vercel.app/allbuyer`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>;
    }
    const handleDeleteBuyer = (id) => {
        fetch(`https://assignment-12-server-aknathweb.vercel.app/seller/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Buyer Delete successfully.')
                    refetch();
                }
            })
    }
    return (
        <div>
            <div>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold bg-red-100 p-2'> All Buyers Information</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyers.map((buyer, index) =>
                                    <tr className="hover" key={index}>
                                        <th>{index + 1}</th>
                                        <td>{buyer.name}
                                        </td>
                                        <td>{buyer.email}</td>
                                        <td>
                                            <button className='btn btn-error btn-sm' onClick={() => handleDeleteBuyer(buyer._id)}>Delete</button>
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


export default AllBuyers;