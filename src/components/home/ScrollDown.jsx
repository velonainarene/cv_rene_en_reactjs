import React from 'react';
import { BsArrowDown } from 'react-icons/bs';

const ScrollDown = () => {
    return (
        <div className='home__scroll'>
            <a href="#about" className='home_scroll-button button--flex'>
                <div className="wheel">
                    <span className=" home__scroll-name">Scroll Down</span>
                    <BsArrowDown className='home__scroll-arrow'/>
                </div>
            </a>
        </div>
    );
};

export default ScrollDown;