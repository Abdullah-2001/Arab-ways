import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/button/button'
import '../../styles/components.css';
import Posts from '../../components/posts/posts';
import { MdTimeline } from "react-icons/md";
import Modal from '../../components/modal/modal';
// import Modal from '../../components/modal/modal';
import { LangContext } from '../../components/context/language/langContext';
import { useDispatch } from 'react-redux';
import { createPostAsync } from '../../middlewares/posts/posts';

const Home = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const storedLanguage = localStorage.getItem("language");
    const { lang } = useContext(LangContext);
    var lng = lang?.language;

    return (
        <>
            <div style={{ padding: "20px 16px 16px" }}>
                <div className='create-post-container' style={{ flexDirection: 'row', textAlign: 'left' }}>
                    <div className='post-card'>
                        <p>{lng?.whatyourmind}</p>
                        <p>{lng?.whatyourmindsec}</p>
                    </div>
                    <div>
                        <Button className="create-post" onClick={() => setModalVisible(true)}>{lng?.startnewpost}</Button>
                    </div>
                </div>
                <div className='timeline-container'>
                    <div className='line line-one'></div>
                    <div className='time-line'>
                        <MdTimeline />
                        <p>{lng?.yourtimeline}</p>
                    </div>
                    <div className='line line-two'></div>
                </div>
                <Posts style={{ margin: "90px 0 30px 0" }} />
                <Posts style={{ margin: "90px 0 30px 0" }} />
            </div>
            <div>
                <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </div>
        </>

    )
}

export default Home