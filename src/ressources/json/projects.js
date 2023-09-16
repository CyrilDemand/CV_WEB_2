import React from 'react';
import mode from "../img/mode.png";
import carte_aux_tresors from "../img/carte_aux_tresors.jpg";
import lightflix from "../img/lightflix.png";
import nn from "../svgs/projects/Neural_network.svg"
import ds from "../svgs/projects/Nuclear_reactor_simulation.svg"
import http from "../svgs/projects/server.svg"
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
                    en: "A desktop application to see 3D models of objects from .ply files",
                    fr: "Une application de bureau pour voir des modèles 3D d'objets depuis des fichiers .ply",
                    es: "Una aplicación de escritorio para ver modelos 3D de objetos desde archivos .ply",
                    jp: ".plyファイルからオブジェクトの3Dモデルを表示するデスクトップアプリケーション"
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
                name: {
                    en: "neural network",
                    fr: "réseau de neurones",
                    es: "red neuronal",
                    jp: "ニューラルネットワーク"
                },
                type: {
                    en: "personnal",
                    fr: "personnel",
                    es: "personal",
                    jp: "個人的な"
                },
                date: "2023",
                description: {
                    en: "A neural network in rust.",
                    fr: "Un réseau de neurones en Rust.",
                    es: "Una red neuronal en Rust.",
                    jp: "Rustのニューラルネットワーク。"
                },
                technologies: "rust",
                link: "https://github.com/CyrilDemand/neural_network",
                image: nn
            },

        },
        {
            project: {
                name: {
                    en: "data science project",
                    fr: "projet de science des données",
                    es: "proyecto de ciencia de datos",
                    jp: "データサイエンスプロジェクト"
                },
                type: {
                    en: "school",
                    fr: "école",
                    es: "escuela",
                    jp: "学校"
                },
                date: "2023",
                description: {
                    en: "A data science project in python that analyze data from a csv file.",
                    fr: "Un projet de science des données en python qui analyse les données d'un fichier csv.",
                    es: "Un proyecto de ciencia de datos en python que analiza datos de un archivo csv.",
                    jp: "csvファイルからデータを分析するPythonのデータサイエンスプロジェクト。"
                },
                technologies: "Python",
                link: "https://github.com/CyrilDemand/projet_data_science",
                image: ds
            },

        },
        {
            project: {
                name: {
                    en: "http server",
                    fr: "serveur http",
                    es: "servidor http",
                    jp: "httpサーバー"
                },
                type: {
                    en: "school",
                    fr: "école",
                    es: "escuela",
                    jp: "学校"
                },
                date: "2023",
                description: {
                    en: "A basic http server in C that can handle multiple clients at the same time.",
                    fr: "Un serveur http de base en C qui peut gérer plusieurs clients en même temps.",
                    es: "Un servidor http básico en C que puede manejar múltiples clientes al mismo tiempo.",
                    jp: "同時に複数のクライアントを処理できるCでの基本的なhttpサーバー。"
                },
                technologies: "C",
                link: "https://github.com/CyrilDemand/ServeurHTTP",
                image: http
            },

        },
    ]
}