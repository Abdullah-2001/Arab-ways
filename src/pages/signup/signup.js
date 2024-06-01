import React, { useState, useContext } from 'react';
import '../../styles/pages.css';
import { useNavigate } from 'react-router-dom';
import { LangContext } from '../../components/context/language/langContext';
import Dropdown from '../../components/dropdown/dropdown';
import axios from 'axios';
import { API_URL } from '../../api/api_url';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../store/common/commonSlice';
import Loader from '../../components/loader/loader';
import CountrySelect from "../../components/dropdown/CountrySelect"

const Signup = () => {

    const { lang } = useContext(LangContext);
    var lng = lang?.language;
    const storedLanguage = localStorage.getItem("language");

    const [values, setValues] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        phone: null,
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.common.loading)

    function handleChange(e, name) {
        setValues(() => {
            return {
                ...values,
                [name]: e.target.value
            }
        })
    }

    const handleSignup = async () => {
        dispatch(setLoading(true))
        try {
            const response = await axios.post(`${API_URL}/register`, {
                username: values.username,
                name: values.name,
                email: values.email,
                password: values.password,
                phone: values.phone,
            })
            if (response.status) {
                console.log("success ====>", response);
                dispatch(setLoading(false))
                navigate("/")
            }
        } catch (error) {
            dispatch(setLoading(false))
            console.log("catch error ====>", error);
        }
    }

    return (
        <div className='signup-container'>
            {/* <div className='float-right pt-2'>
                <Dropdown />
            </div> */}
            <div className='pt-2'>
                <p className='header-title'>Arab Ways</p>
            </div>
            <div className='form-container'>
                <p className='sign-up-title'>{lng?.regaccount}</p>
                <p className='title2'>{lng?.welcome}</p>
                <div className='signup-fields-container'>
                    <div style={{ display: "flex" }}>
                        <div>
                            <p className='label' style={{ textAlign: storedLanguage === "ar" ? "end" : "left" }}>{lng?.regfname}</p>
                            <input value={values.username} onChange={(e) => handleChange(e, "username")} type="text" placeholder={lng?.entfname} />
                        </div>
                        <div style={{ marginLeft: "16px" }}>
                            <p className='label' style={{ textAlign: storedLanguage === "ar" ? "end" : "left" }}>{lng?.regusername}</p>
                            <input value={values.name} onChange={(e) => handleChange(e, "name")} type="text" placeholder={lng?.entusername} />
                        </div>
                    </div>

                    <div style={{ margin: "16px 0" }}>
                        <p className='label' style={{ textAlign: storedLanguage === "ar" ? "end" : "left" }}>{lng?.country}</p>
                        <CountrySelect />
                    </div>
                    <div style={{ display: "flex", margin: "16px 0" }}>
                        <div style={{ width: '100%' }}>
                            <p className='label' style={{ textAlign: storedLanguage === "ar" ? "end" : "left" }}>{lng?.bio}</p>
                            <textarea placeholder='Enter you Bio...' name="postContent" rows={4} />
                        </div>
                    </div>
                    <div style={{ display: "flex", margin: "16px 0" }}>
                        <div>
                            <p className='label' style={{ textAlign: storedLanguage === "ar" ? "end" : "left" }}>{lng?.regemail}</p>
                            <input value={values.email} onChange={(e) => handleChange(e, "email")} type="email" placeholder={lng?.entemail} />
                        </div>
                        <div style={{ marginLeft: "16px" }}>
                            <p className='label' style={{ textAlign: storedLanguage === "ar" ? "end" : "left" }}>{lng?.regphone}</p>
                            <input value={values.phone} onChange={(e) => handleChange(e, "phone")} type="number" placeholder={lng?.entphone} />
                        </div>
                    </div>
                    <div style={{ margin: "0 0 24px 0" }}>
                        <p className='label' style={{ textAlign: storedLanguage === "ar" ? "end" : "left" }}>{lng?.regpass}</p>
                        <input value={values.password} onChange={(e) => handleChange(e, "password")} type="password" placeholder={lng?.entpass} id='password' />
                    </div>
                    <div>
                        <button
                            className={!values.username || !values.name || !values.email || !values.phone || !values.password ? "signup-outlined" : loading ? "signup-loading" : "active"}
                            disabled={!values.username || !values.name || !values.email || !values.phone || !values.password}
                            onClick={handleSignup}>
                            {loading ? <Loader loading={loading} /> : ""}
                            <p style={{ margin: "0 0 0 8px" }}>{lng?.regaccountbtn}</p>
                        </button>
                    </div>
                </div>
                <div className='signup-grey-border'></div>
                <button className='signin-link'>
                    {lng?.CreateAccount}
                    <span onClick={() => navigate("/")} style={{
                        color: "#625AE9",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                        textDecoration: "underline",
                    }}>{lng?.regsigninbtn}
                    </span>
                    {lng?.regsigninbtnsec}
                </button>
            </div>
        </div>
    )
}

export default Signup