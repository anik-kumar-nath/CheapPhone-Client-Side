import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    // const role = 'Buyer';
    // const role = 'Seller'
    const role = 'Admin'
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <div className='sticky top-0 flex flex-col items-end justify-start'>
                    <div className='flex justify-between lg:justify-center items-center w-full bg-gray-800 text-white'>
                        <h3 className='text-2xl font-bold px-2'>DashBoard</h3>
                        <label htmlFor="my-drawer-2" className="btn btn-outline btn-secondary drawer-button lg:hidden m-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3 4H21V20H3V4ZM9 6H19V18H9V6Z" fill="white" />
                            </svg>
                        </label>
                    </div>
                </div>
                <div className='top-8'>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-slate-200">
                    {
                        role === 'Buyer' &&
                        <>
                            <li><Link className='my-2 btn btn-outline btn-primary rounded-lg w-full' to={'/dashboard/myorders'}>My Orders</Link></li>
                        </>
                    }
                    {
                        role === 'Seller' &&
                        <>
                            <li><Link className='my-2 btn btn-outline btn-primary rounded-lg w-full' to={'/dashboard/addproducts'}>Add A Products</Link></li>
                            <li><Link className='my-2 btn btn-outline btn-primary rounded-lg w-full' to={'/dashboard/myproducts'}>My Products</Link></li>
                        </>
                    }
                    {
                        role === 'Admin' &&
                        <>
                            <li ><Link to={'/dashboard/allsellers'} className='my-2 btn btn-outline btn-primary rounded-lg w-full'>All Sellers</Link></li>
                            <li><Link className='my-2 btn btn-outline btn-primary rounded-lg w-full' to={'/dashboard/allbuyers'}>All Buyers</Link></li>
                            <li><Link className='my-2 btn btn-outline btn-primary rounded-lg w-full' to={'/dashboard/reporteditems'}>Reported Items</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;