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
    const getElementLocation = (node: any) => node.target && node.target[0] || 'undefined';
    return (
        <div className={styles.axe_rule_report} role='grid'>
            <div className={styles.axe_rule_report_header} data-testid="rule-header" role='row'>
                <div className={styles.axe_rule_report_header_cell_1} data-testid="rule-header-cell">
                    <div className={styles.axe_rule_report_header_cell_content}>
                        <span className={styles.axe_rule_report_header_cell_title_text}>#</span>
                    </div>
                </div>
                <div className={styles.axe_rule_report_header_cell_2} data-testid="rule-header-cell">
                    <div className={styles.axe_rule_report_header_cell_content}>
                        <span className={styles.axe_rule_report_header_cell_title_text}>Description</span>
                    </div>
                </div>
                <div className={styles.axe_rule_report_header_cell_3} data-testid="rule-header-cell">
                    <div className={styles.axe_rule_report_header_cell_content}>
                        <span className={styles.axe_rule_report_header_cell_title_text}>WCAG / Rule</span>
                    </div>
                </div>
            </div>
            {nodes.map((node: any, index: number) =>
                <div className={styles.axe_rule_report_row} key={index} data-testid="rule-row" role='row'>
                    <div className={styles.axe_rule_report_row_cell_1} data-testid="rule-row-cell">
                        <div className={styles.axe_rule_report_row_cell_content}>
                            <span className={styles.axe_rule_report_row_cell_text} data-testid="rule-text">{index + 1}</span>
                        </div>
                    </div>
                    <div className={styles.axe_rule_report_row_cell_2} data-testid="rule-row-cell">
                        <div className={styles.axe_rule_report_row_cell_content}>
                            <span className={styles.axe_rule_report_row_cell_text} data-testid="rule-text">Element location:&#xA0;{getElementLocation(node)}<br />
                                Element source:&#xA0;{node.html}</span>
                        </div>
                    </div>
                    <div className={styles.axe_rule_report_row_cell_3} data-testid="rule-row-cell">
                        <div className={styles.axe_rule_report_row_cell_content}>
                            <span className={styles.axe_rule_report_row_cell_text} data-testid="rule-text">
                                {node.any && node.any[0] ?
                                <>
                                    {node.any[0].message}
                                    <br />
                                </>
                                : null}
                                <>Related node:&#xA0;</>
                                {getElementLocation(node)}
                            </span>
                        </div>
                    </div>
                </div>)}
        </div>
    );
};
