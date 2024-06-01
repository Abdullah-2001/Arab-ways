import React, { useContext, useState, useSyncExternalStore } from 'react';
import '../../styles/components.css'
import home from '../../assets/home.svg'
import { BiHomeAlt } from 'react-icons/bi'
import { AiOutlineBell } from 'react-icons/ai'
import { BsChatLeftText } from 'react-icons/bs'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'
import chat from '../../assets/chat.svg'
import explore from '../../assets/travel_explore.svg'
import user from '../../assets/person.svg'
import Dropdown from '../dropdown/dropdown';
import Button from '../button/button';
import logout from '../../assets/logout.svg'
import { useNavigate } from 'react-router-dom';
import { LangContext } from '../../components/context/language/langContext';
import Modal from '../modal/modal';
import LogoutModal from '../modal/logoutModal';

const Sidebar = () => {

    const storedLanguage = localStorage.getItem("language");
    const { lang } = useContext(LangContext);
    var lng = lang?.language;
    const navigate = useNavigate()
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <div>
            <LogoutModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <div className={'sidebar-container'}>
                <div style={{
                    padding: "40px 0 40px 40px"
                }}>
                    <div className='logo-container'>
                        <p>{lng?.sidebarLogo}</p>
                    </div>
                    <div className={`links-container`}>
                        <div onClick={() => navigate("/dashboard")}>
                            {/* <img style={{ marginLeft: storedLanguage === "en" ? "" : "8px" }} src={home} alt="" /> */}
                            <BiHomeAlt size={22} />
                            <p>{lng?.home}</p>
                        </div>
                        <div onClick={() => navigate("/notifications")}>
                            {/* <img src={notifications} alt="" /> */}
                            <AiOutlineBell size={22} />
                            <p>{lng?.notifications}</p>
                        </div>
                        <div onClick={() => navigate("/messages")}>
                            {/* <img src={chat} alt="" /> */}
                            <BsChatLeftText size={22} />
                            <p>{lng?.messages}</p>
                        </div>
                        <div onClick={() => navigate("/explore")}>
                            {/* <img src={explore} alt="" /> */}
                            <MdOutlineTravelExplore size={22} />
                            <p>{lng?.explore}</p>
                        </div>
                        <div onClick={() => navigate("/profile")}>
                            {/* <img src={user} alt="" /> */}
                            <FaRegUser size={22} />
                            <p>{lng?.profile}</p>
                        </div>
                    </div>
                </div>
                    {/* <div style={{
                        padding: "0 0 0 40px"
                    }}>
                        <p className='change-language-title'>{lng?.languagechange}</p>
                        <Dropdown />
                    </div> */}
                    <div style={{padding: "40px 0px 40px 40px"}}>
                        <Button className="logout-btn" onClick={() => setModalVisible(true)}>
                            <img src={logout} alt="" />
                            <p>{lng?.logout}</p>
                        </Button>
                    </div>
            </div>
        </div>
    )
}

export default Sidebar  