import React from "react";
import '../ressources/styles/contact.css';
import linkedin from '../ressources/svgs/contact/Linkedin.svg';
import github from '../ressources/svgs/contact/GitHub.svg';
import mail from '../ressources/svgs/contact/Mail.svg';
import discord from '../ressources/svgs/contact/Discord.svg';
import {useLanguage} from "./LanguageContext";
function Contact() {
    const { data } = useLanguage();

    return(
        <section className="section" id="contact_section">
            <div className="content leaning">
                <span className="section_title">{data.myContactTitle}</span>
                <div className="contact_content">
                    <div className="social_line">
                        <a className="social_link" href="https://www.linkedin.com/in/cyril-demand-0a30a918b/" target="_blank">
                            <img src={linkedin} alt="linkedin" width="50px" height="50px"/>
                            <div className="social_text">
                                <span>in/cyril-demand</span>
                            </div>
                        </a>
                    </div>
                    <div className="social_line">
                        <a className="social_link" href="https://github.com/CyrilDemand" target="_blank">
                            <img src={github} alt="github" width="50px" height="50px"/>
                            <div className="social_text">
                                <span>cyril demand</span>
                            </div>
                        </a>
                        <a className="social_link">
                            <img src={discord} alt="discord" width="50px" height="50px"/>
                            <div className="social_text">
                                <span>Cyril#6700</span>
                            </div>
                        </a>
                    </div>
                    <div className="social_line">
                        <div className="social_link">
                            <a href="mailto: cydemand@gmail.com" target="_blank">
                                <img src={mail} alt="mail" width="50px" height="50px"/>
                            </a>
                            <div className="social_text">
                                <span>cydemand@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;