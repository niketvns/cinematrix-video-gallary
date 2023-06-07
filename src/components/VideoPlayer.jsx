import React from 'react';

const VideoPlayer = ({videoDetails}) => {
    return (
        <div className="video-player p-1">
            <iframe
                src={videoDetails?.videoLink+'?rel=0&amp;controls=1&amp;showinfo=0&amp;modestbranding=1'}
                title="YouTube video player" frameBorder="0"
                allowFullScreen
                className={'w-full h-[60vw] md:h-[400px] lg:h-[60vw] max-h-[500px] rounded-lg'}>
                color={'green'}
            </iframe>
        </div>
    );
};

export default VideoPlayer;