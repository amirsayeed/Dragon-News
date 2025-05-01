import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
             <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl px-2 py-6">
                <h2 className="text-2xl font-bold text-center">Register your account</h2>
                <div className="card-body">
                    <form className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" />
                    <label className="label">Photo URL</label>
                    <input type="text" className="input" placeholder="Photo" />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <div className='mt-2'><p className='font-bold'>Already have an account? Please <Link className='text-blue-400' to='/auth/login'>Login</Link></p></div>
                </div>
            </div>
        </div> 
    );
};

export default Register;