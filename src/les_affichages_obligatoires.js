import { createCompleteQuestionElement } from './createImagePickerElement';

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
        "type": "paneldynamic",
        "name": `${prefix}_affichage`,
        "title": "Affichage",
        "templateElements": [
          createCompleteQuestionElement(prefix, "presence_d_un_affichage", "Présence d'un affichage"),
          createCompleteQuestionElement(prefix, "qualite_de_l_affichage", "Qualité de l'affichage"),
          createCompleteQuestionElement(prefix, "lisibilite_des_informations", "Lisibilité des informations"),
          createCompleteQuestionElement(prefix, "precision_des_informations", "Précision des informations"),
          createCompleteQuestionElement(prefix, "indication_du_prix", "Indication du prix")
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_presentation`,
        "title": "Présentation",
        "elements": [
          createCompleteQuestionElement(prefix, "qualite_de_la_presentation", "Qualité de la présentation"),
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
          createCompleteQuestionElement(prefix, "etat_des_ustensiles", "Etat des ustensiles"),
          createCompleteQuestionElement(prefix, "proprete_des_ustensiles", "Propreté des ustensiles"),
          createCompleteQuestionElement(prefix, "etat_des_bacs_gastronormes", "Etat des bacs gastronormes"),
          createCompleteQuestionElement(prefix, "proprete_des_bacs_gastronormes", "Propreté des bacs gastronormes"),
          createCompleteQuestionElement(prefix, "adequation_des_ustensiles_de_service_a_la_prestation_servie", "Adéquation des ustensiles de service à la prestation servie")
        ]
      }
    ]
  };
}

export default createLesAffichagesObligatoires;
