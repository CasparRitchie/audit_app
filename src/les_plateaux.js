const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

function createLesPlateaux(prefix) {
  return {
    "name": `${prefix}_les_plateaux`,
    "title": "Les plateaux",
    "elements": [
      {
        "type": "rating",
        "name": `${prefix}_disponibilite`,
        "title": "Disponibilité",
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "rateValues": rateValues
      },
      {
        "type": "rating",
        "name": `${prefix}_etat`,
        "title": "Etat",
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "rateValues": rateValues
      },
      {
        "type": "rating",
        "name": `${prefix}_proprete`,
        "title": "Propreté",
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "rateValues": rateValues
      },
      {
        "type": "radiogroup",
        "name": `${prefix}_accessibilite_pour_le_reapprovisionnement`,
        "title": "Accessibilité pour le réapprovisionnement",
        "choices": [
          {"value": "facile", "text": "Facile"},
          {"value": "difficile", "text": "Difficile"}
        ]
      }
    ]
  };
}

export default createLesPlateaux;
