import les_verres from './les_verres';
import stand_les_locaux from './stand_les_locaux';
import maitrise_des_flux from './maitrise_des_flux';
import respect_des_horaires_de_service from './respect_des_horaires_de_service';
import environnement_decoration from './environnement_decoration';

    const zone_distribution_reduit = {
      "name": "zone_de_distribution",
      "title": "Zone de distribution - sans les plateaux, couverts, materiél, affichage et personnel",
      "elements": [
        {
          "type": "panel",
          "name": "zone_distribution_reduit_les_verres",
          "elements": les_verres.elements
        },
        {
          "type": "panel",
          "name": "zone_distribution_reduit_stand_locaux",
          "elements": stand_les_locaux.elements
        },
        {
        "type": "panel",
        "name": "zone_distribution_reduit_maitrise_des_flux",
        "elements": maitrise_des_flux.elements
        },
        {
          "type": "panel",
          "name": "zone_distribution_reduit_respect_des_horaires_de_service",
          "elements": respect_des_horaires_de_service.elements
        },
        {
          "type": "panel",
          "name": "zone_distribution_reduit_environnement_decoration",
          "elements": environnement_decoration.elements
        },
      ]
    };

    export default zone_distribution_reduit;
