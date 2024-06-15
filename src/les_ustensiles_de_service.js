const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

function createLesUstensilesDeService(prefix) {
  return {
    "name": `${prefix}_les_ustensiles_de_service`,
    "title": "Les Ustensiles de Service",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_les_ustensiles_de_service_panel`,
        "title": "Les Ustensiles de Service",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_etat_des_ustensiles`,
            "title": "Etat des ustensiles",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_ustensiles`,
            "title": "Propreté des ustensiles",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_bacs_gastronormes`,
            "title": "Etat des bacs gastronormes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_bacs_gastronormes`,
            "title": "Propreté des bacs gastronormes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_adequation_ustensiles_prestation_servie`,
            "title": "Adéquation des ustensiles de service à la prestation servie",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      }
    ]
  };
}

export default createLesUstensilesDeService;
