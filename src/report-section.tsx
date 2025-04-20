import React, { useState } from 'react';
import styles from './styles/report-section.module.css';
import Collapse_16x16 from './assets/Collapse_16x16';
import Expand_16x16 from './assets/Expand_16x16';
import ReportItem from './report-item';

/**
 * A collapsible section component that displays a list of accessibility check results.
 * Each section can be expanded or collapsed to show or hide the detailed results.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.title=""] - The title of the section (e.g., "Failed Checks" or "Passed Checks")
 * @param {Array} [props.data=[]] - Array of accessibility check results to display
 * @returns {JSX.Element} A collapsible section containing accessibility check results
 */
export default function ReportSection({ title = "", data = [] }) {
  const [collapsed, setCollapsed] = useState(true);
  const handleToggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={styles.axe_report_section_container}>
      <div className={styles.axe_report_section_header} onClick={handleToggle}>
        <div className={styles.axe_report_section_header_title}><span className={styles.axe_report_section_header_title_text + (collapsed ? (" " + styles.axe_report_section_header_title_text_collapsed) : "")}>{data.length} {title}</span></div>
        <div className={styles.axe_report_section_header_button}>
          <div className={styles.axe_report_section_header_button_image_container}>
            <div className={styles.axe_report_section_header_button_image}>
              {collapsed ? <Expand_16x16 /> : <Collapse_16x16 />}
            </div>
          </div>
        </div>
      </div>
      {collapsed ? null : data.map((rule, index) => <ReportItem rule={rule} key={index}/>)}
    </div>
  );
};
