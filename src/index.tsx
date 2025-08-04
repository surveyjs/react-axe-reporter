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
export default function AxeReport({ data = { passes: [] as Array<any>, violations: [] as Array<any>}, info1 = "", info2 = "" }) {
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
          <StatusText/>
          {/* {data.violations.length == 0 && (
            <div className={styles.axe_report_summary_ok}>
              <div className={styles.axe_report_summary_title}><span className={styles.axe_report_summary_title_text}>All checks passed</span></div>
              <div className={styles.axe_report_summary_description}><span className={styles.axe_report_summary_description_text}>
                All accessibility checks have been successfully completed, confirming compliance with established standards.
                This ensures the product is inclusive and user-friendly for individuals of all abilities, providing an equitable experience for everyone.
              </span></div>
            </div>
          )} */}
        </div>
        <div className={styles.axe_report_chart_summary}>
          <PercentageGauge percentage={percentage} size={120}/>
        </div>
      </div>
      {data.violations.length > 0 && (
        <div className={styles.axe_report_summary_table}>
          <ReportSummary data={data.violations}/>
        </div>
      )}
      <div className={styles.axe_report_content}>
        {data.violations.length > 0 && (<>
          {/* <div className={styles.axe_report_info_panel}>
            <span>Color contrast ratio is currently measured for the <strong>Contrast theme</strong> only (WCAG 2 Level AA, WCAG 1.4.3). We are working on bringing sufficient level of accessibility (measured by APCA algorithm) to other themes.</span>
          </div> */}
          <div className={styles.axe_report_section}>
            <ReportSection title="Failed AXE Checks" data={data.violations} />
          </div>
        </>)}
        <div className={styles.axe_report_section}>
          <ReportSection title="Passed AXE Checks" data={data.passes} />
        </div>
      </div>
      <div className={styles.axe_report_footer}>
        <a className={styles.axe_report_github} href="https://github.com/surveyjs/react-axe-reporter">
          <div data-svg-wrapper className={styles.axe_report_github_logo}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
            <path d="M12.0187 0C5.37166 0 0 5.37 0 12.015C0 17.3175 3.42856 21.84 8.20004 23.4225C8.80773 23.52 9.0478 23.1525 9.0478 22.8375V20.7675C5.69426 21.495 4.95904 19.185 4.95904 19.185C4.42637 17.7975 3.62362 17.4375 3.62362 17.4375C2.52828 16.6875 3.72115 16.71 3.72115 16.71C4.91402 16.785 5.54422 17.925 5.54422 17.925C6.61705 19.77 8.3876 19.215 9.07031 18.9225C9.19035 18.1425 9.50544 17.5875 9.85055 17.295C7.17222 16.98 4.32884 16.005 4.32884 11.385C4.32884 10.0725 4.79398 9 5.54422 8.175C5.42418 7.86 5.03406 6.6675 5.68676 5.0175C5.68676 5.0175 6.66206 4.7025 8.97278 6.2325C9.91807 5.9625 10.9909 5.7975 12.0112 5.7975C13.0315 5.7975 14.0819 5.97 15.0497 6.2325C17.3379 4.7025 18.3057 5.0175 18.3057 5.0175C18.9659 6.6675 18.5758 7.86 18.4557 8.175C19.2059 9 19.6711 10.0725 19.6711 11.385C19.6711 16.005 16.8277 16.98 14.1494 17.295C14.5845 17.6625 14.9521 18.39 14.9521 19.5075V22.8375C14.9521 23.175 15.1922 23.5425 15.7999 23.4225C20.5639 21.8175 23.9999 17.3175 23.9999 12.015C24.0224 5.3775 18.6208 0 12.0112 0L12.0187 0Z" fill="#8A8A8A"/>
            </g>
            </svg>
          </div>
          <div className={styles.axe_report_github_text}>GitHub</div>
        </a>
      </div>      
    </div>
  );
}