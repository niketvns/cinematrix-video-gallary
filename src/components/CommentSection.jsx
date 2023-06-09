import React, {useState} from 'react';
import userProfile from "../images/profile-pic.png";
import commentProfile from "../images/comment-profile.png";
import {useNavigate} from "react-router-dom";
import {useGlobleAuth} from "../contexts";

const CommentSection = ({videoDetails}) => {
    const [isCommentBtn, setIsCommentBtn] = useState(false)
    const navigate = useNavigate()
    const {loginToken} = useGlobleAuth()

    return (
        <div className="comment-section m-4 flex flex-col gap-2">
            <h2 className={'text-xl'}>{videoDetails?.comments.length} {videoDetails?.comments.length > 1 ? 'Comments' : 'Comment'}</h2>
            <div className="post-comment flex gap-2 justify-start items-start">
                <div className="profile">
                    <img src={userProfile} alt="pic" className={'w-8'}/>
                </div>
                <div className="comment-input flex-1 flex flex-col gap-2">
                    <textarea name="" id="" rows="1" placeholder={'Add a comment...'} className={'w-full h-auto p-2 bg-transparent border-0 border-b outline-0  resize-none'} onClick={()=> loginToken ? setIsCommentBtn(true) : navigate('/authentication/login')}></textarea>
                    {
                        isCommentBtn &&
                        <div className="buttons flex gap-4 self-end">
                            <button
                                className={'backdrop-sepia-0 hover:bg-white/10 transition px-3 py-1 rounded-lg'} onClick={()=>setIsCommentBtn(false)}>Cancel
                            </button>
                            <button className={'bg-[#0EA5E9FF] px-3 py-1 rounded-lg'}>Comment</button>
                        </div>
                    }
                </div>
            </div>
            <div className="all-comments py-2 px-4">
                {
                    videoDetails?.comments.map(comment => (
                        <div key={comment.id} className="ind-comment flex items-start justify-start gap-2 my-2">
                            <div className="profile">
                                <img src={commentProfile} alt="pic" className={'w-8'}/>
                            </div>
                            <div className="comment-details flex-1">
                                <h3 className={'capitalize text-md'}>{comment.user}</h3>
                                <div className="comment line-clamp-3 text-sm">{comment.message}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CommentSection;