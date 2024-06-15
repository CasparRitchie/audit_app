const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

function createStandLesLocaux(prefix) {
  return {
    "name": `${prefix}_stand_les_locaux`,
    "title": "Les Locaux de la zone",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_stand_les_locaux_panel`,
        "title": "Les Locaux de la zone",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_etat_des_murs`,
            "title": "Etat des murs",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_murs`,
            "title": "Propreté des murs",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_sols`,
            "title": "Etat des sols",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_sols`,
            "title": "Propreté des sols",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_plafonds`,
            "title": "Etat des plafonds",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_plafonds`,
            "title": "Propreté des plafonds",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      }
    ]
  };
}

export default createStandLesLocaux;
