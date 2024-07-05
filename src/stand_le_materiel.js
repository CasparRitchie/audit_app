import { createImagePickerElement } from './createImagePickerElement';

function createStandLeMateriel(prefix) {
  const questions = [
    { name: "etat_des_vitrines", title: "Etat des vitrines" },
    { name: "proprete_des_vitrines", title: "Propreté des vitrines" },
    { name: "etat_des_ilots", title: "Etat des îlots" },
    { name: "proprete_des_ilots", title: "Propreté des îlots" },
    { name: "etat_des_vitres", title: "Etat des vitres" },
    { name: "proprete_des_vitres", title: "Propreté des vitres" }
  ];

  return {
    "name": `${prefix}_stand_le_materiel`,
    "title": "Le materiel de la zone",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_stand_les_locaux_panel`,
        "title": "Le materiel de la zone",
        "templateElements": questions.map(question =>
          createImagePickerElement(prefix, question.name, question.title)
        )
      }
    ]
  };
}

export default createStandLeMateriel;
