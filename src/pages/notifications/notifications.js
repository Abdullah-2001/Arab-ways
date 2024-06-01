import React, { useContext, useState } from 'react';
import Notification from '../../components/notifications/notifications';
import '../../styles/pages.css';
import { LangContext } from '../../components/context/language/langContext';

const Notifications = () => {


    const { lang } = useContext(LangContext);
    var lng = lang?.language;
    const [select, setSelect] = useState({
        all: true,
        unread: false,
    })
    const storedLanguage = localStorage.getItem("language");

    return (
        <div className='notifications-container'>
            <div style={{ padding: "20px 16px 16px" }}>
                <p className={storedLanguage == "en" ? 'notification-heading' : 'notification-heading-second'}>{lng?.notificationHead}</p>
                <div className={storedLanguage === "en" ? 'select-notification-container' : 'select-notification-container-second'}>
                    <p
                        style={{ marginLeft: storedLanguage === "ar" ? 32 : "" }}
                        onClick={() => setSelect({ all: true, unread: false })}
                        className={select.all === true ? "active-tab" : "not-active-tab"}>
                        {lng?.notificationAll}
                    </p>
                    <p
                        onClick={() => setSelect({ all: false, unread: true })}
                        className={select.unread === true ? "active-tab" : "not-active-tab"}>
                        {lng?.notificationUnread}
                    </p>
                </div>
            </div>
            <div className='select-options-bottom-line'></div>
            <div>
                <Notification style={{ background: "rgba(98, 90, 233, 0.10)", padding: "20px 16px 16px" }} />
                <Notification style={{ padding: "20px 16px 16px" }} />
                <Notification style={{ padding: "20px 16px 16px" }} />
                <Notification style={{ padding: "20px 16px 16px" }} />
                <Notification style={{ padding: "20px 16px 16px" }} />
            </div>
        </div>
    )
}

export default Notifications