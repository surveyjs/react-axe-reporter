import React from 'react';
import styles from './styles/rule-summary.module.css';
import { getWcagTagTitles } from './tags';

export default function ReportSummary({ data = [] }) {
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
        <div className={styles.axe_rule_report_header_cell_4}>
            <div className={styles.axe_rule_report_header_cell_content}>
                <span className={styles.axe_rule_report_header_cell_title_text}>Issues</span>
            </div>
        </div>
        </div>
        {data.map((rule: { id: "", impact: "", tags: [], description: "", help: "", helpUrl: "", nodes: [] }, index: number) =>
        <div className={styles.axe_rule_report_row} key={index}>
            <div className={styles.axe_rule_report_row_cell_1}>
                <div className={styles.axe_rule_report_row_cell_content}>
                    <span className={styles.axe_rule_report_row_cell_text}>{index+1}</span>
                </div>
            </div>
            <div className={styles.axe_rule_report_row_cell_2}>
                <div className={styles.axe_rule_report_row_cell_content}>
                    <a href={rule.helpUrl} className={styles.axe_rule_report_row_cell_link}>{rule.help}</a>
                </div>
            </div>
            <div className={styles.axe_rule_report_row_cell_3}>
                <div className={styles.axe_rule_report_row_cell_content}>
                    <span className={styles.axe_rule_report_row_cell_text}>{getWcagTagTitles(rule.tags)}</span><span className={styles.axe_rule_report_row_cell_additional}>{rule.id}</span>
                </div>
            </div>
            <div className={styles.axe_rule_report_row_cell_4}>
                <div className={styles.axe_rule_report_row_cell_content}>
                    <span className={styles.axe_rule_report_row_cell_text}>{rule.nodes.length}</span>
                </div>
            </div>
        </div>)}
    </div>
  );
};
