import red from './images/red.png'
import amber from './images/amber.png'
import green from './images/green.png'

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const image_size = 50

function createLesAffichagesObligatoires(prefix) {
  return {
    "name": `${prefix}_les_affichages_obligatoires`,
    "title": "Les affichages obligatoires",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_viandes_bovines`,
        "title": "Viandes bovines",
        "elements": [
          {
            "type": "radiogroup",
            "name": `${prefix}_viandes_bovines_affichage`,
            "title": "Viandes bovines",
            "choices": [
              { "value": "ok", "text": "OK" },
              { "value": "nok", "text": "NOK" }
            ]
          }
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_autres_viandes`,
        "title": "Pour les autres viandes (porcine, ovine et de volaille)",
        "elements": [
          {
            "type": "radiogroup",
            "name": `${prefix}_autres_viandes_affichage`,
            "title": "Pour les autres viandes (porcine, ovine et de volaille)",
            "choices": [
              { "value": "ok", "text": "OK" },
              { "value": "nok", "text": "NOK" }
            ]
          }
        ]
      },
      {
        "type": "paneldynamic",
        "name": `${prefix}_affichage`,
        "title": "Affichage",
        "templateElements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_presence_d_un_affichage`,
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
            "name": `${prefix}_qualite_de_l_affichage`,
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
            "name": `${prefix}_lisibilite_des_informations`,
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
            "name": `${prefix}_precision_des_informations`,
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
            "name": `${prefix}_indication_du_prix`,
            "title": "Indication du prix",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          }
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_presentation`,
        "title": "Présentation",
        "elements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_qualite_de_la_presentation`,
            "title": "Qualité de la présentation",
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
              { "value": "facile", "text": "Facile" },
              { "value": "difficile", "text": "Difficile" }
            ]
          }
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_les_ustensiles_de_service`,
        "title": "Les ustensiles de service",
        "elements": [
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
            "name": `${prefix}_adequation_des_ustensiles_de_service_a_la_prestation_servie`,
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

export default createLesAffichagesObligatoires;
