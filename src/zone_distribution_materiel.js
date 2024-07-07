import { createCompleteQuestionElement } from './createImagePickerElement';

function createZoneDistributionMateriel(prefix) {
  const questions = [
    { name: "etat_des_hottes", title: "Etat des hottes" },
    { name: "proprete_des_hottes", title: "Propreté des hottes" },
    { name: "etat_des_stands", title: "Etat des stands" },
    { name: "proprete_des_stands", title: "Propreté des stands" },
    { name: "etat_des_vitrines", title: "Etat des vitrines" },
    { name: "proprete_des_vitrines", title: "Propreté des vitrines" },
    { name: "etat_des_ilots", title: "Etat des îlots" },
    { name: "proprete_des_ilots", title: "Propreté des îlots" },
    { name: "etat_des_vitres", title: "Etat des vitres" },
    { name: "proprete_des_vitres", title: "Propreté des vitres" }
  ];

  return {
    "name": `${prefix}_zone_distribution_materiel`,
    "title": "Zone de distribution - Le matériel",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_le_materiel_panel`,
        "title": "Le matériel",
        "elements": questions.map(question =>
          createCompleteQuestionElement(prefix, question.name, question.title)
        )
      }
    ]
  };
}

export default createZoneDistributionMateriel;
