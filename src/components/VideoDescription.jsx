import React from 'react';
import {AiTwotoneDislike, AiTwotoneLike} from "react-icons/ai";
import {SlActionRedo} from "react-icons/sl";
import {BsFillStarFill} from "react-icons/bs";

const VideoDescription = ({videoDetails}) => {
    return (
        <div className="video-description md:ml-2">
            <h1 className={'video-title font-bold text-xl pl-2'}>{videoDetails?.title}</h1>
            <div className="video-buttons flex gap-8 m-3 text-2xl">
                <div className="like">
                    <AiTwotoneLike
                        className={`${videoDetails?.liked ? 'text-blue-400' : 'text-[rgba(255,255,255,0.5)]'} cursor-pointer`}/>
                </div>
                <div className="dislike">
                    <AiTwotoneDislike
                        className={`${videoDetails?.disliked ? 'text-blue-500' : 'text-[rgba(255,255,255,0.5)]'} cursor-pointer`}/>
                </div>
                <div className="share">
                    <SlActionRedo className={'cursor-pointer text-[rgba(255,255,255,0.5)]'}/>
                </div>
            </div>
            <div
                className="discripription backdrop-sepia-0 bg-white/10 pb-4 pl-2 md:pl-4 md:pt-2 rounded-lg">
                <div className="genre-rating flex gap-6 my-2">
                    <div className="rating flex justify-center items-center gap-2">
                        <BsFillStarFill className={'text-amber-400'}/> {videoDetails?.rating}/10
                    </div>
                    <div
                        className="genre backdrop-sepia-0 bg-white/30 rounded-3xl mt-1 px-3">{videoDetails?.genre}</div>
                </div>
                <div className="date pb-2">{videoDetails?.dateOfPost}</div>
                <div className="basic-details flex gap-4">
                    <div className="duration">Duration: {videoDetails?.duration}</div>
                    <div className="language">Language: {videoDetails?.language}</div>
                </div>
                <div className="overview py-2">
                    <span className={'font-bold'}>Overview: </span> {videoDetails?.description}
                </div>
                <div className="director">
                    <span className={'font-bold'}>Director: </span>{videoDetails?.director}
                </div>
            </div>
        </div>
    );
};

export default VideoDescription;