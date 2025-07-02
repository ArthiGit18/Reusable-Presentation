import React, { useState } from 'react';
import Sidebar from '../pages/Sidebar';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <div className='wrapper'>
            <div className={`container ${isSidebarOpen ? '' : 'collapsed'}`}>
                {isSidebarOpen && (
                    <div className='side-bar'>
                        <div className='arrow' onClick={toggleSidebar}>◀️</div>
                        <div className='sidebar-content'>
                            <Sidebar />
                        </div>
                    </div>
                )}
                {!isSidebarOpen && (
                    <div className='arrow collapsed-arrow' onClick={toggleSidebar}>▶️</div>
                )}
                <div className='main-bar'></div>
            </div>
        </div>
    );
};

export default Layout;
