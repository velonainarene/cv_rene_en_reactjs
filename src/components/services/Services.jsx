import React, {useState} from 'react';
import {BsArrowBarLeft,  BsCheckCircle, BsFillPatchQuestionFill, BsGrid, BsPencil, BsPlusCircle, BsPlusLg } from 'react-icons/bs';
import './services.css';


const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className='services section' id='services'>
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div className="">
                        <BsGrid className='services__icon'/>
                        <h3 className="services__title">Product <br /> Designer </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>Voir Plus <BsPlusCircle className="services__button-icon"/></span>

                    <div className={toggleState == 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <BsPlusLg className='services__modal-close' onClick={() => toggleTab(0)}/>

                            <h3 className='services__modal-title'>Product Designer</h3>
                            <p>
                                service with more than 3 years of experience.
                                Providing quality work to clients and companies.
                            </p>
                            
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">
                                        I create ux element interaction.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">
                                        I position your company brand.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">
                                        Design and mockups of products for companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div className="">
                        <BsArrowBarLeft   className='services__icon'/>
                        <h3 className="services__title">Ui/Ux <br /> Designer</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services__button">Voir Plus <BsPlusCircle className="services__button-icon"/></span>

                    <div className={toggleState == 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <BsFillPatchQuestionFill onClick={() => toggleTab(0)} className='services__modal-close'/>

                            <h3 className='services__modal-title'>Ui/Ux Designer</h3>
                            <p>
                                service with more than 3 years of experience.
                                Providing quality work to clients and companies.
                            </p>
                            
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">
                                        I create ux element interaction.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">
                                        I position your company brand.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">
                                        Design and mockups of products for companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div className="">
                        <BsPencil className='services__icon'/>
                        <h3 className="services__title">Visual <br /> Designer</h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="services__button">Voir Plus 
                        <BsPlusCircle className="services__button-icon"/>
                    </span>

                    <div className={toggleState == 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <BsPlusLg onClick={() => toggleTab(0)} className='services__modal-close'/>

                            <h3 className='services__modal-title'>Visual Designer</h3>
                            <p>
                                service with more than 3 years of experience.
                                Providing quality work to clients and companies.
                            </p>
                            
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">
                                        I create ux element interaction.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">
                                        I position your company brand.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">
                                        Design and mockups of products for companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;