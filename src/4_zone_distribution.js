import stand_les_locaux from './stand_les_locaux';
import les_plateaux from './les_plateaux';
import les_couverts from './les_couverts';
import zone_distribution_personnel from './zone_distribution_personnel';
import affichages from './affichages';
import les_contenants_chauds from './les_contenants_chauds';
import les_contenants_froids from './les_contenants_froids';
import les_ustensiles_de_service from './les_ustensiles_de_service';
import maitrise_des_flux from './maitrise_des_flux';
import respect_des_horaires_de_service from './respect_des_horaires_de_service';
import environnement_decoration from './environnement_decoration';

const zone_distribution = {
  "name": "zone_de_distribution",
  "title": "Zone de distribution",
  "elements": [
    {
      "type": "panel",
      "name": "stand_les_locaux_zone_de_distribution",
      "elements": stand_les_locaux.elements
    },
    {
      "type": "panel",
      "name": "les_plateaux",
      "elements": les_plateaux.elements
    },
    {
      "type": "panel",
      "name": "les_couverts",
      "elements": les_couverts.elements
    },
    {
      "type": "panel",
      "name": "zone_distribution_affichages",
      "elements": affichages.elements
    },
    {
      "type": "panel",
      "name": "les_contenants_chauds",
      "elements": les_contenants_chauds.elements
    },
    {
      "type": "panel",
      "name": "les_contenants_froids",
      "elements": les_contenants_froids.elements
    },
    {
      "type": "panel",
      "name": "les_ustensiles_de_service",
      "elements": les_ustensiles_de_service.elements
    },
    {
      "type": "panel",
      "name": "maitrise_des_flux",
      "elements": maitrise_des_flux.elements
    },
    {
      "type": "panel",
      "name": "respect_des_horaires_de_service",
      "elements": respect_des_horaires_de_service.elements
    },
    {
      "type": "panel",
      "name": "environnement_decoration",
      "elements": environnement_decoration.elements
    },
    {
      "type": "panel",
      "name": "zone_distribution_personnel",
      "elements": zone_distribution_personnel.elements
    },
  ]
};

export default zone_distribution;
