import React from 'react';
import './header.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='headerItem'>
                <h3>Niloufer.Anis.Shaikh</h3>
                <h4>Full Stack Developer</h4>
            </div>
            <ul className='headerItem'>
                <li>About</li>
                <li>Skills</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
           
        </div>
    );
}