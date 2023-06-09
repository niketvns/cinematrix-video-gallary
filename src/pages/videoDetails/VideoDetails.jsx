import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {SpinnerLoader, SuggestedVideos, VideoDescription, VideoPlayer, VideosCarousel} from "../../components";
import axios from "axios";
import {useGlobleHistory} from "../../contexts";

const VideoDetails = () => {
    const [videoDetails, setVideoDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()
    const {addToHistory} = useGlobleHistory()

    const fetchVideoData = async () => {
        setIsLoading(true)
        try {
            const {data} = await axios.get(`/api/video/${id}`)
            setVideoDetails(data.video)
            addToHistory(data.video)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        fetchVideoData()
    }, [id])

    return (
        isLoading ?
            <div className={'pt-14 flex justify-center items-center min-h-[93vh]'}>
                <SpinnerLoader/>
            </div> :
            <div className={'video-details-main pt-14 lg:flex md:pr-2 overflow-hidden'}>
                <div className="video max-w-5xl lg:max-w-3xl xl:max-w-4xl 3xl:max-w-6xl md:ml-2 lg:mt-8">
                    <VideoPlayer videoDetails={videoDetails}/>
                    <VideoDescription videoDetails={videoDetails}/>
                </div>
                <div className="suggested-videos-mobile lg:hidden">
                    <VideosCarousel/>
                </div>
                <div className="suggested-videos-desktop hidden flex-1 rounded-lg xl:p-4 lg:flex flex-col lg:gap-4 items-center">
                    <h3 className={'text-2xl'}>Suggested Videos</h3>
                    <SuggestedVideos currentId={id}/>
                </div>
            </div>
    );
};

export default VideoDetails;