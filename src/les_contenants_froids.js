import red from './images/red.png'
import amber from './images/amber.png'
import green from './images/green.png'

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const image_size = 50

function createLesContenantsFroids(prefix) {
  return {
    "name": `${prefix}_les_contenants_froids`,
    "title": "Les Contenants (prestations froides)",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_contenants_froids_panel`,
        "title": "Les Contenants (prestations froides)",
        "templateElements": [
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_saladiers_de_service`,
            "title": "Etat des saladiers de service",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_uniformite_de_la_vaisselle_utilisee`,
            "title": "Uniformité de la vaisselle utilisée",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_disponibilite_des_ramequins_raviers`,
            "title": "Disponibilité des ramequins/raviers",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_ramequins_raviers`,
            "title": "Etat des ramequins/raviers",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_ramequins_raviers`,
            "title": "Propreté des ramequins/raviers",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_disponibilite_des_petites_assiettes`,
            "title": "Disponibilité des petites assiettes",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_petites_assiettes`,
            "title": "Etat des petites assiettes",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_petites_assiettes`,
            "title": "Propreté des petites assiettes",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_disponibilite_des_coupelles`,
            "title": "Disponibilité des coupelles",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_coupelles`,
            "title": "Etat des coupelles",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_coupelles`,
            "title": "Propreté des coupelles",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_disponibilite_des_bols`,
            "title": "Disponibilité des bols",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_bols`,
            "title": "Etat des bols",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_bols`,
            "title": "Propreté des bols",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_disponibilite_des_bowls`,
            "title": "Disponibilité des bowls",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_etat_des_bowls`,
            "title": "Etat des bowls",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_proprete_des_bowls`,
            "title": "Propreté des bowls",
            "imageWidth": image_size,
            "imageHeight": image_size,
            "choices": rateValues.map(rate => ({
              "value": rate.value,
              "imageLink": rate.imageLink
            }))
          },
          {
            "type": "imagepicker",
            "name": `${prefix}_accessibilite_pour_le_reapprovisionnement_bowls`,
            "title": "Accessibilité pour le réapprovisionnement",
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

export default createLesContenantsFroids;
