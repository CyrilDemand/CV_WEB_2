import React from "react";
import '../ressources/styles/about.css';
import moi from '../ressources/img/moi-1.jpg';
function About(props) {
    return(
        <section className="section" id="about_section" style={{transform: "skewY(-5deg)"}}>
            <div className="content" style={{transform: "skewY(5deg)"}}>
                <span className="section_title">Who am I?</span>
                <div className="about_content">
                    <p className="p_1">
                        Hi ! My name is Cyril Demand, I'm 21 and I'm a french student in the engineering school.
                        I love to learn new things and I'm always looking for new challenges to develop myself.
                        <br/><br/>
                        In 2020 I started my studies in computer science at the Univisity Intitute of Technology of Lille.
                        In which I learned the basics of computer science, such as programming, databases, networks, etc.
                        <br/><br/>
                        In 2022 I joined the engineering school IMT Lille Douai, in which I'm currently studying in apprenticeship.
                        I'm learning more advanced concepts in computer science, such as software engineering,
                        artificial intelligence, etc. I also got my TOEIC with a score of 845/990.
                        I'm in an apprenticeship at the company Worldline, in which I'm working as a software engineer.
                        My main tasks are to develop and maintain a web application for my client who is ANTS (A part of the french gouvernement).
                        <br/><br/>
                        Besides my work, I'm also working on personnal projects, such as this website. I'm currently learning
                        japanese, I like to play piano, and doing sports.
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