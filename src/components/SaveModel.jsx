import React, {useEffect, useRef, useState} from 'react';
import {BiAddToQueue} from "react-icons/bi";
import {useGloblePlaylists, useGlobleWatchLater} from "../contexts";
import {SpinnerLoader} from "./index";

const SaveModel = ({setIsSaveModel, video}) => {
    const [isInputOpen, setIsInputOpen] = useState(false)
    const [playlistInput, setPlaylistInput] = useState('')
    const saveModelRef = useRef()
    const {addToWatchlater, removeFromWatchlater, watchlaterVideos} = useGlobleWatchLater()
    const {createPlaylist, addToPlaylist, removeFromPlaylist, allPlaylists, isPlaylistLoading} = useGloblePlaylists()

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

    const isInPlaylist = (id) => {
        return allPlaylists.find(playlist => playlist.videos.find(({_id})=>_id === id))
    }

    const addToPlaylistHandler = (e) => {
        if (e.target.name === 'watchlater') {
            if (e.target.checked) {
                addToWatchlater(video)
            } else {
                removeFromWatchlater(video._id)
            }
        } else {
            if (e.target.checked) {
                addToPlaylist(e.target.id, video)
            } else {
                removeFromPlaylist(e.target.id, video._id);
            }
        }
    }

    const isInWatchlater = (id) => {
        return watchlaterVideos.find(video => video._id === id)
    }

    const playlistCreateHandler = (e) => {
        createPlaylist(playlistInput, 'This is a playlist')
        setPlaylistInput('')
        setIsInputOpen(false)
    }

    return (
        <div className={'save-model-main flex justify-center items-center fixed inset-0 z-10 bg-[rgba(0,0,0,0.4)]'}>
            <div ref={saveModelRef}
                 className="save-card backdrop-sepia-0 bg-white/80 p-8 text-black min-w-52 rounded-lg max-h-[80vh] overflow-auto">
                <div className="close-icon">
                    {/*Here will be close icon*/}
                </div>
                <h1 className={'text-2xl pb-2'}>Save To</h1>
                {
                    isPlaylistLoading ?
                        <div
                            className={'text-2xl md:text-3xl text-[#ffffff80] h-full w-full flex justify-center items-center'}>
                            <SpinnerLoader/>
                        </div> :
                        <>
                            <div className="save-options flex flex-col items-start gap-4">
                                <label
                                    className="ind-option select-none text-xl flex justify-center items-center gap-2">
                                    <input type="checkbox" name="watchlater" id="watchlater"
                                           checked={isInWatchlater(video._id)}
                                           className={'w-4 h-4'} onChange={addToPlaylistHandler} value={'watchlater'}/>
                                    Watch Later
                                </label>
                                {
                                    allPlaylists?.map(playlist => (
                                        <label key={playlist._id}
                                               className="ind-option select-none text-xl flex justify-center items-center gap-2">
                                            <input type="checkbox" name={playlist.title} id={playlist._id}
                                                   className={'w-4 h-4'}
                                                   checked={isInPlaylist(video._id)?._id === playlist._id}
                                                   onChange={addToPlaylistHandler}/>
                                            {playlist.title}
                                        </label>
                                    ))
                                }
                            </div>
                            {
                                isInputOpen &&
                                <div className="create-playlist-input">
                                    <input type="text" placeholder={'Playlist Title'}
                                           className={'w-full px-1 py-1 rounded outline-0 mt-2'}
                                           onChange={(e) => setPlaylistInput(e.target.value)}/>
                                    <div className="create-btn flex justify-end">
                                        <button className={'bg-[#0EA5E9FF] px-3 py-0.5 rounded text-white mt-1'}
                                                onClick={playlistCreateHandler}>Create
                                        </button>
                                    </div>
                                </div>
                            }
                            {
                                !isInputOpen &&
                                <div className="create-new pt-2 text-lg">
                                    <button
                                        className={'flex justify-center items-center gap-2 bg-[#0EA5E9FF] p-2 rounded-lg text-white'}
                                        onClick={() => setIsInputOpen(prev => !prev)}><BiAddToQueue/> Create new
                                        playlist
                                    </button>
                                </div>
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default SaveModel;