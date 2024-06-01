import React, { useContext, useEffect, useState } from 'react';
import '../../styles/pages.css';
import { useNavigate, useParams } from 'react-router-dom';
import { LangContext } from '../../components/context/language/langContext';
import Dropdown from '../../components/dropdown/dropdown';
import Loader from '../../components/loader/loader';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../api/api_url';
import { setLoading } from '../../store/common/commonSlice';
import { setCurrentUser, setToken } from '../../store/auth/authSlice';
import axios from 'axios';

const Login = () => {

    const { lang } = useContext(LangContext);
    var lng = lang?.language;
    const storedLanguage = localStorage.getItem("language");

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.common.loading)

    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    function handleChange(e, name) {
        setValues(() => {
            return {
                ...values,
                [name]: e.target.value
            }
        })
    }

    const handleLogin = async () => {
        dispatch(setLoading(true))
        try {
            const response = await axios.post(`${API_URL}/login`, {
                email: values.email,
                password: values.password,
            })
            if (response.status) {
                console.log("success ====>", response);
                dispatch(setLoading(false))
                dispatch(setCurrentUser(response.data.data.user))
                dispatch(setToken(response.data.data.token))
                // navigate("/dashboard")
            }
        } catch (error) {
            dispatch(setLoading(false))
            console.log("catch error ====>", error);
        }
    }

    return (
        <div className='login-container'>
            {/* <div className='float-right pt-3'>
                <Dropdown />
            </div> */}
            <div className='pt-3'>
                <p className='header-title'>Arab Ways</p>
            </div>
            <div className='form-container'>
                <p className='login-title'>{lng?.LoginTo}</p>
                <div className='login-fields-container'>
                    <div>
                        <p className='label' style={{ textAlign: storedLanguage === "ar" ? "end" : "left" }}>{lng?.YourEmail}</p>
                        <input value={values.email} onChange={(e) => handleChange(e, "email")} type="text" placeholder={lng?.entfname} />
                    </div>
                    <div style={{ marginTop: "16px" }}>
                        <p className='label' style={{ textAlign: storedLanguage === "ar" ? "end" : "left" }}>{lng?.YourPassword}</p>
                        <input value={values.password} onChange={(e) => handleChange(e, "password")} type="password" placeholder={lng?.entpass} id='password' />
                    </div>
                    <div className='login-button-container'>
                        <button
                            className={!values.email || !values.password ? "signup-outlined" : loading ? "signup-loading" : "active"}
                            disabled={!values.email || !values.password}
                            onClick={handleLogin}>
                            {loading ? <Loader loading={loading} /> : ""}
                            <p style={{ margin: "0 0 0 8px" }}>{lng?.ContinueWithEmail}</p>
                        </button>
                    </div>
                </div>
                <div className='login-grey-border'></div>
                <p onClick={() => navigate("/forget-password")} style={{
                    color: "#625AE9",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                    textDecoration: "underline",
                    marginTop: "23px",
                    cursor:"pointer"
                }}>
                    {lng?.ForgotPassword}
                </p>
                <button className='signup-link'>{lng?.CreateAccount} <span onClick={() => navigate("/signup")} style={{
                    color: "#625AE9",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                    textDecoration: "underline",
                }}>{lng?.CreateAccountSec}</span> {lng?.CreateAccountThird}</button>
            </div>
        </div>
    )
}

export default Login