import React, { useContext, useState } from 'react';
import '../../styles/pages.css';
import { LangContext } from '../../components/context/language/langContext';
import Dropdown from '../../components/dropdown/dropdown';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../store/common/commonSlice';
import axios from 'axios';
import { API_URL } from '../../api/api_url';
import Loader from '../../components/loader/loader';

const ForgetPassword = () => {

  const { lang } = useContext(LangContext);
  var lng = lang?.language;

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.common.loading)

  const [email, setEmail] = useState("")
  const [sendLink, setSendLink] = useState(false)

  const handleSendLink = async () => {
    dispatch(setLoading(true))
    try {
      const response = await axios.post(`${API_URL}/forgot-password`, {
        email: email,
      })
      if (response.status) {
        console.log("success ====>", response);
        dispatch(setLoading(false))
        if (response.data.message) {
          setSendLink(true)
        }
      }
    } catch (error) {
      dispatch(setLoading(false))
      console.log("catch error ====>", error);
    }
  }

  return (
    <div className='signup-container'>
      {/* <div className='float-right pt-3'>
        <Dropdown />
      </div> */}
      <div className='pt-3'>
        <p className='header-title'>Arab Ways</p>
      </div>
      <div className='form-container'>
        <p className='login-title'>{lng?.ForgetPasswordSec}</p>
        {sendLink ? (
          <p style={{
            color: "rgba(55, 53, 47, 0.65)",
            textAlign: "center",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
            width: "450px"
          }}>{lng?.sendtolink} <span style={{
            color: "#000",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
          }}>{email}</span>{lng?.forgetlink} </p>
        ) : (
          <>
            <div className='login-fields-container'>
              <div>
                <p className='label'>{lng?.regemail}</p>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder={lng?.entusername} />
              </div>
              <div className='login-button-container'>
                <button
                  className={!email ? "send-link-button" : loading ? "forget-password-loading" : "active"}
                  disabled={!email}
                  onClick={handleSendLink}
                >
                  {loading ? <Loader loading={loading} /> : ""}
                  <p style={{ margin: "0 0 0 8px" }}>{lng?.sendlink}</p>
                </button>
              </div>
            </div>
          </>
        )}
        <div className='forget-grey-border'></div>
        <p style={{
          color: "#625AE9",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
          textDecoration: "underline",
          marginTop: "23px",
          cursor: "pointer"
        }} onClick={() => navigate("/")}>
          {lng?.signin}
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

export default ForgetPassword