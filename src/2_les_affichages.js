import { createCompleteQuestionElement } from './createImagePickerElement';

const les_affichages_page = {
  "name": "les_affichages_page",
  "title": "Les affichages",
  "elements": [
    {
      "type": "paneldynamic",
      "name": "affichages_des_horaires",
      "title": "Affichage des horaires d'ouverture du restaurant",
      "templateElements": [
        createCompleteQuestionElement("affichages_des_horaires", "affichage_des_horaires_d_ouverture_du_restaurant", "Affichage des horaires d'ouverture du restaurant")
      ],
      "panelCount": 0,
      "confirmDelete": true
    },
    {
      "type": "paneldynamic",
      "name": "informations_sur_les_plats_menus",
      "title": "Informations sur les plats / menus",
      "templateElements": [
        createCompleteQuestionElement("informations_sur_les_plats_menus", "informations_sur_les_plats_menus", "Informations sur les plats / menus")
      ],
      "panelCount": 0,
      "confirmDelete": true
    },
    {
      "type": "paneldynamic",
      "name": "informations_sur_les_creneaux_horaires_a_eviter",
      "title": "Informations sur les créneaux horaires à éviter",
      "templateElements": [
        createCompleteQuestionElement("informations_sur_les_creneaux_horaires_a_eviter", "informations_sur_les_creneaux_horaires_a_eviter", "Informations sur les créneaux horaires à éviter")
      ],
      "panelCount": 0,
      "confirmDelete": true
    }
  ]
};

export default les_affichages_page;
