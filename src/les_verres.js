const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

const les_verres = {
  "name": "les_verres",
  "title": "Les verres",
  "elements": [
    {
      "type": "panel",
      "name": "les_verres_panel",
      "title": "Les verres",
      "elements": [
        {
          "type": "rating",
          "name": "disponibilite_verres",
          "title": "Disponibilité",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "etat_verres",
          "title": "Etat",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "proprete_verres",
          "title": "Propreté",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "traces_de_calcaire_verres",
          "title": "Traces de calcaire sur les verres",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "nette_verres",
          "title": "Netteté des verres",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "radiogroup",
          "name": "accessibilite_verres",
          "title": "Accessibilité pour le réapprovisionnement",
          "choices": [
            {"value": "facile", "text": "Facile"},
            {"value": "difficile", "text": "Difficile"}
          ]
        }
      ]
    }
  ]
};

export default les_verres;
