const les_plateaux = {
  "name": "les_plateaux",
  "title": "Les plateaux",
  "elements": [
    {
      "type": "rating",
      "name": "disponibilite",
      "title": "Disponibilité",
      "rateType": "smileys",
      "scaleColorMode": "colored",
      "rateValues": [
        {"value": 1, "text": "Red"},
        {"value": 2, "text": "Orange"},
        {"value": 3, "text": "Green"}
      ]
    },
    {
      "type": "rating",
      "name": "etat",
      "title": "Etat",
      "rateType": "smileys",
      "scaleColorMode": "colored",
      "rateValues": [
        {"value": 1, "text": "Red"},
        {"value": 2, "text": "Orange"},
        {"value": 3, "text": "Green"}
      ]
    },
    {
      "type": "rating",
      "name": "proprete",
      "title": "Propreté",
      "rateType": "smileys",
      "scaleColorMode": "colored",
      "rateValues": [
        {"value": 1, "text": "Red"},
        {"value": 2, "text": "Orange"},
        {"value": 3, "text": "Green"}
      ]
    },
    {
      "type": "radiogroup",
      "name": "accessibilite_pour_le_reapprovisionnement",
      "title": "Accessibilité pour le réapprovisionnement",
      "choices": [
        {"value": "facile", "text": "Facile"},
        {"value": "difficile", "text": "Difficile"}
      ]
    }
  ]
};

export default les_plateaux;
