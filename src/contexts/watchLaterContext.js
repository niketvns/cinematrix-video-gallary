import {createContext, useContext, useState, useEffect} from "react";

const watchLaterContext = createContext()

const WatchLaterProvider = ({children}) =>{


    return(
        <watchLaterContext.Provider value={'auth'}>
            {children}
        </watchLaterContext.Provider>
    )
}

const useGlobleWatchLater = () => useContext(watchLaterContext);

export {WatchLaterProvider, useGlobleWatchLater}