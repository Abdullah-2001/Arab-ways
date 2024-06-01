import React from 'react';
import '../../styles/components.css';

const Input = ({ type, value, placeholder, className }) => {
    return (
        <input value={value} className={className} type={type} placeholder={placeholder} />
    )
}

export default Input