const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

const environnement_decoration = {
  "name": "environnement_decoration",
  "title": "Environnement / décoration",
  "elements": [
    {
      "type": "panel",
      "name": "environnement_decoration_panel",
      "title": "Environnement / décoration",
      "elements": [
        {
          "type": "rating",
          "name": "temperature",
          "title": "Température",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "luminosite",
          "title": "Luminosité",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "niveau_sonore",
          "title": "Niveau sonore",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "fluidite_de_deplacement_pour_les_convives",
          "title": "Fluidité de déplacement pour les convives",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        }
      ]
    }
  ]
};

export default environnement_decoration;
