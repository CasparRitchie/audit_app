import red from './images/red.png'
import amber from './images/amber.png'
import green from './images/green.png'

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const image_size = 50

function createLesUstensilesDeService(prefix) {
  return {
    "name": `${prefix}_les_ustensiles_de_service`,
    "title": "Les Ustensiles de Service",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_ustensiles_de_service_panel`,
        "title": "Les Ustensiles de Service",
        "templateElements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_ustensiles`,
            "title": "Etat des ustensiles",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_ustensiles`,
            "title": "Propreté des ustensiles",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_bacs_gastronormes`,
            "title": "Etat des bacs gastronormes",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_bacs_gastronormes`,
            "title": "Propreté des bacs gastronormes",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_adequation_ustensiles_prestation_servie`,
            "title": "Adéquation des ustensiles de service à la prestation servie",
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

export default createLesUstensilesDeService;
