import { createCompleteQuestionElement } from './createImagePickerElement';

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
          createCompleteQuestionElement(prefix, "respect_des_procedures_d_hygiene", "Respect des procédures d’hygiène (absence d’utilisation de torchon, port de la coiffe règlementaire, port de bijoux, etc.)"),
          createCompleteQuestionElement(prefix, "uniformite_des_tenues", "Uniformité des tenues"),
          createCompleteQuestionElement(prefix, "etat_des_tenues", "Etat des tenues"),
          createCompleteQuestionElement(prefix, "proprete_des_tenues", "Propreté des tenues"),
          createCompleteQuestionElement(prefix, "adequation_tenue_fonction", "Adéquation tenue / fonction"),
          {
            "type": "radiogroup",
            "name": `${prefix}_convive_salue`,
            "title": "A son arrivée le convive est-il salué ('Bonjour') ?",
            "choices": [
              { "value": "oui", "text": "Oui" },
              { "value": "non", "text": "Non" }
            ]
          },
          createCompleteQuestionElement(prefix, "personnel_poli_aimable", "Le personnel est-il poli et aimable ?"),
          createCompleteQuestionElement(prefix, "personnel_souriant", "Le personnel est-il souriant ?"),
          createCompleteQuestionElement(prefix, "personnel_attentif", "Le personnel est-il attentif ?"),
          createCompleteQuestionElement(prefix, "echanges_clairs_efficaces", "Les échanges aves le personnel sont-ils clairs, efficaces et facilement compris ?"),
          createCompleteQuestionElement(prefix, "souhaite_bon_appetit", "Le personnel souhaite t-il un 'bon appétit' (ou toute autre formule équivalente) lors de la remise de la"),
          createCompleteQuestionElement(prefix, "gestes_de_service", "Les gestes de service"),
          createCompleteQuestionElement(prefix, "reactivite", "La réactivité"),
          createCompleteQuestionElement(prefix, "rapidite_de_service", "La rapidité de service"),
          createCompleteQuestionElement(prefix, "autonomie", "L'autonomie"),
          createCompleteQuestionElement(prefix, "l_information", "L'information"),
          createCompleteQuestionElement(prefix, "le_conseil", "Le conseil")
        ]
      }
    ]
  };
}

export default createOverallPersonnel;
