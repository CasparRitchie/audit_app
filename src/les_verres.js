import { createImagePickerElement } from './createImagePickerElement';

function createLesVerres(prefix) {
  return {
    "name": `${prefix}_les_verres`,
    "title": "Les verres",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_verres_panel`,
        "title": "Les verres",
        "templateElements": [
          createImagePickerElement(prefix, "disponibilite_verres", "Disponibilité"),
          createImagePickerElement(prefix, "etat_verres", "Etat"),
          createImagePickerElement(prefix, "proprete_verres", "Propreté"),
          createImagePickerElement(prefix, "traces_de_calcaire_verres", "Traces de calcaire sur les verres"),
          createImagePickerElement(prefix, "nette_verres", "Netteté des verres"),
          {
            "type": "radiogroup",
            "name": `${prefix}_accessibilite_verres`,
            "title": "Accessibilité pour le réapprovisionnement",
            "choices": [
              {"value": "facile", "text": "Facile"},
              {"value": "difficile", "text": "Difficile"}
            ]
          }
        ]
      }
    ]
  };
}

export default createLesVerres;
