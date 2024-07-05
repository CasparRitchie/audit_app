import { createImagePickerElement } from './createImagePickerElement';

function createLesContenantsChauds(prefix) {
  return {
    "name": `${prefix}_les_contenants_chauds`,
    "title": "Les contenants (prestations chaudes)",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_accord_assiette_produits_servis`,
        "title": "Accord assiette / produits servis",
        "elements": [
          createImagePickerElement(prefix, "accord_assiette_produits_servis", "Accord assiette / produits servis")
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_etat_des_assiettes`,
        "title": "Etat des assiettes",
        "elements": [
          createImagePickerElement(prefix, "etat_des_assiettes", "Etat des assiettes"),
          createImagePickerElement(prefix, "proprete_des_assiettes", "Propreté des assiettes")
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_chauffe_assiettes`,
        "title": "Chauffe-assiettes",
        "elements": [
          createImagePickerElement(prefix, "presence_de_chauffe_assiettes", "Présence de chauffe-assiettes"),
          createImagePickerElement(prefix, "etat_des_chauffe_assiettes", "Etat des chauffe-assiettes"),
          createImagePickerElement(prefix, "proprete_des_chauffe_assiettes", "Propreté des chauffe-assiettes"),
          createImagePickerElement(prefix, "bonne_utilisation_des_chauffe_assiettes", "Bonne utilisation des chauffe-assiettes"),
          {
            "type": "radiogroup",
            "name": `${prefix}_accessibilite_pour_le_reapprovisionnement`,
            "title": "Accessibilité pour le réapprovisionnement",
            "choices": [
              { "value": "facile", "text": "Facile" },
              { "value": "difficile", "text": "Difficile" }
            ]
          }
        ]
      }
    ]
  };
}

export default createLesContenantsChauds;
