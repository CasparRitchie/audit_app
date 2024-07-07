import { createCompleteQuestionElement } from './createImagePickerElement';

function createPresentation(prefix) {
  return {
    "name": `${prefix}_presentation`,
    "title": "Les affichages obligatoires",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_presentation_panel`,
        "title": "Présentation",
        "templateElements": [
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
    ]
  };
}

export default createPresentation;
