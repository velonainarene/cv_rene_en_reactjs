import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {BsArrowRight,   BsMessenger,  BsSend,  BsWhatsapp} from 'react-icons/bs';
import './contact.css';
import GMAIL from '../../assets/gmail.png';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'Service ',
            'Site web',
             form.current, 
             'YOUR_PUBLIC_KEY')
      e.target.reset()
    }
    return (
        <section className='contact section' id='contact'>
            <h2 className="section__title">Entrer en contact</h2>
            <span className="section__subtitle">Contact Moi</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Parler à moi</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <img src={GMAIL} alt="" className='contact__card-icon'/>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">velonaina19@gmail.com</span>

                            <a href="mailto:ramanohisoarolland@gmail.com" className="contact__button">
                                Write me
                                <BsArrowRight className='contact__button-icon'/>
                            </a>
                        </div>

                        <div className="contact__card">
                            <BsWhatsapp className='contact__card-icon'/>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+261 34 50 731 22</span>

                            <a href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!" className="contact__button">
                                Write me
                                <BsArrowRight className='contact__button-icon'/>
                            </a>
                        </div>

                        <div className="contact__card">
                            <BsMessenger className='contact__card-icon'/>

                            <h3 className="contact__card-title">Messenger</h3>
                            <span className="contact__card-data">René Velonaina</span>

                            <a href="https//m.me/crypticalcoder" className="contact__button">
                                Write me
                                <BsArrowRight className='contact__button-icon'/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Nom:</label>
                            <input type="text" name='name' className='contact__form-input' placeholder='Entrez votre nom:' />
                        </div>

                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Email:</label>
                            <input type="email" name='email' className='contact__form-input' placeholder='Entrez votre-email:' />
                        </div>
                        
                        <div className="contact__form-div contact__form-area">
                            <label htmlFor="" className="contact__form-tag">Projet:</label>
                            <textarea name="project" cols="30" rows="10"
                             className='contact__form-input'
                             placeholder='Ecrire votre projet:'
                             ></textarea>
                        </div>
                        <button type='submit' className="button button--flex">
                            Envoyer Message
                            <BsSend className='button-icon'/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;