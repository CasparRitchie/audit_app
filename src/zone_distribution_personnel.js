import { createCompleteQuestionElement } from './createImagePickerElement';

function createZoneDistributionPersonnel(prefix) {
  const questions = [
    { name: "respect_des_procedures_d_hygiene", title: "Respect des procédures d’hygiène (absence d’utilisation de torchon, port de la coiffe règlementaire, port de bijoux, etc.)" },
    { name: "uniformite_des_tenues", title: "Uniformité des tenues" },
    { name: "etat_des_tenues", title: "Etat des tenues" },
    { name: "proprete_des_tenues", title: "Propreté des tenues" },
    { name: "le_sourire", title: "Le sourire" },
    { name: "l_amabilite", title: "L'amabilité" },
    { name: "la_politesse", title: "La politesse" },
    { name: "la_gestuelle", title: "La gestuelle" },
    { name: "la_reactivite", title: "La réactivité" },
    { name: "la_rapidite_de_service", title: "La rapidité de service" },
    { name: "l_information", title: "L’information" },
    { name: "le_conseil", title: "Le conseil" }
  ];

  return {
    "name": `${prefix}_zone_distribution_personnel`,
    "title": "Personnel - Zone de distribution",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_zone_distribution_personnel_panel`,
        "title": "Zone de Distribution - Personnel",
        "templateElements": questions.map(question =>
          createCompleteQuestionElement(prefix, question.name, question.title)
        )
      }
    ]
  };
}

export default createZoneDistributionPersonnel;
