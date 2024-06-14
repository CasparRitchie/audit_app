const rateValues = [
  { "value": 1, "text": "Red" },
  { "value": 2, "text": "Orange" },
  { "value": 3, "text": "Green" }
];

const les_affichages_obligatoires = {
  "name": "les_affichages_obligatoires",
  "title": "Les affichages obligatoires",
  "elements": [
    {
      "type": "panel",
      "name": "viandes_bovines",
      "title": "Viandes bovines",
      "elements": [
        {
          "type": "radiogroup",
          "name": "viandes_bovines_affichage",
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
      "name": "autres_viandes",
      "title": "Pour les autres viandes (porcine, ovine et de volaille)",
      "elements": [
        {
          "type": "radiogroup",
          "name": "autres_viandes_affichage",
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
      "name": "affichage",
      "title": "Affichage",
      "elements": [
        {
          "type": "rating",
          "name": "presence_d_un_affichage",
          "title": "Présence d'un affichage",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "qualite_de_l_affichage",
          "title": "Qualité de l'affichage",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "lisibilite_des_informations",
          "title": "Lisibilité des informations",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "precision_des_informations",
          "title": "Précision des informations",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "indication_du_prix",
          "title": "Indication du prix",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        }
      ]
    },
    {
      "type": "panel",
      "name": "presentation",
      "title": "Présentation",
      "elements": [
        {
          "type": "rating",
          "name": "qualite_de_la_presentation",
          "title": "Qualité de la présentation",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "radiogroup",
          "name": "accessibilite_pour_le_reapprovisionnement",
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
      "name": "les_ustensiles_de_service",
      "title": "Les ustensiles de service",
      "elements": [
        {
          "type": "rating",
          "name": "etat_des_ustensiles",
          "title": "Etat des ustensiles",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "proprete_des_ustensiles",
          "title": "Propreté des ustensiles",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "etat_des_bacs_gastronormes",
          "title": "Etat des bacs gastronormes",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "proprete_des_bacs_gastronormes",
          "title": "Propreté des bacs gastronormes",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "adequation_des_ustensiles_de_service_a_la_prestation_servie",
          "title": "Adéquation des ustensiles de service à la prestation servie",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        }
      ]
    }
  ]
};

export default les_affichages_obligatoires;
