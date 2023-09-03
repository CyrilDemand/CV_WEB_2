import './App.css';
import React, { useState } from 'react';
import fr from './lang/fr.json';
import en from './lang/en.json';
import jp from './lang/jp.json';
import './ressources/styles/home.css';
import './ressources/styles/style.css';
import './ressources/styles/properties.css';
import Home from "./component/Home";
import Header from "./component/Header";
import About from "./component/About";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Ground from "./component/Ground";
function App() {
    const [language, setLanguage] = useState("fr");
    function changeLangue(bouton){
        if(bouton === "fr"){
            setLanguage("fr");
        } else if(bouton === "en"){
            setLanguage("en");
        }else{
            setLanguage("jp");
        }
    }

    function getTranslation(truc){
        if(language === "fr"){
            return fr[truc];
        } else if (language === "en"){
            return en[truc];
        }else if (language === "jp"){
            return jp[truc];
        }
    }

  return (
    <div className="App">
        {/*<Myheader langue={language} titre="mon titre" changeLangue={changeLangue} traduction={getTranslation}/>*/}

        <Header></Header>
        <Home></Home>
        <About></About>
        <Projects projecst={true} experience={false}></Projects>
        <Skills></Skills>
        <Projects projecst={false} experience={true}></Projects>
        <Contact></Contact>
        <Ground></Ground>

    </div>
  );
}

export default App;
