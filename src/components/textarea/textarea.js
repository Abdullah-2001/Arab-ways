import React from 'react';
import '../../styles/components.css';

const TextArea = ({ type, value, placeholder, className }) => {
    return (
        <textarea value={value} className={className} type={type} placeholder={placeholder} />
    )
}

export default TextArea