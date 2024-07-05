import { createImagePickerElement } from './createImagePickerElement';

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
          createImagePickerElement(prefix, "etat_des_ustensiles", "Etat des ustensiles"),
          createImagePickerElement(prefix, "proprete_des_ustensiles", "Propreté des ustensiles"),
          createImagePickerElement(prefix, "etat_des_bacs_gastronormes", "Etat des bacs gastronormes"),
          createImagePickerElement(prefix, "proprete_des_bacs_gastronormes", "Propreté des bacs gastronormes"),
          createImagePickerElement(prefix, "adequation_ustensiles_prestation_servie", "Adéquation des ustensiles de service à la prestation servie")
        ]
      }
    ]
  };
}

export default createLesUstensilesDeService;
