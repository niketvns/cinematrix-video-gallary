import {createContext, useContext, useState, useEffect} from "react";

const playlistsContext = createContext()

const PlaylistsProvider = ({children}) =>{


    return(
        <playlistsContext.Provider value={'auth'}>
            {children}
        </playlistsContext.Provider>
    )
}

const useGloblePlaylists = () => useContext(playlistsContext);

export {PlaylistsProvider, useGloblePlaylists}