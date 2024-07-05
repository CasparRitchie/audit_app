import { createImagePickerElement } from './createImagePickerElement';

function createLesContenants(prefix) {
  return {
    "name": `${prefix}_les_contenants_`,
    "title": "Les contenants",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_uniformite_de_la_vaisselle_utilisee`,
        "title": "Uniformité de la vaisselle utilisée",
        "elements": [
          createImagePickerElement(prefix, "accord_assiette_produits_servis", "Accord assiette / produits servis"),
          createImagePickerElement(prefix, "etat_des_ramequins_raviers", "Etat des ramequins/raviers"),
          createImagePickerElement(prefix, "proprete_des_ramequins_raviers", "Propreté des ramequins/raviers"),
          createImagePickerElement(prefix, "etat_des_petites_assiettes", "Etat des petites assiettes"),
          createImagePickerElement(prefix, "proprete_des_petites_assiettes", "Propreté des petites assiettes"),
          createImagePickerElement(prefix, "etat_des_coupelles", "Etat des coupelles"),
          createImagePickerElement(prefix, "proprete_des_coupelles", "Propreté des coupelles"),
          createImagePickerElement(prefix, "etat_des_bols", "Etat des bols"),
          createImagePickerElement(prefix, "proprete_des_bols", "Propreté des bols"),
          createImagePickerElement(prefix, "accessibilite_pour_le_reapprovisionnement_les_contenants", "Accessibilité pour le réapprovisionnement")
        ]
      },
    ]
  };
}

export default createLesContenants;
