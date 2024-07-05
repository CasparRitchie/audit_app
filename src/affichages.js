import { createImagePickerElement } from './createImagePickerElement';

function createAffichages(prefix) {
  return {
    "name": `${prefix}_affichages`,
    "title": "Les affichages",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_affichages_panel`,
        "title": "Les affichages",
        "templateElements": [
          createImagePickerElement(prefix, "disponibilite_des_informations_sur_les_allergenes", "Disponibilité des informations sur les allergènes"),
          createImagePickerElement(prefix, "visibilite_des_informations", "Visibilité des informations"),
          createImagePickerElement(prefix, "information_produit", "Information produit"),
          createImagePickerElement(prefix, "prix_des_produits", "Prix des produits")
        ]
      }
    ]
  };
}

export default createAffichages;
