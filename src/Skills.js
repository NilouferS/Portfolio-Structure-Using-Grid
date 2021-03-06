import React from 'react';
import bootstrap from './images/bootstrap.png';
import css3 from './images/css3.png';
import github from './images/github.png';
import heroku from './images/heroku.png';
import html5 from './images/html5.png';
import javascript from './images/javascript.png';
import react from './images/react.png';
import nodejs from './images/nodejs.png';
import wordpress from './images/wordpress.png';
import'./Skills.css' ;
export default function About() {
    return (
        <div id='skills'>
            <h1 className='title'>SKILLS</h1>
            <div className='icon'>
                <h1>Front End</h1>
                <div className='iconItem'>
                    <img src={css3} alt='a'></img>
                    <img src={html5} alt='b'></img>
                    <img src={javascript} alt='c'></img>
                    <img src={react} alt='d'></img>
                    <img src={bootstrap} alt='e'></img>
                </div>
                <h1>Back End</h1>
                <div className='iconItem'>
                    <img src={nodejs} alt='f'></img>
                </div>
                <h1>Others</h1>
                <div className='iconItem'>
                    <img src={github} alt='g'></img>
                    <img src={heroku} alt='h'></img>
                    <img src={wordpress} alt='i'></img>
                </div>
            </div>

        </div >
    );
}