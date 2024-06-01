import React, { useContext, useState } from 'react';
import Button from '../../components/button/button';
// import Posts from '../../components/posts/posts';
import profile from '../../assets/profile2.svg'
import '../../styles/components.css';
import Aside from '../../components/sider/aside';
import ProfileFollowers from '../../components/profile-followers/ProfileFollowers'
import edit from '../../assets/edit.svg'
import { FaUsers } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router-dom';
import followerUserImage from '../../assets/profile.svg'
import { LangContext } from '../../components/context/language/langContext';
import Posts from '../../components/posts/posts';

const Profile = () => {

    const { lang } = useContext(LangContext);
    var lng = lang?.language;

    const [select, setSelect] = useState({
        posts: true,
        followers: false,
        followings: false,
    })

    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    const storedLanguage = localStorage.getItem("language");

    return (
        <div className='profile-main-container' style={{ padding: "20px 16px 16px" }}>
            <div style={{ paddingRight: '16px' }}>
                <div className='profile-container'>
                    <div className='edit-profile'>
                        <div className='edit'>
                            <img src={edit} alt="" />
                        </div>
                        <img src={profile} alt="" />
                    </div>
                    <div className='user-details'>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <div className='user-name-email' style={{ textAlign: "left" }}>
                                <p>{lng?.profileName}</p>
                                <p>@noorulabedin</p>
                            </div>
                            <div>
                                <Button className="create-post" onClick={() => navigate("/profile/edit-profile")}>Edit profile</Button>
                            </div>
                        </div>
                        <p className={'intro'}>{lng?.profileBio}</p>
                        <div className={'following-detail'}>
                            <p style={{
                                color: "#000",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal",
                                letterSpacing: "-0.24px",
                            }}>{lng?.joined}</p>
                            <p style={{
                                margin: "0 0 0 6px",
                                color: "#505050",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "normal",
                                letterSpacing: "-0.24px",
                            }}>July 31, 2023</p>
                            <div className='dot'></div>
                            <p style={{
                                color: "#000",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal",
                                letterSpacing: "-0.24px",
                            }}>240</p>
                            <p style={{
                                margin: "0 0 0 6px",
                                color: "#505050",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "normal",
                                letterSpacing: "-0.24px",
                            }}>{lng?.following}</p>
                            <div className='dot'></div>
                            <p style={{
                                color: "#000",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal",
                                letterSpacing: "-0.24px",
                            }}>24</p>
                            <p style={{
                                margin: "0 0 0 6px",
                                color: "#505050",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "normal",
                                letterSpacing: "-0.24px",
                            }}>{lng?.followers}</p>
                        </div>
                        <div className={'select-options-container'}>
                            <p
                                style={{ marginLeft: "0", marginRight: "0" }}
                                onClick={() => setSelect({ posts: true, followers: false, followings: false })}
                                className={select.posts === true ? "active-tab" : "not-active-tab"}>
                                {lng?.posts}
                            </p>
                            <p
                                style={{ marginLeft: "32px", marginRight: "32px" }}
                                onClick={() => setSelect({ posts: false, followers: true, followings: false })}
                                className={select.followers === true ? "active-tab" : "not-active-tab"}>
                                {lng?.followers}
                            </p>
                            <p
                                style={{ marginLeft: "0", marginRight: "0" }}
                                onClick={() => setSelect({ posts: false, followers: false, followings: true })}
                                className={select.followings === true ? "active-tab" : "not-active-tab"}>
                                {lng?.following}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='select-options-bottom-line'></div>
                {select.followers === true || select.followings === true ? (
                    <ProfileFollowers />
                ) : (
                    <div style={{ marginTop: 20 }}>
                        <Posts />
                    </div>
                )}
            </div>
            {/* <div className='sidebar-followers-container' style={{ right: storedLanguage === "ar" ? "" : 0, left: storedLanguage === "ar" ? 0 : "" }}>
                <div>
                    <div className='title'>
                        <FaUsers />
                        <p>People You’re Following</p>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                </div>
                <div>
                    <div className='title'>
                        <FaUsers />
                        <p>People Around You</p>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                    <div className="user" style={{ textAlign: storedLanguage === "ar" ? "right" : "", flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
                        <div className="user-image">
                            <img src={followerUserImage} alt={followerUserImage} />
                        </div>
                        <div className="user-details">
                            <h1>Saleem Khan</h1>
                            <p>@Saleemkhanofficial</p>
                        </div>
                        <div className='follow-btn' style={{marginLeft: storedLanguage === "ar" ? 0 : "auto"}}>
                            <AiOutlinePlus />
                            Follow
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Profile