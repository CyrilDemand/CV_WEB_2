import React from 'react';
import {useLanguage} from "./LanguageContext";
import frenchResume from '../ressources/pdf/CV_Cyril_Demand_fr.pdf';
import englishResume from '../ressources/pdf/CV_Cyril_Demand_en.pdf';
import japaneseResume from '../ressources/pdf/履歴書_Cyril_Demand.pdf';
import {BsDownload} from "react-icons/bs";
function DownloadButton(props) {

    const {language, data} = useLanguage();

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
    console.log(data.cv)

    return (
        <div onClick={handleDownloadClick} className="button">
            <p>{data.cv}<BsDownload/> </p>
        </div>
    );

}

export default DownloadButton;
