import createAffichage from "./affichage";
import createLesAffichagesObligatoires from "./les_affichages_obligatoires";
import createPresentation from "./presentation";
import createLesUstensilesDeService from "./les_ustensiles_de_service";
import createTemperatureRecording from "./releves_des_temperatures";
import createLeMateriel from "./le_materiel";
import createLeMaterielPrestationsChaudes from "./le_materiel_prestations_chaudes";
import createLeService from "./le_service";
import createStandPersonnel from "./stand_personnel";

    const les_prestations_chaudes = {
      "name": "les_prestations_chaudes",
      "title": "Les prestations chaudes",
      "elements": [
        {
          "type": "paneldynamic",
          "name": "les_prestations_chaudes_affichages_obligatoires",
          "title": "Affichages obligatoires",
          "templateElements": createLesAffichagesObligatoires('les_prestations_chaudes').elements
        },
        {
          "type": "paneldynamic",
          "name": "les_prestations_chaudes_affichage",
          "title": "Affichages",
          "templateElements": createAffichage('les_prestations_chaudes').elements
        },
        {
        "type": "paneldynamic",
        "name": "les_prestations_chaudes_presentation",
        "title": "Présentation",
        "templateElements": createPresentation('les_prestations_chaudes').elements
        },
        {
          "type": "paneldynamic",
          "name": "les_prestations_chaudes_ustensiles_de_service",
          "title": "Ustensiles de service",
          "templateElements": createLesUstensilesDeService('les_prestations_chaudes').elements
        },
        {
          "type": "paneldynamic",
          "name": "les_prestations_chaudes_releves_des_temperatures",
          "title": "Relevés de temperatures",
          "templateElements": createTemperatureRecording('les_prestations_chaudes').elements
        },
        {
          "type": "paneldynamic",
          "name": "les_prestations_chaudes_le_materiel_general",
          "title": "Le materiel",
          "templateElements": createLeMateriel('les_prestations_chaudes').elements
        },
        {
          "type": "paneldynamic",
          "name": "les_prestations_chaudes_le_materiel_specifique",
          "title": "Le materiel pour le chaud",
          "templateElements": createLeMaterielPrestationsChaudes('les_prestations_chaudes').elements
        },
        {
          "type": "paneldynamic",
          "name": "les_prestations_chaudes_le_personnel_le_service",
          "title": "Le service",
          "templateElements": createLeService('les_prestations_chaudes').elements
        },
        {
          "type": "paneldynamic",
          "name": "les_prestations_chaudes_le_personnel",
          "title": "Le personnel",
          "templateElements": createStandPersonnel('les_prestations_chaudes').elements
        },
        ],
    };

    export default les_prestations_chaudes;
