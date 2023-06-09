import React, {useState} from 'react';
import {AiFillHeart} from "react-icons/ai";
import {SlActionRedo} from "react-icons/sl";
import {BsFillStarFill} from "react-icons/bs";
import {CgPlayListAdd} from 'react-icons/cg'
import CommentSection from "./CommentSection";
import {useGlobleAuth, useGlobleLiked} from "../contexts";
import {SaveModel} from "./index";

const VideoDescription = ({videoDetails}) => {
    const {addToLike, likedVideos} = useGlobleLiked()
    const [isSaveModel, setIsSaveModel] = useState(false)

    const isInLiked = (id) => {
        return likedVideos.find(video => video._id === id)
    }

    return (
        <div className="video-description md:ml-2">
            <h1 className={'video-title font-bold text-xl pl-2'}>{videoDetails?.title}</h1>
            <div className="video-buttons flex gap-8 pl-2 m-3 text-2xl">
                <div
                    className="like flex gap-1 items-center justify-center cursor-pointer text-[#ffffff80] backdrop-sepia-0 bg-white/5 hover:bg-white/20 transition p-2 rounded-lg" onClick={()=>addToLike(videoDetails)}>
                    <AiFillHeart
                        className={`${localStorage.getItem('encodedToken') && isInLiked(videoDetails?._id) ? 'text-red-500' : 'text-[#ffffff80]'}`}/>
                    <span className={'text-sm'}>Liked</span>
                </div>
                <div
                    className="share flex gap-1 items-center justify-center cursor-pointer text-[#ffffff80] backdrop-sepia-0 bg-white/5 hover:bg-white/20 transition p-2 rounded-lg">
                    <SlActionRedo/>
                    <span className={'text-sm'}>Share</span>
                </div>
                <div
                    className="save flex gap-1 items-center justify-center cursor-pointer text-[#ffffff80] backdrop-sepia-0 bg-white/5 hover:bg-white/20 transition p-2 rounded-lg" onClick={()=>setIsSaveModel(true)}>
                    <CgPlayListAdd/>
                    <span className={'text-sm'}>Save</span>
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
            <CommentSection videoDetails={videoDetails}/>
            {
                isSaveModel &&
                <SaveModel setIsSaveModel={setIsSaveModel} video={videoDetails}/>
            }
        </div>
    );
};

export default VideoDescription;