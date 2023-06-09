import React, {useEffect, useRef, useState} from 'react';
import profilePic from '../images/profile-pic.png'

const ProfileMenu = ({logoutHandler}) => {
    const [isProfileModel, setIsProfileModel] = useState(false)
    const profileRef = useRef()

    useEffect(() => {
        const handleModel = (e) => {
            if (profileRef.current) {
                if (!profileRef.current.contains(e.target)) {
                    setIsProfileModel(false)
                }
            }
        }
        document.addEventListener('mousedown', handleModel)
    }, [])

    return (
        <div ref={profileRef} className={'profile-menu relative'}>
            <div className={'profile-icon w-8 cursor-pointer hover:scale-105 transition'} onClick={()=> setIsProfileModel(prev => !prev)}>
                <img src={profilePic} alt="" className={'w-full'}/>
            </div>
            <div className={`profile-model w-[200px] p-4 backdrop-sepia-0 bg-white/80 absolute top-12 right-0 rounded-lg ${isProfileModel ? 'block' : 'hidden'} transition flex flex-col items-center justify-center gap-4`}>
                <div className="name line-clamp-1 text-[#032541FF] font-bold">
                    Niket Mishra
                </div>
                <div className="email text-[#032541FF] font-bold">
                    {'niketmishra@gmail.com'.slice(0,18)}...
                </div>
                <div className={'bg-[#0EA5E9FF] w-full py-2 px-3 text-center rounded-lg cursor-pointer'} onClick={logoutHandler}>Logout</div>
            </div>
        </div>
    );
};

export default ProfileMenu;