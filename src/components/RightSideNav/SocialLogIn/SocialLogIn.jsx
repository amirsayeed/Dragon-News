import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../provider/AuthProvider';

const SocialLogIn = () => {
    const {googleSignIn,user,setUser,gitSignIn} = useContext(AuthContext);
    //console.log(googleSignIn);
    const handleGoogleSignIn = () =>{
        googleSignIn().then(result=>{
            setUser(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handleGitSignIn = () =>{
        gitSignIn().then(result=>{
            setUser(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    if(!user){
        return (
        <div>
            <h2 className='text-lg font-bold text-primary'>Login With</h2>
            <div className='space-y-2 mt-3'>
                <button onClick={handleGoogleSignIn} className='btn w-full'><FcGoogle size={20} />Login With Google</button>
                <button onClick={handleGitSignIn} className='btn w-full'><FaGithub size={20} />Login With Github</button>
            </div>
        </div>       
        );
    }else{
        return '';
    }
};

export default SocialLogIn;