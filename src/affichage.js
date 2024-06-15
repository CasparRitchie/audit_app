const rateValues = [
  { "value": 1, "text": "Red" },
  { "value": 2, "text": "Orange" },
  { "value": 3, "text": "Green" }
];

function createAffichage(prefix) {
  return {
    "name": `${prefix}_affichage`,
    "title": "Les affichages obligatoires",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_affichage_affichage`,
        "title": "Affichage",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_presence_d_un_affichage_affichage`,
            "title": "Présence d'un affichage",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_qualite_de_l_affichage_affichage`,
            "title": "Qualité de l'affichage",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_lisibilite_des_informations_affichage`,
            "title": "Lisibilité des informations",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_precision_des_informations_affichage`,
            "title": "Précision des informations",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_indication_du_prix_affichage`,
            "title": "Indication du prix",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      }
    ]
  };
}

export default createAffichage;
