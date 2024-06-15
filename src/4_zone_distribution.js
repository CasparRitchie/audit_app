import createStandLesLocaux from './stand_les_locaux';
import createOverallPersonnel from './overall_personnel';
import createMaitriseDesFlux from './maitrise_des_flux';
import createLesPlateaux from './les_plateaux';
import createLesCouverts from './les_couverts';
import createAffichages from './affichages';
import createLesContenantsChauds from './les_contenants_chauds';
import createLesContenantsFroids from './les_contenants_froids';
import createLesUstensilesDeService from './les_ustensiles_de_service';
import createRespectDesHorairesDeService from './respect_des_horaires_de_service';
import createEnvironnementDecoration from './environnement_decoration';

const zone_distribution = {
  "name": "zone_de_distribution",
  "title": "Zone de distribution",
  "elements": [
    {
      "type": "panel",
      "name": "stand_les_locaux_zone_de_distribution",
      "elements": createStandLesLocaux('zone_distribution').elements
    },
    {
      "type": "panel",
      "name": "les_plateaux",
      "elements": createLesPlateaux('zone_distribution').elements
    },
    {
      "type": "panel",
      "name": "les_couverts",
      "elements": createLesCouverts('zone_distribution').elements
    },
    {
      "type": "panel",
      "name": "zone_distribution_affichages",
      "elements": createAffichages('zone_distribution').elements
    },
    {
      "type": "panel",
      "name": "les_contenants_chauds",
      "elements": createLesContenantsChauds('zone_distribution').elements
    },
    {
      "type": "panel",
      "name": "les_contenants_froids",
      "elements": createLesContenantsFroids('zone_distribution').elements
    },
    {
      "type": "panel",
      "name": "les_ustensiles_de_service",
      "elements": createLesUstensilesDeService('zone_distribution').elements
    },
    {
      "type": "panel",
      "name": "maitrise_des_flux",
      "elements": createMaitriseDesFlux('zone_distribution').elements
    },
    {
      "type": "panel",
      "name": "respect_des_horaires_de_service",
      "elements": createRespectDesHorairesDeService('zone_distribution').elements
    },
    {
      "type": "panel",
      "name": "environnement_decoration",
      "elements": createEnvironnementDecoration('zone_distribution').elements
    },
    {
      "type": "panel",
      "name": "zone_distribution_personnel",
      "elements": createOverallPersonnel('zone_distribution').elements
    },
  ]
};

export default zone_distribution;
