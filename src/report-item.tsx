import React from 'react';
import styles from './styles/report-item.module.css';
import RuleSummary from './rule-summary';
import { getWcagTagTitles } from './tags';

/**
 * A component that displays detailed information about a single accessibility rule check.
 * Shows the rule's help text, description, ID, WCAG tags, and affected nodes.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} [props.rule] - The accessibility rule data
 * @param {string} [props.rule.id=""] - Unique identifier for the rule
 * @param {string} [props.rule.impact=""] - Impact level of the rule violation
 * @param {Array} [props.rule.tags=[]] - Array of WCAG tags associated with the rule
 * @param {string} [props.rule.description=""] - Detailed description of the rule
 * @param {string} [props.rule.help=""] - Help text explaining the rule
 * @param {string} [props.rule.helpUrl=""] - URL to additional help documentation
 * @param {Array} [props.rule.nodes=[]] - Array of DOM nodes affected by the rule
 * @returns {JSX.Element} A detailed view of an accessibility rule check
 */
export default function ReportItem({ rule = { id: "", impact: "", tags: [], description: "", help: "", helpUrl: "", nodes: [] } }) {
  return (
    <div className={styles.axe_report_item_container}>
        <div className={styles.axe_report_item_header} data-testid="report-header" role="heading">
            <div className={styles.axe_report_item_header_title}><span className={styles.axe_report_item_header_title_text} data-testid="title-text">{rule.help}</span></div>
        </div>
        <div className={styles.axe_report_item_comment} data-testid="description"><span className={styles.axe_report_item_comment_text}>{rule.description}</span></div>
        <div className={styles.axe_report_item_info} data-testid="wcag-info">
            <div className={styles.axe_report_item_info_container}>
                <div className={styles.axe_report_item_info_label}><span className={styles.axe_report_item_info_label_text}>{rule.id}:</span></div>
                <div className={styles.axe_report_item_info_values}>
                    <div className={styles.axe_report_item_info_value}>
                        <span className={styles.axe_report_item_info_value_title}>{getWcagTagTitles(rule.tags)}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.axe_report_item_tags} data-testid="tags-section">
            <div className={styles.axe_report_item_tags_label}><span className={styles.axe_report_item_tags_label_text}>Issue Tags:</span></div>
            <div className={styles.axe_report_item_tags_container}>
                {(rule.tags || []).map((tag, index) => 
                <div className={styles.axe_rule_tag} key={index}>
                    <div className={styles.axe_rule_tag_container}><span className={styles.axe_rule_tag_text}>{tag}</span></div>
                </div>
                )}
            </div>
        </div>
        <div className={styles.axe_report_item_summary} data-testid="rule-summary">
            <RuleSummary nodes={rule.nodes}/>
        </div>
    </div>
  );
};
