import React, { useState, useEffect } from "react";
import '../ressources/styles/skills.css';
import moi from '../ressources/img/moi-1.jpg';
import {skills} from '../ressources/json/skills.js';
import SkillBox from "./SkillBox";

function Skills(props) {

    const [type, setType] = useState({name: "Software Development",
        object: skills.software_developpement})

    const [selectorTop, setSelectorTop] = useState(0);
    const [selectorHeight, setSelectorHeight] = useState(25);

    function setTruc(type) {
         setType(type);
         setSelectorTop(list.indexOf(type) * (100/list.length));
    }
    const list = [
        {name: "Software Development",
        object: skills.software_developpement},
        {name: "back-end web",
            object: skills.backend_web},
        {name: "front-end web",
            object: skills.frontend_web},
        {name: "mobile",
            object: skills.mobile},
        {name: "languages",
            object: skills.languages},
    ];

    useEffect(() => {
        setSelectorHeight(document.querySelectorAll(".menu")[1].clientHeight/list.length);
    }, []);

    const selectorStyle= {
        top: `${selectorTop}%`,
        height: `${selectorHeight}px`
    }
    return (
        <section className="section" id="skills_section" style={{transform: "skewY(-5deg)"}}>
            <div className="content leaning" style={{transform: "skewY(5deg)"}}>
                <span className="section_title">What are my Skills?</span>
                <div className="skills_content">
                    <div className="box">
                        <div className="menu">
                            <div className={"selector"} style={selectorStyle}></div>
                            {list.map((item, index) => (
                                <div className={"category"} key={index} onClick={(e) => setTruc(item)}>
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                        <SkillBox type={type.object}></SkillBox>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
