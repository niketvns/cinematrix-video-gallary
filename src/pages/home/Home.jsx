import React, {useEffect} from 'react';
import {Header, SpinnerLoader, VideosCarousel} from "../../components";
import {useGlobleVideos} from "../../contexts";

const Home = () => {
    const {videos, isProductLoading} = useGlobleVideos()

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
    }, [])

    const videosByGenre = (genre) => {
        return videos.filter(video => video.genre === genre)
    }

    return (
        isProductLoading ?
            <div className={'text-2xl md:text-3xl text-[#ffffff80] min-h-[80vh] w-full flex justify-center items-center'}>
                <SpinnerLoader/>
            </div> :
        <main className={'min-h-[80vh]'}>
            <Header/>
            <VideosCarousel heading={"All Movies"} videos={videos}/>
            <VideosCarousel heading={"Adventure"} videos={videosByGenre('Adventure')}/>
            <VideosCarousel heading={"Science Fiction"} videos={videosByGenre('Science Fiction')}/>
            <VideosCarousel heading={"Action"} videos={videosByGenre('Action')}/>
        </main>
    );
};

export default Home;