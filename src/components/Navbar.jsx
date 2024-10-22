import React, {useEffect, useState} from 'react';
import logo from '../images/logo.png'
import {IoSearch} from 'react-icons/io5'
import {RxHamburgerMenu} from 'react-icons/rx'
import {GoHome} from 'react-icons/go'
import {AiOutlineLike} from 'react-icons/ai'
import {MdOutlineWatchLater} from 'react-icons/md'
import {GoHistory} from 'react-icons/go'
import {MdPlaylistPlay} from 'react-icons/md'
import {NavLink, Link} from "react-router-dom";
import {useGlobleAuth} from "../contexts";
import ProfileMenu from "./ProfileMenu";
import {SearchModel} from "./index";

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const {loginToken, logoutHandler} = useGlobleAuth()
    const [isSearch, setIsSearch] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 30) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })

    return (
        <>
            <nav
                className={`navbar-main flex justify-between p-2 lg:px-8 lg:py-3 items-center fixed top-0 left-0 right-0 z-10 ${navbar ? 'bg-[#032541FF]' : 'bg-transparent'}`}>
                <div className="left flex items-center gap-4">
                    <div className="hamburger-menu text-xl cursor-pointer sm:hidden" onClick={() => setIsMenu(true)}>
                        <RxHamburgerMenu/>
                    </div>
                    <Link to={'/'} className="logo">
                        <img src={logo} alt="Cinematrix" className={'w-28 sm:w-36 lg:w-44'}/>
                    </Link>
                    <ul className={`nav-options fixed top-0 left-0 bg-[#064172FF] h-full min-w-fit px-8 py-4 pb-72 flex flex-col gap-4 text-white ${isMenu ? 'translate-x-0' : '-translate-x-full'} transition-all sm:translate-x-0 sm:text-white sm:p-0 sm:static sm:bg-transparent sm:h-auto sm:flex-row sm:gap-4 md:gap-6 lg:gap-8 sm:text-lg lg:text-xl`}>
                        <div
                            className="hamburger-menu flex justify-center items-center gap-3 text-xl mb-8 sm:mb-0 sm:hidden">
                            <RxHamburgerMenu className={'cursor-pointer'} onClick={() => setIsMenu(false)}/>
                            <img src={logo} alt="Cinematrix" className={'w-28 sm:w-36 lg:w-44'}/>
                        </div>
                        <li className={'cursor-pointer'}>
                            <NavLink to={'/'} className={'flex items-center gap-2'} onClick={() => setIsMenu(false)}>
                                <span><GoHome className={'text-xl text-white'}/></span> Home
                            </NavLink>
                        </li>
                        <li className={'cursor-pointer'}>
                            <NavLink to={'/user/liked'} className={'flex items-center gap-2'}
                                     onClick={() => setIsMenu(false)}>
                                <span><AiOutlineLike className={'text-xl'}/></span>Liked
                            </NavLink>
                        </li>
                        <li className={'cursor-pointer sm:hidden'}>
                            <NavLink to={'/user/watchlater'} className={'flex items-center gap-2'}
                                     onClick={() => setIsMenu(false)}>
                                <span><MdOutlineWatchLater className={'text-xl'}/></span>Watch Later
                            </NavLink>
                        </li>
                        <li className={'cursor-pointer'}>
                            <NavLink to={'/user/history'} className={'flex items-center gap-2'}
                                     onClick={() => setIsMenu(false)}>
                                <span><GoHistory className={'text-xl'}/></span>History
                            </NavLink>
                        </li>
                        <li className={'cursor-pointer'}>
                            <NavLink to={'/user/playlists'} className={'flex items-center gap-2'}
                                     onClick={() => setIsMenu(false)}>
                                <span><MdPlaylistPlay className={'text-xl'}/></span>Playlists
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="right flex items-center justify-center gap-3 lg:gap-6">
                    <div className="search cursor-pointer  text-xl" onClick={()=>setIsSearch(prev => !prev)}>
                        <IoSearch/>
                    </div>
                    {
                        loginToken ?
                            <ProfileMenu logoutHandler={logoutHandler}/> :
                            <button className="login cursor-pointer bg-sky-500/100 px-4 py-1 rounded">
                                <Link to={'/authentication/login'}>Login</Link>
                            </button>
                    }
                </div>
            </nav>
            {isSearch && <SearchModel setIsSearch={setIsSearch}/>}
        </>
    );
};

export default Navbar;