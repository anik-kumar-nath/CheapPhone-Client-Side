import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Pages/Shared/Loading';
import toast from 'react-hot-toast';

const ReportedItems = () => {
    const { data: reports, isLoading, refetch } = useQuery({
        queryKey: ['report'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-aknathweb.vercel.app/report`);
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteProduct = (productId) => {
        fetch(`https://assignment-12-server-aknathweb.vercel.app/report/${productId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Product Deleted successfully.')
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
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold bg-red-100 p-2'> All Reported Product</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Reporter Name</th>
                                <th>Reporter Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reports.map((report, index) =>
                                    <tr className="hover" key={index}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="w-12 rounded-full">
                                                <img src={report.productImage} alt='ProductImage' />
                                            </div>
                                        </td>
                                        <td>{report.productName}</td>
                                        <td>{report.reporterName}</td>
                                        <td>{report.reporterEmail}</td>
                                        <td>
                                            <button className='btn btn-error btn-sm' onClick={() => handleDeleteProduct(report.productId)}>Delete</button>
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

export default ReportedItems;