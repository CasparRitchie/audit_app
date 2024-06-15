const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

function createLesCouverts(prefix) {
  return {
    "name": `${prefix}_les_couverts`,
    "title": "Les couverts",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_les_fourchettes`,
        "title": "Les fourchettes",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_disponibilite_des_fourchettes`,
            "title": "Disponibilité des fourchettes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_fourchettes`,
            "title": "Etat des fourchettes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_fourchettes`,
            "title": "Propreté fourchettes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_traces_de_calcaire_sur_les_fourchettes`,
            "title": "Traces de calcaire sur les fourchettes",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_les_couteaux`,
        "title": "Les couteaux",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_disponibilite_des_couteaux`,
            "title": "Disponibilité des couteaux",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_couteaux`,
            "title": "Etat des couteaux",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_couteaux`,
            "title": "Propreté couteaux",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_traces_de_calcaire_sur_les_couteaux`,
            "title": "Traces de calcaire sur les couteaux",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_les_petites_cuilleres`,
        "title": "Les petites cuillères",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_disponibilite_des_petites_cuilleres`,
            "title": "Disponibilité des petites cuillères",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_petites_cuilleres`,
            "title": "Etat des petites cuillères",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_petites_cuilleres`,
            "title": "Propreté petites cuillères",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_traces_de_calcaire_sur_les_petites_cuilleres`,
            "title": "Traces de calcaire sur les petites cuillères",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      },
      {
        "type": "panel",
        "name": `${prefix}_les_verres`,
        "title": "Les verres",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_disponibilite_des_verres`,
            "title": "Disponibilité",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_verres`,
            "title": "Etat",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_verres`,
            "title": "Propreté",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_traces_de_calcaire_sur_les_verres`,
            "title": "Traces de calcaire sur les verres",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_nette_des_verres`,
            "title": "Netteté des verres",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      }
    ]
  };
}

export default createLesCouverts;
