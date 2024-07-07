import { createCompleteQuestionElement } from './createImagePickerElement';

function createAffichage(prefix) {
  return {
    "name": `${prefix}_affichage`,
    "title": "Les affichages obligatoires",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_affichage_affichage`,
        "title": "Affichage",
        "templateElements": [
          createCompleteQuestionElement(prefix, "presence_d_un_affichage_affichage", "Présence d'un affichage"),
          createCompleteQuestionElement(prefix, "qualite_de_l_affichage_affichage", "Qualité de l'affichage"),
          createCompleteQuestionElement(prefix, "lisibilite_des_informations_affichage", "Lisibilité des informations"),
          createCompleteQuestionElement(prefix, "precision_des_informations_affichage", "Précision des informations"),
          createCompleteQuestionElement(prefix, "indication_du_prix_affichage", "Indication du prix")
        ],
        "panelCount": 1,
        "confirmDelete": true
      }
    ]
  };
}

export default createAffichage;
