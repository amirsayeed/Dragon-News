import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    
    const {logIn,setUser} = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    //console.log(location);
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        //console.log(email,password);

        logIn(email,password).then(result=>{
            console.log(result.user);
            setUser(result.user);
            navigate(`${location.state ? location.state : '/'}`);
        })
        .catch(error=>{
            console.log(error);
        })

    }

    return (
        <div className='flex items-center justify-center min-h-screen'>
             <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl px-2 py-6">
                <h2 className="text-2xl font-bold text-center">Login your account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><Link className="link link-hover">Forgot password?</Link></div>
                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <div><p>New to this site? Please <Link className='text-blue-400' to='/auth/register'>Register</Link> </p></div>
                </div>
            </div>
        </div>    
    );
};

export default Login;