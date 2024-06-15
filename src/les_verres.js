const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

function createLesVerres(prefix) {
  return {
    "name": `${prefix}_les_verres`,
    "title": "Les verres",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_les_verres_panel`,
        "title": "Les verres",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_disponibilite_verres`,
            "title": "Disponibilité",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_verres`,
            "title": "Etat",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_verres`,
            "title": "Propreté",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_traces_de_calcaire_verres`,
            "title": "Traces de calcaire sur les verres",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_nette_verres`,
            "title": "Netteté des verres",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "radiogroup",
            "name": `${prefix}_accessibilite_verres`,
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
}

export default createLesVerres;
