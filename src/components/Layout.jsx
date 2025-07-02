// Layout.jsx
import React, { useState } from 'react';
import Sidebar from '../pages/Sidebar';
import Mainbar from '../pages/Mainbar';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState('Presentation Title'); // default


    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <div className="wrapper">
            <div className="container">
                <div className={`toggle-arrow ${isSidebarOpen ? '' : 'collapsed'}`} onClick={toggleSidebar}>
                    {isSidebarOpen ? '◀️' : '▶️'}
                </div>

                {isSidebarOpen && (
                    <div className="side-bar">
                        <Sidebar onSelectItem={setSelectedItem} />
                    </div>
                )}

                <div className="main-bar">
                    <Mainbar selectedItem={selectedItem} />
                </div>
            </div>
        </div>
    );
};

export default Layout;
