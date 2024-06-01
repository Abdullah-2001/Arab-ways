import React, { useContext, useEffect } from 'react';
import '../../styles/components.css';
import eng from '../../assets/United States of America (US).svg'
import arabic from '../../assets/Saudi Arabia (SA).svg'
import { LangContext } from "../context/language/langContext";

const Dropdown = () => {

    const { lang, langToggle } = useContext(LangContext);
    var lng = lang?.language;

    const handleSwitch = (e) => {
        // console.log('value', e.target.value)
        if (e.target.value === "ar") {
            langToggle("ar");
        }
        else if (e.target.value === "en") {
            langToggle("en");
        }
    }

    useEffect(() => {
        if (lang.name === "en") {
            localStorage.setItem("language", "en");
        } else if (lang.name === "ar") {
            localStorage.setItem("language", "ar");
        }
    }, [lang])

    const storedLanguage = localStorage.getItem("language");
    console.log("storedLanguage", storedLanguage);

    return (
        <select className='dropdown-container' name="cars" id="cars" onChange={handleSwitch}>
            <option value="" selected>
                Select Language
            </option>
            <option value="en">
                {/* <img src={eng} alt="" className='w-100' /> */}
                English
            </option>
            <option value="ar">
                {/* <img src={arabic} alt="" /> */}
                Arabic
            </option>
        </select>
    )
}

export default Dropdown