function createTemperatureRecording(prefix) {
  return {
    "name": `${prefix}_releves_des_temperatures`,
    "title": "Relevés des températures",
    "elements": [
      {
        "type": "paneldynamic",
        "name": `${prefix}_temperature_recordings`,
        "title": "Relevés des températures des plats",
        "templateElements": [
          {
            "type": "text",
            "name": `${prefix}_nom_du_plat`,
            "title": "Nom du plat"
          },
          {
            "type": "text",
            "name": `${prefix}_temperature`,
            "title": "Température",
            "inputType": "number"
          }
        ],
        "panelAddText": "Ajouter un relevé de température",
        "panelRemoveText": "Supprimer ce relevé de température",
        "minPanelCount": 1
      }
    ]
  };
}

export default createTemperatureRecording;
