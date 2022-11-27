import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ phoneInformation }) => {
    const { categoryId, phoneType, description, phoneImage } = phoneInformation;
    return (
        <div>
            <div className="card card-compact w-full  bg-base-100 shadow-xl">
                <figure><img src={phoneImage} className='max-h-screen h-96' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center font-bold">{phoneType}</h2>
                    <p>{description}</p>
                    <Link to={`/category/${categoryId}`} className="btn btn-primary w-full">See Products</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;