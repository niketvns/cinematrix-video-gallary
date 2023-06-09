import React from 'react';
import {Link} from "react-router-dom";
import {useGlobleHistory, useGlobleVideos} from "../contexts";

const SuggestedVideos = ({currentId}) => {
    const {videos} = useGlobleVideos()
    const {addToHistory} = useGlobleHistory()

    return (
        <div className="all-suggested-videos w-full lg:p-2 flex flex-col lg:gap-2">
            {
                videos.filter((video)=> video._id !== currentId ).map(video => (
                    <Link to={`/video/watch/${video._id}`} key={video._id}
                          className={'ind-suggested-video flex gap-4 backdrop-sepia-0 bg-white/5 cursor-pointer rounded-lg'}>
                        <div className="thumbnail">
                            <img src={video.thumbnail} alt="thumbnail"
                                 className={'max-w-[150px] rounded-lg'}/>
                        </div>
                        <div className="details flex flex-col gap-4 justify-around">
                            <div className="title-date">
                                <h2 className={'line-clamp-1 text-2xl'}>{video.title}</h2>
                                <p>{video.dateOfPost}</p>
                            </div>
                            <p className={'line-clamp-4'}>{video.description}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default SuggestedVideos;