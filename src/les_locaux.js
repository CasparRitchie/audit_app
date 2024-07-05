import { createImagePickerElement } from './createImagePickerElement';

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
          createImagePickerElement(prefix, "etat_des_vitres", "Etat des vitres"),
          createImagePickerElement(prefix, "proprete_des_vitres", "Propreté des vitres"),
          createImagePickerElement(prefix, "etat_des_murs", "Etat des murs"),
          createImagePickerElement(prefix, "proprete_des_murs", "Propreté des murs"),
          createImagePickerElement(prefix, "etat_des_sols", "Etat des sols"),
          createImagePickerElement(prefix, "proprete_des_sols", "Propreté des sols"),
          createImagePickerElement(prefix, "etat_des_plafonds", "Etat des plafonds"),
          createImagePickerElement(prefix, "proprete_des_plafonds", "Propreté des plafonds")
        ]
      }
    ]
  };
}

export default createLesLocaux;
