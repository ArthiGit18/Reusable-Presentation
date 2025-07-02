import React, { useState } from 'react'
import SideBarName from './SideBarName'

const Sidebar = () => {

    return (
        <div className='sidebar_wrapper'>
            <SideBarName />
            {/* <div className='editable_list'>
                <ul>
                    <li>Title Card</li>
                    <li>Description</li>
                    <li>Content and Title</li>
                    <li>Difference</li>
                    <li>Image Section</li>
                    <li>Image and Text</li>
                    <li>Text Section</li>
                    <li>Cards Section</li>

                </ul>
            </div> */}
        </div>
    )
}

export default Sidebar