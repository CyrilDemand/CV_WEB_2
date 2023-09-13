import React, {createContext, useContext, useEffect, useState} from 'react';
import fr from '../lang/fr.json';
import en from '../lang/en.json';
import jp from '../lang/jp.json';
import es from '../lang/es.json';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage doit être utilisé à l'intérieur d'un LanguageProvider");
    }
    return context;
}

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // 'en' est la langue par défaut
    const [data, setData] = useState(en);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
            window.removeEventListener('resize', setWindowDimensions)
        }
    }, [])
    const changeLangue = (langue) => {
        setLanguage(langue);
        switch (langue) {
            case "fr":
                setData(fr);
                break;
            case "en":
                setData(en);
                break;
            case "jp":
                setData(jp);
                break;
            case "es":
                setData(es);
                break;
            default:
                setData(en);
                break;
        }
    }

    return (
        <LanguageContext.Provider value={{ language, changeLangue, data, windowWidth }}>
            {children}
        </LanguageContext.Provider>
    );
};
