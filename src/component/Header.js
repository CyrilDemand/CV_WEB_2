import React from 'react';
import '../ressources/styles/header.css';
import { useEffect, useState } from "react";

function Header(props) {
    const [scrollDirection, setScrollDirection] = useState("down");
    const [lastScrollTop, setLastScrollTop] = useState(0);
    function handleScroll() {

        let st = document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            setScrollDirection("down");
        } else {
            setScrollDirection("up");
        }
        setLastScrollTop(st <= 0 ? 0 : st);
        console.log(scrollDirection);

        if(scrollDirection === "down"){
            document.getElementById("header_div").style.top = "-100px";
        } else {
            document.getElementById("header_div").style.top = "0";
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });


    return (
        <div id={"header_div"}>
            <header id={"header"}>
                <nav className="nav">
                    <div className="menu">
                        <ol>
                            <li className="home"><a className="not_button" href="#">Home</a></li>
                            <li className="about"><a className="not_button" href="#">About</a></li>
                            <li className="projects"><a className="not_button" href="#">Projects</a>
                            </li>
                            <li className="skills"><a className="not_button" href="#">Skills</a></li>
                            <li className="experience"><a className="not_button"
                                                                       href="#">Experience</a></li>
                            <li className="contact">
                                <a className="button" href="#">
                                    <p>Contact</p>
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