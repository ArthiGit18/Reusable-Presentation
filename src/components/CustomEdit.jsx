import React, { useState } from 'react';

const EditableText = ({ value, onChange, className = '' }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(value);

    const handleClick = () => setIsEditing(true);

    const handleChange = (e) => setText(e.target.value);

    const handleBlur = () => {
        setIsEditing(false);
        onChange?.(text);
    };

    return (
        <div className={className}>
            {isEditing ? (
                <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                />
            ) : (
                <span
                    onClick={handleClick}
                    style={{ cursor: 'pointer', textDecoration: 'underline' }}
                >
                    {text}
                </span>
            )}
        </div>
    );
};

export default EditableText;
