import { createCompleteQuestionElement } from './createImagePickerElement';

function createLesUstensilesDeService(prefix) {
  return {
    "name": `${prefix}_les_ustensiles_de_service`,
    "title": "Les Ustensiles de Service",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_ustensiles_de_service_panel`,
        "title": "Les Ustensiles de Service",
        "templateElements": [
          createCompleteQuestionElement(prefix, "etat_des_ustensiles", "Etat des ustensiles"),
          createCompleteQuestionElement(prefix, "proprete_des_ustensiles", "Propreté des ustensiles"),
          createCompleteQuestionElement(prefix, "etat_des_bacs_gastronormes", "Etat des bacs gastronormes"),
          createCompleteQuestionElement(prefix, "proprete_des_bacs_gastronormes", "Propreté des bacs gastronormes"),
          createCompleteQuestionElement(prefix, "adequation_ustensiles_prestation_servie", "Adéquation des ustensiles de service à la prestation servie")
        ]
      }
    ]
  };
}

export default createLesUstensilesDeService;
