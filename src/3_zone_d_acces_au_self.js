import createLesLocaux from './les_locaux';

const zone_d_acces_au_self = {
  "name": "zone_d_acces_au_self",
  "title": "Zone d'accès au self",
  "elements": [
    {
      "type": "panel",
      "name": "les_locaux_zone_d_access_panel",
      "templateElements": createLesLocaux('les_locaux_zone_d_access').elements
    },
  ]
};

export default zone_d_acces_au_self;
