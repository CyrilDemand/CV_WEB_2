import React from 'react';
import '../ressources/styles/header.css';
import { useEffect, useState } from "react";
import {useLanguage} from "./LanguageContext";

function Header(props) {
    const [scrollDirection, setScrollDirection] = useState("down");
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const { changeLangue, data } = useLanguage();

    function handleScroll() {
        let st = document.documentElement.scrollTop;
        let currentScrollDirection = (st > lastScrollTop) ? "down" : "up";

        if(currentScrollDirection === "down"){
            document.getElementById("header_div").style.top = "-100px";
        } else {
            document.getElementById("header_div").style.top = "0";
        }

        setScrollDirection(currentScrollDirection);
        setLastScrollTop(st <= 0 ? 0 : st);
        console.log(currentScrollDirection);
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const selectLanguage = () => {
        return (

            <details className="custom-select">
                <summary className="radios">
                    <input type="radio" name="item" id="default" title="Language" checked/>
                    <input type="radio" name="item" id="item1" title="Item 1"/>
                    <input type="radio" name="item" id="item2" title="Item 2"/>
                    <input type="radio" name="item" id="item3" title="Item 3"/>
                    <input type="radio" name="item" id="item4" title="Item 4"/>
                </summary>
                <ul className="list">
                    <li onClick={() => changeLangue("fr")}>
                        <label htmlFor="item1">
                            French (FR)
                            <span></span>
                        </label>
                    </li>
                    <li onClick={() => changeLangue("en")}>
                        <label htmlFor="item2">English</label>
                    </li>
                    <li onClick={() => changeLangue("jp")}>
                        <label htmlFor="item3">Japanese</label>
                    </li>
                    <li onClick={() => changeLangue("es")}>
                        <label htmlFor="item4">Spanish</label>
                    </li>
                </ul>
            </details>
        );
    }
    return (
        <div id={"header_div"}>
            <header id={"header"}>
                <nav className="nav">
                    <div className="menu">
                        <ol>
                            <li>
                                {selectLanguage()}
                            </li>
                            <li className="home"><a className="not_button" href="#">{data.headerHome}</a></li>
                            <li className="about"><a className="not_button" href="#">{data.headerAboutMe}</a></li>
                            <li className="projects"><a className="not_button" href="#">{data.headerProjects}</a>
                            </li>
                            <li className="skills"><a className="not_button" href="#">{data.headerSkills}</a></li>
                            <li className="experience"><a className="not_button"
                                                                       href="#">{data.headerExperience}</a></li>
                            <li className="contact">
                                <a className="button" href="#">
                                    <p>{data.headerContact}</p>
                                </a>
                            </li>
                        </ol>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;