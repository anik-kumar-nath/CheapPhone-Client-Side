import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../../../Pages/Shared/Loading';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext);
    const { data: myorders, isLoading } = useQuery({
        queryKey: ['myorder'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myorder?email=${user.email}`);
            const data = await res.json();
            return data;
        }
    });
    if (isLoading || loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Product</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Sold</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders.map((order, index) =>
                                <tr className="hover">
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="w-12 rounded-full">
                                            <img src={order.productImage} alt='' />
                                        </div>
                                    </td>
                                    <td>{order.productName}</td>
                                    <td>{order.price}</td>
                                    <td>
                                        <button className='btn btn-success btn-sm'>Pay</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;