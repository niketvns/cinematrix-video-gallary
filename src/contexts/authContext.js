import {createContext, useContext, useState, useEffect} from "react";

const authContext = createContext()

const AuthProvider = ({children}) => {
console.log('from auth context')

    return (
        <authContext.Provider value={'auth'}>
            {children}
        </authContext.Provider>
    )
}

const useGlobleAuth = () => useContext(authContext);

export {AuthProvider, useGlobleAuth}