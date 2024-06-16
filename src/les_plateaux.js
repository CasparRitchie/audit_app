import red from './images/red.png'
import amber from './images/amber.png'
import green from './images/green.png'

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const image_size = 50

function createLesPlateaux(prefix) {
  return {
    "name": `${prefix}_les_plateaux`,
    "title": "Les plateaux",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_plateaux_panel`,
        "title": "Les Plateaux",
        "templateElements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_disponibilite`,
            "title": "Disponibilité",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat`,
            "title": "Etat",
          "imageWidth": image_size,
          "imageHeight": image_size,
          "choices": rateValues.map(rate => ({
            "value": rate.value,
            "imageLink": rate.imageLink
          }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete`,
            "title": "Propreté",
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
      }
    ]
  };
}

export default createLesPlateaux;
