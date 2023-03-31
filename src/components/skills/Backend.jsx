import React from 'react';
import { BsBadge3D } from 'react-icons/bs';
import './skills.css';

const Backend = () => {
    return (
    <div className='skills__content'>
        <h3 className="skills__title">
            Backend developer
        </h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <BsBadge3D className='icon'/>

                    <div className="">
                        <h3 className="skills__name">
                            PHP
                        </h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <BsBadge3D className='icon'/>

                    <div className="">
                        <h3 className="skills__name">
                            Node js
                        </h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <BsBadge3D className='icon'/>

                    <div className="">
                        <h3 className="skills__name">
                            Phyton
                        </h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <BsBadge3D className='icon'/>

                    <div className="">
                        <h3 className="skills__name">Mysql</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <BsBadge3D className='icon'/>

                    <div className="">
                        <h3 className="skills__name">Firebase</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <BsBadge3D className='icon'/>

                    <div className="">
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Backend;