import React from 'react';
import CategoryCard from './CategoryCard';
import phone1 from './../../../Assets/PhoneTypes/buttonPhone.jpg'
import phone2 from './../../../Assets/PhoneTypes/androidPhone.png'
import phone3 from './../../../Assets/PhoneTypes/iphone.jpg'

const Categories = () => {
    const phoneCategories = [
        {
            categoryId: 1,
            phoneType: 'Button Phone',
            description: '',
            phoneImage: phone1
        },
        {
            categoryId: 2,
            phoneType: 'Android Phone',
            description: '',
            phoneImage: phone2
        },
        {
            categoryId: 3,
            phoneType: 'Apple Phone',
            description: '',
            phoneImage: phone3
        }
    ]
    return (
        <div className='p-4'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold'> List of Categories</h1>
            <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    phoneCategories.map((phone) => <CategoryCard key={phone.id} phoneInformation={phone}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;