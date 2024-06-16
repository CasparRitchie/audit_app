import red from './images/red.png'
import amber from './images/amber.png'
import green from './images/green.png'

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const image_size = 50

function createLesContenantsChauds(prefix) {
  return {
    "name": `${prefix}_les_contenants_chauds`,
    "title": "Les contenants (prestations chaudes)",
    "elements": [

      [{
        "type": "panel",
        "name": `${prefix}_accord_assiette_produits_servis`,
        "title": "Accord assiette / produits servis",
        "elements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_accord_assiette_produits_servis`,
            "title": "Accord assiette / produits servis",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          }
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_etat_des_assiettes`,
        "title": "Etat des assiettes",
        "elements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_assiettes`,
            "title": "Etat des assiettes",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_assiettes`,
            "title": "Propreté des assiettes",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          }
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_chauffe_assiettes`,
        "title": "Chauffe-assiettes",
        "elements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_presence_de_chauffe_assiettes`,
            "title": "Présence de chauffe-assiettes",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_chauffe_assiettes`,
            "title": "Etat des chauffe-assiettes",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_chauffe_assiettes`,
            "title": "Propreté des chauffe-assiettes",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_bonne_utilisation_des_chauffe_assiettes`,
            "title": "Bonne utilisation des chauffe-assiettes",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
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
      }]
    ]
  };
}

export default createLesContenantsChauds;
