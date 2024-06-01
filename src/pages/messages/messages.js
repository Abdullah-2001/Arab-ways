import React, { useContext } from 'react';
import '../../styles/pages.css';
import Chats from '../../components/chats/chats';
import Input from '../../components/input/input';
import { LangContext } from '../../components/context/language/langContext';

const Messages = () => {


    const { lang } = useContext(LangContext);
    var lng = lang?.language;
    const storedLanguage = localStorage.getItem("language");

    return (
        <div className={storedLanguage === "en" ? 'messages-container' : 'messages-container-second'}>
            <div style={{ padding: "20px 16px 16px" }}>
                <p>{lng?.message}</p>
                <Input type="text" placeholder={lng?.searchChat} className="search-chat" />
            </div>
            <Chats />
            <Chats />
            <Chats />
            <Chats />
            <Chats />
        </div>
    )
}

export default Messages