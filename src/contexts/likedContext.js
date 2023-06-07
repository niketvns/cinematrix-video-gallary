import {createContext, useContext, useState, useEffect} from "react";

const likedContext = createContext()

const LikedProvider = ({children}) =>{


    return(
        <likedContext.Provider value={'auth'}>
            {children}
        </likedContext.Provider>
    )
}

const useGlobleLiked = () => useContext(likedContext);

export {LikedProvider, useGlobleLiked}