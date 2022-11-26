import React from 'react';
import toast from 'react-hot-toast';

const BookedModal = ({ Booked, refetch }) => {
    const { buyerName, buyerEmail, productId, productImage, productName, price, sellerLocation, sellerMobile } = Booked;
    const handleBook = (e) => {
        e.preventDefault();
        const buyerNumber = e.target.buyerNumber.value;
        const meetLocation = e.target.meetLocation.value;
        const BookedInformation = { buyerNumber, meetLocation, buyerName, buyerEmail, productId, productImage, productName, price, sellerLocation, sellerMobile }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(BookedInformation)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Booking confirmed');
                    e.target.reset();
                    refetch();
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBook}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" value={buyerName} className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" value={buyerEmail} className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" value={productName} className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" value={price} className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Location</span>
                            </label>
                            <input type="text" value={sellerLocation} className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Mobile</span>
                            </label>
                            <input type="text" value={sellerMobile} className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone Number</span>
                            </label>
                            <input type='tel' placeholder="Your Phone Number" name='buyerNumber' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Meeting Location</span>
                            </label>
                            <input type='text' placeholder="Meeting Location" name='meetLocation' className="input input-bordered" required />
                        </div>
                        <div className="flex justify-evenly mt-6">
                            <button className="btn btn-primary">Submit</button>
                            <label htmlFor="my-modal-3" className="btn btn-warning">Close</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookedModal;