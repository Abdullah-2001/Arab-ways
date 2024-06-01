import React, { useContext } from 'react';
import followerUserImage from '../../assets/profile.svg'
import CustomDropdown from './CustomDropdown'
import { LangContext } from '../context/language/langContext';

const FollwerUser = () => {

    const { lang } = useContext(LangContext);
    var lng = lang?.language;
    const storedLanguage = localStorage.getItem("language");

    return (
        <div className={storedLanguage === "en" ? "follower-user" : "follower-user-second"}>
            <div className="follower-user-image" style={{ marginLeft: storedLanguage === "ar" ? 12 : "" }}>
                <img src={followerUserImage} alt={followerUserImage} />
            </div>
            <div className="follower-user-details" style={{textAlign: storedLanguage === "ar" ? "right" : "left"}}>
                <h1>{lng?.followerName}</h1>
                <p>@Saleemkhanofficial</p>
            </div>
            <CustomDropdown />
        </div>
    )
}


export default FollwerUser;
