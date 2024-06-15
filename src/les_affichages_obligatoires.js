const rateValues = [
  { "value": 1, "text": "Red" },
  { "value": 2, "text": "Orange" },
  { "value": 3, "text": "Green" }
];

function createLesAffichagesObligatoires(prefix) {
  return {
    "name": `${prefix}_les_affichages_obligatoires`,
    "title": "Les affichages obligatoires",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_viandes_bovines`,
        "title": "Viandes bovines",
        "elements": [
          {
            "type": "radiogroup",
            "name": `${prefix}_viandes_bovines_affichage`,
            "title": "Viandes bovines",
            "choices": [
              { "value": "ok", "text": "OK" },
              { "value": "nok", "text": "NOK" }
            ]
          }
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_autres_viandes`,
        "title": "Pour les autres viandes (porcine, ovine et de volaille)",
        "elements": [
          {
            "type": "radiogroup",
            "name": `${prefix}_autres_viandes_affichage`,
            "title": "Pour les autres viandes (porcine, ovine et de volaille)",
            "choices": [
              { "value": "ok", "text": "OK" },
              { "value": "nok", "text": "NOK" }
            ]
          }
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_affichage`,
        "title": "Affichage",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_presence_d_un_affichage`,
            "title": "Présence d'un affichage",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_qualite_de_l_affichage`,
            "title": "Qualité de l'affichage",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_lisibilite_des_informations`,
            "title": "Lisibilité des informations",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_precision_des_informations`,
            "title": "Précision des informations",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_indication_du_prix`,
            "title": "Indication du prix",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_presentation`,
        "title": "Présentation",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_qualite_de_la_presentation`,
            "title": "Qualité de la présentation",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "radiogroup",
            "name": `${prefix}_accessibilite_pour_le_reapprovisionnement`,
            "title": "Accessibilité pour le réapprovisionnement",
            "choices": [
              { "value": "facile", "text": "Facile" },
              { "value": "difficile", "text": "Difficile" }
            ]
          }
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_les_ustensiles_de_service`,
        "title": "Les ustensiles de service",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_etat_des_ustensiles`,
            "title": "Etat des ustensiles",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_ustensiles`,
            "title": "Propreté des ustensiles",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_bacs_gastronormes`,
            "title": "Etat des bacs gastronormes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_bacs_gastronormes`,
            "title": "Propreté des bacs gastronormes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_adequation_des_ustensiles_de_service_a_la_prestation_servie`,
            "title": "Adéquation des ustensiles de service à la prestation servie",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      }
    ]
  };
}

export default createLesAffichagesObligatoires;
