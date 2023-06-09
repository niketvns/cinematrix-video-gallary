import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useGlobleAuth} from "../contexts";

const RequireAuth = () => {
    const {loginToken} = useGlobleAuth()
    return (
        loginToken ? <Outlet/> : <Navigate to={'/authentication/login'}/>
    );
};

export default RequireAuth;