import { createCompleteQuestionElement } from './createImagePickerElement';

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
          createCompleteQuestionElement(prefix, "accord_assiette_produits_servis", "Accord assiette / produits servis"),
          createCompleteQuestionElement(prefix, "etat_des_ramequins_raviers", "Etat des ramequins/raviers"),
          createCompleteQuestionElement(prefix, "proprete_des_ramequins_raviers", "Propreté des ramequins/raviers"),
          createCompleteQuestionElement(prefix, "etat_des_petites_assiettes", "Etat des petites assiettes"),
          createCompleteQuestionElement(prefix, "proprete_des_petites_assiettes", "Propreté des petites assiettes"),
          createCompleteQuestionElement(prefix, "etat_des_coupelles", "Etat des coupelles"),
          createCompleteQuestionElement(prefix, "proprete_des_coupelles", "Propreté des coupelles"),
          createCompleteQuestionElement(prefix, "etat_des_bols", "Etat des bols"),
          createCompleteQuestionElement(prefix, "proprete_des_bols", "Propreté des bols"),
          createCompleteQuestionElement(prefix, "accessibilite_pour_le_reapprovisionnement_les_contenants", "Accessibilité pour le réapprovisionnement")
        ]
      },
    ]
  };
}

export default createLesContenants;
