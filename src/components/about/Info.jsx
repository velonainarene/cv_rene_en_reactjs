import React from 'react';
import { BsAward, BsBriefcase, BsFolder } from 'react-icons/bs';

const Info = () => {
    return (
        <div className='about__info grid'>
            <div className="about__box">
                <BsAward className='about__icon'/>

                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">8 Years Working</span>
            </div>

            <div className="about__box">
                <BsBriefcase className='about__inco'/>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">48 + Projects</span>
            </div>

            <div className="about__box">
                <BsFolder className='about__icon'/>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    );
};

export default Info;