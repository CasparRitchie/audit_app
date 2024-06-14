const rateValues = [
  { "value": 1, "text": "Red" },
  { "value": 2, "text": "Orange" },
  { "value": 3, "text": "Green" }
];

const presentation = {
  "name": "presentation",
  "title": "Les affichages obligatoires",
  "elements": [

    {
      "type": "panel",
      "name": "presentation",
      "title": "Présentation",
      "elements": [
        {
          "type": "rating",
          "name": "qualite_de_la_presentation",
          "title": "Qualité de la présentation",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "radiogroup",
          "name": "accessibilite_pour_le_reapprovisionnement",
          "title": "Accessibilité pour le réapprovisionnement",
          "choices": [
            { "value": "facile", "text": "Facile" },
            { "value": "difficile", "text": "Difficile" }
          ]
        }
      ]
    },
  ]
};

export default presentation;
