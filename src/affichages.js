import { createCompleteQuestionElement } from './createImagePickerElement';

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
          createCompleteQuestionElement(prefix, "disponibilite_des_informations_sur_les_allergenes", "Disponibilité des informations sur les allergènes"),
          createCompleteQuestionElement(prefix, "visibilite_des_informations", "Visibilité des informations"),
          createCompleteQuestionElement(prefix, "information_produit", "Information produit"),
          createCompleteQuestionElement(prefix, "prix_des_produits", "Prix des produits")
        ]
      }
    ]
  };
}

export default createAffichages;
