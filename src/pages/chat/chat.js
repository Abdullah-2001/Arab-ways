import React, { useContext } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import user from '../../assets/profile.svg'
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import '../../styles/pages.css';
import { LangContext } from '../../components/context/language/langContext'

const Chat = () => {

  const { lang } = useContext(LangContext);
  var lng = lang?.language;
  const storedLanguage = localStorage.getItem("language");

  return (
    <div className='conversation-container' style={{ padding: "20px 16px 16px" }}>
      <div className='conversation-header'>
        <FaArrowLeft />
        <img style={{ margin: "0 12px" }} src={user} alt="" />
        <p className='conversation-username'>{lng?.chatUser}</p>
      </div>
      <div className='conversation-messages'>
        <div style={{
          display: "flex",
          alignItems: "center",
          flexDirection: storedLanguage === "ar" ? "row-reverse" : "row"
        }}>
          <img style={{ margin: "0 12px" }} src={user} alt="" />
          <p className='conversation-username'>{lng?.chatUser}</p>
          <p className='message-at'>July 31, 2023</p>
        </div>
        <div style={{
          margin: "8px 62px 60px 62px",
          borderRadius: "0px 16px 16px 16px",
          background: "rgba(83, 100, 113, 0.10)",
          padding: "16px",
          color: "#0F1419",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "22px",
          letterSpacing: "-0.28px",
        }}>
          <p style={{ margin: "0" }}>{lng?.conversationMessage}</p>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          flexDirection: storedLanguage === "ar" ? "row-reverse" : "row"
        }}>
          <img style={{ margin: "0 12px" }} src={user} alt="" />
          <p className='conversation-username'>{lng?.chatUser}</p>
          <p className='message-at'>July 31, 2023</p>
        </div>
        <div style={{
          margin: "8px 62px 60px 62px",
          borderRadius: "0px 16px 16px 16px",
          background: "rgba(83, 100, 113, 0.10)",
          padding: "16px",
          color: "#0F1419",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "22px",
          letterSpacing: "-0.28px",
        }}>
          <p style={{ margin: "0" }}>{lng?.conversationMessage}</p>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          flexDirection: storedLanguage === "ar" ? "row-reverse" : "row"
        }}>
          <img style={{ margin: "0 12px" }} src={user} alt="" />
          <p className='conversation-username'>{lng?.chatUser}</p>
          <p className='message-at'>July 31, 2023</p>
        </div>
        <div style={{
          margin: "8px 62px 60px 62px",
          borderRadius: "0px 16px 16px 16px",
          background: "rgba(83, 100, 113, 0.10)",
          padding: "16px",
          color: "#0F1419",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "22px",
          letterSpacing: "-0.28px",
        }}>
          <p style={{ margin: "0" }}>{lng?.conversationMessage}</p>
        </div>
      </div>
      <div className='message-input-container' style={{ flexDirection: storedLanguage === "ar" ? "row-reverse" : "" }}>
        <Input type="text" placeholder={lng?.writeMessage} className="message-input" />
        <Button className="send-message" style={{ margin: storedLanguage === "ar" ? "0 10px 0 0" : "0 0 0 10px" }}>{lng?.sendMessage}</Button>
      </div>
    </div>
  )
}

export default Chat