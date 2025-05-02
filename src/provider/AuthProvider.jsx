import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {

    const [user,setUser] = useState('');

    const googleSignIn = () =>{
      return signInWithPopup(auth,googleProvider);
    }

    const gitSignIn = () =>{
      return signInWithPopup(auth,gitProvider);
    }

    const userInfo = {
      user,
      setUser,
      googleSignIn,
      gitSignIn
    };

    return (
        <AuthContext value={userInfo}>
          {children}
        </AuthContext>
    );
};

export default AuthProvider;