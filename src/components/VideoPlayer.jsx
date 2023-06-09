import React from 'react';

const VideoPlayer = ({videoDetails}) => {
    return (
        <div className="video-player m-1 backdrop-sepia-0 bg-white/5 rounded-lg">
            <iframe
                src={videoDetails?.videoLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={'w-full h-[60vw] max-h-[500px] 3xl:max-h-[600px] rounded-lg'}>
                color={'green'}
            </iframe>
        </div>
    );
};

export default VideoPlayer;