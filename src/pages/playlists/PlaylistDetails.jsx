import React, {useEffect, useState} from 'react';
import {SpinnerLoader} from "../../components";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useGloblePlaylists} from "../../contexts";

const PlaylistDetails = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {isPlaylistLoading, allPlaylists, removeFromPlaylist} = useGloblePlaylists()


    const playlistDetails = allPlaylists.find(playlist => playlist._id === id)

    useEffect(()=>{
        window.scrollTo({top: 0, left: 0});
    },[])

    return (
        <div className={'liked-videos-main p-2 pt-16 min-h-[80vh] flex flex-col gap-6 md:flex-row relative'}>
            {
                !isPlaylistLoading ?
                    playlistDetails?.videos?.length ?
                        <>
                            <div className="preview-image w-full backdrop-blur-0 bg-white/20 flex items-center md:flex-col gap-4 md:max-w-[300px] rounded-lg md:sticky top-16 md:max-h-[90vh] md:min-h-[89vh] md:p-2">
                                <img src={playlistDetails.videos[playlistDetails.videos.length-1].thumbnail} alt="preview" className={'min-w-[100px] w-[30vw] h-44 md:h-[40vh] bg-red-600 rounded-lg'}/>
                                <div className="liked-heading flex-1 w-full pl-2 xs:pl-8">
                                    <h1 className={'text-2xl'}>{playlistDetails.title}</h1>
                                    <p>Niket Kumar Mishra</p>
                                    <p>{playlistDetails.videos.length} videos</p>
                                </div>
                            </div>
                            <div className="all-videos flex flex-col gap-2 md:flex-1 py-4">
                                {
                                    playlistDetails.videos.map(video => (
                                        <div key={video._id} className={'ind-video flex justify-start items-start gap-4 min-h-[220px] backdrop-sepia-0 bg-white/5 md:mr-4'}>
                                            <div className="thumbnail max-w-[150px] cursor-pointer" onClick={()=>navigate(`/video/watch/${video._id}`)}>
                                                <img src={video?.thumbnail} alt="thumbnail" className={'rounded-lg'}/>
                                            </div>
                                            <div className="contains h-[220px] flex flex-col justify-between flex-1 py-4">
                                                <div className="details">
                                                    <h1 className={'text-lg line-clamp-2 md:text-xl'}>{video?.title}</h1>
                                                    <p className={'line-clamp-1'}>Rating: {video?.rating}/10</p>
                                                    <p className={'line-clamp-1'}>Director: {video?.director}</p>
                                                </div>
                                                <button className={'bg-[#0EA5E9FF] p-2 rounded-lg max-w-[200px] inline'} onClick={()=>removeFromPlaylist(playlistDetails._id, video._id)}>
                                                    Remove <span className={'hidden md:inline'}>from {playlistDetails.title}</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </> :
                        <div className={'text-2xl md:text-3xl text-[#ffffff80] min-h-[50vh] w-full flex justify-center items-center'}>
                            Nothing in the Playlist
                        </div> :
                    <div className={'text-2xl md:text-3xl text-[#ffffff80] min-h-[50vh] w-full flex justify-center items-center'}>
                        <SpinnerLoader/>
                    </div>
            }
        </div>
    );
};

export default PlaylistDetails;