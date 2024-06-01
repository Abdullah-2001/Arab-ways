import React, { useContext, useEffect } from 'react'
import Sidebar from './components/sidebar/sidebar'
import Header from './components/header/header'
import { Outlet } from 'react-router-dom'
import Modal from './components/modal/modal'
import { LangContext } from './components/context/language/langContext'

const Layout = () => {
    return (
        <>
            {/* <Modal /> */}
            {/* {lang?.name == "en" ? */}
            <div className='layout-container'>
                <Header />
                <Sidebar />
                <div className={'content-container'}>
                    <Outlet />
                </div>
            </div>
            {/* // :
            //     <div className='layout-container'>
            //         <Header />
            //         <div className={'content-container-right'}>
            //             <Outlet />
            //         </div>
            //         <Sidebar />
            //     </div>
            // } */}
        </>
    )
}

export default Layout