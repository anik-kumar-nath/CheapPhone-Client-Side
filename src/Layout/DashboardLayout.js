import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    // const role = 'buyer';
    // const role = 'seller'
    const role = 'admin'
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <div className='flex flex-col items-end justify-start'>
                    <label htmlFor="my-drawer-2" className="btn btn-outline btn-secondary drawer-button lg:hidden m-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3 4H21V20H3V4ZM9 6H19V18H9V6Z" fill="purple" />
                        </svg>
                    </label>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {
                        role === 'buyer' &&
                        <>
                            <li><Link>My Order</Link></li>
                        </>
                    }
                    {
                        role === 'seller' &&
                        <>
                            <li><Link>Add A Products</Link></li>
                            <li><Link>My Products</Link></li>
                        </>
                    }
                    {
                        role === 'admin' &&
                        <>
                            <li><Link>All Sellers</Link></li>
                            <li><Link>All Buyer</Link></li>
                            <li><Link>Reported Items</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;