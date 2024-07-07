import { createImagePicker } from './commonElements';


const les_fruits = {
  "name": "les_fruits",
  "title": "Personnel - Zone de distribution",
  "elements": [
    {
        "type": "rating",
        "name": "respect_des_procedures_d_hygiene",
        "title": "Respect des procédures d’hygiène (absence d’utilisation de torchon, port de la coiffe règlementaire, port de bijoux, etc.)",
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "rateValues": [
          {"value": 1, "text": "Red"},
          {"value": 2, "text": "Orange"},
          {"value": 3, "text": "Green"}
        ]
    },
  ]
};

export default les_fruits;
