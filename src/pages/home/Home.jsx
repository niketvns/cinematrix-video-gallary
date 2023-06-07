import React from 'react';
import {Header, VideosCarousel} from "../../components";

const Home = () => {
    return (
        <main className={'min-h-[80vh]'}>
            <Header/>
            <VideosCarousel/>
        </main>
    );
};

export default Home;