import React, { useState, useEffect } from "react";
import '../ressources/styles/skills.css';
import moi from '../ressources/img/moi-1.jpg';
import {skills} from '../ressources/json/skills.js';
import SkillBox from "./SkillBox";
import {useLanguage} from "./LanguageContext";

function Skills(props) {

    const { data, windowWidth } = useLanguage();

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
        const categoryElement = document.getElementById("category");
        if (categoryElement) {
            console.log(categoryElement);
            setSelectorHeight(categoryElement.offsetHeight);
        }
    }, []);


    const selectorStyle= {
        top: `${selectorTop}%`,
        height: `${selectorHeight}px`
    }
    console.log(skills)

    if (windowWidth > 930) {
        return (
            <section className="section" id="skills_section" style={{transform: "skewY(-5deg)"}}>
                <div className="content leaning" style={{transform: "skewY(5deg)"}}>
                    <span className="section_title">{data.mySkillsTitle}</span>
                    <div className="skills_content">
                        <div className="box">
                            <div className="menu" id="menu">
                                <div className={"selector"} style={selectorStyle}></div>
                                {list.map((item, index) => (
                                    <div className={"category"} id="category" key={index} onClick={(e) => setTruc(item)}>
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
    }else{
        return (
            <section className="section" id="skills_section" style={{transform: "skewY(-5deg)"}}>
                <div className="content leaning" style={{transform: "skewY(5deg)"}}>
                    <span className="section_title">{data.mySkillsTitle}</span>
                    <div className="skills_content">
                        <div className="box">
                            {list.map((item, index) => (
                                <div className="boxbox">
                                    <div className="category_title">{item.name}</div>
                                        <div className="box_content">
                                            <div className="skills_list">
                                                {item.object.map((e, index) => (
                                                    <div className="skill">
                                                        <img src={e.image}/>
                                                        <div className="skill_name">
                                                            <p>{e.name}</p>
                                                        </div>
                                                    </div>
                                                ))
                                                }
                                            </div>
                                        </div>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default Skills;
