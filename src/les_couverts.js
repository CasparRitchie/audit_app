import { createCompleteQuestionElement } from './createImagePickerElement';


function createLesCouverts(prefix) {
  return {
    "name": `${prefix}_les_couverts`,
    "title": "Les couverts",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_fourchettes`,
        "title": "Les fourchettes",
        "templateElements": [
          createCompleteQuestionElement(prefix, "disponibilite_des_fourchettes", "Disponibilité des fourchettes"),
          createCompleteQuestionElement(prefix, "etat_des_fourchettes", "Etat des fourchettes"),
          createCompleteQuestionElement(prefix, "proprete_fourchettes", "Propreté fourchettes"),
          createCompleteQuestionElement(prefix, "traces_de_calcaire_sur_les_fourchettes", "Traces de calcaire sur les fourchettes")
        ]
      },
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_couteaux`,
        "title": "Les couteaux",
        "templateElements": [
          createCompleteQuestionElement(prefix, "disponibilite_des_couteaux", "Disponibilité des couteaux"),
          createCompleteQuestionElement(prefix, "etat_des_couteaux", "Etat des couteaux"),
          createCompleteQuestionElement(prefix, "proprete_couteaux", "Propreté couteaux"),
          createCompleteQuestionElement(prefix, "traces_de_calcaire_sur_les_couteaux", "Traces de calcaire sur les couteaux")
        ]
      },
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_petites_cuilleres`,
        "title": "Les petites cuillères",
        "templateElements": [
          createCompleteQuestionElement(prefix, "disponibilite_des_petites_cuilleres", "Disponibilité des petites cuillères"),
          createCompleteQuestionElement(prefix, "etat_des_petites_cuilleres", "Etat des petites cuillères"),
          createCompleteQuestionElement(prefix, "proprete_petites_cuilleres", "Propreté petites cuillères"),
          createCompleteQuestionElement(prefix, "traces_de_calcaire_sur_les_petites_cuilleres", "Traces de calcaire sur les petites cuillères")
        ]
      },
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_verres`,
        "title": "Les verres",
        "templateElements": [
          createCompleteQuestionElement(prefix, "disponibilite_des_verres", "Disponibilité"),
          createCompleteQuestionElement(prefix, "etat_des_verres", "Etat"),
          createCompleteQuestionElement(prefix, "proprete_des_verres", "Propreté"),
          createCompleteQuestionElement(prefix, "traces_de_calcaire_sur_les_verres", "Traces de calcaire sur les verres"),
          createCompleteQuestionElement(prefix, "nette_des_verres", "Netteté des verres")
        ]
      }
    ]
  };
}

export default createLesCouverts;
