import { createCompleteQuestionElement } from './createImagePickerElement';

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
          createCompleteQuestionElement(prefix, "etat_des_saladiers_de_service", "Etat des saladiers de service"),
          createCompleteQuestionElement(prefix, "uniformite_de_la_vaisselle_utilisee", "Uniformité de la vaisselle utilisée"),
          createCompleteQuestionElement(prefix, "disponibilite_des_ramequins_raviers", "Disponibilité des ramequins/raviers"),
          createCompleteQuestionElement(prefix, "etat_des_ramequins_raviers", "Etat des ramequins/raviers"),
          createCompleteQuestionElement(prefix, "proprete_des_ramequins_raviers", "Propreté des ramequins/raviers"),
          createCompleteQuestionElement(prefix, "disponibilite_des_petites_assiettes", "Disponibilité des petites assiettes"),
          createCompleteQuestionElement(prefix, "etat_des_petites_assiettes", "Etat des petites assiettes"),
          createCompleteQuestionElement(prefix, "proprete_des_petites_assiettes", "Propreté des petites assiettes"),
          createCompleteQuestionElement(prefix, "disponibilite_des_coupelles", "Disponibilité des coupelles"),
          createCompleteQuestionElement(prefix, "etat_des_coupelles", "Etat des coupelles"),
          createCompleteQuestionElement(prefix, "proprete_des_coupelles", "Propreté des coupelles"),
          createCompleteQuestionElement(prefix, "disponibilite_des_bols", "Disponibilité des bols"),
          createCompleteQuestionElement(prefix, "etat_des_bols", "Etat des bols"),
          createCompleteQuestionElement(prefix, "proprete_des_bols", "Propreté des bols"),
          createCompleteQuestionElement(prefix, "disponibilite_des_bowls", "Disponibilité des bowls"),
          createCompleteQuestionElement(prefix, "etat_des_bowls", "Etat des bowls"),
          createCompleteQuestionElement(prefix, "proprete_des_bowls", "Propreté des bowls"),
          createCompleteQuestionElement(prefix, "accessibilite_pour_le_reapprovisionnement_bowls", "Accessibilité pour le réapprovisionnement")
        ]
      }
    ]
  };
}

export default createLesContenantsFroids;
