import { createImagePickerElement } from './createImagePickerElement';

function createEnvironnementDecoration(prefix) {
  return {
    "name": `${prefix}_environnement_decoration`,
    "title": "Environnement / décoration",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_environnement_decoration_panel`,
        "title": "Environnement / décoration",
        "templateElements": [
          createImagePickerElement(prefix, "temperature", "Température"),
          createImagePickerElement(prefix, "luminosite", "Luminosité"),
          createImagePickerElement(prefix, "niveau_sonore", "Niveau sonore"),
          createImagePickerElement(prefix, "fluidite_de_deplacement_pour_les_convives", "Fluidité de déplacement pour les convives")
        ]
      }
    ]
  };
}

export default createEnvironnementDecoration;
