const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

function createStandLeMateriel(prefix) {
  return {
    "name": `${prefix}_stand_le_materiel`,
    "title": "Le materiel de la zone",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_stand_les_locaux_panel`,
        "title": "Le materiel de la zone",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_etat_des_vitrines`,
            "title": "Etat des vitrines",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_vitrines`,
            "title": "Propreté des vitrines",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_ilots`,
            "title": "Etat des îlots",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_ilots`,
            "title": "Propreté des îlots",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_vitres`,
            "title": "Etat des vitres",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_vitres`,
            "title": "Propreté des vitres",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
        ]
      }
    ]
  };
}

export default createStandLeMateriel;
