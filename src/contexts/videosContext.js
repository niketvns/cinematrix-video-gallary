import {createContext, useContext, useEffect, useReducer} from "react";
import axios from "axios";
import {initialValue, reducerFunction} from "./Reducer/reducer";

const videosContext = createContext()

const VideosProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducerFunction, initialValue);

    const fetchVideos = async () =>{
        try{
            const {data} = await axios.get('/api/videos');
            dispatch({type: 'fetch-videos', payload: data.videos});
        }catch (err) {
            console.log(err)
        }finally {
            dispatch({type: 'product-loading', payload: false})
        }
    }

    useEffect(()=>{
        fetchVideos();
    },[])


    return(
        <videosContext.Provider value={{videos: state.videos, isProductLoading: state.isProductLoading}}>
            {children}
        </videosContext.Provider>
    )
}

const useGlobleVideos = () => useContext(videosContext);

export {VideosProvider, useGlobleVideos}