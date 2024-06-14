const releves_des_temperatures = {
  "name": "releves_des_temperatures",
  "title": "Relevés des températures",
  "elements": [
    {
      "type": "panel",
      "name": "viandes_bovines_releves",
      "title": "Nous allons ajouter un table ici avec 3 entrees et la possiblité d'en rajouter",
      "elements": [
        {
          "type": "radiogroup",
          "name": "viandes_bovines_affichage_releve",
          "title": "Nous allons ajouter un table ici avec 3 entrees et la possiblité d'en rajouter",
          "choices": [
            { "value": "ok", "text": "OK" },
            { "value": "nok", "text": "NOK" }
          ]
        }
      ]
    },
    {
      "type": "panel",
      "name": "autres_viandes_releves",
      "title": "Nous allons ajouter un table ici avec 3 entrees et la possiblité d'en rajouter",
      "elements": [
        {
          "type": "radiogroup",
          "name": "autres_viandes_affichage",
          "title": "Nous allons ajouter un table ici avec 3 entrees et la possiblité d'en rajouter",
          "choices": [
            { "value": "ok", "text": "OK" },
            { "value": "nok", "text": "NOK" }
          ]
        }
      ]
    },
  ]
};

export default releves_des_temperatures;
