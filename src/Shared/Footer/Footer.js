import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    return (
        <div className='footer-conteiner'>
            <p> Copy Right @{today.getFullYear()} </p>
        </div>
    );
};

export default Footer;