import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../../../Pages/Shared/Loading';
import toast from 'react-hot-toast';
const AddProduct = () => {
    const [waiting, setWaiting] = useState(false);
    const { user, loading } = useContext(AuthContext)
    const [photo, setPhoto] = useState();
    const handleAddProduct = (e) => {
        setWaiting(true);
        e.preventDefault();
        const productName = e.target.productName.value;
        const productCategory = e.target.productCategory.value;
        const originalPrice = e.target.originalPrice.value;
        const resalePrice = e.target.resalePrice.value;
        const yearUse = e.target.yearUse.value;
        const condition = e.target.condition.value;
        const mobile = e.target.mobile.value;
        const location = e.target.location.value;
        const description = e.target.description.value;
        const formData = new FormData();
        formData.append('image', photo);
        const url = `https://api.imgbb.com/1/upload?key=81a80008d4071cd447ec4b584a7795f1`
        photo && fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const productImage = imgData.data.url;
                    if (!loading) {
                        const sellerName = user.displayName;
                        const sellerEmail = user.email;
                        const productStatus = 'Available';

                        fetch('https://assignment-12-server-aknathweb.vercel.app/addproduct', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify({ sellerName, sellerEmail, productName, productStatus, productCategory, originalPrice, resalePrice, yearUse, condition, productImage, mobile, location, description })
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    setWaiting(false);
                                    toast.success("Product added Successfully")
                                }
                            })
                    }
                    e.target.reset();
                }
            })
    }
    return (
        <div className='my-4'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold my-4'>Add A Product </h1>
            <form onSubmit={handleAddProduct}>
                <div className="hero mx-auto">
                    <div className="card flex-shrink-0 min-w-fit w-96 shadow-2xl bg-base-100 relative">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" placeholder="Product Name" name='productName' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Category</span>
                                </label>
                                <select className="select select-accent w-full max-w-xs" name='productCategory'>
                                    <option value={1}>Button Phone</option>
                                    <option value={2}>Android Phone</option>
                                    <option value={3}>Apple Phone</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Original Price</span>
                                </label>
                                <input type="number" min={1} placeholder="Original Price" name='originalPrice' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span min={1} className="label-text">Resale Price</span>
                                </label>
                                <input type="number" placeholder="Resale Price" name='resalePrice' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Year of Use</span>
                                </label>
                                <input type="number" min={0} placeholder="Year of Use" name='yearUse' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Condition</span>
                                </label>
                                <select className="select select-accent w-full max-w-xs" name='condition'>
                                    <option>Good</option>
                                    <option>Excellent</option>
                                    <option>Medium</option>
                                    <option>Poor</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Photo</span>
                                </label>
                                <input type="file" onChange={(e) => setPhoto(e.target.files[0])} className="file-input file-input-bordered w-full max-w-xs" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile Number</span>
                                </label>
                                <input type='tel' placeholder="Mobile Number" name='mobile' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <select className="select select-accent w-full max-w-xs" name='location'>
                                    <option>Dhaka</option>
                                    <option>Chittagong</option>
                                    <option>Khulna</option>
                                    <option>Barisal</option>
                                    <option>Rajshahi</option>
                                    <option>Rangpur</option>
                                    <option>Sylhet</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea className="textarea textarea-accent" placeholder="Description" name='description'></textarea>
                            </div>
                            <input type="submit" className='btn btn-outline btn-success' value="Submit" />
                        </div>
                        {
                            waiting &&
                            <div className='absolute h-full w-full flex align-middle justify-center bg-gray-200/40'>
                                <Loading></Loading>
                            </div>
                        }
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;