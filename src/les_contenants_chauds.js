// needs refactoring for rateValues

const les_contenants_chauds = {
  "name": "les_contenants_chauds",
  "title": "Les contenants (prestations chaudes)",
  "elements": [
    {
      "type": "panel",
      "name": "accord_assiette_produits_servis",
      "title": "Accord assiette / produits servis",
      "elements": [
        {
          "type": "rating",
          "name": "accord_assiette_produits_servis",
          "title": "Accord assiette / produits servis",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": [
            {"value": 1, "text": "Red"},
            {"value": 2, "text": "Orange"},
            {"value": 3, "text": "Green"}
          ]
        }
      ]
    },
    {
      "type": "panel",
      "name": "etat_des_assiettes",
      "title": "Etat des assiettes",
      "elements": [
        {
          "type": "rating",
          "name": "etat_des_assiettes",
          "title": "Etat des assiettes",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": [
            {"value": 1, "text": "Red"},
            {"value": 2, "text": "Orange"},
            {"value": 3, "text": "Green"}
          ]
        },
        {
          "type": "rating",
          "name": "proprete_des_assiettes",
          "title": "Propreté des assiettes",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": [
            {"value": 1, "text": "Red"},
            {"value": 2, "text": "Orange"},
            {"value": 3, "text": "Green"}
          ]
        }
      ]
    },
    {
      "type": "panel",
      "name": "chauffe_assiettes",
      "title": "Chauffe-assiettes",
      "elements": [
        {
          "type": "rating",
          "name": "presence_de_chauffe_assiettes",
          "title": "Présence de chauffe-assiettes",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": [
            {"value": 1, "text": "Red"},
            {"value": 2, "text": "Orange"},
            {"value": 3, "text": "Green"}
          ]
        },
        {
          "type": "rating",
          "name": "etat_des_chauffe_assiettes",
          "title": "Etat des chauffe-assiettes",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": [
            {"value": 1, "text": "Red"},
            {"value": 2, "text": "Orange"},
            {"value": 3, "text": "Green"}
          ]
        },
        {
          "type": "rating",
          "name": "proprete_des_chauffe_assiettes",
          "title": "Propreté des chauffe-assiettes",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": [
            {"value": 1, "text": "Red"},
            {"value": 2, "text": "Orange"},
            {"value": 3, "text": "Green"}
          ]
        },
        {
          "type": "rating",
          "name": "bonne_utilisation_des_chauffe_assiettes",
          "title": "Bonne utilisation des chauffe-assiettes",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": [
            {"value": 1, "text": "Red"},
            {"value": 2, "text": "Orange"},
            {"value": 3, "text": "Green"}
          ]
        },
        {
          "type": "rating",
          "name": "accessibilite_pour_le_reapprovisionnement",
          "title": "Accessibilité pour le réapprovisionnement",
          "rateType": "radiogroup",
          "choices": [
            {"value": "facile", "text": "Facile"},
            {"value": "difficile", "text": "Difficile"}
          ]
        }
      ]
    }
  ]
};

export default les_contenants_chauds;
