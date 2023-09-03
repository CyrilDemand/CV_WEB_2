import React from 'react';
import armee from "../img/armee.jpg";
import passeport from "../img/passeport.jpg";

export const experiences = {
    experienceImaged : [
        {
            project: {
                name: "Worldline",
                type: "software ingeneer",
                date: "2022-2025",
                description: "A 3 years long apprenticeship in which I worked on 3 different web applications for " +
                    "the ANTS, the french departement of the country which manage identity  documents." +
                    "I developped new fonctionnalities, did some unit tests, integration tests, security audit, benchmark and more.",
                technologies: "Angular, Java, Spring, Postgres, Docker and more",
                link: "https://worldline.com/fr-fr/home.html",
                image: passeport,
            },
            inverted: true
        },
        {
            project: {
                name: "Etablissement Géographique Interarmée",
                type: "Developpeur",
                date: "2022",
                description: "A 3 months internship in the military base of Creil in which I worked" +
                    " on a web application to manage the military map of the french army.",
                technologies: "React Express MySQL",
                link: "https://www.defense.gouv.fr/ema/etablissement-geographique-interarmees-egi",
                image: armee,
            },
            inverted: false
        },
    ],
}