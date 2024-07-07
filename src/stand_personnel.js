import { createCompleteQuestionElement } from './createImagePickerElement';

function createStandPersonnel(prefix) {
  const questions = [
    { name: "respect_des_procedures_d_hygiene", title: "Respect des procédures d’hygiène (absence d’utilisation de torchon, port de coiffe, de bijoux etc.)" },
    { name: "uniformite_des_tenues", title: "Uniformité des tenues" },
    { name: "etat_des_tenues", title: "Etat des tenues" },
    { name: "proprete_des_tenues", title: "Propreté des tenues" },
    { name: "le_sourire", title: "Le sourire" },
    { name: "l_amabilite", title: "L'amabilité" },
    { name: "la_politesse", title: "La politesse" },
    { name: "la_gestuelle", title: "La gestuelle" },
    { name: "l_information", title: "L'information" },
    { name: "le_conseil", title: "Le conseil" }
  ];

  return {
    "name": `${prefix}_stand_personnel`,
    "title": "Personnel - Stand",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_stand_personnel_panel`,
        "title": "Personnel",
        "templateElements": questions.map(question =>
          createCompleteQuestionElement(prefix, question.name, question.title)
        )
      }
    ]
  };
}

export default createStandPersonnel;
