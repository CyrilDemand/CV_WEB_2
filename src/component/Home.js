import React from 'react';

function Home(props) {
    return (
        <section className="section" id="home_section">
            <div className="content">
                <span className="hi">Hi, my name is</span>
                <span className="name">Cyril Demand.</span>
                <span className="title">I’m a Software Engineer.</span>
                <p className="bio">
                    I'm a 21 years old french student in the engineering school
                    <a className="link" href="https://www.polytech.universite-paris-saclay.fr/en" target="_blank">
                        IMT Nord Europe</a>
                    and I study computer science. I'm searching for a international internship in software engineering
                    from the 8th of July to the 30th of August 2024.
                </p>
                <div className="home_button">
                    <a className="button" href="#about">
                        <p>Get Started</p>
                    </a>
                </div>
            </div>
        </section>


    );
}

export default Home;