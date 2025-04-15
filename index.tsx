import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import AxeReport from './src/report';
import results from './example/results.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AxeReport data={results as any} info1='React' info2='Dynamic Matrix'/>
  </React.StrictMode>
)