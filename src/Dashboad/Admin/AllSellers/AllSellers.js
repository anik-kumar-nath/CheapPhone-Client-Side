import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Pages/Shared/Loading';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['allseller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allseller`);
            const data = await res.json();
            return data;
        }
    });

    const handleUpdateStatus = (id) => {

    }
    const handleDeleteSeller = (id) => {
        fetch(`http://localhost:5000/seller/${id}`, {
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

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <div>
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
                                    <tr className="hover">
                                        <th>{index + 1}</th>
                                        <td>{seller.name}
                                        </td>
                                        <td>{seller.email}</td>
                                        <td>{seller.status}</td>
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