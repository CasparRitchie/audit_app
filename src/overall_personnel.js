import { createImagePickerElement } from './createImagePickerElement';

function createOverallPersonnel(prefix) {
  return {
    "name": `${prefix}_overall_personnel`,
    "title": "Personnel - Overall",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_personnel_overall_panel`,
        "title": "Personnel - Overall",
        "templateElements": [
          createImagePickerElement(prefix, "respect_des_procedures_d_hygiene", "Respect des procédures d’hygiène (absence d’utilisation de torchon, port de la coiffe règlementaire, port de bijoux, etc.)"),
          createImagePickerElement(prefix, "uniformite_des_tenues", "Uniformité des tenues"),
          createImagePickerElement(prefix, "etat_des_tenues", "Etat des tenues"),
          createImagePickerElement(prefix, "proprete_des_tenues", "Propreté des tenues"),
          createImagePickerElement(prefix, "adequation_tenue_fonction", "Adéquation tenue / fonction"),
          {
            "type": "radiogroup",
            "name": `${prefix}_convive_salue`,
            "title": "A son arrivée le convive est-il salué ('Bonjour') ?",
            "choices": [
              { "value": "oui", "text": "Oui" },
              { "value": "non", "text": "Non" }
            ]
          },
          createImagePickerElement(prefix, "personnel_poli_aimable", "Le personnel est-il poli et aimable ?"),
          createImagePickerElement(prefix, "personnel_souriant", "Le personnel est-il souriant ?"),
          createImagePickerElement(prefix, "personnel_attentif", "Le personnel est-il attentif ?"),
          createImagePickerElement(prefix, "echanges_clairs_efficaces", "Les échanges aves le personnel sont-ils clairs, efficaces et facilement compris ?"),
          createImagePickerElement(prefix, "souhaite_bon_appetit", "Le personnel souhaite t-il un 'bon appétit' (ou toute autre formule équivalente) lors de la remise de la"),
          createImagePickerElement(prefix, "gestes_de_service", "Les gestes de service"),
          createImagePickerElement(prefix, "reactivite", "La réactivité"),
          createImagePickerElement(prefix, "rapidite_de_service", "La rapidité de service"),
          createImagePickerElement(prefix, "autonomie", "L'autonomie"),
          createImagePickerElement(prefix, "l_information", "L'information"),
          createImagePickerElement(prefix, "le_conseil", "Le conseil")
        ]
      }
    ]
  };
}

export default createOverallPersonnel;
