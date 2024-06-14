const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

const le_materiel = {
  "name": "general_le_materiel",
  "title": "Le matériel",
  "elements": [
    {
      "type": "panel",
      "name": "le_materiel_panel_general",
      "title": "Le matériel",
      "elements": [
        {
          "type": "rating",
          "name": "etat_des_hottes_general",
          "title": "Etat des hottes",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "proprete_des_hottes_general",
          "title": "Propreté des hottes",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "etat_des_stands_general",
          "title": "Etat des stands",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "proprete_des_stands_general",
          "title": "Propreté des stands",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
      ]
    }
  ]
};

export default le_materiel;
