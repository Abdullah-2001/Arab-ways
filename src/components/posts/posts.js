import React, { useContext } from 'react';
import user from '../../assets/profile.svg'
import add from '../../assets/add.svg'
import more from '../../assets/more.svg'
import postImage from '../../assets/post-image.png'
import share from '../../assets/share.svg'
import comment from '../../assets/chat-purple.svg'
import like from '../../assets/heart-purple.svg'
import repost from '../../assets/repost-purple.svg'
import location from '../../assets/pak.svg'
import Button from '../button/button';
import Input from '../input/input';
import Comments from '../comments/comments';
import { LangContext } from '../context/language/langContext';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Posts = ({ style }) => {

    const { lang } = useContext(LangContext);
    var lng = lang?.language;
    const storedLanguage = localStorage.getItem("language");
    console.log(storedLanguage);

    return (
        <div style={style}>
            <div className={"posts-container"}>
                <div className={"posted-user-container"}>
                    <div>
                        {false ? <Skeleton width="40px" height="40px" borderRadius="100%" /> : <img src={user} alt="" />}
                    </div>
                    <div style={{ marginLeft: "12px" }}>
                        {false ? <Skeleton width="386.19px" height="18px" /> : <p className='post-user-name'>Muhammad Aman</p>}
                        <div className='post-details'>
                            {false ? <Skeleton width="386.19px" height="18px" /> :
                                <>
                                    <p>@MuhammadAmanofficial</p>
                                    <p style={{ color: "#000", fontSize: "12px", fontStyle: "normal", fontWeight: "700", letterSpacing: "-0.24px", marginLeft: "12px" }}>July 31, 2023</p>
                                    <p style={{ color: "#505050", fontSize: "12px", fontStyle: "normal", fontWeight: "400", letterSpacing: "-0.24px", marginLeft: "5px" }}>{lng?.postedat}</p>
                                    <p style={{ color: "#000", fontSize: "12px", fontStyle: " normal", fontWeight: "700", letterSpacing: "-0.24p", marginLeft: "12px" }}>Pakistan</p>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className='follow-container'>
                    <div>
                        <img src={add} alt="" />
                        <p>{lng?.follow}</p>
                    </div>
                    <img src={more} alt="" />
                </div>
            </div>
            <div className={"post-title-container"}>
                {false ? <Skeleton width="100%" height="100%" /> : <p>{lng?.postTitle}
                    <span style={{
                        color: "#625AE9",
                        textDecoration: "underline",
                        fontSize: "15px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "22px",
                        letterSpacing: "-0.3px",
                    }}>Read more</span>
                </p>}
            </div>
            <div className={"travel-report-container"}>
                {false ? <Skeleton width="111px" height="34px" borderRadius="100px" /> : <Button className="travel-report">
                    {lng?.travelReport}
                </Button>}
            </div>
            <div className='post-image-container'>
                {false ? <Skeleton width="100%" height="282.8px" borderRadius="10px" /> : <img width="100%" src={postImage} alt='' />}
            </div>
            <div className={"action-container"}>
                <div className='location-from'>
                    <img src={location} alt="" />
                    <p>{lng?.postLocation}</p>
                </div>
                <div style={{ display: "flex" }}>
                    <Button className="action-button">
                        <img src={comment} alt="" />
                        <p>20</p>
                    </Button>
                    <Button className="action-button">
                        <img src={like} alt="" />
                        <p>40</p>
                    </Button>
                    <Button className="action-button">
                        <img src={repost} alt="" />
                        <p>37</p>
                    </Button>
                    <Button className="action-button-4">
                        <img src={share} alt="" />
                    </Button>
                </div>
            </div>
            <div className={"comment-section-container"}>
                <img src={user} alt="" />
                <Input type="text" placeholder={lng?.addComment} className="comment-box" />
                <Button className="post-comment">
                    <p>Post Comment</p>
                </Button>
            </div>
            <Comments />
            <Comments />
            <Comments />
        </div>
    )
}

export default Posts