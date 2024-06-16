import red from './images/red.png'
import amber from './images/amber.png'
import green from './images/green.png'

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const image_size = 50

function createZoneDistributionPersonnel(prefix) {
  return {
    "name": `${prefix}_zone_distribution_personnel`,
    "title": "Personnel - Zone de distribution",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_zone_distribution_personnel_panel`,
        "title": "Zone de Distribution - Personnel",
        "templateElements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_respect_des_procedures_d_hygiene`,
            "title": "Respect des procédures d’hygiène (absence d’utilisation de torchon, port de la coiffe règlementaire, port de bijoux, etc.)",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_uniformite_des_tenues`,
            "title": "Uniformité des tenues",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_tenues`,
            "title": "Etat des tenues",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_tenues`,
            "title": "Propreté des tenues",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_le_sourire`,
            "title": "Le sourire",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_l_amabilite`,
            "title": "L'amabilité",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_la_politesse`,
            "title": "La politesse",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_la_gestuelle`,
            "title": "La gestuelle",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_la_reactivite`,
            "title": "La réactivité",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_la_rapidite_de_service`,
            "title": "La rapidité de service",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_l_information`,
            "title": "L’information",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_le_conseil`,
            "title": "Le conseil",
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

export default createZoneDistributionPersonnel;
