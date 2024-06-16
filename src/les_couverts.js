import red from './images/red.png'
import amber from './images/amber.png'
import green from './images/green.png'

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const image_size = 50

function createLesCouverts(prefix) {
  return {
    "name": `${prefix}_les_couverts`,
    "title": "Les couverts",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_fourchettes`,
        "title": "Les fourchettes",
        "templateElements":[
            {
              "type": "imagepicker",
              "name": `${prefix}_disponibilite_des_fourchettes`,
              "title": "Disponibilité des fourchettes",
              "imageWidth": image_size,
              "imageHeight": image_size,
              "choices": rateValues.map(rate => ({
                "value": rate.value,
                "imageLink": rate.imageLink
              }))
            },
            {
              "type": "imagepicker",
              "name": `${prefix}_etat_des_fourchettes`,
              "title": "Etat des fourchettes",
              "imageWidth": image_size,
              "imageHeight": image_size,
              "choices": rateValues.map(rate => ({
                "value": rate.value,
                "imageLink": rate.imageLink
              }))
            },
            {
              "type": "imagepicker",
              "name": `${prefix}_proprete_fourchettes`,
              "title": "Propreté fourchettes",
              "imageWidth": image_size,
              "imageHeight": image_size,
              "choices": rateValues.map(rate => ({
                "value": rate.value,
                "imageLink": rate.imageLink
              }))
            },
            {
              "type": "imagepicker",
              "name": `${prefix}_traces_de_calcaire_sur_les_fourchettes`,
              "title": "Traces de calcaire sur les fourchettes",
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
        "type": "paneldynamic",
        "name": `${prefix}_les_couteaux`,
        "title": "Les couteaux",
        "templateElements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_disponibilite_des_couteaux`,
            "title": "Disponibilité des couteaux",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_couteaux`,
            "title": "Etat des couteaux",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_couteaux`,
            "title": "Propreté couteaux",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_traces_de_calcaire_sur_les_couteaux`,
            "title": "Traces de calcaire sur les couteaux",
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
        "type": "paneldynamic",
        "name": `${prefix}_les_petites_cuilleres`,
        "title": "Les petites cuillères",
        "templateElements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_disponibilite_des_petites_cuilleres`,
            "title": "Disponibilité des petites cuillères",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_petites_cuilleres`,
            "title": "Etat des petites cuillères",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_petites_cuilleres`,
            "title": "Propreté petites cuillères",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_traces_de_calcaire_sur_les_petites_cuilleres`,
            "title": "Traces de calcaire sur les petites cuillères",
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
        "type": "paneldynamic",
        "name": `${prefix}_les_verres`,
        "title": "Les verres",
        "templateElements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_disponibilite_des_verres`,
            "title": "Disponibilité",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_verres`,
            "title": "Etat",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_verres`,
            "title": "Propreté",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_traces_de_calcaire_sur_les_verres`,
            "title": "Traces de calcaire sur les verres",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_nette_des_verres`,
            "title": "Netteté des verres",
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

export default createLesCouverts;
