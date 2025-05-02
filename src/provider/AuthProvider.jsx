import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth/cordova';
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {

    const [user,setUser] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const logIn = (email,password) =>{
      setIsLoading(true);
      return signInWithEmailAndPassword(auth,email,password);
    }

    const signUp = (email,password) =>{
      setIsLoading(true);
      return createUserWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn = () =>{
      setIsLoading(true);
      return signInWithPopup(auth,googleProvider);
    }

    const gitSignIn = () =>{
      setIsLoading(true);
      return signInWithPopup(auth,gitProvider);
    }

    const logOut = () =>{
      setIsLoading(true);
      return signOut(auth);
    }

    const updateUser = updated =>{
      return updateProfile(auth.currentUser,updated);
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        console.log(currentUser);
        setUser(currentUser);
        setIsLoading(false);
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
      logOut,
      isLoading,
      updateUser
    };

    return (
        <AuthContext value={userInfo}>
          {children}
        </AuthContext>
    );
};

export default AuthProvider;