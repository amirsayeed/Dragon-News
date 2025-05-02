import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const {signUp,setUser,updateUser} = use(AuthContext);
    //console.log(signUp);
    const navigate = useNavigate();
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        //console.log(name,photo,email,password);
        
        signUp(email,password).then(result=>{
            console.log(result.user);

            const profile = {
                displayName: name,
                photoURL: photo
            }
            updateUser(profile).then(()=>{
                setUser(result.user);
                navigate('/');
            })
            .catch(error=>{
                console.log(error);
            })
            
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div className='flex items-center justify-center min-h-screen'>
             <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl px-2 py-6">
                <h2 className="text-2xl font-bold text-center">Register your account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Photo URL</label>
                    <input type="text" name='photo' className="input" placeholder="Photo" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" required />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" required />
                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <div className='mt-2'><p className='font-bold'>Already have an account? Please <Link className='text-blue-400' to='/auth/login'>Login</Link></p></div>
                </div>
            </div>
        </div> 
    );
};

export default Register;