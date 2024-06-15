const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

function createLesContenantsFroids(prefix) {
  return {
    "name": `${prefix}_les_contenants_froids`,
    "title": "Les Contenants (prestations froides)",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_les_contenants_froids_panel`,
        "title": "Les Contenants (prestations froides)",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_etat_des_saladiers_de_service`,
            "title": "Etat des saladiers de service",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_uniformite_de_la_vaisselle_utilisee`,
            "title": "Uniformité de la vaisselle utilisée",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_disponibilite_des_ramequins_raviers`,
            "title": "Disponibilité des ramequins/raviers",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_ramequins_raviers`,
            "title": "Etat des ramequins/raviers",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_ramequins_raviers`,
            "title": "Propreté des ramequins/raviers",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_disponibilite_des_petites_assiettes`,
            "title": "Disponibilité des petites assiettes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_petites_assiettes`,
            "title": "Etat des petites assiettes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_petites_assiettes`,
            "title": "Propreté des petites assiettes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_disponibilite_des_coupelles`,
            "title": "Disponibilité des coupelles",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_coupelles`,
            "title": "Etat des coupelles",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_coupelles`,
            "title": "Propreté des coupelles",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_disponibilite_des_bols`,
            "title": "Disponibilité des bols",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_bols`,
            "title": "Etat des bols",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_bols`,
            "title": "Propreté des bols",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_disponibilite_des_bowls`,
            "title": "Disponibilité des bowls",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_bowls`,
            "title": "Etat des bowls",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_bowls`,
            "title": "Propreté des bowls",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_accessibilite_pour_le_reapprovisionnement_bowls`,
            "title": "Accessibilité pour le réapprovisionnement",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      }
    ]
  };
}

export default createLesContenantsFroids;
