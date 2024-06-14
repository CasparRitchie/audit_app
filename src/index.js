import React from 'react';
import { createRoot } from 'react-dom/client';
import SurveyComponent from './SurveyComponent';
import './index.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <SurveyComponent />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element. Make sure the HTML file has a div with id 'root'.");
}
