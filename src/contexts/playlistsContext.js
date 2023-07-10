import {createContext, useContext, useState, useEffect, useReducer} from "react";
import axios from "axios";
import {initialValue, reducerFunction} from "./Reducer/reducer";
import {useGlobleAlerts} from "./alertContext";

const playlistsContext = createContext()

const PlaylistsProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    const [isPlaylistLoading, setIsPlaylistLoading] = useState(false)
    const {getAlert} = useGlobleAlerts()

    const fetchAllPlaylists = async () =>{
        setIsPlaylistLoading(true);
        const encodedToken = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.get('/api/user/playlists', {
                headers: {authorization: encodedToken}
            })
            console.log(data);
            dispatch({type: 'addToPlaylist', payload: data.playlists});
        }catch (error) {
            console.log(error)
            getAlert('error', 'Error Encountered!', error.message);
        }finally {
            setIsPlaylistLoading(false)
        }
    }

    const createPlaylist = async (title, description) => {
        setIsPlaylistLoading(true)
        const encodedToken = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.post('/api/user/playlists', {
                playlist: {title, description }
            }, {
                headers: {authorization: encodedToken}
            })
            console.log(data)
            dispatch({type: 'addToPlaylist', payload: data.playlists});
            getAlert('success', `Playlist Created!`, '')
        }catch (error) {
            console.log(error)
        }finally {
            setIsPlaylistLoading(false)
        }
    }

    const removeFromPlaylist = async (playlistId, vidoeId) => {
        setIsPlaylistLoading(true)
        const encodedToken = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.delete(`/api/user/playlists/${playlistId}/${vidoeId}`, {
                headers: {authorization: encodedToken}
            })
            fetchAllPlaylists();
            getAlert('success', `Video Removed from ${data.playlist.title}`, '')
        }catch (error) {
            console.log(error)
        }finally {
            setIsPlaylistLoading(false)
        }
    }

    const addToPlaylist = async (id, video) => {
        // setIsPlaylistLoading(true)
        const encodedToken = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.post(`/api/user/playlists/${id}`, {video}, {
                headers: {authorization: encodedToken}
            })
            const res = await fetchAllPlaylists();
            // getAlert('success', `Video added to ${data.playlist.title}`, '')
        }catch (error) {
            console.log(error)
        }finally {
            setIsPlaylistLoading(false)
        }
    }


    return(
        <playlistsContext.Provider value={{isPlaylistLoading, createPlaylist, addToPlaylist, removeFromPlaylist, allPlaylists: state.playlistsArray}}>
            {children}
        </playlistsContext.Provider>
    )
}

const useGloblePlaylists = () => useContext(playlistsContext);

export {PlaylistsProvider, useGloblePlaylists}