import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
           <div>
                <a href="/ultra-active-club">ultra-active-club</a>
           </div>
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;