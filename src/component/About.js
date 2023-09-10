import React from "react";
import '../ressources/styles/about.css';
import moi from '../ressources/img/moi-1.jpg';
import {useLanguage} from "./LanguageContext";
function About(props) {

    const { data } = useLanguage();

    return(
        <section className="section" id="about_section" style={{transform: "skewY(-5deg)"}}>
            <div className="content" style={{transform: "skewY(5deg)"}}>
                <span className="section_title">{data.aboutMeTitle}</span>
                <div className="about_content">
                    <p className="p_1">
                        {data.aboutMeDescription1}<br/><br/>
                        {data.aboutMeDescription2}<br/><br/>
                        {data.aboutMeDescription3}<br/><br/>
                        {data.aboutMeDescription4}<br/><br/>
                        {data.aboutMeDescription5}<br/><br/>
                    </p>
                    <div className="photo">
                        <img src={moi} alt="photo" width="760px"
                             height="760px"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;