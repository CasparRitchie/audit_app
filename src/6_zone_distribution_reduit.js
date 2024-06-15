import createLesVerres from './les_verres';
import createStandLesLocaux from './stand_les_locaux';
import createMaitriseDesFlux from './maitrise_des_flux';
import createRespectDesHorairesDeService from './respect_des_horaires_de_service';
import createEnvironnementDecoration from './environnement_decoration';

    const zone_distribution_reduit = {
      "name": "zone_de_distribution",
      "title": "Zone de distribution - sans les plateaux, couverts, materiél, affichage et personnel",
      "elements": [
        {
          "type": "panel",
          "name": "zone_distribution_reduit_les_verres",
          "elements": createLesVerres('zone_distribution_reduit').elements
        },
        {
          "type": "panel",
          "name": "zone_distribution_reduit_stand_locaux",
          "elements": createStandLesLocaux('zone_distribution_reduit').elements
        },
        {
        "type": "panel",
        "name": "zone_distribution_reduit_maitrise_des_flux",
        "elements": createMaitriseDesFlux('zone_distribution_reduit').elements
      },
        {
          "type": "panel",
          "name": "zone_distribution_reduit_respect_des_horaires_de_service",
          "elements": createRespectDesHorairesDeService('zone_distribution_reduit').elements
        },
        {
          "type": "panel",
          "name": "zone_distribution_reduit_environnement_decoration",
          "elements": createEnvironnementDecoration('zone_distribution_reduit').elements
        },
      ]
    };

    export default zone_distribution_reduit;
