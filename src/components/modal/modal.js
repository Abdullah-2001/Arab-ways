import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faClose, faImage, faLocationDot, faChevronLeft,faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import './modal.css'
import '../../styles/components.css';
import profile from '../../assets/profile.svg'
import { LangContext } from '../context/language/langContext';
import tune from '../../assets/tune.svg'
import postImage from '../../assets/pexels-oleksandr-p-3278215.jpg'
import close from '../../assets/close.svg'
import Button from '../button/button';
import { useDispatch } from 'react-redux';
import { createPostAsync } from '../../middlewares/posts/posts';

function Modal(props) {

    const dispatch = useDispatch()
    const [selectLocation, setSelectLocation] = useState(false)
    const [tags, setTags] = useState([
        { id: 1, name: "Resturant 🍽", isSelected: false },
        { id: 2, name: "Hotel 🛎", isSelected: false },
        { id: 3, name: "Coffee Shop ☕", isSelected: false },
        { id: 4, name: "Travel Reports ⛰", isSelected: false },
        { id: 5, name: "Travel General Topics ✈", isSelected: false },
    ])
    const [values, setValues] = useState({
        title: "",
        location: "",
        tags: [],
        images: [],
    })

    const storedLanguage = localStorage.getItem("language");
    const { lang } = useContext(LangContext);
    var lng = lang?.language;

    const { modalVisible, setModalVisible } = props

    function handleSelected(id) {
        console.log(id);
        setTags(() => {
            return tags.map((f, index) => {
                if (f.id === id) {
                    return {
                        ...f,
                        isSelected: !f.isSelected
                    }
                }
                else {
                    return f
                }
            })
        })
    }

    const handleNoClick = () => {
        setModalVisible(false)
    };

    function handleSelectImage(e) {
        console.log(e.target.files);
        setValues((values) => {
            return {
                ...values,
                images: [...values?.images, ...e.target.files]
            }
        })
    }

    function handleSubmitPost() {
        console.log("submitted");
        // dispatch(createPostAsync({
        //     header: null,
        //     body: {
        //         title: values.title,
        //         location: values.location,
        //         tags: values.tags.filter((tag) => tag.isSelected),
        //         images: values.images
        //     }
        // }))
    }

    useEffect(() => {
        setValues((value) => {
            return {
                ...value,
                tags: tags.filter((f) => {
                    return f.isSelected === true
                })
            }
        })
    }, [tags])

    console.log(values);

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
                            <div className={changingCss}>
                                <div className={'flex justify-start align-middle w-100'}>
                                    <p className={`w-8 h-8 mr-3 mt-1 flex justify-center items-center rounded-md border-1 hover:text-purple-500 border-purple-400 hover:border-purple-500 shadow dark:bg-purple-700`} style={{ cursor: "pointer" }}>
                                        {selectLocation ? (
                                            <FontAwesomeIcon onClick={() => {
                                                setSelectLocation(false)
                                            }} icon={faChevronLeft} className='text-purple-500' />
                                        ) : (
                                            <FontAwesomeIcon icon={faPlus} className='text-purple-500' />
                                        )}
                                    </p>
                                    <h3 className="text-xl font-medium text-gray-900 mt-1 dark:text-white" style={{ fontWeight: "600" }}>
                                        {selectLocation ? lng?.locationHead : lng?.startnewpost}
                                    </h3>
                                </div>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-start dark:hover:bg-gray-600 dark:hover:text-white"                                >
                                    <FontAwesomeIcon icon={faClose} onClick={handleNoClick} />
                                </button>
                            </div>

                            {/* Modal body */}
                            {selectLocation ? "" : <div className={"flex p-6 space-y-6 justify-start align-middle"}>
                                <div className="mr-3 mt-2">
                                    <img src={profile} alt="" />
                                </div>
                                <textarea placeholder={lng?.WhatDoYouWant} className={`outline-custom text-base leading-relaxed border-none outline-none active:outline-none visited:border-none w-100 text-gray-500 dark:text-gray-200 mt-0 pt-3 resize-none`} />
                            </div>}

                            {/* Modal Second body */}
                            {selectLocation ? (
                                <div className="p-6 space-y-6 justify-start align-middle">
                                    <div className={`flex justify-start align-middle`}>
                                        <input
                                            type="text"
                                            placeholder="Search location"
                                            style={{
                                                width: "100%",
                                                borderRadius: "4px",
                                                border: "1px solid rgba(15, 15, 15, 0.15)",
                                                background: "#FFF",
                                                boxShadow: "0px 1px 2px 0px rgba(15, 15, 15, 0.05)",
                                                padding: "11.5px 12px"
                                            }} />
                                        <button
                                            style={{ margin: "0 0 0 16px", backgroundColor: "#625AE9" }}
                                            data-modal-hide="large-modal"
                                            type="button"
                                            className="px-4 py-2 text-white focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-md border border-gray-200 text-sm font-medium hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                        >
                                            Save
                                        </button>
                                    </div>
                                    <div style={{
                                        padding: "8.5px 9px",
                                        borderRadius: "4px",
                                        border: "1px solid #EFEFEF",
                                        background: "#EFEFEF",
                                        boxShadow: "0px 1px 2px 0px rgba(15, 15, 15, 0.05)",
                                        margin: "48px 0 0 0",
                                        width: "60%"
                                    }}>
                                        <p style={{
                                            color: "#000",
                                            fontSize: "14px",
                                            fontStyle: "normal",
                                            fontWeight: "700",
                                            lineHeight: "normal",
                                            letterSpacing: "-0.28px",
                                            margin: 0
                                        }}>Mindy morgan 6710 S Beagle Dr Homosassa, Florida</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="filter-main-container flex p-6 space-y-6 justify-start align-middle">
                                    <div className='quick-filter'>
                                        {tags.map((f) => {
                                            return (
                                                <button
                                                    style={{ backgroundColor: f.isSelected ? "#625AE9" : "#EFEFEF", color: f.isSelected ? "white" : "#000" }}
                                                    onClick={() => handleSelected(f.id)}>
                                                    {f.name}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Modal Third body */}
                            {selectLocation ? "" : values?.images?.length > 0 ? <div className={`flex p-6 space-x-6 align-middle`}>
                                {values?.images?.map((img) => {
                                    return (
                                        <div style={{ position: "relative" }}>
                                            <img
                                                onClick={() => {
                                                    setValues((values) => {
                                                        return {
                                                            ...values,
                                                            images: values?.images?.filter((f) => f.name !== img.name)
                                                        }
                                                    })
                                                }}
                                                src={close}
                                                alt=""
                                                style={{
                                                    position: "absolute",
                                                    left: "80px",
                                                    top: "-10px",
                                                    cursor: "pointer"
                                                }}
                                            />
                                            <img src={URL.createObjectURL(img)} alt="" style={{
                                                width: "100px",
                                                height: "100px",
                                                objectFit: "cover",
                                                borderRadius: "5px",
                                            }} />
                                        </div>
                                    )
                                })}
                            </div> : ""}

                            {/* Modal footer */}
                            {selectLocation ? "" : <div className="flex items-center justify-between p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600 w-100" style={{ flexDirection: storedLanguage === "en" ? "row" : "row-reverse" }}>
                                <div className="flex justify-around">
                                    <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => handleSelectImage(e)} />
                                    <button className="filter-btn hover:border-purple-500 hover:text-purple-500">
                                        <label for="fileInput">
                                            <FontAwesomeIcon icon={faImage} />
                                        </label>
                                    </button>
                                    <button
                                        className="filter-btn hover:border-purple-500 hover:text-purple-500"
                                        onClick={() => {
                                            setSelectLocation(true)
                                        }}>
                                        <FontAwesomeIcon icon={faGlobeAmericas} />
                                    </button>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        style={{ backgroundColor: "#625AE9" }}
                                        onClick={handleSubmitPost}
                                        data-modal-hide="large-modal"
                                        type="button"
                                        className="px-4 py-2 text-white focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-md border border-gray-200 text-sm font-medium hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                    >
                                        Post
                                    </button>
                                </div>
                            </div>}

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;