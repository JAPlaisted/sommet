import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Footer(props) {
    return (
        <div className='footer'>
            <HashLink className="nav-link top-link text-center" to="/#top">S</HashLink>
            <div className='text-center'>
                <p>Designed & Developed By Jonathan Plaisted</p>
            </div>
        </div>
    );
}

export default Footer;