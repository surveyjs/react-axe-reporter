import React, { useState } from 'react';
import styles from './styles/report-section.module.css';
import Collapse_16x16 from './assets/Collapse_16x16';
import Expand_16x16 from './assets/Expand_16x16';
import ReportItem from './report-item';

export default function ReportSection({ title = "", data = [] }) {
  const [collapsed, setCollapsed] = useState(true);
  const handleToggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={styles.axe_report_section_container}>
      <div className={styles.axe_report_section_header}>
        <div className={styles.axe_report_section_header_title}><span className={styles.axe_report_section_header_title_text}>{data.length} {title}</span></div>
        <div className={styles.axe_report_section_header_button} onClick={handleToggle}>
          <div className={styles.axe_report_section_header_button_image_container}>
            <div className={styles.axe_report_section_header_button_image}>
              {collapsed ? <Expand_16x16 /> : <Collapse_16x16 />}
            </div>
          </div>
        </div>
      </div>
      {collapsed ? null : data.map(rule => <ReportItem rule={rule}/>)}
    </div>
  );
};
