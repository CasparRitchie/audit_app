import { createCompleteQuestionElement } from './createImagePickerElement';

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
          createCompleteQuestionElement(prefix, "temperature", "Température"),
          createCompleteQuestionElement(prefix, "luminosite", "Luminosité"),
          createCompleteQuestionElement(prefix, "niveau_sonore", "Niveau sonore"),
          createCompleteQuestionElement(prefix, "fluidite_de_deplacement_pour_les_convives", "Fluidité de déplacement pour les convives")
        ]
      }
    ]
  };
}

export default createEnvironnementDecoration;
