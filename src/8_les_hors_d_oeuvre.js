import createAffichage from "./affichage";
import createPresentation from "./presentation";
import createTemperatureRecording from "./releves_des_temperatures";
import createLesContenants from "./les_contenants";
import createStandLeMateriel from "./stand_le_materiel";

const les_hors_d_oeuvre = {
  "name": "les_hors_d_oeuvre",
  "title": "Les hors d'oeuvre",
  "elements": [
    {
      "type": "paneldynamic",
      "name": "les_hors_d_oeuvre_panel",
      "title": "Les hors d'oeuvre",
      "templateElements": [
        {
          "type": "panel",
          "name": "les_hors_d_oeuvre_affichage",
          "elements": createAffichage('les_hors_d_oeuvre').elements
        },
        {
          "type": "panel",
          "name": "les_hors_d_oeuvre_presentation",
          "elements": createPresentation('les_hors_d_oeuvre').elements
        },
        {
          "type": "panel",
          "name": "les_hors_d_oeuvre_temperatures",
          "elements": createTemperatureRecording('les_hors_d_oeuvre').elements
        },
        {
          "type": "panel",
          "name": "les_hors_d_oeuvre_contenants",
          "elements": createLesContenants('les_hors_d_oeuvre').elements
        },
        {
          "type": "panel",
          "name": "les_hors_d_oeuvre_contenants",
          "elements": createStandLeMateriel('les_hors_d_oeuvre').elements
        },
      ]
    },

  ],
};

export default les_hors_d_oeuvre;
