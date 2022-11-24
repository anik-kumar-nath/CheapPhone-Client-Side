import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import Loading from '../Pages/Shared/Loading';

const Signup = () => {
    const [waiting, setWaiting] = useState(false);
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignup = (e) => {
        e.preventDefault();
        setWaiting(true);
        const name = e.target.name.value || 'Anonymous';
        const imageURL = 'https://www.freeiconspng.com/uploads/no-image-icon-0.png';
        const email = e.target.email.value;
        const password = e.target.password.value;
        const role = e.target.role.value;


        console.log(name, email, role)


        createUser(email, password)
            .then(result => {
                updateUser(name, imageURL);
                setWaiting(false);
                toast.success('successfully Create Account')
                e.target.reset();
                navigate('/', { replace: true })
            })
            .catch(error => {
                console.error(error)
                setWaiting(false);
                toast.error(error.message)
            });
    }
    return (
        <div className='my-4'>
            <form onSubmit={handleSignup}>
                <div className="hero mx-auto">
                    <div className="card flex-shrink-0 min-w-fit w-96 shadow-2xl bg-base-100 relative">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select className="select select-accent w-full max-w-xs" name='role'>
                                    <option>Buyer</option>
                                    <option>Seller</option>
                                </select>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
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

export default Signup;