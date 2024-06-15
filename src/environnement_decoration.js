const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

function createEnvironnementDecoration(prefix) {
  return {
    "name": `${prefix}_environnement_decoration`,
    "title": "Environnement / décoration",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_environnement_decoration_panel`,
        "title": "Environnement / décoration",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_temperature`,
            "title": "Température",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_luminosite`,
            "title": "Luminosité",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_niveau_sonore`,
            "title": "Niveau sonore",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_fluidite_de_deplacement_pour_les_convives`,
            "title": "Fluidité de déplacement pour les convives",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      }
    ]
  };
}

export default createEnvironnementDecoration;
