import React, { useState } from 'react';

const SideBarName = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Enter Name');

    const handleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    return (
        <div className='name_edit'>
            {isEditing ? (
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                />
            ) : (
                <span onClick={handleClick} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                    {name}
                </span>
            )}
        </div>
    );
};

export default SideBarName;
