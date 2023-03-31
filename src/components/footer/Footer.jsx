import React from 'react';
import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs';
import "./footer.css";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Smith</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">Presque</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projet</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Témoinange</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.facebook.com/" target="_blank" className='footer__social-link'>
                    <BsFacebook className='icon'/>
                    </a>

                    <a href="https://www.instagram.com/" target="_blank" className='footer__social-link'>
                        <BsInstagram className='icon'/>
                    </a>

                    <a href="https://www.linkedin.com/" target="_blank" className='footer__social-link'>
                        <BsLinkedin className='icon'/>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169;codeur fait par René Velonaina Razafinjanahary
                </span>
            </div>
        </footer>
    );
};

export default Footer;