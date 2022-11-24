import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import Loading from '../Pages/Shared/Loading';

const Login = () => {
    const [waiting, setWaiting] = useState(false);
    const { signIn, providerLogin } = useContext(AuthContext);
    const GoogleProvider = new GoogleAuthProvider();

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();
        setWaiting(true);
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        console.log(email, pass);
        signIn(email, pass)
            .then(res => {
                setWaiting(false);
                toast.success('successfully login');
                e.target.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                setWaiting(false);
                console.log(error.message)
                toast.error(error.message)
            })
    }
    const handleGoogleLogin = () => {
        setWaiting(true);
        providerLogin(GoogleProvider)
            .then(res => {
                setWaiting(false);
                toast.success('successfully login');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setWaiting(false);
                console.log(error.message)
                toast.error(error.message)
            })
    }
    return (
        <div className='my-4'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto relative">
                <div className="card-body">
                    <form onSubmit={handleLogin}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='pass' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>Create Account, <Link to={'/signup'} className='text-green-500 font-bold'>Sign Up</Link></p>
                    <div className="divider">OR</div>
                    <div className="my-2">
                        <button className="btn btn-outline btn-success w-full font-bold" onClick={handleGoogleLogin}>Login With Gmail</button>
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
    );
};

export default Login;