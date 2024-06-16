import red from './images/red.png'
import amber from './images/amber.png'
import green from './images/green.png'

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const image_size = 50

function createLeMaterielPrestationsChaudes(prefix) {
  return {
    "name": `${prefix}_le_materiel_prestations_chaudes`,
    "title": "Le matériel - prestations chaudes",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_le_materiel_panel_prestations_chaudes`,
        "title": "Le matériel",
        "elements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_pare_haleine_prestations_chaudes`,
            "title": "Etat des pare-haleine",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_pare_haleine_prestations_chaudes`,
            "title": "Propreté des pare-haleine",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_ilots_prestations_chaudes`,
            "title": "Etat des matériels de maintien en température (chafing-dish, bain-marie)",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_ilots_prestations_chaudes`,
            "title": "Propreté des matériel de maintien en température (chafing-dish, bain-marie)",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_vitres_prestations_chaudes`,
            "title": "Etat de la plancha",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_vitres_prestations_chaudes_grill`,
            "title": "Etat de la grill",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_vitres_prestations_chaudes_friteuse`,
            "title": "Etat de la friteuse",
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

export default createLeMaterielPrestationsChaudes;
