import React from 'react';
import styles from './styles/report-item.module.css';
import RuleSummary from './rule-summary';

export default function ReportItem({ rule = { id: "", impact: "", tags: [], description: "", help: "", helpUrl: "", nodes: [] } }) {
  return (
    <div className={styles.axe_report_item_container}>
        <div className={styles.axe_report_item_header}>
            <div className={styles.axe_report_item_header_title}><span className={styles.axe_report_item_header_title_text}>{rule.help}</span></div>
        </div>
        <div className={styles.axe_report_item_comment}><span className={styles.axe_report_item_comment_text}>{rule.description}</span></div>
        <div className={styles.axe_report_item_info}>
            <div className={styles.axe_report_item_info_container}>
                <div className={styles.axe_report_item_info_label}><span className={styles.axe_report_item_info_label_text}>{rule.id}:</span></div>
                <div className={styles.axe_report_item_info_values}>
                    <div className={styles.axe_report_item_info_value}>
                        <span className={styles.axe_report_item_info_value_title}>{rule.tags.join(", ")}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.axe_report_item_tags}>
            <div className={styles.axe_report_item_tags_label}><span className={styles.axe_report_item_tags_label_text}>Issue Tags:</span></div>
            <div className={styles.axe_report_item_tags_container}>
                {rule.tags.map(tag => 
                <div className={styles.axe_rule_tag}>
                    <div className={styles.axe_rule_tag_container}><span className={styles.axe_rule_tag_text}>{tag}</span></div>
                </div>
                )}
            </div>
        </div>
        <div className={styles.axe_report_item_summary}>
            <RuleSummary nodes={rule.nodes}/>
        </div>
    </div>
  );
};
