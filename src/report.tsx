import React from 'react';
import styles from './styles/report.module.css';
import PercentageGauge from './gauge';
import StatusText from './status-text';
import ReportSummary from './report-summary';
import ReportSection from './report-section';

/**
 * Main component for displaying AXE accessibility test results.
 * Renders a comprehensive report including a summary, percentage gauge,
 * and detailed sections for passed and failed checks.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} [props.data={ passes: [], violations: [] }] - The AXE test results data
 * @param {Array} props.data.passes - Array of passed accessibility checks
 * @param {Array} props.data.violations - Array of failed accessibility checks
 * @param {string} [props.info1=""] - Additional information text to display in the header
 * @param {string} [props.info2=""] - Additional information text to display in the header
 * @returns {JSX.Element} A complete AXE accessibility report
 */
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
          {data.violations.length > 0 && (
            <div className={styles.axe_report_summary_table}>
              <ReportSummary data={data.violations}/>
            </div>
          )}
          {data.violations.length == 0 && (
            <div className={styles.axe_report_summary_ok}>
              <div className={styles.axe_report_summary_title}><span className={styles.axe_report_summary_title_text}>All checks passed</span></div>
              <div className={styles.axe_report_summary_description}><span className={styles.axe_report_summary_description_text}>
                All accessibility checks have been successfully completed, confirming compliance with established standards.
                This ensures the product is inclusive and user-friendly for individuals of all abilities, providing an equitable experience for everyone.
              </span></div>
            </div>
          )}
        </div>
        <div className={styles.axe_report_chart_summary}>
          <div className={styles.Container_25514_30854}>
            <PercentageGauge percentage={percentage} size={274}/>
          </div>
          <StatusText/>
        </div>
      </div>
      <div className={styles.axe_report_content}>
        {data.violations.length > 0 && (
          <div className={styles.axe_report_section}>
            <ReportSection title="Failed AXE Checks" data={data.violations} />
          </div>
        )}
        <div className={styles.axe_report_section}>
          <ReportSection title="Passed AXE Checks" data={data.passes} />
        </div>
      </div>
    </div>
  );
}