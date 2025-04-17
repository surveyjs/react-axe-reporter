import React from 'react';
import styles from './styles/rule-summary.module.css';

export default function RuleSummary({ nodes = [] }) {
  return (
    <div className={styles.axe_rule_report}>
        <div className={styles.axe_rule_report_header}>
            <div className={styles.axe_rule_report_header_cell_1}>
                <div className={styles.axe_rule_report_header_cell_content}>
                    <span className={styles.axe_rule_report_header_cell_title_text}>#</span>
                </div>
            </div>
            <div className={styles.axe_rule_report_header_cell_2}>
                <div className={styles.axe_rule_report_header_cell_content}>
                    <span className={styles.axe_rule_report_header_cell_title_text}>Description</span>
                </div>
            </div>
            <div className={styles.axe_rule_report_header_cell_3}>
                <div className={styles.axe_rule_report_header_cell_content}>
                    <span className={styles.axe_rule_report_header_cell_title_text}>WCAG / Rule</span>
                </div>
            </div>
        </div>
        {nodes.map((node: any, index: number) =>
        <div className={styles.axe_rule_report_row}>
            <div className={styles.axe_rule_report_row_cell_1}>
                <div className={styles.axe_rule_report_row_cell_content}>
                    <span className={styles.axe_rule_report_row_cell_text}>{index+1}</span>
                </div>
            </div>
            <div className={styles.axe_rule_report_row_cell_2}>
                <div className={styles.axe_rule_report_row_cell_content}>
                    <span className={styles.axe_rule_report_row_cell_text}>Element location:&#xA0;{node.target[0]}<br/>
                    Element source:&#xA0;{node.html}</span>
                </div>
            </div>
            <div className={styles.axe_rule_report_row_cell_3}>
                <div className={styles.axe_rule_report_row_cell_content}>
                    <span className={styles.axe_rule_report_row_cell_text}>{node.failureSummary}<br/>
                    Related node:&#xA0;{node.target[0]}</span>
                </div>
            </div>
        </div>)}
    </div>
  );
};
