const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

function createAffichages(prefix) {
  return {
    "name": `${prefix}_affichages`,
    "title": "Les affichages",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_les_affichages_panel`,
        "title": "Les affichages",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_disponibilite_des_informations_sur_les_allergenes`,
            "title": "Disponibilité des informations sur les allergènes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_visibilite_des_informations`,
            "title": "Visibilité des informations",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_information_produit`,
            "title": "Information produit",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_prix_des_produits`,
            "title": "Prix des produits",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      }
    ]
  };
}

export default createAffichages;
