const rateValues = [
  {"value": 1, "text": "Red"},
  {"value": 2, "text": "Orange"},
  {"value": 3, "text": "Green"}
];

const maitrise_des_flux = {
  "name": "maitrise_des_flux",
  "title": "Maîtrise des flux",
  "elements": [
    {
      "type": "panel",
      "name": "maitrise_des_flux_panel",
      "title": "Maîtrise des flux",
      "elements": [
        {
          "type": "rating",
          "name": "reactivite_reduire_temps_attente",
          "title": "Réactivité pour réduire les temps d'attente",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateValues": rateValues
        }
      ]
    }
  ]
};

export default maitrise_des_flux;
