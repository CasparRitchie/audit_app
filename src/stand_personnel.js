const rateValues = [
  { "value": 1, "text": "Red" },
  { "value": 2, "text": "Orange" },
  { "value": 3, "text": "Green" }
];

function createStandPersonnel(prefix) {
  return {
    "name": `${prefix}_stand_personnel`,
    "title": "Personnel - Stand",
    "elements": [
      {
        "type": "panel",
        "name": `${prefix}_stand_personnel_panel`,
        "title": "Personnel",
        "elements": [
          {
            "type": "rating",
            "name": `${prefix}_respect_des_procedures_d_hygiene`,
            "title": "Respect des procédures d’hygiène (absence d’utilisation de torchon, port de coiffe, de bijoux etc.)",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_uniformite_des_tenues`,
            "title": "Uniformité des tenues",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_etat_des_tenues`,
            "title": "Etat des tenues",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_proprete_des_tenues`,
            "title": "Propreté des tenues",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_le_sourire`,
            "title": "Le sourire",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_l_amabilite`,
            "title": "L'amabilité",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_la_politesse`,
            "title": "La politesse",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_la_gestuelle`,
            "title": "La gestuelle",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_l_information`,
            "title": "L'information",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          },
          {
            "type": "rating",
            "name": `${prefix}_le_conseil`,
            "title": "Le conseil",
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "rateValues": rateValues
          }
        ]
      }
    ]
  };
}

export default createStandPersonnel;
