import { createCompleteQuestionElement } from './createImagePickerElement';

function createLeMateriel(prefix) {
  return {
    "name": `${prefix}_le_materiel`,
    "title": "Le matériel",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_le_materiel_panel`,
        "title": "Le matériel",
        "templateElements": [
          createCompleteQuestionElement(prefix, "etat_des_hottes", "Etat des hottes"),
          createCompleteQuestionElement(prefix, "proprete_des_hottes", "Propreté des hottes"),
          createCompleteQuestionElement(prefix, "etat_des_stands", "Etat des stands"),
          createCompleteQuestionElement(prefix, "proprete_des_stands", "Propreté des stands")
        ]
      }
    ]
  };
}

export default createLeMateriel;
