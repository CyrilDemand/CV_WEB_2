import React from 'react';
import {useLanguage} from "./LanguageContext";

function Home(props) {
    const { data } = useLanguage();


    return (
        <section className="section" id="home_section">
            <div className="content">
                <span className="hi">{data.homeHi}</span>
                <span className="name">Cyril Demand.</span>
                <span className="title">{data.homeJob}.</span>
                <p className="bio">
                    {data.homeDescription}
                    <a className="link" href="https://imt-nord-europe.fr/" target="_blank">
                        IMT Nord Europe </a>
                    {data.homeDescription2}
                </p>
                <div className="home_button">
                    <a className="button" href="#about_section">
                        <p>{data.homeGetStarted}</p>
                    </a>
                </div>
            </div>
        </section>


    );
}

export default Home;