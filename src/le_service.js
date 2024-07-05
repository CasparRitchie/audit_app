import { createRatingElement } from './createImagePickerElement';

function createLeService(prefix) {
  return {
    "name": `${prefix}_le_service`,
    "title": "Le service",
    "elements": [
      createRatingElement(prefix, "qualite_du_service", "Qualité du service"),
      createRatingElement(prefix, "qualite_de_la_presentation", "Qualité de la présentation")
    ]
  };
}

export default createLeService;
