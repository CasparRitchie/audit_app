import { createImagePickerElement } from './createImagePickerElement';

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
          createImagePickerElement(prefix, "etat_des_hottes", "Etat des hottes"),
          createImagePickerElement(prefix, "proprete_des_hottes", "Propreté des hottes"),
          createImagePickerElement(prefix, "etat_des_stands", "Etat des stands"),
          createImagePickerElement(prefix, "proprete_des_stands", "Propreté des stands")
        ]
      }
    ]
  };
}

export default createLeMateriel;
