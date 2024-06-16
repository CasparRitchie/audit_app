import red from './images/red.png'
import amber from './images/amber.png'
import green from './images/green.png'

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const image_size = 50

function createAffichages(prefix) {
  return {
    "name": `${prefix}_affichages`,
    "title": "Les affichages",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_affichages_panel`,
        "title": "Les affichages",
        "templateElements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_disponibilite_des_informations_sur_les_allergenes`,
            "title": "Disponibilité des informations sur les allergènes",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_visibilite_des_informations`,
            "title": "Visibilité des informations",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_information_produit`,
            "title": "Information produit",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_prix_des_produits`,
            "title": "Prix des produits",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          }
        ]
      }
    ]
  };
}

export default createAffichages;
