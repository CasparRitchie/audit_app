const rateValues = [
  { "value": 1, "text": "Red" },
  { "value": 2, "text": "Orange" },
  { "value": 3, "text": "Green" }
];

const affichage = {
  "name": "affichage",
  "title": "Les affichages obligatoires",
  "elements": [
    {
      "type": "panel",
      "name": "affichage_affichage",
      "title": "Affichage",
      "elements": [
        {
          "type": "rating",
          "name": "presence_d_un_affichage_affichage",
          "title": "Présence d'un affichage",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "qualite_de_l_affichage_affichage",
          "title": "Qualité de l'affichage",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "lisibilite_des_informations_affichage",
          "title": "Lisibilité des informations",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "precision_des_informations_affichage",
          "title": "Précision des informations",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "indication_du_prix_affichage",
          "title": "Indication du prix",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        }
      ]
    },
  ]
};

export default affichage;
