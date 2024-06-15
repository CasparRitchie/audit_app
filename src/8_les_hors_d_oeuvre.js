import createAffichage from "./affichage";

const les_hors_d_oeuvre = {
  "name": "les_hors_d_oeuvre",
  "title": "Les hors d'oeuvre",
  "elements": [
    {
      "type": "panel",
      "name": "les_hors_d_oeuvre_panel",
      "elements": createAffichage('les_hors_d_oeuvre').elements
    },
  ],
};

export default les_hors_d_oeuvre;
