import pandas as pd

# Your JSON-like data
data = {
    "Horaires du self": [
        {
            "horaires_du_self_debut": "15:30",
            "horaires_du_self_fin": "18:00"
        }
    ],
    "personne_rencontree": [
        {
            "prenom": "test",
            "nom": "test",
            "fonction": "test"
        }
    ],
    "date_de_l_audit": "2024-01-31",
    "nom_du_restaurant": "test",
    "gestionnaire": "test",
    "nombre_de_repas_jour_servis_en_moyenne": 100,
    "nombre_de_places_assises": 1000,
    "taux_de_rotation_global": 0.125,
    "taux_de_rotation_du_jour": 0.0125,
    "nombre_de_repas_servis_ce_jour": 10,
    "affichages_des_horaires": [
        {
            "affichage_des_horaires_d_ouverture_du_restaurant": 2
        }
    ],
    "informations_sur_les_plats_menus": [
        {
            "informations_sur_les_plats_menus": 2
        }
    ],
    "informations_sur_les_creneaux_horaires_a_eviter": [
        {
            "informations_sur_les_creneaux_horaires_a_eviter": 2
        }
    ],
    "zone_distribution_stand_les_locaux_panel": [
        {
            "zone_distribution_etat_des_murs": 2,
            "zone_distribution_proprete_des_murs": 2,
            "zone_distribution_etat_des_sols": 2,
            "zone_distribution_proprete_des_sols": 2,
            "zone_distribution_etat_des_plafonds": 2,
            "zone_distribution_proprete_des_plafonds": 2
        }
    ],
    "zone_distribution_les_plateaux_panel": [
        {
            "zone_distribution_disponibilite": 2,
            "zone_distribution_etat": 2,
            "zone_distribution_proprete": 2,
            "zone_distribution_accessibilite_pour_le_reapprovisionnement": "facile"
        }
    ],
    "zone_distribution_les_fourchettes": [
        {
            "zone_distribution_disponibilite_des_fourchettes": 2,
            "zone_distribution_etat_des_fourchettes": 2,
            "zone_distribution_proprete_fourchettes": 2,
            "zone_distribution_traces_de_calcaire_sur_les_fourchettes": 2
        }
    ],
    "zone_distribution_les_couteaux": [
        {
            "zone_distribution_disponibilite_des_couteaux": 2,
            "zone_distribution_etat_des_couteaux": 2,
            "zone_distribution_proprete_couteaux": 2,
            "zone_distribution_traces_de_calcaire_sur_les_couteaux": 2
        }
    ],
    "zone_distribution_les_petites_cuilleres": [
        {
            "zone_distribution_disponibilite_des_petites_cuilleres": 2,
            "zone_distribution_etat_des_petites_cuilleres": 2,
            "zone_distribution_proprete_petites_cuilleres": 2,
            "zone_distribution_traces_de_calcaire_sur_les_petites_cuilleres": 2
        }
    ],
    "zone_distribution_les_verres": [
        {
            "zone_distribution_disponibilite_des_verres": 2,
            "zone_distribution_etat_des_verres": 2,
            "zone_distribution_proprete_des_verres": 2,
            "zone_distribution_traces_de_calcaire_sur_les_verres": 2,
            "zone_distribution_nette_des_verres": 2
        }
    ],
    "zone_distribution_les_affichages_panel": [
        {
            "zone_distribution_disponibilite_des_informations_sur_les_allergenes": 2,
            "zone_distribution_visibilite_des_informations": 2,
            "zone_distribution_information_produit": 2,
            "zone_distribution_prix_des_produits": 2
        }
    ],
    "zone_distribution_les_contenants_froids_panel": [
        {
            "zone_distribution_etat_des_saladiers_de_service": 2,
            "zone_distribution_uniformite_de_la_vaisselle_utilisee": 2,
            "zone_distribution_disponibilite_des_ramequins_raviers": 2,
            "zone_distribution_etat_des_ramequins_raviers": 2,
            "zone_distribution_proprete_des_ramequins_raviers": 2,
            "zone_distribution_disponibilite_des_petites_assiettes": 2,
            "zone_distribution_etat_des_petites_assiettes": 2,
            "zone_distribution_proprete_des_petites_assiettes": 2,
            "zone_distribution_disponibilite_des_coupelles": 2,
            "zone_distribution_etat_des_coupelles": 2,
            "zone_distribution_proprete_des_coupelles": 2,
            "zone_distribution_disponibilite_des_bols": 2,
            "zone_distribution_etat_des_bols": 2,
            "zone_distribution_proprete_des_bols": 2,
            "zone_distribution_disponibilite_des_bowls": 2,
            "zone_distribution_etat_des_bowls": 2,
            "zone_distribution_proprete_des_bowls": 2,
            "zone_distribution_accessibilite_pour_le_reapprovisionnement_bowls": 2
        }
    ],
    "zone_distribution_les_ustensiles_de_service_panel": [
        {
            "zone_distribution_etat_des_ustensiles": 2,
            "zone_distribution_proprete_des_ustensiles": 2,
            "zone_distribution_etat_des_bacs_gastronormes": 2,
            "zone_distribution_proprete_des_bacs_gastronormes": 2,
            "zone_distribution_adequation_ustensiles_prestation_servie": 2
        }
    ],
    "zone_distribution_maitrise_des_flux_panel": [
        {
            "zone_distribution_reactivite_reduire_temps_attente": 2
        }
    ],
    "zone_distribution_respect_des_horaires_de_service_panel": [
        {
            "zone_distribution_respect_horaires_service": 2
        }
    ],
    "zone_distribution_environnement_decoration_panel": [
        {
            "zone_distribution_temperature": 2,
            "zone_distribution_luminosite": 2,
            "zone_distribution_niveau_sonore": 2,
            "zone_distribution_fluidite_de_deplacement_pour_les_convives": 2
        }
    ],
    "zone_distribution_zone_distribution_personnel_panel": [
        {
            "zone_distribution_respect_des_procedures_d_hygiene": 2,
            "zone_distribution_uniformite_des_tenues": 2,
            "zone_distribution_etat_des_tenues": 2,
            "zone_distribution_proprete_des_tenues": 2,
            "zone_distribution_le_sourire": 2,
            "zone_distribution_l_amabilite": 2,
            "zone_distribution_la_politesse": 2,
            "zone_distribution_la_gestuelle": 2,
            "zone_distribution_la_reactivite": 2,
            "zone_distribution_la_rapidite_de_service": 2,
            "zone_distribution_l_information": 2,
            "zone_distribution_le_conseil": 2
        }
    ],
    "le_personnel_personnel_overall_panel": [
        {
            "le_personnel_respect_des_procedures_d_hygiene": 2,
            "le_personnel_uniformite_des_tenues": 2,
            "le_personnel_etat_des_tenues": 2,
            "le_personnel_proprete_des_tenues": 2,
            "le_personnel_adequation_tenue_fonction": 2,
            "le_personnel_convive_salue": "oui",
            "le_personnel_personnel_poli_aimable": 2,
            "le_personnel_personnel_souriant": 2,
            "le_personnel_personnel_attentif": 2,
            "le_personnel_echanges_clairs_efficaces": 2,
            "le_personnel_souhaite_bon_appetit": 2,
            "le_personnel_gestes_de_service": 2,
            "le_personnel_reactivite": 2,
            "le_personnel_rapidite_de_service": 2,
            "le_personnel_autonomie": 2,
            "le_personnel_l_information": 2,
            "le_personnel_le_conseil": 2
        }
    ],
    "zone_distribution_reduit_les_verres_panel": [
        {
            "zone_distribution_reduit_disponibilite_verres": 2,
            "zone_distribution_reduit_etat_verres": 2,
            "zone_distribution_reduit_proprete_verres": 2,
            "zone_distribution_reduit_traces_de_calcaire_verres": 2,
            "zone_distribution_reduit_nette_verres": 2,
            "zone_distribution_reduit_accessibilite_verres": "facile"
        }
    ],
    "zone_distribution_reduit_stand_les_locaux_panel": [
        {
            "zone_distribution_reduit_etat_des_murs": 2,
            "zone_distribution_reduit_proprete_des_murs": 2,
            "zone_distribution_reduit_etat_des_sols": 2,
            "zone_distribution_reduit_proprete_des_sols": 2,
            "zone_distribution_reduit_etat_des_plafonds": 2,
            "zone_distribution_reduit_proprete_des_plafonds": 2
        }
    ],
    "zone_distribution_reduit_maitrise_des_flux_panel": [
        {
            "zone_distribution_reduit_reactivite_reduire_temps_attente": 2
        }
    ],
    "zone_distribution_reduit_respect_des_horaires_de_service_panel": [
        {
            "zone_distribution_reduit_respect_horaires_service": 2
        }
    ],
    "zone_distribution_reduit_environnement_decoration_panel": [
        {
            "zone_distribution_reduit_temperature": 2,
            "zone_distribution_reduit_luminosite": 2,
            "zone_distribution_reduit_niveau_sonore": 2,
            "zone_distribution_reduit_fluidite_de_deplacement_pour_les_convives": 2
        }
    ],
    "les_prestations_chaudes_affichages_obligatoires": [
        {
            "les_prestations_chaudes_autres_viandes_affichage": "ok",
            "les_prestations_chaudes_viandes_bovines_affichage": "ok",
            "les_prestations_chaudes_qualite_de_la_presentation": 2,
            "les_prestations_chaudes_accessibilite_pour_le_reapprovisionnement": "facile",
            "les_prestations_chaudes_etat_des_ustensiles": 2,
            "les_prestations_chaudes_proprete_des_ustensiles": 2,
            "les_prestations_chaudes_etat_des_bacs_gastronormes": 2,
            "les_prestations_chaudes_proprete_des_bacs_gastronormes": 2,
            "les_prestations_chaudes_adequation_des_ustensiles_de_service_a_la_prestation_servie": 2
        }
    ],
    "les_prestations_chaudes_affichage": [
        {
            "les_prestations_chaudes_affichage_affichage": [
                {
                    "les_prestations_chaudes_presence_d_un_affichage_affichage": 2,
                    "les_prestations_chaudes_qualite_de_l_affichage_affichage": 2,
                    "les_prestations_chaudes_lisibilite_des_informations_affichage": 2,
                    "les_prestations_chaudes_precision_des_informations_affichage": 2,
                    "les_prestations_chaudes_indication_du_prix_affichage": 2
                }
            ]
        }
    ],
    "les_prestations_chaudes_presentation": [
        {
            "les_prestations_chaudes_presentation_panel": [
                {
                    "les_prestations_chaudes_qualite_de_la_presentation": 2,
                    "les_prestations_chaudes_accessibilite_pour_le_reapprovisionnement": "facile"
                }
            ]
        }
    ],
    "les_prestations_chaudes_ustensiles_de_service": [
        {
            "les_prestations_chaudes_les_ustensiles_de_service_panel": [
                {
                    "les_prestations_chaudes_etat_des_ustensiles": 2,
                    "les_prestations_chaudes_proprete_des_ustensiles": 2,
                    "les_prestations_chaudes_etat_des_bacs_gastronormes": 2,
                    "les_prestations_chaudes_proprete_des_bacs_gastronormes": 2,
                    "les_prestations_chaudes_adequation_ustensiles_prestation_servie": 2
                }
            ]
        }
    ],
    "les_prestations_chaudes_releves_des_temperatures": [
        {
            "les_prestations_chaudes_temperature_recordings": [
                {
                    "les_prestations_chaudes_nom_du_plat": "etste",
                    "les_prestations_chaudes_temperature": 100
                }
            ]
        }
    ],
    "les_prestations_chaudes_le_materiel_general": [
        {
            "les_prestations_chaudes_le_materiel_panel": [
                {
                    "les_prestations_chaudes_etat_des_hottes": 2,
                    "les_prestations_chaudes_proprete_des_hottes": 2,
                    "les_prestations_chaudes_etat_des_stands": 2,
                    "les_prestations_chaudes_proprete_des_stands": 2
                }
            ]
        }
    ],
    "les_prestations_chaudes_le_materiel_specifique": [
        {
            "les_prestations_chaudes_etat_des_pare_haleine_prestations_chaudes": 2,
            "les_prestations_chaudes_proprete_des_pare_haleine_prestations_chaudes": 2,
            "les_prestations_chaudes_etat_des_ilots_prestations_chaudes": 2,
            "les_prestations_chaudes_proprete_des_ilots_prestations_chaudes": 2,
            "les_prestations_chaudes_etat_des_vitres_prestations_chaudes": 2,
            "les_prestations_chaudes_proprete_des_vitres_prestations_chaudes_grill": 2,
            "les_prestations_chaudes_proprete_des_vitres_prestations_chaudes_friteuse": 2
        }
    ],
    "les_prestations_chaudes_le_personnel_le_service": [
        {
            "les_prestations_chaudes_qualite_du_service": 2,
            "les_prestations_chaudes_qualite_de_la_presentation": 2
        }
    ],
    "les_prestations_chaudes_le_personnel": [
        {
            "les_prestations_chaudes_stand_personnel_panel": [
                {
                    "les_prestations_chaudes_respect_des_procedures_d_hygiene": 2,
                    "les_prestations_chaudes_uniformite_des_tenues": 2,
                    "les_prestations_chaudes_etat_des_tenues": 2,
                    "les_prestations_chaudes_proprete_des_tenues": 2,
                    "les_prestations_chaudes_le_sourire": 2,
                    "les_prestations_chaudes_l_amabilite": 2,
                    "les_prestations_chaudes_la_politesse": 2,
                    "les_prestations_chaudes_la_gestuelle": 2,
                    "les_prestations_chaudes_l_information": 2,
                    "les_prestations_chaudes_le_conseil": 2
                }
            ]
        }
    ],
    "les_hors_d_oeuvre_panel": [
        {
            "les_hors_d_oeuvre_affichage_affichage": [
                {
                    "les_hors_d_oeuvre_presence_d_un_affichage_affichage": 2,
                    "les_hors_d_oeuvre_qualite_de_l_affichage_affichage": 2,
                    "les_hors_d_oeuvre_lisibilite_des_informations_affichage": 2,
                    "les_hors_d_oeuvre_precision_des_informations_affichage": 2,
                    "les_hors_d_oeuvre_indication_du_prix_affichage": 2
                }
            ],
            "les_hors_d_oeuvre_presentation_panel": [
                {
                    "les_hors_d_oeuvre_qualite_de_la_presentation": 2,
                    "les_hors_d_oeuvre_accessibilite_pour_le_reapprovisionnement": "facile"
                }
            ],
            "les_hors_d_oeuvre_temperature_recordings": [
                {
                    "les_hors_d_oeuvre_nom_du_plat": "testtt",
                    "les_hors_d_oeuvre_temperature": 102
                }
            ],
            "les_hors_d_oeuvre_accord_assiette_produits_servis": 2,
            "les_hors_d_oeuvre_etat_des_ramequins_raviers": 2,
            "les_hors_d_oeuvre_proprete_des_ramequins_raviers": 2,
            "les_hors_d_oeuvre_etat_des_petites_assiettes": 2,
            "les_hors_d_oeuvre_proprete_des_petites_assiettes": 2,
            "les_hors_d_oeuvre_etat_des_coupelles": 2,
            "les_hors_d_oeuvre_proprete_des_coupelles": 2,
            "les_hors_d_oeuvre_etat_des_bols": 2,
            "les_hors_d_oeuvre_proprete_des_bols": 2,
            "les_hors_d_oeuvre_accessibilite_pour_le_reapprovisionnement_les_contenants": 2
        }
    ]
}

# Flattening and converting the JSON-like structure to a DataFrame
def flatten_dict(d, parent_key='', sep='_'):
    items = []
    for k, v in d.items():
        new_key = f"{parent_key}{sep}{k}" if parent_key else k
        if isinstance(v, dict):
            items.extend(flatten_dict(v, new_key, sep=sep).items())
        elif isinstance(v, list):
            for i, sub_v in enumerate(v):
                items.extend(flatten_dict(sub_v, f"{new_key}{sep}{i}", sep=sep).items())
        else:
            items.append((new_key, v))
    return dict(items)

flattened_data = flatten_dict(data)
df = pd.DataFrame([flattened_data])

# Save to CSV
df.to_csv('audit_data.csv', index=False)

print("Data saved to audit_data.csv")
