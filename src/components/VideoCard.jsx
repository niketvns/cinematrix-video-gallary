import React from 'react';
import {useNavigate} from "react-router-dom";
import {useGlobleHistory} from "../contexts";

const VideoCard = ({video}) => {
    const {addToHistory} = useGlobleHistory()
    const navigate = useNavigate()

    return (
        <div className={'select-none my-4 mx-0.5 rounded-2xl cursor-pointer'} onClick={() => navigate(`/video/watch/${video._id}`)}>
            <img src={video?.thumbnail} alt="thumbnail" className={'rounded-2xl select-none'}/>
            <h2 className={'ml-2 line-clamp-1'}>{video.title}</h2>
            <h2 className={'ml-2'}>{video.dateOfPost}</h2>
        </div>
    );
};

export default VideoCard;