const rateValues = [
  { "value": 1, "text": "Red" },
  { "value": 2, "text": "Orange" },
  { "value": 3, "text": "Green" }
];

function createLeService(prefix) {
  return {
    "name": `${prefix}_le_service`,
    "title": "Le service",
    "elements": [
      {
        "type": "rating",
        "name": `${prefix}_qualite_du_service`,
        "title": "Qualité du service",
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "rateValues": rateValues
      },
      {
        "type": "rating",
        "name": `${prefix}_qualite_de_la_presentation`,
        "title": "Qualité de la présentation",
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "rateValues": rateValues
      }
    ]
  };
}

export default createLeService;
