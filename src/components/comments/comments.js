import React, { useContext } from 'react';
import '../../styles/components.css';
import user from '../../assets/profile.svg'
import publicPost from '../../assets/public.svg'
import like from '../../assets/heart-purple.svg'
import chat from '../../assets/chat-purple.svg'
import Button from '../button/button';
import { LangContext } from '../context/language/langContext';

const Comments = () => {
    
    const { lang } = useContext(LangContext);
    var lng = lang?.language;
    const storedLanguage = localStorage.getItem("language");
    console.log(storedLanguage);

    return (
        <div className='comments-container'>
            <div className={"comment-message"}>
                <div>
                    <img src={user} alt="" />
                </div>
                <div className='comment'>
                    <p className='comment-user'>{lng?.commentBy}</p>
                    <p>{lng?.comment}</p>
                    <div className='comment-type'>
                        <img src={publicPost} alt="" />
                        <p>{lng?.commentAt}</p>
                    </div>
                </div>
            </div>
            <div className={"comment-actions"}>
                <Button className="reply-comment">
                    <img src={chat} alt="" />
                    {lng?.replyComment}
                </Button>
                <Button className="like-comment">
                    <img src={like} alt="" />
                    {lng?.likeComment}
                </Button>
            </div>
        </div>
    )
}

export default Comments