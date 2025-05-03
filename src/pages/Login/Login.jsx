import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    
    const {logIn,setUser,passwordReset} = use(AuthContext);
    const [errorMsg,setErrorMsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const emailRef = useRef();
    //console.log(location);
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        //console.log(email,password);

        setErrorMsg('');

        logIn(email,password).then(result=>{
            //console.log(result.user);
            setUser(result.user);
            navigate(`${location.state ? location.state : '/'}`);
        })
        .catch(error=>{
            console.log(error);
            setErrorMsg(error.message);
        })
     }

     const handleForgetPassword = () =>{
        const email = emailRef.current.value;

        setErrorMsg('');
        
        passwordReset(email).then(()=>{
            console.log('A password reset email has been sent to your email');
        })
        .catch(error=>{
            console.log(error);
            setErrorMsg(error.message);
        })
     }

    return (
        <div className='flex items-center justify-center min-h-screen'>
             <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl px-2 py-6">
                <h2 className="text-2xl font-bold text-center">Login your account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" required />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" required />
                    <div><Link onClick={handleForgetPassword} className="link link-hover">Forgot password?</Link></div>
                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <div><p>New to this site? Please <Link className='text-blue-400' to='/auth/register'>Register</Link> </p></div>
                    {errorMsg && <p className='text-red-400'>{errorMsg}</p>}
                </div>
            </div>
        </div>    
    );
};

export default Login;