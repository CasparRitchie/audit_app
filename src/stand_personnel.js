const rateValues = [
  { "value": 1, "text": "Red" },
  { "value": 2, "text": "Orange" },
  { "value": 3, "text": "Green" }
];

const stand_personnel = {
  "name": "stand_personnel",
  "title": "Personnel - Stand",
  "elements": [
    {
      "type": "panel",
      "name": "stand_personnel_panel",
      "title": "Personnel",
      "elements": [
        {
          "type": "rating",
          "name": "respect_des_procedures_d_hygiene",
          "title": "Respect des procédures d’hygiène (absence d’utilisation de torchon, port de coiffe, de bijoux etc.)",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "uniformite_des_tenues",
          "title": "Uniformité des tenues",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "etat_des_tenues",
          "title": "Etat des tenues",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "proprete_des_tenues",
          "title": "Propreté des tenues",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "le_sourire",
          "title": "Le sourire",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "l_amabilite",
          "title": "L'amabilité",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "la_politesse",
          "title": "La politesse",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "la_gestuelle",
          "title": "La gestuelle",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "l_information",
          "title": "L'information",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        },
        {
          "type": "rating",
          "name": "le_conseil",
          "title": "Le conseil",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        }
      ]
    }
  ]
};

export default stand_personnel;
