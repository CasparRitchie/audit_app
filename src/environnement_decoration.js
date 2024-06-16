import red from './images/red.png'
import amber from './images/amber.png'
import green from './images/green.png'

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const image_size = 50

function createEnvironnementDecoration(prefix) {
  return {
    "name": `${prefix}_environnement_decoration`,
    "title": "Environnement / décoration",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_environnement_decoration_panel`,
        "title": "Environnement / décoration",
        "templateElements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_temperature`,
            "title": "Température",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_luminosite`,
            "title": "Luminosité",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_niveau_sonore`,
            "title": "Niveau sonore",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_fluidite_de_deplacement_pour_les_convives`,
            "title": "Fluidité de déplacement pour les convives",
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

export default createEnvironnementDecoration;
