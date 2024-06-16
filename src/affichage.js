import red from './images/red.png'
import amber from './images/amber.png'
import green from './images/green.png'

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const image_size = 50

function createAffichage(prefix) {
  return {
    "name": `${prefix}_affichage`,
    "title": "Les affichages obligatoires",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_affichage_affichage`,
        "title": "Affichage",
        "templateElements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_presence_d_un_affichage_affichage`,
            "title": "Présence d'un affichage",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_qualite_de_l_affichage_affichage`,
            "title": "Qualité de l'affichage",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_lisibilite_des_informations_affichage`,
            "title": "Lisibilité des informations",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_precision_des_informations_affichage`,
            "title": "Précision des informations",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_indication_du_prix_affichage`,
            "title": "Indication du prix",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          }
        ],
        "panelCount": 1,
        "confirmDelete": true
      }
    ]
  };
}

export default createAffichage;
