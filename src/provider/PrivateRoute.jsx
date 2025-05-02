import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user,isLoading} = use(AuthContext);
    const location = useLocation();
    //console.log(location)
    if(isLoading){
        return <Loading/>
    }
    return(
        <>
            {user ? children : <Navigate state={location.pathname} to='/auth/login'/>}
        </>
    );
}
export default PrivateRoute;