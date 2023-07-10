import React, {useEffect, useRef, useState} from 'react';
import {useGlobleVideos} from "../contexts";
import {useNavigate} from "react-router-dom";
import {AiFillStar} from 'react-icons/ai'

const SearchModel = ({setIsSearch}) => {
    const [searchInput, setSearchInput] = useState('')
    const {videos} = useGlobleVideos()
    const navigate = useNavigate()
    const searchRef = useRef()
    const searchInputRef = useRef()

    const searchResult = videos.filter(video => video.title.toUpperCase().includes(searchInput.toUpperCase()))

    const searchInputHandler = (e) => {
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        searchInputRef.current.focus()
        const handleModel = (e) => {
            if (searchRef.current) {
                if (!searchRef.current.contains(e.target)) {
                    setIsSearch(false)
                }
            }
        }
        document.addEventListener('mousedown', handleModel)
    }, [])

    return (
        <div
            className={'search-model-main fixed inset-0 z-20 w-full h-full bg-black/60 p-8 text-black flex justify-center items-start'}>
            <div ref={searchRef} className={'flex flex-col gap-4 items-center'}>
                <div className="search-input w-[90vw] xs:w-auto">
                    <input ref={searchInputRef} type="search" name="search" id="search" placeholder={'Movies, Shows and more'}
                           className={'w-full xs:w-[70vw] p-3 outline-0 rounded-lg'} onChange={searchInputHandler}
                           value={searchInput} autoComplete={'off'}/>
                </div>
                {
                    searchInput.length &&
                    <div
                        className="search-result bg-white/80 w-full xs:w-[70vw] rounded-lg p-4 overflow-auto max-h-[70vh]">
                        {
                            searchResult.length ?
                                searchResult.map(video => (
                                    <div key={video._id} className="search-data flex gap-6 pt-2 hover:bg-black/10 cursor-pointer"
                                         onClick={() => {
                                             navigate(`/video/watch/${video._id}`)
                                             setIsSearch(false)
                                         }}>
                                        <div className="thumbnail w-16">
                                            <img src={video?.thumbnail} alt="thumbnail" className={'w-full h-full'}/>
                                        </div>
                                        <div className="details">
                                            <h2 className={'line-clamp-2'}>{video?.title}</h2>
                                            <p className={'flex items-center'}> <AiFillStar className={'text-yellow-600'}/> {video?.rating}/10</p>
                                        </div>
                                    </div>
                                )) :
                                <p>Nothing Found for <b>"{searchInput}"</b></p>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default SearchModel;