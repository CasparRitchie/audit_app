import { createImagePickerElement } from './createImagePickerElement';

function createStandLesLocaux(prefix) {
  const questions = [
    { name: "etat_des_murs", title: "Etat des murs" },
    { name: "proprete_des_murs", title: "Propreté des murs" },
    { name: "etat_des_sols", title: "Etat des sols" },
    { name: "proprete_des_sols", title: "Propreté des sols" },
    { name: "etat_des_plafonds", title: "Etat des plafonds" },
    { name: "proprete_des_plafonds", title: "Propreté des plafonds" }
  ];

  return {
    "name": `${prefix}_stand_les_locaux`,
    "title": "Les Locaux de la zone",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_stand_les_locaux_panel`,
        "title": "Les Locaux",
        "templateElements": questions.map(question =>
          createImagePickerElement(prefix, question.name, question.title)
        )
      }
    ]
  };
}

export default createStandLesLocaux;
