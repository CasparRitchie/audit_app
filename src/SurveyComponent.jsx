import React, { Component } from "react";
import 'survey-react/modern.css';
import { StylesManager, Model, Survey } from 'survey-react';
import axios from 'axios';

// import pages
import page_accueil from './1_page_d_accueil';
import les_affichages from './2_les_affichages';
import zone_d_acces_au_self from './3_zone_d_acces_au_self';
import zone_distribution from "./4_zone_distribution";
import le_personnel from "./5_le_personnel";
import zone_distribution_reduit from "./6_zone_distribution_reduit";
import les_prestations_chaudes from "./7_les_prestations_chaudes"
import les_hors_d_oeuvre from "./8_les_hors_d_oeuvre";
import "./index.css";

StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
  constructor(props) {
    super(props);

    this.surveyJson = {
      title: "Expérience convive",
      pages: [
        page_accueil,
        les_affichages,
        zone_d_acces_au_self,
        zone_distribution,
        le_personnel,
        zone_distribution_reduit,
        les_prestations_chaudes,
        les_hors_d_oeuvre
      ],
      "sendResultOnPageNext": true,
      "showPageNumbers": true,
      "showProgressBar": "topbottom",
      "progressBarType": "questions",
      "showTOC": true,
      "pageNextText": "Suivant",
      "pagePrevText": "Précédent",
      "completeText": "Finaliser audit",
      "showPreviewBeforeComplete": "showAnsweredQuestions",
      "widthMode": "responsive"
    };

    this.survey = new Model(this.surveyJson);
    this.survey.onComplete.add(async (sender) => {
      console.log("Survey Results:", sender.data);

      // Function to handle file conversion to base64
      const convertFileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result.split(',')[1]);
          reader.onerror = error => reject(error);
        });
      };

      // Extract files from the survey data
      const files = [];
      for (const key in sender.data) {
        if (sender.data.hasOwnProperty(key)) {
          const value = sender.data[key];
          if (value && value.constructor === FileList) {
            for (let i = 0; i < value.length; i++) {
              const file = value[i];
              const base64Content = await convertFileToBase64(file);
              files.push({ filename: file.name, content: base64Content });
            }
          }
        }
      }

      // Create the payload with survey data and files
      const payload = {
        ...sender.data,
        files
      };

      axios.post('https://auditapp-backend-3bfe82912913.herokuapp.com/submit-survey', payload)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('There was an error submitting the survey!', error);
        });
    });
  }

  render() {
    return <Survey model={this.survey} />;
  }
}

export default SurveyComponent;
