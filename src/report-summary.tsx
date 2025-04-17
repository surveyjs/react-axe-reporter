import React from 'react';
// import styles from './styles/report-summary.module.css';
import styles from './styles/report.module.css';

export default function ReportSummary({ data = [] }) {
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
        <div className={styles.HeaderCell_4_24901_1291675}>
            <div className={styles.axe_rule_report_header_cell_content}>
            <div className={styles.axe_rule_report_header_cell_title}><span className={styles.axe_rule_report_header_cell_title_text}>Issues</span></div>
            </div>
        </div>
        </div>
        {data.map((rule: { id: "", impact: "", tags: [], description: "", help: "", helpUrl: "", nodes: [] }, index: number) =>
        <div className={styles.axe_rule_report_row}>
            <div className={styles.Cell_1_24901_1291679}>
                <div className={styles.axe_rule_report_row_cell_content}>
                <div className={styles.Content_24893_919070}><span className={styles.Text_24893_919075}>{index+1}</span></div>
                </div>
            </div>
            <div className={styles.TableCellDoc_24901_1291680}>
                <div className={styles.axe_rule_report_row_cell_content}>
                <div className={styles.Content_24893_919088}><span className={styles.Text_24893_919093}>{rule.help}</span></div>
                </div>
            </div>
            <div className={styles.TableCellDoc_24901_1291681}>
                <div className={styles.axe_rule_report_row_cell_content}>
                <div className={styles.Content_25515_30866}><span className={styles.Text_25515_30867}>{rule.tags.join(", ")}</span><span className={styles.Text_25515_35133}>{rule.id}</span></div>
                </div>
            </div>
            <div className={styles.Cell_4_24901_1291682}>
                <div className={styles.axe_rule_report_row_cell_content}>
                <div className={styles.Content_24893_919070}><span className={styles.Text_24893_919075}>{rule.nodes.length}</span></div>
                </div>
            </div>
        </div>)}
    </div>
  );
};
