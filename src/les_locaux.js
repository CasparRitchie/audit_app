import { createCompleteQuestionElement } from './createImagePickerElement';


function createLesLocaux(prefix) {
  return {
    "name": `${prefix}_les_locaux`,
    "title": "Les Locaux",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_les_locaux_panel`,
        "title": "Les Locaux",
        "elements": [
          createCompleteQuestionElement(prefix, "etat_des_vitres", "Etat des vitres"),
          createCompleteQuestionElement(prefix, "proprete_des_vitres", "Propreté des vitres"),
          createCompleteQuestionElement(prefix, "etat_des_murs", "Etat des murs"),
          createCompleteQuestionElement(prefix, "proprete_des_murs", "Propreté des murs"),
          createCompleteQuestionElement(prefix, "etat_des_sols", "Etat des sols"),
          createCompleteQuestionElement(prefix, "proprete_des_sols", "Propreté des sols"),
          createCompleteQuestionElement(prefix, "etat_des_plafonds", "Etat des plafonds"),
          createCompleteQuestionElement(prefix, "proprete_des_plafonds", "Propreté des plafonds")
        ]
      }
    ]
  };
}

export default createLesLocaux;
