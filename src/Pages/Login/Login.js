import React from 'react';
import image from '../../Assets/images/login/login.svg';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
    }

    return (
        <div className="hero my-8">
            <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2">
                <div className="text-center lg:text-left ">
                    <img className='w-3/4' src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-4xl font-semibold text-center">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className='text-center py-2'>
                            <p>New to genius car? <Link to='/signup' className='text-orange-600 font-bold'>Sign Up</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;