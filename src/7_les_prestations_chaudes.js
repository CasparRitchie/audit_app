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
          "type": "panel",
          "name": "les_prestations_chaudes_affichages_obligatoires",
          "elements": createLesAffichagesObligatoires('les_prestations_chaudes').elements
        },
        {
          "type": "panel",
          "name": "les_prestations_chaudes_affichage",
          "elements": createAffichage('les_prestations_chaudes').elements
        },
        {
        "type": "panel",
        "name": "les_prestations_chaudes_presentation",
        "elements": createPresentation('les_prestations_chaudes').elements
        },
        {
          "type": "panel",
          "name": "les_prestations_chaudes_ustensiles_de_service",
          "elements": createLesUstensilesDeService('les_prestations_chaudes').elements
        },
        {
          "type": "panel",
          "name": "les_prestations_chaudes_releves_des_temperatures",
          "elements": createTemperatureRecording('les_prestations_chaudes').elements
        },
        {
          "type": "panel",
          "name": "les_prestations_chaudes_le_materiel_general",
          "elements": createLeMateriel('les_prestations_chaudes').elements
        },
        {
          "type": "panel",
          "name": "les_prestations_chaudes_le_materiel_specifique",
          "elements": createLeMaterielPrestationsChaudes('les_prestations_chaudes').elements
        },
        {
          "type": "panel",
          "name": "les_prestations_chaudes_le_personnel_le_service",
          "elements": createLeService('les_prestations_chaudes').elements
        },
        {
          "type": "panel",
          "name": "les_prestations_chaudes_le_personnel",
          "elements": createStandPersonnel('les_prestations_chaudes').elements
        },
        ],
    };

    export default les_prestations_chaudes;
