import createOverallPersonnel from './overall_personnel';

const le_personnel = {
    "name": "le_personnel",
    "title": "Le Personnel",
    "elements": [
      {
        "type": "panel",
        "name": "overall_personnel",
        "elements": createOverallPersonnel('le_personnel').elements
      },
    ]
  };

export default le_personnel;
