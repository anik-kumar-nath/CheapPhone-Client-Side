import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import tikMark from './verified.svg';

const CategoryProduct = ({ product, handleBooked, handleReportItem }) => {
    const navigate = useNavigate();
    const pathLocation = useLocation();
    const { user } = useContext(AuthContext);
    const [status, setStatus] = useState(null)
    const { _id, sellerEmail, productImage, productName, originalPrice, resalePrice, yearUse, condition, location, addingDate, description, sellerName, mobile, productStatus } = product;
    fetch(`https://assignment-12-server-aknathweb.vercel.app/sellerstatus?email=${sellerEmail}`)
        .then(res => res.json())
        .then(data => setStatus(data.status))
    return (
        <div>
            <div className="card card-compact w-full  bg-base-100 shadow-xl">
                <figure><img src={productImage} className='max-h-screen h-96' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center font-bold">{productName}</h2>
                    <strong>{productStatus && 'Sold'}</strong>
                    <div className='flex flex-wrap gap-1'>
                        <strong>Original Price:</strong>
                        <span>{originalPrice},</span>
                        <strong>Resale Price:</strong>
                        <span>{resalePrice},</span>
                        <strong>Year of use:</strong>
                        <span>{yearUse},</span>
                        <strong>Condition:</strong>
                        <span>{condition},</span>
                        <strong>Location:</strong>
                        <span>{location},</span>
                        <strong>Seller Mobile:</strong>
                        <span>{mobile},</span>
                        <strong>Date:</strong>
                        <span>{addingDate}</span>
                    </div>
                    <p className='h-10 overflow-hidden'>
                        <strong>Description:</strong>
                        <span title={description}>{description}</span>
                    </p>
                    <div className='bg-gray-100 shadow-lg p-1 rounded-lg flex justify-end mb-1'>
                        <span className='text-red-800 text-lg font-bold'>{sellerName}</span>
                        {status === 'Verified' && <img src={tikMark} alt="" />}
                    </div>
                    <div className='flex flex-wrap gap-1 justify-around' state={{ from: pathLocation }}>
                        {
                            !productStatus && <label htmlFor="my-modal-3" className="btn" onClick={() => { user ? handleBooked(user.displayName, user.email, _id, productImage, productName, resalePrice, location, mobile) : toast.error("To Booked Product you must Login") && navigate('/login', { replace: true }) }}>Book Now</label>
                        }
                        <button className='btn btn-error' onClick={() => { user ? handleReportItem(user.displayName, user.email, _id, productImage, productName) : toast.error("To Report Product you must Login") && navigate('/login', { replace: true }) }}>Report to Admin</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryProduct;