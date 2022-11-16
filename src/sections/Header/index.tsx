import './style.css';
import React from 'react';
import image from '../../assets/images/myself.jpg';

import linkedIn from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import instagram from '../../assets/icons/instagram.png';

const Header: React.FC = () => {
    const linkedInUrl = "https://www.linkedin.com/in/leonardo-boz-caitano/";
    const instagramUrl = "https://www.instagram.com/leo.boz.caitano/";
    const githubUrl = "https://github.com/LeonardoBozCaitano";
    return (
        <div id="banner">
            <img src={image} alt="Leonardo Boz Caitano"/>
            <h1>Leonardo Boz Caitano</h1>
            <p>ENGENHEIRO DE SOFTWARE</p>
            <div>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                    <img alt="LinkedIn" src={linkedIn}/>
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <img alt="Github" src={github}/>
                </a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                    <img alt="Instagram" src={instagram}/>
                </a>
            </div>
        </div>
    );
}

export default Header;