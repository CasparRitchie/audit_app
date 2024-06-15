const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

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
          {
            "type": "rating",
            "name": `${prefix}_accord_assiette_produits_servis`,
            "title": "Accord assiette / produits servis",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_etat_des_assiettes`,
        "title": "Etat des assiettes",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_etat_des_assiettes`,
            "title": "Etat des assiettes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_assiettes`,
            "title": "Propreté des assiettes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_chauffe_assiettes`,
        "title": "Chauffe-assiettes",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_presence_de_chauffe_assiettes`,
            "title": "Présence de chauffe-assiettes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_chauffe_assiettes`,
            "title": "Etat des chauffe-assiettes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_chauffe_assiettes`,
            "title": "Propreté des chauffe-assiettes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_bonne_utilisation_des_chauffe_assiettes`,
            "title": "Bonne utilisation des chauffe-assiettes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "radiogroup",
            "name": `${prefix}_accessibilite_pour_le_reapprovisionnement`,
            "title": "Accessibilité pour le réapprovisionnement",
            "choices": [
              {"value": "facile", "text": "Facile"},
              {"value": "difficile", "text": "Difficile"}
            ]
          }
        ]
      }
    ]
  };
}

export default createLesContenantsChauds;
