import React from 'react';
import {useGlobleWatchLater} from "../../contexts";
import {useNavigate} from "react-router-dom";

const Playlists = () => {
    const {watchlaterVideos} = useGlobleWatchLater()
    const navigate = useNavigate()

    return (
        <div className={'playlists-main p-4 pt-24 min-h-[80vh]'}>
            <div className="wishlist w-44 h-56 backdrop-sepia-0 bg-white/5 rounded-lg relative cursor-pointer" onClick={()=>navigate('/user/watchlater')}>
                <div className="thumbnail">
                    {
                        watchlaterVideos.length ?
                        <img src={watchlaterVideos[watchlaterVideos.length - 1].thumbnail} alt="thumbnail" className={'rounded-lg w-44 h-56'}/> : null
                    }
                </div>
                <div className="details absolute bottom-0 left-0 right-0 backdrop-sepia-0 bg-white/80 text-[#032541FF] p-2 rounded-lg">
                    <h1 className={'text-xl font-bold'}>Wishlist</h1>
                    <p>{watchlaterVideos.length} {watchlaterVideos.length > 1 ? 'Videos' : 'Video'}</p>
                </div>
            </div>
        </div>
    );
};

export default Playlists;