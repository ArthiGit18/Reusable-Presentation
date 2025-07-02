import React, { useState } from 'react'
import SideBarName from './SideBarName'
import SidebarList from './SidebarList'

const Sidebar = ({onSelectItem}) => {

    return (
        <div className='sidebar_wrapper'>
            <SideBarName />
            <SidebarList onSelectItem={onSelectItem} />;
        </div>
    )
}

export default Sidebar