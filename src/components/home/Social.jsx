import React from 'react';
import {BsDribbble, BsGithub, BsInstagram} from 'react-icons/bs'
const Social = () => {
    return (
        <div className='home__social'>
            <a href="https://www.instagram.com/" target="_blank" className='home__social-icon'>
                <BsInstagram className='icon'/>
            </a>

            <a href="https://dribbble.com/" target="_blank" className='home__social-icon'>
                <BsDribbble className='icon'/>
            </a>

            <a href="https://github.com/" target="_blank" className='home__social-icon'>
                <BsGithub className='icon'/>
            </a>
        </div>
    );
};

export default Social;