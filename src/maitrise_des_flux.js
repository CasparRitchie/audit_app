import red from './images/red.png'
import amber from './images/amber.png'
import green from './images/green.png'

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const image_size = 50

function createMaitriseDesFlux(prefix) {
  return {
    "name": `${prefix}_maitrise_des_flux`,
    "title": "Maîtrise des flux",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_maitrise_des_flux_panel`,
        "title": "Maîtrise des flux",
        "templateElements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_reactivite_reduire_temps_attente`,
            "title": "Réactivité pour réduire les temps d'attente",
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

export default createMaitriseDesFlux;
