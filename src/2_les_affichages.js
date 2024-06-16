import red from './images/red.png'
import amber from './images/amber.png'
import green from './images/green.png'

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const image_size = 50

const les_affichages_generales = {
  "name": "les_affichages_generales",
  "title": "Les affichages",
  "elements": [
    {
      "type": "paneldynamic",
      "name": "affichages_des_horaires",
      "title": "Affichage des horaires d'ouverture du restaurant",
      "templateElements": [
        {
          "type": "imagepicker",
          "name": "affichage_des_horaires_d_ouverture_du_restaurant",
          "title": " ",
          "imageWidth": image_size,
          "imageHeight": image_size,
          "choices": rateValues.map(rate => ({
            "value": rate.value,
            "imageLink": rate.imageLink
          }))
        },
      ],
      "panelCount": 0,
      "confirmDelete": true
    },
    {
      "type": "paneldynamic",
      "name": "informations_sur_les_plats_menus",
      "title": "Informations sur les plats / menus",
      "templateElements": [
        {
          "type": "imagepicker",
          "name": "informations_sur_les_plats_menus",
          "title": " ",
          "imageWidth": image_size,
          "imageHeight": image_size,
          "choices": rateValues.map(rate => ({
            "value": rate.value,
            "imageLink": rate.imageLink
          }))
        },
      ],
      "panelCount": 0,
      "confirmDelete": true
    },
    {
      "type": "paneldynamic",
      "name": "informations_sur_les_creneaux_horaires_a_eviter",
      "title": "Informations sur les créneaux horaires à éviter",
      "templateElements": [
        {
          "type": "imagepicker",
          "name": "informations_sur_les_creneaux_horaires_a_eviter",
          "title": " ",
          "imageWidth": image_size,
          "imageHeight": image_size,
          "choices": rateValues.map(rate => ({
            "value": rate.value,
            "imageLink": rate.imageLink
          }))
        },
      ],
      "panelCount": 0,
      "confirmDelete": true
    }
  ]
};

export default les_affichages_generales;
