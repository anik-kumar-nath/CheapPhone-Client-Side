import React from 'react';

const MyProductCard = ({ product, handleProductDelete, handleAdvertise }) => {
    const { _id, productImage, productName, originalPrice, resalePrice, yearUse, condition, addingDate, description, productStatus } = product;
    return (
        <div>
            <div className="card card-compact w-full  bg-base-100 shadow-xl">
                <figure><img src={productImage} className='max-h-screen h-96' alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title font-bold text-justify">{productName}</h2>
                        <h2 className={`text-lg p-2 bg-rose-100 rounded-lg ${productStatus === 'Sold' && 'text-yellow-900 font-extrabold'}`}>{productStatus}</h2>
                    </div>
                    <div className='flex flex-wrap gap-1'>
                        <strong>Original Price:</strong>
                        <span>{originalPrice},</span>
                        <strong>Resale Price:</strong>
                        <span>{resalePrice},</span>
                        <strong>Year of use:</strong>
                        <span>{yearUse},</span>
                        <strong>Condition:</strong>
                        <span>{condition},</span>
                        <strong>Date:</strong>
                        <span>{addingDate}</span>
                    </div>
                    <p className='h-10 overflow-hidden'>
                        <strong>Description:</strong>
                        <span title={description}>{description}</span>
                    </p>
                    <div className='flex gap-2 justify-around'>
                        <button className='btn btn-outline btn-warning' onClick={() => handleProductDelete(_id)}>Delete</button>
                        {(productStatus === 'Available') ? <button className='btn btn-outline btn-warning' onClick={() => handleAdvertise(_id, productImage, productName, originalPrice, resalePrice, yearUse, addingDate)}>Advertise</button> : ''}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;