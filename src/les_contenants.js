const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

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
          {
            "type": "rating",
            "name": `${prefix}_accord_assiette_produits_servis`,
            "title": "Accord assiette / produits servis",
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
            "title": "Proprete des ramequins/raviers",
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
            "name": `${prefix}_accessibilite_pour_le_reapprovisionnement_les_contenants`,
            "title": "Accessibilité pour le réapprovisionnement",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      },
    ]
  };
}

export default createLesContenants;
