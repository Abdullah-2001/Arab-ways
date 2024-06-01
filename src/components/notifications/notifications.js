import React, { useContext } from 'react';
import '../../styles/components.css';
import user from '../../assets/profile.svg'
import { LangContext } from '../context/language/langContext';

const Notifications = ({ style }) => {

    const { lang } = useContext(LangContext);
    var lng = lang?.language;
    const storedLanguage = localStorage.getItem("language");

    return (
        <div className={storedLanguage === "en" ? 'notification-container' : "notification-container-second"} style={style}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: storedLanguage === "en" ? "" : "end"
            }}>
                <div style={{ display: "flex", justifyContent: storedLanguage === "ar" ? "end" : "", marginLeft: storedLanguage === "ar" ? 12 : "", display: 'flex', paddingLeft: '16px', marginBottom: '5px' }}>
                    <img src={user} alt="" style={{ width: '35px', height: 'auto', marginLeft: '-16px' }} />
                    <img src={user} alt="" style={{ width: '35px', height: 'auto', marginLeft: '-16px' }} />
                    <img src={user} alt="" style={{ width: '35px', height: 'auto', marginLeft: '-16px' }} />
                </div>
                <div className='notification-from'>
                    <p><span style={{ fontWeight: "600" }}>{lng?.notificationUser}</span> {lng?.notification}</p>
                    <p>July 31, 2023</p>
                </div>
            </div>
            <div className='unread'>
            </div>
        </div>
    )
}

export default Notifications