import React, {useEffect, useRef} from 'react';
import {BiAddToQueue} from "react-icons/bi";
import {useGlobleWatchLater} from "../contexts";

const SaveModel = ({setIsSaveModel, video}) => {
    const saveModelRef = useRef()
    const {addToWatchlater, removeFromWatchlater, watchlaterVideos} = useGlobleWatchLater()

    useEffect(() => {
        const handleModel = (e) => {
            if (saveModelRef.current) {
                if (!saveModelRef.current.contains(e.target)) {
                    setIsSaveModel(false)
                }
            }
        }
        document.addEventListener('mousedown', handleModel)
    }, [])

    const addToPlaylistHandler = (e) => {
        if(e.target.checked && e.target.name === 'watchlater'){
            addToWatchlater(video)
        }else {
            removeFromWatchlater(video._id)
        }
    }

    const isInWatchlater = (id) => {
        return watchlaterVideos.find(video => video._id === id)
    }

    return (
        <div className={'save-model-main flex justify-center items-center fixed inset-0 z-10 bg-[rgba(0,0,0,0.4)]'}>
            <div ref={saveModelRef} className="save-card backdrop-sepia-0 bg-white/70 p-8 text-black min-w-52 rounded-lg">
                <div className="close-icon">

                </div>
                <h1 className={'text-2xl pb-2'}>Save To</h1>
                <div className="save-options flex flex-col items-start gap-4">
                    <label className="ind-option select-none text-xl flex justify-center items-center gap-2">
                        <input type="checkbox" name="watchlater" id="watchlater" checked={isInWatchlater(video._id)} className={'w-4 h-4'} onChange={addToPlaylistHandler}/>
                        Watch Later
                    </label>
                    <label className="ind-option select-none text-xl flex justify-center items-center gap-2">
                        <input type="checkbox" name="pl1" id="pl1" className={'w-4 h-4'} onChange={addToPlaylistHandler}/>
                        Playlist-1
                    </label>
                    <label className="ind-option select-none text-xl flex justify-center items-center gap-2">
                        <input type="checkbox" name="pl2" id="pl2" className={'w-4 h-4'} onChange={addToPlaylistHandler}/>
                        Playlist-2
                    </label>
                </div>
                <div className="create-new pt-2 text-lg">
                    <button className={'flex justify-center items-center gap-2 bg-[#0EA5E9FF] p-2 rounded-lg text-white'}> <BiAddToQueue/> Create new playlist</button>
                </div>
            </div>
        </div>
    );
};

export default SaveModel;