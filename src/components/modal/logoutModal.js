import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faClose, faImage, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './modal.css'
import '../../styles/components.css';
import profile from '../../assets/profile.svg'
import { LangContext } from '../context/language/langContext';
import tune from '../../assets/tune.svg'
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../store/common/commonSlice';
import { setCurrentUser, setToken } from '../../store/auth/authSlice';
import Loader from '../loader/loader';

function LogoutModal(props) {

    const storedLanguage = localStorage.getItem("language");
    const { lang } = useContext(LangContext);
    var lng = lang?.language;

    const { modalVisible, setModalVisible } = props

    console.log('lang', storedLanguage);

    const handleYesClick = () => {
        setModalVisible(true)
    };

    const handleNoClick = () => {
        setModalVisible(false)
    };

    const dispatch = useDispatch()
    const loading = useSelector((state) => state.common.loading)

    const handleLogout = () => {
        dispatch(setLoading(true))
        setTimeout(() => {
            dispatch(setCurrentUser(null))
            dispatch(setToken(null))
            dispatch(setLoading(false))
        }, 2000)
    }

    let changingCss = 'flex items-center justify-between align-top  p-4 rounded-t-2xl dark:border-gray-600 w-100 bg-gray-50'
    let rowReverse = ' flex-row-reverse'

    return (
        <div>
            {modalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-500 z-50">
                    <div className="bg-white rounded-2xl shadow w-full max-w-2xl max-h-full">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-2xl shadow dark:bg-gray-700">
                            {/* Modal header left */}
                            <div className={storedLanguage == "en" ? changingCss : changingCss + rowReverse}>
                                <div className={storedLanguage == "en" ? 'flex justify-start align-middle w-100' : ' flex justify-end align-middle w-100'}>
                                    <p className={'w-8 h-8 mr-3 mt-1 flex justify-center items-center rounded-md border-1 hover:text-purple-500 border-purple-400 hover:border-purple-500 shadow dark:bg-purple-700'}>
                                        <FontAwesomeIcon icon={faPlus} className='text-purple-500' />
                                    </p>
                                    <h3 className="text-xl font-medium text-gray-900 mt-1 dark:text-white">{lng?.logoutHead}</h3>
                                </div>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-start dark:hover:bg-gray-600 dark:hover:text-white"                                >
                                    <FontAwesomeIcon icon={faClose} onClick={handleNoClick} />
                                </button>
                            </div>

                            {/* Modal body */}
                            <div className={storedLanguage == "en" ? "flex p-6 space-y-6 justify-start align-middle" : "flex p-6 space-y-6 justify-start align-middle" + rowReverse}>
                                <div className="mr-3 mt-2" style={{ textAlign: storedLanguage === "ar" ? "right" : "left" }}>
                                    <h4 style={{ fontWeight: "700" }}>{lng?.logoutTitle2}</h4>
                                    <p style={{ color: "#536471" }}>{lng?.logoutTitle3}</p>
                                </div>
                                {/* <textarea placeholder={lng?.WhatDoYouWant} className={`${storedLanguage == "en" ? '' : "text-right"} outline-custom text-base leading-relaxed border-none outline-none active:outline-none visited:border-none w-100 text-gray-500 dark:text-gray-200 mt-0 pt-3 resize-none`} /> */}
                            </div>

                            {/* Modal Second body */}
                            {/* <div className="filter-main-container flex p-6 space-y-6 justify-start align-middle">
                                <div className='quick-filter'>
                                    <button>{lng?.restaurant}</button>
                                    <button>{lng?.hotel}</button>
                                    <button>{lng?.coffeeshop}</button>
                                    <button>{lng?.travelreports}</button>
                                    <button>{lng?.travelgeneraltopics}</button>
                                </div>
                            </div> */}

                            {/* Modal footer */}
                            <div className={`flex items-center ${storedLanguage === "ar" ? "" : "justify-end"} p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600 w-100`}>
                                {/* <div className="flex justify-around">
                                    <button className="filter-btn hover:border-purple-500 hover:text-purple-500">
                                        <FontAwesomeIcon icon={faImage} />
                                    </button>
                                    <button className="filter-btn hover:border-purple-500 hover:text-purple-500">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </button>
                                </div> */}
                                <div>
                                    <button
                                        style={{ backgroundColor: "#BD3D44", margin: "0 16px 0 0" }}
                                        onClick={handleLogout}
                                        data-modal-hide="large-modal"
                                        type="button"
                                        className="px-4 py-2 text-white focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-md border border-gray-200 text-sm font-medium hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                    >
                                        Logout
                                    </button>
                                    <button
                                        style={{ backgroundColor: "rgba(83, 100, 113, 0.20)", color: "#536471" }}
                                        onClick={handleNoClick}
                                        data-modal-hide="large-modal"
                                        type="button"
                                        className="px-4 py-2 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-md border border-gray-200 text-sm font-medium hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                    >
                                        Keep me logged in
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LogoutModal;