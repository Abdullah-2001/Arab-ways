import React, { useContext } from 'react';
import EditForm from '../../components/edit-profile-form/edit-form';
import Aside from '../../components/sider/aside'
import Button from '../../components/button/button'
import { LangContext } from '../../components/context/language/langContext';

const EditProfile = () => {

    const { lang } = useContext(LangContext);
    var lng = lang?.language;
    const storedLanguage = localStorage.getItem("language");

    return (
        <div className='edit-profile-container' style={{ padding: "20px 16px 16px" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: storedLanguage === "ar" ? "row-reverse" : "",
                textAlign: storedLanguage === "ar" ? "right" : "",
            }}>
                <div>
                    <p className='personal-info-title'>{lng?.personalInfo}</p>
                    <p className='edit-personal-info'>{lng?.youCanEdit}</p>
                </div>
                <div>
                    <Button className="save-changes">{lng?.saveChanges}</Button>
                </div>
            </div>
            <EditForm />
        </div>
    )
}

export default EditProfile