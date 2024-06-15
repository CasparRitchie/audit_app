const rateValues = [
  { "value": 1, "text": "Red" },
  { "value": 2, "text": "Orange" },
  { "value": 3, "text": "Green" }
];

function createLeMateriel(prefix) {
  return {
    "name": `${prefix}_le_materiel`,
    "title": "Le matériel",
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
          }
        ]
      }
    ]
  };
}

export default createLeMateriel;
