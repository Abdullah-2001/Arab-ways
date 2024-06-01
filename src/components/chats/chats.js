import React, { useContext } from 'react';
import '../../styles/components.css';
import user from '../../assets/profile.svg';
import { LangContext } from '../context/language/langContext';

const Chats = () => {


  const { lang } = useContext(LangContext);
  var lng = lang?.language;
  const count = 5
  const storedLanguage = localStorage.getItem("language");

  return (
    <div className={storedLanguage === "en" ? 'chat-container' : 'chat-container-second'}>
      <div style={{
        display: "flex",
        flexDirection: storedLanguage === "en" ? "" : "row-reverse"
      }}>
        <div className='chat-user-img' style={{ marginLeft: storedLanguage === "ar" ? 12 : "" }}>
          <img src={user} alt="" />
        </div>
        <div className='chat-message-time'>
          <p>{lng?.chatUser}</p>
          <p>{lng?.lastMessage}</p>
          <p>{lng?.lastMessageAt}</p>
        </div>
      </div>
      <div className='messages-count'>
        {count}
      </div>
    </div>
  )
}

export default Chats