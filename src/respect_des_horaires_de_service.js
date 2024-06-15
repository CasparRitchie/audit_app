const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

function createRespectDesHorairesDeService(prefix) {
  return {
    "name": `${prefix}_respect_des_horaires_de_service`,
    "title": "Respect des horaires de service",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_respect_des_horaires_de_service_panel`,
        "title": "Respect des horaires de service",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_respect_horaires_service`,
            "title": "Respect des horaires de service",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      }
    ]
  };
}

export default createRespectDesHorairesDeService;
