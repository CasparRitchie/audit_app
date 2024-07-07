import { createCompleteQuestionElement } from './createImagePickerElement';

function createLesPlateaux(prefix) {
  return {
    "name": `${prefix}_les_plateaux`,
    "title": "Les plateaux",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_plateaux_panel`,
        "title": "Les Plateaux",
        "templateElements": [
          createCompleteQuestionElement(prefix, "disponibilite", "Disponibilité"),
          createCompleteQuestionElement(prefix, "etat", "Etat"),
          createCompleteQuestionElement(prefix, "proprete", "Propreté"),
          {
            "type": "radiogroup",
            "name": `${prefix}_accessibilite_pour_le_reapprovisionnement`,
            "title": "Accessibilité pour le réapprovisionnement",
            "choices": [
              {"value": "facile", "text": "Facile"},
              {"value": "difficile", "text": "Difficile"}
            ]
          }
        ]
      }
    ]
  };
}

export default createLesPlateaux;
