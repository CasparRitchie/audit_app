const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

const overall_personnel = {
  "name": "overall_personnel",
  "title": "Personnel - Overall",
  "elements": [
    {
      "type": "panel",
      "name": "personnel_overall_panel",
      "title": "Personnel - Overall",
      "elements": [
        {
          "type": "rating",
          "name": "respect_des_procedures_d_hygiene",
          "title": "Respect des procédures d’hygiène (absence d’utilisation de torchon, port de la coiffe règlementaire, port de bijoux, etc.)",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "uniformite_des_tenues",
          "title": "Uniformité des tenues",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "etat_des_tenues",
          "title": "Etat des tenues",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "proprete_des_tenues",
          "title": "Propreté des tenues",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "adequation_tenue_fonction",
          "title": "Adéquation tenue / fonction",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "radiogroup",
          "name": "convive_salue",
          "title": "A son arrivée le convive est-il salué ('Bonjour') ?",
          "choices": [
            {"value": "oui", "text": "Oui"},
            {"value": "non", "text": "Non"}
          ]
        },
        {
          "type": "rating",
          "name": "personnel_poli_aimable",
          "title": "Le personnel est-il poli et aimable ?",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "personnel_souriant",
          "title": "Le personnel est-il souriant ?",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "personnel_attentif",
          "title": "Le personnel est-il attentif ?",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "echanges_clairs_efficaces",
          "title": "Les échanges aves le personnel sont-ils clairs, efficaces et facilement compris ?",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "souhaite_bon_appetit",
          "title": "Le personnel souhaite t-il un 'bon appétit' (ou toute autre formule équivalente) lors de la remise de la",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "gestes_de_service",
          "title": "Les gestes de service",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "reactivite",
          "title": "La réactivité",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "rapidite_de_service",
          "title": "La rapidité de service",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "autonomie",
          "title": "L'autonomie",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "l_information",
          "title": "L'information",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "le_conseil",
          "title": "Le conseil",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        }
      ]
    }
  ]
};

export default overall_personnel;
