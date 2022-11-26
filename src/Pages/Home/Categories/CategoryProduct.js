import React, { useContext, useState } from 'react';
import { TiTickOutline } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
const CategoryProduct = ({ product, handleBooked }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [status, setStatus] = useState(null)
    const { _id, sellerEmail, productImage, productName, originalPrice, resalePrice, yearUse, condition, location, addingDate, description, sellerName, mobile } = product;
    fetch(`http://localhost:5000/sellerstatus?email=${sellerEmail}`)
        .then(res => res.json())
        .then(data => setStatus(data.status))
    return (
        <div>
            <div className="card card-compact w-full  bg-base-100 shadow-xl">
                <figure><img src={productImage} className='max-h-screen h-96' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center font-bold">{productName}</h2>
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
                    <div className='bg-amber-100 p-1 flex'>
                        <p className='text-red-800'>Seller: {sellerName}</p>
                        <strong className='text-lg text-green-800'>{status === 'Verified' && <TiTickOutline />}</strong>
                    </div>
                    <div className='flex flex-wrap gap-1 justify-around'>
                        <label htmlFor="my-modal-3" className="btn" onClick={() => { user ? handleBooked(user.displayName, user.email, _id, productImage, productName, resalePrice, location, mobile) : navigate('/login', { replace: true }) }}>Book Now</label>
                        <button className='btn btn-error'>Report to Admin</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryProduct;