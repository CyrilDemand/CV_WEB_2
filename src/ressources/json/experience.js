import React from 'react';
import armee from "../img/armee.jpg";
import passeport from "../img/passeport.jpg";

export const experiences = {
    experienceImaged : [
        {
            project: {
                name: {
                    en: "Worldline",
                    fr: "Worldline",
                    es: "Worldline",
                    jp: "Worldline"
                },
                type: {
                    en: "software engineer",
                    fr: "ingénieur logiciel",
                    es: "ingeniero de software",
                    jp: "ソフトウェアエンジニア"
                },
                date: "2022-2025",
                description: {
                    en: "A 3 years long apprenticeship in which I worked on 3 different web applications for " +
                        "the ANTS, the french departement of the country which manage identity  documents." +
                        "I developped new fonctionnalities, did some unit tests, integration tests, security audit, benchmark and more.",
                    fr: "Une alternance de 3 ans au cours duquel j'ai travaillé sur 3 applications web différentes pour " +
                        "l'ANTS, le département français du pays qui gère les documents d'identité." +
                        "J'ai développé de nouvelles fonctionnalités, fait des tests unitaires, des tests d'intégration, un audit de sécurité, un benchmark et plus encore.",
                    es: "Un aprendizaje de 3 años en el que trabajé en 3 aplicaciones web diferentes para " +
                        "la ANTS, el departamento francés del país que gestiona los documentos de identidad." +
                        "Desarrollé nuevas funcionalidades, hice algunas pruebas unitarias, pruebas de integración, auditoría de seguridad, benchmark y más.",
                    jp: "私が3年間働いた3つの異なるWebアプリケーションについての3年間の学徒期間。" +
                        "私は新しい機能を開発し、ユニットテスト、統合テスト、セキュリティ監査、ベンチマークなどを行いました。" +
                        "国の部門であるANTSは、身分証明書を管理します。"
                },
                technologies: "Angular, Java, Spring, Postgres, Docker and more",
                link: "https://worldline.com/fr-fr/home.html",
                image: passeport,
            },
            inverted: true
        },
        {
            project: {
                name: {
                    en: "Etablissement Géographique Interarmée",
                    fr: "Etablissement Géographique Interarmée",
                    es: "Etablissement Géographique Interarmée",
                    jp: "Etablissement Géographique Interarmée"
                },
                type: {
                    en: "Developper",
                    fr: "Développeur",
                    es: "Desarrollador",
                    jp: "開発者"
                },
                date: "2022",
                description: {
                    en: "A 3 months internship in the military base of Creil in which I worked" +
                        " on a web application to manage the stock of paper map of the french army.",
                    fr: "Un stage de 3 mois dans la base militaire de Creil au cours duquel j'ai travaillé" +
                        " sur une application web pour gérer le stock de carte papier du ministère des armées.",
                    es: "Una pasantía de 3 meses en la base militar de Creil en la que trabajé" +
                        " en una aplicación web para administrar el stock de mapas en papel del Ministerio de Defensa.",
                    jp: "クレイユの軍事基地での3か月間のインターンシップで、私はフランス軍の軍事地図を管理するためのWebアプリケーションで働きました。"
                },
                technologies: "React Express MySQL",
                link: "https://www.defense.gouv.fr/ema/etablissement-geographique-interarmees-egi",
                image: armee,
            },
            inverted: false
        },
    ],
}