import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth/cordova';
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {

    const [user,setUser] = useState('');

    const logIn = (email,password) =>{
      return signInWithEmailAndPassword(auth,email,password);
    }

    const signUp = (email,password) =>{
      return createUserWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn = () =>{
      return signInWithPopup(auth,googleProvider);
    }

    const gitSignIn = () =>{
      return signInWithPopup(auth,gitProvider);
    }

    const logOut = () =>{
      return signOut(auth);
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        console.log(currentUser);
        setUser(currentUser);
      })
      return () => {
        unsubscribe();
      }
    },[])

    const userInfo = {
      user,
      setUser,
      logIn,
      signUp,
      googleSignIn,
      gitSignIn,
      logOut
    };

    return (
        <AuthContext value={userInfo}>
          {children}
        </AuthContext>
    );
};

export default AuthProvider;