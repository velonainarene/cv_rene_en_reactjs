import React from 'react';
import { FaArrowUp } from 'react-icons/fa'
import './scrollup.css';


const Scrollup = () => {
    window.addEventListener("scroll", function(){
        const scrollUp = this.document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");    
    })
    return (
       <a href="#" className="scrollup">
        <FaArrowUp className='scrollup__icon'/>
       </a>
    );
};

export default Scrollup;