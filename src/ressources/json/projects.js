import React from 'react';
import mode from "../img/mode.png";
import carte_aux_tresors from "../img/carte_aux_tresors.jpg";
import lightflix from "../img/lightflix.png";
import moi from "../img/moi-1.jpg";

export const projects = {
    projectsImaged : [
        {
            project: {
                name: "3D modelisation",
                type: "school",
                date: "2022",
                description: "A desktop application to see 3D models of objects in .ply files",
                technologies: "Java, JavaFX",
                link: "https://github.com/CyrilDemand/treasure_map",
                image: mode,
            },
            inverted: true
        },
        {
            project: {
                name: "Treasure map",
                type: "school",
                date: "2023",
                description: "A mobile application in which you can create points on a map and link them to a description and a picture.",
                technologies: "Flutter, Dart, Firebase",
                link: "https://github.com/CyrilDemand/treasure_map",
                image: carte_aux_tresors,
            },
            inverted: false
        },
        {
            project: {
                name: "Lightflix",
                type: "school",
                date: "2022",
                description: "A web application that repersents a Netflix-like website by using an API.",
                technologies: "Flutter, Dart, Firebase",
                link: "https://github.com/CyrilDemand/treasure_map",
                image: lightflix,
            },
            inverted: true
        },
    ],
    projectsWithoutImage: [
        {
            project: {
                name: "neural network",
                type: "personnal",
                date: "2023",
                description: "A neural network in rust.",
                technologies: "rust",
                link: "https://github.com/CyrilDemand/treasure_map",
                image: moi,
            },

        },
        {
            project: {
                name: "Project 1",
                type: "school",
                date: "2021",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ",
                technologies: "Flutter, Dart, Firebase",
                link: "https://github.com/CyrilDemand/treasure_map",
                image: "'../ressources/img/moi-1.jpg'",
            },

        }
    ]
}