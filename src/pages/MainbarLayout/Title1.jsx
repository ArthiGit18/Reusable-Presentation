import React, { useState } from 'react'
import CustomEdit from '../../components/CustomEdit'

const Title1 = () => {
    const [name, setName] = useState('Presentation Title:')
    const [contact, setContact] = useState('Contact us:')

    return (
        <div className='wrapper_title'>
            <div className='container_title1'>
                <div className='content'>
                    <CustomEdit className='title1_content'
                        value={name}
                        onChange={setName}
                    >
                    </CustomEdit>
                    <div className='title1_image'>
                        <img src="../assets/banner/1.png" at="banner image" />
                    </div>
                </div>
                <CustomEdit
                    value={contact}
                    onChange={setContact}
                    className='bottom'>
                </CustomEdit>
            </div>

        </div>
    )
}

export default Title1