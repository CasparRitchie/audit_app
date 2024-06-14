import affichage from "./affichage";
import les_affichages_obligatoires from "./les_affichages_obligatoires";
import presentation from "./presentation";
import les_ustensiles_de_service from "./les_ustensiles_de_service";
import releves_des_temperatures from "./releves_des_temperatures";
import le_materiel from "./le_materiel";
import le_materiel_prestations_chaudes from "./le_materiel_prestations_chaudes";
import stand_personnel from "./stand_personnel";
import le_service from "./le_service";

    const les_prestations_chaudes = {
      "name": "les_prestations_chaudes",
      "title": "Les prestations chaudes",
      "elements": [
        {
          "type": "panel",
          "name": "les_prestations_chaudes_affichages_obligatoires",
          "elements": les_affichages_obligatoires.elements
        },
        {
          "type": "panel",
          "name": "les_prestations_chaudes_affichage",
          "elements": affichage.elements
        },
        {
        "type": "panel",
        "name": "les_prestations_chaudes_presentation",
        "elements": presentation.elements
        },
        {
          "type": "panel",
          "name": "les_prestations_chaudes_ustensiles_de_service",
          "elements": les_ustensiles_de_service.elements
        },
        {
          "type": "panel",
          "name": "les_prestations_chaudes_releves_des_temperatures",
          "elements": releves_des_temperatures.elements
        },
        {
          "type": "panel",
          "name": "les_prestations_chaudes_le_materiel_general",
          "elements": le_materiel.elements
        },
        {
          "type": "panel",
          "name": "les_prestations_chaudes_le_materiel_specifique",
          "elements": le_materiel_prestations_chaudes.elements
        },
        {
          "type": "panel",
          "name": "les_prestations_chaudes_le_personnel_le_service",
          "elements": le_service.elements
        },
        {
          "type": "panel",
          "name": "les_prestations_chaudes_le_personnel",
          "elements": stand_personnel.elements
        },
        ],
    };

    export default les_prestations_chaudes;
