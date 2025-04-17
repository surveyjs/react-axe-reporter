import React from 'react';
// import styles from './styles/rule-summary.module.css';
import styles from './styles/report.module.css';

export default function RuleSummary({ nodes = [] }) {
  return (
    <div className={styles.Container_24901_1291670}>
        <div className={styles.axe_rule_report_header}>
            <div className={styles.HeaderCell_1_24901_1291672}>
                <div className={styles.axe_rule_report_header_cell_content}>
                <div className={styles.axe_rule_report_header_cell_title}><span className={styles.axe_rule_report_header_cell_title_text}>#</span></div>
                </div>
            </div>
            <div className={styles.HeaderCell_2_24901_1291673}>
                <div className={styles.axe_rule_report_header_cell_content}>
                <div className={styles.axe_rule_report_header_cell_title}><span className={styles.axe_rule_report_header_cell_title_text}>Description</span></div>
                </div>
            </div>
            <div className={styles.HeaderCell_3_24901_1291674}>
                <div className={styles.axe_rule_report_header_cell_content}>
                <div className={styles.axe_rule_report_header_cell_title}><span className={styles.axe_rule_report_header_cell_title_text}>WCAG / Rule</span></div>
                </div>
            </div>
        </div>
        {nodes.map((node: any, index: number) =>
        <div className={styles.axe_rule_report_row}>
            <div className={styles.Cell_1_24901_1291679}>
                <div className={styles.axe_rule_report_row_cell_content}>
                <div className={styles.Content_24893_919070}><span className={styles.Text_24893_919075}>{index+1}</span></div>
                </div>
            </div>
            <div className={styles.Cell_2_24901_1291680}>
                <div className={styles.axe_rule_report_row_cell_content}>
                <div className={styles.Content_24893_919070}><span className={styles.Text_24893_919075}>Element location:&#xA0;{node.target[0]}<br/>
                    Element source:&#xA0;{node.html}</span></div>
                </div>
            </div>
            <div className={styles.Cell_3_24901_1291681}>
                <div className={styles.axe_rule_report_row_cell_content}>
                <div className={styles.Content_24893_919070}><span className={styles.Text_24893_919075}>{node.failureSummary}<br/>
                    Related node:&#xA0;{node.target[0]}</span></div>
                </div>
            </div>
        </div>)}
    </div>
  );
};
