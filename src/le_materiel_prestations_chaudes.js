const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

const le_materiel_prestations_chaudes = {
  "name": "le_materiel_prestations_chaudes",
  "title": "Le matériel - prestations chaudes",
  "elements": [
    {
      "type": "panel",
      "name": "le_materiel_panel_prestations_chaudes",
      "title": "Le matériel",
      "elements": [
        {
          "type": "rating",
          "name": "etat_des_pare_haleine_prestations_chaudes",
          "title": "Etat des pare-haleine",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "proprete_des_pare_haleine_prestations_chaudes",
          "title": "Propreté des pare-haleine",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "etat_des_ilots_prestations_chaudes",
          "title": "Etat des matériels de maintien en température (chafing-dish, bain-marie)",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "proprete_des_ilots_prestations_chaudes",
          "title": "Propreté des matériel de maintien en température (chafing-dish, bain-marie)",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "etat_des_vitres_prestations_chaudes",
          "title": "Etat de la plancha",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "proprete_des_vitres_prestations_chaudes",
          "title": "Etat de la grill",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "proprete_des_vitres_prestations_chaudes",
          "title": "Etat de la friteuse",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        }
      ]
    }
  ]
};

export default le_materiel_prestations_chaudes;
