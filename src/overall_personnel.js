const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

function createOverallPersonnel(prefix) {
  return {
    "name": `${prefix}_overall_personnel`,
    "title": "Personnel - Overall",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_personnel_overall_panel`,
        "title": "Personnel - Overall",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_respect_des_procedures_d_hygiene`,
            "title": "Respect des procédures d’hygiène (absence d’utilisation de torchon, port de la coiffe règlementaire, port de bijoux, etc.)",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_uniformite_des_tenues`,
            "title": "Uniformité des tenues",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_tenues`,
            "title": "Etat des tenues",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_tenues`,
            "title": "Propreté des tenues",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_adequation_tenue_fonction`,
            "title": "Adéquation tenue / fonction",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "radiogroup",
            "name": `${prefix}_convive_salue`,
            "title": "A son arrivée le convive est-il salué ('Bonjour') ?",
            "choices": [
              {"value": "oui", "text": "Oui"},
              {"value": "non", "text": "Non"}
            ]
          },
          {
            "type": "rating",
            "name": `${prefix}_personnel_poli_aimable`,
            "title": "Le personnel est-il poli et aimable ?",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_personnel_souriant`,
            "title": "Le personnel est-il souriant ?",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_personnel_attentif`,
            "title": "Le personnel est-il attentif ?",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_echanges_clairs_efficaces`,
            "title": "Les échanges aves le personnel sont-ils clairs, efficaces et facilement compris ?",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_souhaite_bon_appetit`,
            "title": "Le personnel souhaite t-il un 'bon appétit' (ou toute autre formule équivalente) lors de la remise de la",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_gestes_de_service`,
            "title": "Les gestes de service",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_reactivite`,
            "title": "La réactivité",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_rapidite_de_service`,
            "title": "La rapidité de service",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_autonomie`,
            "title": "L'autonomie",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_l_information`,
            "title": "L'information",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_le_conseil`,
            "title": "Le conseil",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      }
    ]
  };
}

export default createOverallPersonnel;
