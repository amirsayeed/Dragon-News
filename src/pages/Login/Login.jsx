import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
             <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl px-2 py-6">
                <h2 className="text-2xl font-bold text-center">Login your account</h2>
                <div className="card-body">
                    <form className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <div><p>New to this site? Please <Link className='text-blue-400' to='/auth/register'>Register</Link> </p></div>
                </div>
            </div>
        </div>    
    );
};

export default Login;