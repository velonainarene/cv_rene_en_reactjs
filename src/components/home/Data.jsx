import React from 'react';

const Data = () => {
    return (
        <div className='home__data'>
            <h1 className="home__title">
             René Velonaina
            </h1>
            <div className="home__container">
                <h3 className="home__subtitle">Designer</h3>
                <p className="home__description">I'm creative designer based in Madagascar, and I'm very passionate and dedicated to my word</p>
                <a href="#contact" className='button button--flex'>
                    Say Hello
                    <i className='uil uil-message'></i>
                </a>
            </div>
        </div>
    );
};

export default Data;