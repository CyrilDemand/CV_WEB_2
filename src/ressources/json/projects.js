import React from 'react';
import mode from "../img/mode.png";
import carte_aux_tresors from "../img/carte_aux_tresors.jpg";
import lightflix from "../img/lightflix.png";
import moi from "../img/moi-1.jpg";

export const projects = {
    projectsImaged : [
        {
            project: {
                name: {
                    en: "3D modelisation",
                    fr: "Modélisation 3D",
                    es: "Modelización 3D",
                    jp: "3Dモデリング"
                },
                type: {
                    en: "school",
                    fr: "école",
                    es: "escuela",
                    jp: "学校"
                },
                date: "2022",
                description: {
                    en: "A desktop application to see 3D models of objects in .ply files",
                    fr: "Une application de bureau pour voir des modèles 3D d'objets dans des fichiers .ply",
                    es: "Una aplicación de escritorio para ver modelos 3D de objetos en archivos .ply",
                    jp: ".plyファイルのオブジェクトの3Dモデルを表示するデスクトップアプリケーション"
                },
                technologies: "Java, JavaFX",  // Technologie names remain same
                link: "https://github.com/CyrilDemand/treasure_map",
                image: mode,
            },
            inverted: true
        },
        {
            project: {
                name: {
                    en: "Treasure map",
                    fr: "Carte aux trésors",
                    es: "Mapa del tesoro",
                    jp: "宝の地図"
                },
                type: {
                    en: "school",
                    fr: "école",
                    es: "escuela",
                    jp: "学校"
                },
                date: "2023",
                description: {
                    en: "A mobile application in which you can create points on a map and link them to a description and a picture.",
                    fr: "Une application mobile dans laquelle vous pouvez créer des points sur une carte et les lier à une description et une image.",
                    es: "Una aplicación móvil en la que puede crear puntos en un mapa y vincularlos a una descripción y una imagen.",
                    jp: "地図上にポイントを作成し、説明と画像にリンクできるモバイルアプリケーション。"
                },
                technologies: "Flutter, Dart, Firebase",
                link: "https://github.com/CyrilDemand/treasure_map",
                image: carte_aux_tresors,
            },
            inverted: false
        },
        {
            project: {
                name: {
                    en: "Lightflix",
                    fr: "Lightflix",
                    es: "Lightflix",
                    jp: "ライトフリクス"
                },
                type: {
                    en: "school",
                    fr: "école",
                    es: "escuela",
                    jp: "学校"
                },
                date: "2022",
                description: {
                    en: "A web application that repersents a Netflix-like website by using an API.",
                    fr: "Une application web qui représente un site Web similaire à Netflix en utilisant une API.",
                    es: "Una aplicación web que representa un sitio web similar a Netflix mediante el uso de una API.",
                    jp: "APIを使用してNetflixのようなWebサイトを表すWebアプリケーション。"
                },
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