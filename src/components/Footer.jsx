import React from 'react';
import {AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import googlePlay from '../images/google-play-badge.png'
import appleStore from '../images/apple-store-badge.png'

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer className={'footer-main py-4 lg:px-20 md:px-8 flex flex-col items-center md:block md:text-center border-t-2 border-t-[rgba(255,255,255,0.1)]'}>
            <div className="social-media flex flex-col gap-4 md:flex-row md:justify-between items-center pb-8">
                <div className="apps flex items-center">
                    <h3 className={'hidden sm:block md:text-xl'}>Download Apps</h3>
                    <div className="app-icons flex items-center">
                        <img src={googlePlay} alt="google-play" className={'w-28 h-12'}/>
                        <img src={appleStore} alt="apple-store" className={'w-24 h-8'}/>
                    </div>
                </div>
                <div className="links flex items-center gap-2">
                    <h3 className={'hidden sm:block'}>Connect with us</h3>
                    <div className="social-icons flex items-center gap-2 text-3xl">
                        <a href="https://www.linkedin.com/in/niket-kumar-mishra-37ab5a215/" target='_blank' rel="opener">
                            <AiFillLinkedin/>
                        </a>
                        <a href="https://github.com/niketvns" target='_blank' rel="opener">
                            <AiFillGithub/>
                        </a>
                        <a href="https://twitter.com/Niketmishravns" target='_blank' rel="opener">
                            <AiFillTwitterCircle/>
                        </a>
                        <a href="https://www.instagram.com/mishrank_mkp25675/" target='_blank' rel="opener">
                            <AiFillInstagram/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-menu flex flex-wrap justify-center pb-4">
                <div className={'cursor-pointer hover:text-blue-500 transition border-r-2 pr-1 mr-1 md:pr-4 md:mr-4 text-sm'}>About us</div>
                <div className={'cursor-pointer hover:text-blue-500 transition border-r-2 pr-1 mr-1 md:pr-4 md:mr-4 text-sm'}>Help Center</div>
                <div className={'cursor-pointer hover:text-blue-500 transition border-r-2 pr-1 mr-1 md:pr-4 md:mr-4 text-sm'}>Privacy Policy</div>
                <div className={'cursor-pointer hover:text-blue-400 transition'}>Terms of Use</div>
            </div>
            <div className="copyright text-center">Copyright &#169; Cinematrix | All Rights Reserved {year}</div>
        </footer>
    );
};

export default Footer;