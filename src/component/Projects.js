import React, {useEffect, useState} from 'react';
import '../ressources/styles/projects.css';
import '../ressources/styles/other_projects.css';
import {projects} from "../ressources/json/projects.js";
import {experiences} from "../ressources/json/experience.js";
function Projects({projecst, experience}) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    let projectsImaged = [];
    let projectsWithoutImage = [];
    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
            window.removeEventListener('resize', setWindowDimensions)
        }
    }, [])

    if (projecst) {
        projectsImaged = projects.projectsImaged;
        projectsWithoutImage = projects.projectsWithoutImage;
    }else if (experience) {
        projectsImaged = experiences.experienceImaged;
    }

    function addProjectImaged(project, inverted) {
        if (windowWidth > 780) {
            return (
                <div className={`project ${inverted ? 'inverted' : ''}`}>
                    <div className="project_text">
                        <div class="type">
                            <span>{project.date}</span>
                            <span>•</span>
                            <span>{project.type}</span>
                        </div>
                        <a class="project_title" href={`${project.links}`} target="_blank">{project.name}</a>
                        <div class="text"><p>{project.description}</p></div>
                        <div class="tags">{project.technologies}</div>
                        <div class="links">
                            <a class="github" href={project.link} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.05 20.31"><g><path d="M7.26 16.34c-4.11 1.23-4.11-2.06-5.76-2.47M13 18.81V15.62a2.78 2.78 0 0 0-.77-2.15c2.59-.28 5.3-1.26 5.3-5.76a4.46 4.46 0 0 0-1.23-3.08 4.18 4.18 0 0 0-.08-3.11s-1-.29-3.22 1.22a11 11 0 0 0-5.76 0C5 1.23 4 1.52 4 1.52A4.18 4.18 0 0 0 4 4.63 4.48 4.48 0 0 0 2.73 7.74c0 4.46 2.72 5.44 5.31 5.76a2.8 2.8 0 0 0-.78 2.12v3.19"/></g></svg>
                                <span class="bubble">See the code</span>
                            </a>
                            <a class="test" href={project.link} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.09 18.64"><g><path d="M14.55 7.52 4.62 1.78A2.08 2.08 0 0 0 1.5 3.58V15.05a2.08 2.08 0 0 0 3.12 1.8l9.93-5.73A2.08 2.08 0 0 0 14.55 7.52Z"/></g></svg>
                                <span class="bubble">Test the program</span>
                            </a>
                        </div>
                    </div>
                    <div class="project_view">
                        <a href={project.link} target="_blank">
                            <img src={project.image}/>
                        </a>
                    </div>
                </div>
            );
        }else{
            return (
                <div class="project" style={{backgroundImage: `url(${project.image})`, backgroundSize:"cover"}}  >
                    <div class="project_text">
                        <div class="type">
                            <span>{project.type}</span>
                            <span></span>
                            <span>{project.date}</span>
                        </div>
                        <a class="project_title" href={project.link} target="_blank">${project.title}</a>
                        <div class="text"><p>{project.description}</p></div>
                        <div class="tags">` + tags + `</div>
                        <div class="links">
                            <a class="github" href={project.link} target="_blank">
                                <span class="bubble">See the code</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.05 20.31"><g><path d="M7.26 16.34c-4.11 1.23-4.11-2.06-5.76-2.47M13 18.81V15.62a2.78 2.78 0 0 0-.77-2.15c2.59-.28 5.3-1.26 5.3-5.76a4.46 4.46 0 0 0-1.23-3.08 4.18 4.18 0 0 0-.08-3.11s-1-.29-3.22 1.22a11 11 0 0 0-5.76 0C5 1.23 4 1.52 4 1.52A4.18 4.18 0 0 0 4 4.63 4.48 4.48 0 0 0 2.73 7.74c0 4.46 2.72 5.44 5.31 5.76a2.8 2.8 0 0 0-.78 2.12v3.19"/></g></svg>
                            </a>
                        </div>
                    </div>
                </div>
            )
        }
    }

    function addProject(project) {

        return (
            <div class="other_project">
                <div class="other_project_content">
                    <div class="header">
                        <div class="logos">
                            <img src="${project.logo}" alt="" width="45px" height="45px"/>
                            <div class="links">

                                <a class="github" href="${project.links[1]}" aria-label="github" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.05 20.31"><g><path d="M7.26 16.34c-4.11 1.23-4.11-2.06-5.76-2.47M13 18.81V15.62a2.78 2.78 0 0 0-.77-2.15c2.59-.28 5.3-1.26 5.3-5.76a4.46 4.46 0 0 0-1.23-3.08 4.18 4.18 0 0 0-.08-3.11s-1-.29-3.22 1.22a11 11 0 0 0-5.76 0C5 1.23 4 1.52 4 1.52A4.18 4.18 0 0 0 4 4.63 4.48 4.48 0 0 0 2.73 7.74c0 4.46 2.72 5.44 5.31 5.76a2.8 2.8 0 0 0-.78 2.12v3.19"/></g></svg>
                                </a>
                                <a class="test" href="${project.links[2]}" aria-label="test" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.09 18.64"><g><path d="M14.55 7.52 4.62 1.78A2.08 2.08 0 0 0 1.5 3.58V15.05a2.08 2.08 0 0 0 3.12 1.8l9.93-5.73A2.08 2.08 0 0 0 14.55 7.52Z"/></g></svg>
                                </a>
                            </div>
                        </div>
                        <a href={project.link} target="_blank" class="project_title">{project.title}</a>
                        <p class="text">{project.description}</p>
                    </div>
                    <div class="tags"> {project.technologies} </div>
                </div>
            </div>
        )
    }
    return (
        <section className="section" id="projects_section"  style={{transform: "skewY(-5deg)"}}>
            <div className={"content leaning"}  style={{transform: "skewY(5deg)"}}>
                <div className="projects_content">
                    {
                        projectsImaged.map(({project, inverted}) => addProjectImaged(project,inverted))
                    }
                </div>
                <div className="other_projects_content">
                    {projectsWithoutImage.map(({project}) => addProject(project))}
                </div>
            </div>
        </section>
    )
}

export default Projects;