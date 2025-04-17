import React from 'react';
import styles from './styles/status-text.module.css';

/**
 * A component that displays a status message about accessibility testing.
 * Provides a disclaimer about the limitations of automated testing and the need for manual testing.
 * 
 * @component
 * @returns {JSX.Element} A status message component about accessibility testing
 */
export default function StatusText() {
  return (
    <div className={styles.axe_report_status_text}>
      <span className={styles.axe_report_status_text_title}>Accessibility Status</span>
      <span className={styles.axe_report_status_text_description}>
        Automated testing tools do not cover all possible accessibility-related issues. 
        To ensure an appropriate level of compliance with a specific standard, manual testing/audits should be used.
      </span>
    </div>
  );
};
