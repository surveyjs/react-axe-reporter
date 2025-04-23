import React from 'react'
import ReactDOM from 'react-dom/client'
import AxeReport from './src/report';
import './index.css';
import results from './public/results.json';

// results.violations = [];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AxeReport data={results as any} info1='React' info2='Dynamic Matrix'/>
  </React.StrictMode>
)