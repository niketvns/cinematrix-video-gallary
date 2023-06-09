import {createContext, useContext, useState, useEffect, useReducer} from "react";
import {initialValue, reducerFunction} from "./Reducer/reducer";
import axios from "axios";
import {useGlobleAlerts} from "./alertContext";

const historyContext = createContext()

const HistoryProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    const [isHistoryLoading, setIsHistoryLoading] = useState(false)
    const {getAlert} = useGlobleAlerts()

    const removeFromHistory = async (id) => {
        setIsHistoryLoading(true)
        const encodedToken = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.delete(`/api/user/history/${id}`, {
                headers: {authorization: encodedToken}
            })
            dispatch({type: 'addToHistory', payload: data.history});
            getAlert('success', 'Video Removed From History', '')
        }catch (error) {
            console.log(error)
        }finally {
            setIsHistoryLoading(false)
        }
    }

    const addToHistory = async (video) => {
        setIsHistoryLoading(true)
        const encodedToken = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.post('/api/user/history', {video}, {
                headers: {authorization: encodedToken}
            })
            dispatch({type: 'addToHistory', payload: data.history});
        }catch (error) {
            console.log(error)
        }finally {
            setIsHistoryLoading(false)
        }
    }

    return(
        <historyContext.Provider value={{isHistoryLoading, historyVideos: state.historyArray, addToHistory, removeFromHistory}}>
            {children}
        </historyContext.Provider>
    )
}

const useGlobleHistory = () => useContext(historyContext);

export {HistoryProvider, useGlobleHistory}