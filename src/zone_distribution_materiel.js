const rateValues = [
  { "value": 1, "text": "Red" },
  { "value": 2, "text": "Orange" },
  { "value": 3, "text": "Green" }
];

function createZoneDistributionMateriel(prefix) {
  return {
    "name": `${prefix}_zone_distribution_materiel`,
    "title": "Zone de distribution - Le matériel",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_le_materiel_panel`,
        "title": "Le matériel",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_etat_des_hottes`,
            "title": "Etat des hottes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_hottes`,
            "title": "Propreté des hottes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_stands`,
            "title": "Etat des stands",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_stands`,
            "title": "Propreté des stands",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
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
          }
        ]
      }
    ]
  };
}

export default createZoneDistributionMateriel;
