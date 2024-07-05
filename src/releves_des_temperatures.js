import { createTextElement } from './createTextElement';

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
          createTextElement(prefix, "nom_du_plat", "Nom du plat"),
          createTextElement(prefix, "temperature", "Température", "number")
        ],
        "panelAddText": "Ajouter un relevé de température",
        "panelRemoveText": "Supprimer ce relevé de température",
        "minPanelCount": 1
      }
    ]
  };
}

export default createTemperatureRecording;
