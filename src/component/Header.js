import React from 'react';
import '../ressources/styles/header.css';
import '../ressources/styles/menu.css';
import { useEffect, useState } from "react";
import {useLanguage} from "./LanguageContext";
import DownloadButton from "./DownloadButton";

function Header(props) {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [headerVisible, setHeaderVisible] = useState(true);


    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const {language, data, changeLangue } = useLanguage();
    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth)
    }


    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setHeaderVisible(false);
            } else {
                // Scrolling up
                setHeaderVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const showMenu = () => {
        document.getElementById("menu_div").style.transform= "translateX(0px)";
    }

    const closeMenu = () => {
        document.getElementById("menu_div").style.transform= "translateX(clamp(0px, 100%, 400px))";
    }

    const languages = [
        { code: 'fr', label: 'French (FR)' },
        { code: 'en', label: 'English' },
        { code: 'jp', label: 'Japanese' },
        { code: 'es', label: 'Spanish' }
    ];

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        changeLangue(newLang); // Mettez à jour la langue actuelle dans le contexte
    }


    const selectLanguage = () => {
        return (
            <select
                className="language-select"
                onChange={handleLanguageChange}
                value={language} // Utilisez la langue actuelle comme valeur par défaut
            >
                {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                        {lang.label}
                    </option>
                ))}
            </select>
        );
    }

    return (
        <div id={"header_section"} className={headerVisible ? '' : 'hidden'}>


        <div id={"header_div"}>
                <header id={"header"}>
                    <nav className="nav">
                        <div className="menu" style={{display: windowWidth>780 ? "block" : "none"}}>
                            <ol>
                                <li>
                                    {selectLanguage()}
                                </li>
                                <li className="home"><a className="not_button" href="#home_section">{data.headerHome}</a></li>
                                <li className="about"><a className="not_button" href="#about_section">{data.headerAboutMe}</a></li>
                                <li className="projects"><a className="not_button" href="#projects_section">{data.headerProjects}</a>
                                </li>
                                <li className="skills"><a className="not_button" href="#skills_section">{data.headerSkills}</a></li>
                                <li className="experience"><a className="not_button"
                                                              href="#experience_section">{data.headerExperience}</a></li>
                                <li className="contact">
                                    <a className="button" href="#contact_section">
                                        <p>{data.headerContact}</p>
                                    </a>
                                </li>
                                <li className="contact">
                                    <DownloadButton/>
                                </li>
                            </ol>
                        </div>
                        <svg style={{display: windowWidth<780 ? "block" : "none"}} onClick={showMenu} className="menu_icon" viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg">
                            <line x1="10" y1="10" x2="130" y2="10"/>
                            <line x1="30" y1="50" x2="130" y2="50"/>
                            <line x1="50" y1="90" x2="130" y2="90"/>
                        </svg>
                    </nav>
                </header>
            </div>

            <div id="menu_div" style={{display: windowWidth<780 ? "block" : "none"}}>
                <svg onClick={closeMenu} className="menu_icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="10" x2="90" y2="90"/>
                    <line x1="10" y1="90" x2="90" y2="10"/>
                </svg>
                <div className="menu">
                    <ol>
                        <li onClick={closeMenu} className="home"><a className="not_button" href=""></a></li>
                        <li>
                            {selectLanguage()}
                        </li>
                        <li onClick={closeMenu} className="home"><a className="not_button" href="#home_section">{data.headerHome}</a></li>
                        <li onClick={closeMenu} className="about"><a className="not_button" href="#about_section">{data.headerAboutMe}</a></li>
                        <li onClick={closeMenu} className="projects"><a className="not_button" href="#projects_section">{data.headerProjects}</a></li>
                        <li onClick={closeMenu} className="skills"><a className="not_button" href="#skills_section">{data.headerSkills}</a></li>
                        <li onClick={closeMenu} className="experience"><a className="not_button" href="#experience_section">{data.headerExperience}</a></li>
                        <li onClick={closeMenu} className="contact">
                            <a className="button" href="#contact_section">
                                <p>{data.headerContact}</p>
                                <svg className="button_arrow" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 17.69 17.39">
                                    <g>
                                        <path className="path_1" d="M8.9 12.4 L8.9 12.4"/>
                                        <path className="path_2" d="M16.2 5 8.9 12.4 1.5 5"/>
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <DownloadButton/>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        );

}

export default Header;