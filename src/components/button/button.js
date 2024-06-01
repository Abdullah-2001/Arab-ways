import React from 'react';
import '../../styles/components.css'

const Button = ({ className, onClick, children }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button