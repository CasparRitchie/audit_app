const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

function createLeMaterielPrestationsChaudes(prefix) {
  return {
    "name": `${prefix}_le_materiel_prestations_chaudes`,
    "title": "Le matériel - prestations chaudes",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_le_materiel_panel_prestations_chaudes`,
        "title": "Le matériel",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_etat_des_pare_haleine_prestations_chaudes`,
            "title": "Etat des pare-haleine",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_pare_haleine_prestations_chaudes`,
            "title": "Propreté des pare-haleine",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_ilots_prestations_chaudes`,
            "title": "Etat des matériels de maintien en température (chafing-dish, bain-marie)",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_ilots_prestations_chaudes`,
            "title": "Propreté des matériel de maintien en température (chafing-dish, bain-marie)",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_vitres_prestations_chaudes`,
            "title": "Etat de la plancha",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_vitres_prestations_chaudes_grill`,
            "title": "Etat de la grill",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_vitres_prestations_chaudes_friteuse`,
            "title": "Etat de la friteuse",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      }
    ]
  };
}

export default createLeMaterielPrestationsChaudes;
