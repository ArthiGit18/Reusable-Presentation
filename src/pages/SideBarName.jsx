import React, { useState } from 'react';
import CustomEdit from '../components/CustomEdit'

const SideBarName = () => {
    const [name, setName] = useState('Enter Name');

    return (
        <CustomEdit
            value={name}
            onChange={setName}
            className="name_edit"
        />
    );
};

export default SideBarName;
