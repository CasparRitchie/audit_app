import { createImagePickerElement } from './createImagePickerElement';

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
          createImagePickerElement(prefix, "disponibilite_des_fourchettes", "Disponibilité des fourchettes"),
          createImagePickerElement(prefix, "etat_des_fourchettes", "Etat des fourchettes"),
          createImagePickerElement(prefix, "proprete_fourchettes", "Propreté fourchettes"),
          createImagePickerElement(prefix, "traces_de_calcaire_sur_les_fourchettes", "Traces de calcaire sur les fourchettes")
        ]
      },
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_couteaux`,
        "title": "Les couteaux",
        "templateElements": [
          createImagePickerElement(prefix, "disponibilite_des_couteaux", "Disponibilité des couteaux"),
          createImagePickerElement(prefix, "etat_des_couteaux", "Etat des couteaux"),
          createImagePickerElement(prefix, "proprete_couteaux", "Propreté couteaux"),
          createImagePickerElement(prefix, "traces_de_calcaire_sur_les_couteaux", "Traces de calcaire sur les couteaux")
        ]
      },
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_petites_cuilleres`,
        "title": "Les petites cuillères",
        "templateElements": [
          createImagePickerElement(prefix, "disponibilite_des_petites_cuilleres", "Disponibilité des petites cuillères"),
          createImagePickerElement(prefix, "etat_des_petites_cuilleres", "Etat des petites cuillères"),
          createImagePickerElement(prefix, "proprete_petites_cuilleres", "Propreté petites cuillères"),
          createImagePickerElement(prefix, "traces_de_calcaire_sur_les_petites_cuilleres", "Traces de calcaire sur les petites cuillères")
        ]
      },
      {
        "type": "paneldynamic",
        "name": `${prefix}_les_verres`,
        "title": "Les verres",
        "templateElements": [
          createImagePickerElement(prefix, "disponibilite_des_verres", "Disponibilité"),
          createImagePickerElement(prefix, "etat_des_verres", "Etat"),
          createImagePickerElement(prefix, "proprete_des_verres", "Propreté"),
          createImagePickerElement(prefix, "traces_de_calcaire_sur_les_verres", "Traces de calcaire sur les verres"),
          createImagePickerElement(prefix, "nette_des_verres", "Netteté des verres")
        ]
      }
    ]
  };
}

export default createLesCouverts;
