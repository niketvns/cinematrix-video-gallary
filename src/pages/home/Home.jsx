import React, {useEffect} from 'react';
import {Header, VideosCarousel} from "../../components";

const Home = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
    }, [])

    return (
        <main className={'min-h-[80vh]'}>
            <Header/>
            <VideosCarousel/>
        </main>
    );
};

export default Home;