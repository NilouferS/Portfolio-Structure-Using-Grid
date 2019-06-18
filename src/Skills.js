import React from 'react';
import Css from './images/cssIcon.png';
import Html from './images/htmlIcon.png';
import Js from './images/jsIcon.png';
export default function About(){
    return (
        <div>
            <img src={Css} alt={Css}></img>
            <img src={Html} alt={Css}></img>
            <img src={Js} alt={Css}></img>
        </div>
    );
}