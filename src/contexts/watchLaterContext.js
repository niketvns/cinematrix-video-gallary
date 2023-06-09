import {createContext, useContext, useState, useReducer} from "react";
import {initialValue, reducerFunction} from "./Reducer/reducer";
import axios from "axios";
import {useToast} from "@chakra-ui/react";

const watchLaterContext = createContext()

const WatchLaterProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    const [isWatchlaterLoading, setIsWatchlaterLoading] = useState(false)
    const toast = useToast()

    const removeFromWatchlater = async (id) => {
        setIsWatchlaterLoading(true)
        const encodedToken = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.delete(`/api/user/watchlater/${id}`, {
                headers: {authorization: encodedToken}
            })
            dispatch({type: 'addToWatchLater', payload: data.watchlater});
            toast({
                title: 'Removed from Watch Later',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
        }catch (error) {
            console.log(error)
        }finally {
            setIsWatchlaterLoading(false)
        }
    }

    const addToWatchlater = async (video) => {
        setIsWatchlaterLoading(true)
        const encodedToken = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.post('/api/user/watchlater', {video}, {
                headers: {authorization: encodedToken}
            })
            dispatch({type: 'addToWatchLater', payload: data.watchlater});
            toast({
                title: 'Added to Watch Later',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
        }catch (error) {
            console.log(error)
        }finally {
            setIsWatchlaterLoading(false)
        }
    }

    return(
        <watchLaterContext.Provider value={{isWatchlaterLoading, watchlaterVideos: state.watchlaterArray, addToWatchlater, removeFromWatchlater}}>
            {children}
        </watchLaterContext.Provider>
    )
}

const useGlobleWatchLater = () => useContext(watchLaterContext);

export {WatchLaterProvider, useGlobleWatchLater}