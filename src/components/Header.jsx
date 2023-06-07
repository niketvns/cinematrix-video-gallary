import React from 'react';

const Header = () => {
    return (
        <header>
            <div className={'header-image relative w-full'}>
                <img src="https://images3.alphacoders.com/129/thumb-1920-1298672.jpg" alt="walpaper" className={'w-full h-[60vh] sm:h-auto max-h-[80vh] object-cover sm:object-fill'}/>
                <div className="movie-info absolute bottom-2 left-2 w-[90vw] sm:bottom-10 sm:left-10 sm:w-[70vh] flex flex-col gap-1 sm:gap-2 backdrop-blur rounded">
                    <h1 className={'text-xl md:text-2xl line-clamp-1'}>Ant-Man and The Wasp: Quantumania</h1>
                    <p className={'line-clamp-2 sm:line-clamp-3'}>Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.</p>
                    <div className="buttons flex gap-4">
                        <button className={'bg-sky-500/100 px-4 py-1 rounded'}>Play</button>
                        <button className={'bg-sky-500/100 px-4 py-1 rounded'}>More Info</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;