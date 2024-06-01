import React, { useContext } from 'react';
import Input from '../../components/input/input'
import TextArea from '../../components/textarea/textarea';
import '../../styles/pages.css'
import Button from '../button/button';
import { LangContext } from '../context/language/langContext';

const EditForm = () => {

    const { lang } = useContext(LangContext);
    var lng = lang?.language;
    const storedLanguage = localStorage.getItem("language");

    return (
        <div className='edit-detail-container'>
            <div className='bio-container'>
                <p className='label'>{lng?.profileBioLabel}</p>
                <TextArea value="Allah has blessed Pakistan with the best mountain trekking in the world. Inshallah one day we will make Pakistan the skiing capital of the world" type="text" className="bio" />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: storedLanguage === "ar" ? "right" : "",
            }}>
                <div className='edit-name-container'>
                    <p className='label'>{lng?.fullnameLabel}</p>
                    <Input value="Noor ul abedin" type="text" className="edit-detail" />
                </div>
                <div className='edit-name-container'>
                    <p className='label'>{lng?.usernameLabel}</p>
                    <Input value="noorulabedin" type="text" className="edit-detail" />
                </div>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: storedLanguage === "ar" ? "right" : "",
                // flexDirection: storedLanguage === "ar" ? "row-reverse" : ""
            }}>
                <div className='edit-email-container'>
                    <p className='label'>{lng?.emailLabel}</p>
                    <Input value="noorulabedin@gmail.com" type="text" className="edit-detail" />
                </div>
                <div className='edit-phone-container'>
                    <p className='label'>{lng?.phoneLabel}</p>
                    <Input value="03452986475" type="text" className="edit-detail" />
                </div>
            </div>
            <div className='line'></div>
            <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                flexDirection: storedLanguage === "ar" ? "row-reverse" : "",
                textAlign: storedLanguage === "ar" ? "right" : "",
            }}>
                <div>
                    <p className='personal-info-title'>{lng?.passwordSecurity}</p>
                    <p className='edit-personal-info'>{lng?.youCanChange}</p>
                </div>
                <div>
                    <Button className="update-password">{lng?.updatePassword}</Button>
                </div>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: storedLanguage === "ar" ? "right" : "",
            }}>
                <div className='edit-email-container'>
                    <p className='label'>{lng?.newPasswordLabel}</p>
                    <Input value="Choose new password..." type="text" className="edit-detail" />
                </div>
                <div className='edit-phone-container'>
                    <p className='label'>{lng?.confirmNewPasswordLabel}</p>
                    <Input value="Retype new password" type="text" className="edit-detail" />
                </div>
            </div>
            <p style={{
                color: "#536471",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                letterSpacing: "-0.3px",
                margin: "24px 0 0 0",
                textAlign: storedLanguage === "ar" ? "right" : "",
            }}>By clicking Update Password your password will be changed</p>
        </div>
    )
}

export default EditForm