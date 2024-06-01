import React, { useContext } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import FollwerUser from './FollwerUser';
import { LangContext } from '../context/language/langContext';

const ProfileFollowers = () => {

    const { lang } = useContext(LangContext);
    var lng = lang?.language;
    const storedLanguage = localStorage.getItem("language");

    return (
        <div className="profile-followers-container">
            <div className="input-container">
                <AiOutlineSearch />
                <input type="text" placeholder={lng?.searchFollowing} style={{ textAlign: storedLanguage === "ar" ? "right" : "left" }} />
            </div>
            <FollwerUser />
            <FollwerUser />
            <FollwerUser />
            <FollwerUser />
            <FollwerUser />
        </div>
    )
}


export default ProfileFollowers;
