import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import Loading from '../Pages/Shared/Loading';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    // const [waiting, setWaiting] = useState(false);
    // const [loginError, setLoginError] = useState('');
    // const location = useLocation();
    // const navigate = useNavigate();
    // // const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        // setWaiting(true);
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                // setLoginError('');
                // setWaiting(false);
                // e.target.reset();
                // navigate(from, { replace: true })
            })
            .catch(error => {
                // setWaiting(false);
                // setLoginError(error)
                console.error(error)
            });
    }

    // useEffect(() => {
    //     if (waiting) {
    //         <Loading></Loading>
    //     }
    // }, [waiting])

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="card-body">
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
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
            {/* <p className='text-red-700'>{loginError}</p> */}
        </div>
    );
};
export default Login;