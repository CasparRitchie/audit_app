import { createCompleteQuestionElement } from './createImagePickerElement';

function createLeMaterielPrestationsChaudes(prefix) {
  return {
    name: `${prefix}_le_materiel_prestations_chaudes`,
    title: "Le matériel - prestations chaudes",
    elements: [
      {
        type: "panel",
        name: `${prefix}_le_materiel_panel_prestations_chaudes`,
        title: "Le matériel",
        elements: [
          createCompleteQuestionElement(prefix, "etat_des_pare_haleine_prestations_chaudes", "Etat des pare-haleine"),
          createCompleteQuestionElement(prefix, "proprete_des_pare_haleine_prestations_chaudes", "Propreté des pare-haleine"),
          createCompleteQuestionElement(prefix, "etat_des_ilots_prestations_chaudes", "Etat des matériels de maintien en température (chafing-dish, bain-marie)"),
          createCompleteQuestionElement(prefix, "proprete_des_ilots_prestations_chaudes", "Propreté des matériel de maintien en température (chafing-dish, bain-marie)"),
          createCompleteQuestionElement(prefix, "etat_des_vitres_prestations_chaudes", "Etat de la plancha"),
          createCompleteQuestionElement(prefix, "proprete_des_vitres_prestations_chaudes_grill", "Etat de la grill"),
          createCompleteQuestionElement(prefix, "proprete_des_vitres_prestations_chaudes_friteuse", "Etat de la friteuse")
        ]
      }
    ]
  };
}

export default createLeMaterielPrestationsChaudes;
