import { createImagePickerElement } from './createImagePickerElement';

function createRespectDesHorairesDeService(prefix) {
  return {
    "name": `${prefix}_respect_des_horaires_de_service`,
    "title": "Respect des horaires de service",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_respect_des_horaires_de_service_panel`,
        "title": "Respect des horaires de service",
        "templateElements": [
          createImagePickerElement(prefix, "respect_horaires_service", "Respect des horaires de service")
        ]
      }
    ]
  };
}

export default createRespectDesHorairesDeService;
