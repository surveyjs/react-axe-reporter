import React from 'react';
import styles from './styles/report.module.css';
import PercentageGauge from './gauge';
import StatusText from './status-text';
import ReportSummary from './report-summary';
import ReportSection from './report-section';

export default function AxeReport({ data = { passes: [], violations: []}, info1 = "", info2 = "" }) {
  const percentage = Math.ceil((data.passes.length/(data.passes.length + data.violations.length)) * 100);
  return (
    <div className={styles.axe_report}>
      <div className={styles.axe_report_header}>
        <div className={styles.axe_report_summary}>
          <div className={styles.axe_report_summary_header}>
            <div className={styles.axe_report_summary_header_container}>
              <div className={styles.axe_report_summary_title}><span className={styles.axe_report_summary_title_text}>AXE Accessibility Check Results</span></div>
              <div className={styles.axe_report_summary_description}><span className={styles.axe_report_summary_description_text}>{info1} {info2}</span></div>
            </div>
          </div>
          <div className={styles.axe_report_summary_spacing}>
            <div className={styles.axe_report_summary_spacing_content}></div>
          </div>
          <div className={styles.axe_report_summary_table}>
            <ReportSummary data={data.violations}/>
          </div>
        </div>
        <div className={styles.axe_report_chart_summary}>
          <div className={styles.Container_25514_30854}>
            <PercentageGauge percentage={percentage} size={274}/>
          </div>
          <StatusText/>
        </div>
      </div>
      <div className={styles.axe_report_content}>
        <div className={styles.axe_report_section}>
          <ReportSection title="AXE Failed Checks" data={data.violations} />
        </div>
        <div className={styles.axe_report_section}>
          <ReportSection title="AXE Passed Checks" data={data.passes} />
        </div>
      </div>
    </div>
  );
}