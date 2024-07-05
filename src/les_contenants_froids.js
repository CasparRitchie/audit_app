import { createImagePickerElement } from './createImagePickerElement';

function createLesContenantsFroids(prefix) {
  return {
    "name": `${prefix}_les_contenants_froids`,
    "title": "Les Contenants (prestations froides)",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_contenants_froids_panel`,
        "title": "Les Contenants (prestations froides)",
        "templateElements": [
          createImagePickerElement(prefix, "etat_des_saladiers_de_service", "Etat des saladiers de service"),
          createImagePickerElement(prefix, "uniformite_de_la_vaisselle_utilisee", "Uniformité de la vaisselle utilisée"),
          createImagePickerElement(prefix, "disponibilite_des_ramequins_raviers", "Disponibilité des ramequins/raviers"),
          createImagePickerElement(prefix, "etat_des_ramequins_raviers", "Etat des ramequins/raviers"),
          createImagePickerElement(prefix, "proprete_des_ramequins_raviers", "Propreté des ramequins/raviers"),
          createImagePickerElement(prefix, "disponibilite_des_petites_assiettes", "Disponibilité des petites assiettes"),
          createImagePickerElement(prefix, "etat_des_petites_assiettes", "Etat des petites assiettes"),
          createImagePickerElement(prefix, "proprete_des_petites_assiettes", "Propreté des petites assiettes"),
          createImagePickerElement(prefix, "disponibilite_des_coupelles", "Disponibilité des coupelles"),
          createImagePickerElement(prefix, "etat_des_coupelles", "Etat des coupelles"),
          createImagePickerElement(prefix, "proprete_des_coupelles", "Propreté des coupelles"),
          createImagePickerElement(prefix, "disponibilite_des_bols", "Disponibilité des bols"),
          createImagePickerElement(prefix, "etat_des_bols", "Etat des bols"),
          createImagePickerElement(prefix, "proprete_des_bols", "Propreté des bols"),
          createImagePickerElement(prefix, "disponibilite_des_bowls", "Disponibilité des bowls"),
          createImagePickerElement(prefix, "etat_des_bowls", "Etat des bowls"),
          createImagePickerElement(prefix, "proprete_des_bowls", "Propreté des bowls"),
          createImagePickerElement(prefix, "accessibilite_pour_le_reapprovisionnement_bowls", "Accessibilité pour le réapprovisionnement")
        ]
      }
    ]
  };
}

export default createLesContenantsFroids;
