import { createCompleteQuestionElement } from './createImagePickerElement';

function createLeService(prefix) {
  return {
    "name": `${prefix}_le_service`,
    "title": "Le service",
    "elements": [
      createCompleteQuestionElement(prefix, "qualite_du_service", "Qualité du service"),
      createCompleteQuestionElement(prefix, "qualite_de_la_presentation", "Qualité de la présentation")
    ]
  };
}

export default createLeService;
