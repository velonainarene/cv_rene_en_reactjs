import React from 'react';
import "./about.css";
import AboutImg from "../../assets/people2.jpg";
import CV from "../../assets/CV.pdf";
import Info from './Info';

const About = () => {
    return (
        <section className='about section' id='about'>
            <h2 className="section__title">Sur-Moi</h2>
            <span className="section__subtitle">A propos de moi</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info/>

                    <p className="about__description">
                        Frontend developer, I create web pages with UI / Ux user interface, I have years of experience
                        and many clients are happy with the projects carried out.
                    </p>

                    <a href={CV} className="button button--flex">
                        <span>Téléchargez</span> 
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;