const rateValues = [
  { "value": 1, "text": "Red" },
  { "value": 2, "text": "Orange" },
  { "value": 3, "text": "Green" }
];

function createPresentation(prefix) {
  return {
    "name": `${prefix}_presentation`,
    "title": "Les affichages obligatoires",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_presentation_panel`,
        "title": "Présentation",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_qualite_de_la_presentation`,
            "title": "Qualité de la présentation",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "radiogroup",
            "name": `${prefix}_accessibilite_pour_le_reapprovisionnement`,
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
}

export default createPresentation;
