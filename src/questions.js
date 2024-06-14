const questionMetadata = {
  "affichage_des_horaires_d_ouverture_du_restaurant": {
    "title": "Affichage des horaires d’ouverture du restaurant",
    "type": "rating"
  },
  "informations_sur_les_plats_menus": {
    "title": "Informations sur les plats / menus",
    "type": "rating"
  },
  "informations_sur_les_creneaux_horaires_a_eviter": {
    "title": "Informations sur les créneaux horaires à éviter",
    "type": "rating"
  },
  "respect_des_procedures_d_hygiene": {
    "title": "Respect des procédures d’hygiène (absence d’utilisation de torchon, port de coiffe, de bijoux etc.)",
    "type": "rating"
  },
  "uniformite_des_tenues": {
    "title": "Uniformité des tenues",
    "type": "rating"
  },
  "etat_des_tenues": {
    "title": "Etat des tenues",
    "type": "rating"
  },
  "proprete_des_tenues": {
    "title": "Propreté des tenues",
    "type": "rating"
  },
  "adequation_tenue_fonction": {
    "title": "Adéquation tenue / fonction",
    "type": "rating"
  },
  "convive_salue": {
    "title": "A son arrivée le convive est-il salué ('Bonjour') ?",
    "type": "radiogroup"
  },
  "personnel_poli_aimable": {
    "title": "Le personnel est-il poli et aimable ?",
    "type": "rating"
  },
  "personnel_souriant": {
    "title": "Le personnel est-il souriant ?",
    "type": "rating"
  },
  "personnel_attentif": {
    "title": "Le personnel est-il attentif ?",
    "type": "rating"
  },
  "echanges_clairs_efficaces": {
    "title": "Les échanges aves le personnel sont-ils clairs, efficaces et facilement compris ?",
    "type": "rating"
  },
  "souhaite_bon_appetit": {
    "title": "Le personnel souhaite t-il un 'bon appétit' (ou toute autre formule équivalente) lors de la remise de la",
    "type": "rating"
  },
  "gestes_de_service": {
    "title": "Les gestes de service",
    "type": "rating"
  },
  "reactivite": {
    "title": "La réactivité",
    "type": "rating"
  },
  "rapidite_de_service": {
    "title": "La rapidité de service",
    "type": "rating"
  },
  "autonomie": {
    "title": "L'autonomie",
    "type": "rating"
  },
  "l_information": {
    "title": "L'information",
    "type": "rating"
  },
  "le_conseil": {
    "title": "Le conseil",
    "type": "rating"
  },
  "le_sourire": {
    "title": "Le sourire",
    "type": "rating"
  },
  "l_amabilite": {
    "title": "L'amabilité",
    "type": "rating"
  },
  "la_politesse": {
    "title": "La politesse",
    "type": "rating"
  },
  "la_gestuelle": {
    "title": "La gestuelle",
    "type": "rating"
  }
};

const generateQuestion = (key, metadata) => {
  if (!metadata) {
    console.error(`Metadata for key ${key} is undefined.`);
    return null;
  }

  const baseQuestion = {
    name: key,
    title: metadata.title
  };

  switch (metadata.type) {
    case 'rating':
      return {
        ...baseQuestion,
        type: 'rating',
        rateType: 'smileys',
        scaleColorMode: 'colored',
        rateValues: [
          { value: 1, text: 'Red' },
          { value: 2, text: 'Orange' },
          { value: 3, text: 'Green' }
        ]
      };
    case 'radiogroup':
      return {
        ...baseQuestion,
        type: 'radiogroup',
        choices: [
          { value: 'oui', text: 'Oui' },
          { value: 'non', text: 'Non' }
        ]
      };
    default:
      return baseQuestion;
  }
};

export { questionMetadata, generateQuestion };
