import React, { useContext } from 'react';
import '../../styles/components.css';
import Input from '../input/input';
import Button from '../button/button';
import tune from '../../assets/tune.svg'
import profile from '../../assets/profile.svg'
import { LangContext } from '../context/language/langContext';

const Header = () => {
    const storedLanguage = localStorage.getItem("language");
    const { lang } = useContext(LangContext);
    var lng = lang?.language;
    return (
        <div className={'header-container'}>
            <div className={"header"}>
                <div className='filter-main-container'>
                    <div className='filter-container'>
                        <Input type="text" placeholder={lng?.headersearch} className="search-arab-ways" />
                        <Button className="filter-btn">
                            <img src={tune} alt="" />
                        </Button>
                    </div>
                    <div className='quick-filter'>
                        <button>{lng?.restaurant}</button>
                        <button>{lng?.hotel}</button>
                        <button>{lng?.coffeeshop}</button>
                        <button>{lng?.travelreports}</button>
                        <button>{lng?.travelgeneraltopics}</button>
                    </div>
                </div>
                <div className={"profile-icon-container"}>
                    <img src={profile} alt="" />
                    <div className='username-email'>
                        <p style={{ textAlign: "left" }}>{lng?.profileUser}</p>
                        <p>icotsolutions@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='header-bottom-line'></div>
        </div>
    )
}

export default Header