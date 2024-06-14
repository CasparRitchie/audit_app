import les_locaux from './les_locaux';

const zone_d_acces_au_self = {
  "name": "zone_d_acces_au_self",
  "title": "Zone d'accès au self",
  "elements": [
    {
      "type": "panel",
      "name": "les_locaux_zone_d_access",
      "elements": les_locaux.elements
    },
    // Add other questions or blocks related to Zone d'accès au self here
  ]
};

export default zone_d_acces_au_self;
