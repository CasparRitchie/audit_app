import red from './images/red.png'
import amber from './images/amber.png'
import green from './images/green.png'

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const image_size = 50

function createLesLocaux(prefix) {
  return {
    "name": `${prefix}_les_locaux`,
    "title": "Les Locaux",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_les_locaux_panel`,
        "title": "Les Locaux",
        "elements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_vitres`,
            "title": "Etat des vitres",
                      "imageWidth": image_size,
          "imageHeight": image_size,
          "choices": rateValues.map(rate => ({
            "value": rate.value,
            "imageLink": rate.imageLink
          }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_vitres`,
            "title": "Propreté des vitres",
                      "imageWidth": image_size,
          "imageHeight": image_size,
          "choices": rateValues.map(rate => ({
            "value": rate.value,
            "imageLink": rate.imageLink
          }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_murs`,
            "title": "Etat des murs",
                      "imageWidth": image_size,
          "imageHeight": image_size,
          "choices": rateValues.map(rate => ({
            "value": rate.value,
            "imageLink": rate.imageLink
          }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_murs`,
            "title": "Propreté des murs",
                      "imageWidth": image_size,
          "imageHeight": image_size,
          "choices": rateValues.map(rate => ({
            "value": rate.value,
            "imageLink": rate.imageLink
          }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_sols`,
            "title": "Etat des sols",
                      "imageWidth": image_size,
          "imageHeight": image_size,
          "choices": rateValues.map(rate => ({
            "value": rate.value,
            "imageLink": rate.imageLink
          }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_sols`,
            "title": "Propreté des sols",
                      "imageWidth": image_size,
          "imageHeight": image_size,
          "choices": rateValues.map(rate => ({
            "value": rate.value,
            "imageLink": rate.imageLink
          }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_plafonds`,
            "title": "Etat des plafonds",
                      "imageWidth": image_size,
          "imageHeight": image_size,
          "choices": rateValues.map(rate => ({
            "value": rate.value,
            "imageLink": rate.imageLink
          }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_plafonds`,
            "title": "Propreté des plafonds",
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

export default createLesLocaux;
