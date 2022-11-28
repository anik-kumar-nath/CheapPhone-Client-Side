import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Pages/Shared/Loading';


import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const booking = useLoaderData();

    const navigation = useNavigation();
    // const { treatment, price, appointmentDate, slot } = booking;
    const { /* _id, productId, */ productImage, productName, price,/*  buyerEmail, buyerName */ } = booking;

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        // <div>
        //     {/* <h3 className="text-3xl">Payment for {treatment}</h3> */}
        //     <h3 className="text-3xl">Payment for {productName}</h3>
        //     {/* <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p> */}
        //     <p className="text-xl">Please pay <strong>${price}</strong> for your Buying Product, {productName} </p>
        //     <div className='w-96 my-12'>
        //         <Elements stripe={stripePromise}>
        //             <CheckoutForm
        //                 booking={booking}
        //             />
        //         </Elements>
        //     </div>
        // </div>
        <div>
            <div className="my-4 card card-compact w-fit mx-auto  bg-base-100 shadow-xl">
                <figure><img src={productImage} className='max-h-screen h-48' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center font-bold">{productName}</h2>
                    <h1 className='text-xl md:text-2xl lg:text-3xl text-left font-bold'>Pay Now,</h1>
                    <p className="text-sm">Please pay <strong>${price}</strong> for your Buying Product </p>
                    <div className='w-96 my-4'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                booking={booking}
                            />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;