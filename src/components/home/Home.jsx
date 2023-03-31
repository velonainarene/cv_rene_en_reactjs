import React from 'react';
import Data from './Data';
import "./home.css";
import ScrollDown from './ScrollDown';
import Social from './Social';

const Home = () => {
    return (
        <div>
            <section className='home section' id='grid'>
                <div className="home__section" id="home">
                    <div className="home__content grid">
                        <Social/>

                        <div className="home__img"></div>
                        <Data/>
                    </div>

                    <ScrollDown/>
                </div>
            </section>
        </div>
    );
};

export default Home;