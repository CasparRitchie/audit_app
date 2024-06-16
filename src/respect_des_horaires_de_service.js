import red from './images/red.png'
import amber from './images/amber.png'
import green from './images/green.png'

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const image_size = 50

function createRespectDesHorairesDeService(prefix) {
  return {
    "name": `${prefix}_respect_des_horaires_de_service`,
    "title": "Respect des horaires de service",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_respect_des_horaires_de_service_panel`,
        "title": "Respect des horaires de service",
        "templateElements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_respect_horaires_service`,
            "title": "Respect des horaires de service",
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

export default createRespectDesHorairesDeService;
