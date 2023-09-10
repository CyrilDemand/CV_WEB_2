import './App.css';
import React, { useState } from 'react';

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
import { LanguageProvider } from './component/LanguageContext';

function App() {

  return (
    <div className="App">
        <LanguageProvider>
            <Header></Header>
            <Home></Home>
            <About></About>
            <Projects projecst={true} experience={false}></Projects>
            <Skills></Skills>
            <Projects projecst={false} experience={true}></Projects>
            <Contact></Contact>
            <Ground></Ground>
        </LanguageProvider>

    </div>
  );
}

export default App;
