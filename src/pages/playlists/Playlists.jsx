import React from 'react';
import {useGloblePlaylists, useGlobleWatchLater} from "../../contexts";
import {useNavigate} from "react-router-dom";
import emptyPlaylist from '../../images/empty-playlist.png'
import {CgPlayList} from 'react-icons/cg'
import {MdOutlineWatchLater} from 'react-icons/md'
import {AiFillPlayCircle} from 'react-icons/ai'
import {SpinnerLoader} from "../../components";

const Playlists = () => {
    const {watchlaterVideos} = useGlobleWatchLater()
    const navigate = useNavigate()
    const {isPlaylistLoading, allPlaylists} = useGloblePlaylists()

    return (
        <div className={'playlists-main p-4 pt-24 min-h-[80vh] flex flex-wrap gap-6'}>
            {
                isPlaylistLoading ?
                    <div
                        className={'text-2xl md:text-3xl text-[#ffffff80] min-h-[50vh] w-full flex justify-center items-center'}>
                        <SpinnerLoader/>
                    </div> :
                    <>
                        <div
                            className="wishlist w-44 h-56 backdrop-sepia-0 bg-white/5 rounded-lg relative cursor-pointer"
                            onClick={() => navigate('/user/watchlater')}>
                            <div className="thumbnail">
                                {
                                    watchlaterVideos.length ?
                                        <img src={watchlaterVideos[watchlaterVideos.length - 1].thumbnail}
                                             alt="thumbnail"
                                             className={'rounded-lg w-44 h-56'}/> :
                                        <img src={emptyPlaylist} alt="empty" className={'w-full'}/>
                                }
                            </div>
                            <div
                                className="details absolute bottom-0 left-0 right-0 backdrop-sepia-0 bg-white/80 text-[#032541FF] p-2 rounded-lg">
                                <h1 className={'text-xl font-bold flex items-center'}><MdOutlineWatchLater/>Watch Later
                                </h1>
                                <p className={'flex items-center gap-0.5'}>
                                    <AiFillPlayCircle/>{watchlaterVideos.length} {watchlaterVideos.length > 1 ? 'Videos' : 'Video'}
                                </p>
                            </div>
                        </div>
                        {
                            allPlaylists?.map(playlist => (
                                <div key={playlist._id}
                                     className="playlist w-44 h-56 backdrop-sepia-0 bg-white/5 rounded-lg relative cursor-pointer"
                                     onClick={() => navigate(`/user/playlist/${playlist._id}`)}>
                                    <div className="thumbnail">
                                        {
                                            playlist?.videos?.length ?
                                                <img src={playlist?.videos[playlist?.videos?.length - 1].thumbnail}
                                                     alt="thumbnail" className={'rounded-lg w-44 h-56'}/> :
                                                <img src={emptyPlaylist} alt="empty" className={'w-full'}/>
                                        }
                                    </div>
                                    <div
                                        className="details absolute bottom-0 left-0 right-0 backdrop-sepia-0 bg-white/80 text-[#032541FF] p-2 rounded-lg">
                                        <h1 className={'text-xl font-bold flex items-center'}>
                                            <CgPlayList/>{playlist.title}
                                        </h1>
                                        <p className={'flex items-center gap-0.5'}>
                                            <AiFillPlayCircle/>{playlist?.videos?.length} {playlist?.videos?.length > 1 ? 'Videos' : 'Video'}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    < />
            }
        </div>
    );
};

export default Playlists;