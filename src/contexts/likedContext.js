import {createContext, useContext, useState, useEffect, useReducer} from "react";
import axios from "axios";
import {useGlobleAuth} from "./authContext";
import {initialValue, reducerFunction} from "./Reducer/reducer";
import {useGlobleAlerts} from "./alertContext";

const likedContext = createContext()

const LikedProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    const [isLikedLoading, setIsLikedLoading] = useState(false)
    const {getAlert} = useGlobleAlerts()

    const removeFromLike = async (id) => {
        setIsLikedLoading(true)
        const encodedToken = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.delete(`/api/user/likes/${id}`, {
                headers: {authorization: encodedToken}
            })
            dispatch({type: 'addToLike', payload: data.likes});
            getAlert('success', 'Removed from likes', '')
        }catch (error) {
            console.log(error)
            getAlert('error', 'Error Encountered!', error.message)
        }finally {
            setIsLikedLoading(false)
        }
    }

    const addToLike = async (video) => {
        if(state.likedArray.find(vid => vid._id === video._id)){
            removeFromLike(video._id)
            return;
        }
        setIsLikedLoading(true)
        const encodedToken = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.post('/api/user/likes', {video}, {
                headers: {authorization: encodedToken}
            })
            dispatch({type: 'addToLike', payload: data.likes});
            getAlert('success', 'Added to liked', '')
        }catch (error) {
            console.log(error)
            if (error.response.status === 500){
                getAlert('error', 'Login to like Content', '')
            }else {
                getAlert('error', 'Error Encountered!', error.message)
            }
        }finally {
            setIsLikedLoading(false)
        }
    }

    return(
        <likedContext.Provider value={{addToLike, removeFromLike, isLikedLoading, likedVideos: state.likedArray}}>
            {children}
        </likedContext.Provider>
    )
}

const useGlobleLiked = () => useContext(likedContext);

export {LikedProvider, useGlobleLiked}