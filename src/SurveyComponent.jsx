import React, { Component } from "react";
import 'survey-react/modern.css';
import { StylesManager, Model, Survey } from 'survey-react';

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
        les_hors_d_oeuvre,

      ],
      "sendResultOnPageNext": true,
      "showPageNumbers": true,
      "showProgressBar": "topbottom",
      "progressBarType": "questions",
      "showTOC": true,
      "pageNextText": "\"Next Page\" button text",
      "completeText": "Complete Survey button text",
      "showPreviewBeforeComplete": "showAnsweredQuestions",
      "widthMode": "responsive"
    };

    this.survey = new Model(this.surveyJson);
    this.survey.onComplete.add((sender) => {
      console.log("Survey Results:", sender.data);
    });
  }

  render() {
    return <Survey model={this.survey} />;
  }
}

export default SurveyComponent;
