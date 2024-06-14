const rateValues = [
  { "value": 1, "text": "Red" },
  { "value": 2, "text": "Orange" },
  { "value": 3, "text": "Green" }
];

const le_service = {
  "name": "le_service",
  "title": "Le service",
  "elements": [
    {
      "type": "rating",
      "name": "qualite_du_service",
      "title": "Qualité du service",
      "rateType": "smileys",
      "scaleColorMode": "colored",
      "rateValues": rateValues
    },
    {
      "type": "rating",
      "name": "qualite_de_la_presentation",
      "title": "Qualité de la présentation",
      "rateType": "smileys",
      "scaleColorMode": "colored",
      "rateValues": rateValues
    }
  ]
};

export default le_service;
