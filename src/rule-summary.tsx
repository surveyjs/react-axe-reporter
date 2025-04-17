import React from 'react';
import styles from './styles/rule-summary.module.css';

/**
 * A table component that displays detailed information about nodes affected by an accessibility rule.
 * Shows the location, source code, and related information for each affected DOM node.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Array} [props.nodes=[]] - Array of DOM nodes affected by the rule
 * @param {Array} props.nodes[].target - Array containing the selector for the affected element
 * @param {string} props.nodes[].html - HTML source code of the affected element
 * @param {Array} props.nodes[].any - Array containing additional information about the violation
 * @param {string} props.nodes[].any[].message - Message describing the violation
 * @returns {JSX.Element} A table showing detailed information about affected nodes
 */
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
                <div className={styles.axe_rule_report_row} key={index}>
                    <div className={styles.axe_rule_report_row_cell_1}>
                        <div className={styles.axe_rule_report_row_cell_content}>
                            <span className={styles.axe_rule_report_row_cell_text}>{index + 1}</span>
                        </div>
                    </div>
                    <div className={styles.axe_rule_report_row_cell_2}>
                        <div className={styles.axe_rule_report_row_cell_content}>
                            <span className={styles.axe_rule_report_row_cell_text}>Element location:&#xA0;{node.target[0]}<br />
                                Element source:&#xA0;{node.html}</span>
                        </div>
                    </div>
                    <div className={styles.axe_rule_report_row_cell_3}>
                        <div className={styles.axe_rule_report_row_cell_content}>
                            <span className={styles.axe_rule_report_row_cell_text}>
                                {node.any && node.any[0] ?
                                <>
                                    {node.any[0].message}
                                    <br />
                                </>
                                : null}
                                <>Related node:&#xA0;</>
                                {node.target[0]}
                            </span>
                        </div>
                    </div>
                </div>)}
        </div>
    );
};
