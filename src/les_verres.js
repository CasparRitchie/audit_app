import { createCompleteQuestionElement } from './createImagePickerElement';

function createLesVerres(prefix) {
  return {
    "name": `${prefix}_les_verres`,
    "title": "Les verres",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_verres_panel`,
        "title": "Les verres",
        "templateElements": [
          createCompleteQuestionElement(prefix, "disponibilite_verres", "Disponibilité"),
          createCompleteQuestionElement(prefix, "etat_verres", "Etat"),
          createCompleteQuestionElement(prefix, "proprete_verres", "Propreté"),
          createCompleteQuestionElement(prefix, "traces_de_calcaire_verres", "Traces de calcaire sur les verres"),
          createCompleteQuestionElement(prefix, "nette_verres", "Netteté des verres"),
          {
            "type": "radiogroup",
            "name": `${prefix}_accessibilite_verres`,
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

export default createLesVerres;
