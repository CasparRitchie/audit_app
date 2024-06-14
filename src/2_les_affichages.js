const les_affichages_generales = {
  "name": "les_affichages_generales",
  "title": "Les affichages",
  "elements": [
    {
      "type": "paneldynamic",
      "name": "affichages_des_horaires",
      "title": "Affichage des horaires d'ouverture du restaurant",
      "templateElements": [
        {
          "type": "rating",
          "name": "affichage_des_horaires_d_ouverture_du_restaurant",
          "title": " ",

          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": [
            {"value": 1, "text": "Red"},
            {"value": 2, "text": "Orange"},
            {"value": 3, "text": "Green"}
          ]
        },
      ],
      "panelCount": 1,
      "confirmDelete": true
    },
    {
      "type": "paneldynamic",
      "name": "informations_sur_les_plats_menus",
      "title": "Informations sur les plats / menus",
      "templateElements": [
        {
          "type": "rating",
          "name": "informations_sur_les_plats_menus",
          "title": " ",

          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": [
            {"value": 1, "text": "Red"},
            {"value": 2, "text": "Orange"},
            {"value": 3, "text": "Green"}
          ]
        },
      ],
      "panelCount": 1,
      "confirmDelete": true
    },
    {
      "type": "paneldynamic",
      "title": "Informations sur les créneaux horaires à éviter",
      "templateElements": [
        {
          "type": "rating",
          "name": "informations_sur_les_creneaux_horaires_a_eviter",

          "title": " ",

          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": [
            {"value": 1, "text": "Red"},
            {"value": 2, "text": "Orange"},
            {"value": 3, "text": "Green"}
          ]
        },
      ],
      "panelCount": 1,
      "confirmDelete": true
    },
  ]
};

export default les_affichages_generales;
