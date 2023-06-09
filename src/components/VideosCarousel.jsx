import React, {useEffect, useReducer} from 'react';
import {VideoCard} from "./index";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useGlobleVideos} from "../contexts";

const VideosCarousel = () => {
    const {videos, isProductLoading} = useGlobleVideos()

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 8,
            slidesToSlide: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 7,
            slidesToSlide: 5
        },
        tablet: {
            breakpoint: {max: 1024, min: 700},
            items: 5,
            slidesToSlide: 3
        },
        tablet2: {
            breakpoint: {max: 700, min: 500},
            items: 4,
            slidesToSlide: 3
        },
        mobile: {
            breakpoint: {max: 500, min: 400},
            items: 3,
            slidesToSlide: 3
        },
        superSmallMobile: {
            breakpoint: {max: 400, min: 0},
            items: 2,
            slidesToSlide: 2
        },
        superDuperSmallMobile: {
            breakpoint: {max: 250, min: 0},
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <>
            <section className={'my-4'}>
                <h1 className={'ml-4 text-2xl font-bold'}>Trending on Cinematrix</h1>
                <Carousel
                    responsive={responsive}
                    // centerMode={true}
                    ssr={true}
                    swipeable
                >
                    {
                        isProductLoading ?
                            <p>Loading...</p> :
                            videos.map(video => (
                                <VideoCard key={video._id} video={video}/>
                            ))
                    }
                </Carousel>
            </section>
        </>
    );
};

export default VideosCarousel;