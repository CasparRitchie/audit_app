import { createImagePickerElement } from './createImagePickerElement';

function createMaitriseDesFlux(prefix) {
  return {
    "name": `${prefix}_maitrise_des_flux`,
    "title": "Maîtrise des flux",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_maitrise_des_flux_panel`,
        "title": "Maîtrise des flux",
        "templateElements": [
          createImagePickerElement(prefix, "reactivite_reduire_temps_attente", "Réactivité pour réduire les temps d'attente")
        ]
      }
    ]
  };
}

export default createMaitriseDesFlux;
