import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Pages/Shared/Loading';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: buyers, isLoading, refetch } = useQuery({
        queryKey: ['allbuyer'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allbuyer`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>;
    }
    const handleDeleteBuyer = (id) => {
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyers.map((buyer, index) =>
                                    <tr className="hover">
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