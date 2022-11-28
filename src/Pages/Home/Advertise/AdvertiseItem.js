import React from 'react';

const AdvertiseItem = ({ advertiseItem }) => {
    const {/*  _id, productId, */ productImage, productName, originalPrice, resalePrice,/*  yearUse, addingDate */ } = advertiseItem;
    return (
        <div>
            <div className="w-36 bg-base-100 shadow-xl rounded-xl">
                <figure><img src={productImage} className="p-1 w-full h-28" alt="productImage" /></figure>
                <div className="p-2 h-20 top-auto">
                    <small>{productName}</small>
                    <div className='flex gap-1 flex-wrap'> <small className='font-semibold'>Price:</small><small className='line-through'>{originalPrice}</small><small>{resalePrice}</small></div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseItem;