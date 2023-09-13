import React from 'react';
import {useLanguage} from "./LanguageContext";
import frenchResume from '../ressources/pdf/CV_Cyril_Demand.pdf';
import englishResume from '../ressources/pdf/Resume_Cyril_Demand.pdf';
import japaneseResume from '../ressources/pdf/Japanese_CV_Cyril_Demand.pdf';
import {BsDownload} from "react-icons/bs";
function DownloadButton(props) {

    const {language} = useLanguage();

    const handleDownloadClick = () => {
        // Logique pour le téléchargement du PDF ici
        // Vous devrez définir l'URL du fichier PDF que vous souhaitez télécharger
        let pdfUrl = englishResume;
        switch (language) {
            case "fr":
                pdfUrl = frenchResume;
                break;
            case "jp":
                pdfUrl = japaneseResume;
                break;
            default:
                pdfUrl = englishResume;
        }

        // Créez un élément <a> invisible pour déclencher le téléchargement
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download =  pdfUrl.split('/').pop();

        // Ajoutez l'élément <a> à la page et déclenchez le clic
        document.body.appendChild(link);
        link.click();

        // Retirez l'élément <a> de la page une fois le téléchargement terminé
        document.body.removeChild(link);
    };


    return (
        <div onClick={handleDownloadClick} className="button">
            <p>CV <BsDownload/> </p>
        </div>
    );

}

export default DownloadButton;
