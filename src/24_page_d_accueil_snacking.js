const page_accueil_snacking = {
  "name": "page_d_acceuil_snacking",
  "title": "Page d'acceuil snacking",
  "elements": [
    {
      "type": "text",
      "name": "date_de_l_audit",
      "title": "Date de l'audit",
      "inputType": "date"
    },
    {
      "type": "text",
      "name": "nom_du_restaurant",
      "title": "Nom du restaurant"
    },
    {
      "type": "text",
      "name": "gestionnaire",
      "title": "Gestionnaire"
    },
    {
      "type": "paneldynamic",
      "name": "personne_rencontree",
      "title": "Personnes rencontrées",
      "templateElements": [
        {
          "type": "text",
          "name": "prenom",
          "title": "Prénom"
        },
        {
          "type": "text",
          "name": "nom",
          "title": "Nom"
        },
        {
          "type": "text",
          "name": "fonction",
          "title": "Fonction"
        }
      ],
      "panelCount": 1,
      "confirmDelete": true
    },
    {
      "type": "text",
      "name": "nombre_de_repas_jour_servis_en_moyenne",
      "title": "Nombre de repas jour servis en moyenne",
      "inputType": "number"
    },
    {
      "type": "text",
      "name": "nombre_de_places_assises",
      "title": "Nombre de places assises",
      "inputType": "number"
    },
    {
      "type": "expression",
      "name": "taux_de_rotation_global",
      "title": "Taux de rotation global",
      "expression": "{nombre_de_repas_jour_servis_en_moyenne} / ({nombre_de_places_assises} * 0.8)",
      "displayStyle": "percent"
    },
    {
      "type": "text",
      "name": "nombre_de_repas_servis_ce_jour",
      "title": "Nombre de repas servis ce jour",
      "inputType": "number"
    },
    {
      "type": "expression",
      "name": "taux_de_rotation_du_jour",
      "title": "Taux de rotation du jour",
      "expression": "{nombre_de_repas_servis_ce_jour} / ({nombre_de_places_assises} * 0.8)",
      "displayStyle": "percent"
    },
    {
      "type": "paneldynamic",
                                "name": "Horaires du self",
                                "templateElements": [
                                    {
                                        "type": "text",
                                        "name": "horaires_du_self_debut",
                                        "title": "Début",
                                        "inputType": "time"
                                    },
                                    {
                                        "type": "text",
                                        "name": "horaires_du_self_fin",
                                        "startWithNewLine": false,
                                        "title": "Fin",
                                        "inputType": "time"
                                    }
                                ],
                                "allowAddPanel": false,
                                "allowRemovePanel": false,
                                "panelCount": 1,
                                "defaultPanelValue": {
                                    "horaires_du_self_debut": "11:30",
                                    "horaires_du_self_fin": "14:00"
                                }
    },
    {
      "type": "paneldynamic",
      "name": "date_precedent_audit",
      "title": "Date(s) de(s) l'audit(s) précédent(s)",
      "templateElements": [
        {
          "type": "text",
          "name": "precedent_audit_date",
          "title": "Date",
          "inputType": "date"
        }
      ],
      "panelCount": 1,
    }
  ]
};

export default page_accueil_snacking;
