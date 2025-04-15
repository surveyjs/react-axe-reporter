import React from 'react';
import styles from './styles/report-rule.module.css';
import RuleSummary from './rule-summary';

export default function ReportRule({ rule = { id: "", impact: "", tags: [], description: "", help: "", helpUrl: "", nodes: [] } }) {
  return (
    <div className={styles.Content_25511_33905}>
        <div className={styles.Header_25511_34632}>
            <div className={styles.Container_24900_1137827}>
                <div className={styles.Title_24900_1137828}><span className={styles.TitleText_24900_1137829}>{rule.help}</span></div>
            </div>
        </div>
        <div className={styles.Paragraph_25511_35372}>
            <div className={styles.Container_24900_1143320}><span className={styles.Text_24900_1143321}>{rule.description}</span></div>
        </div>
        <div className={styles.Item_1_25511_35361}>
            <div className={styles.Container_24901_1190116}>
                <div className={styles.Label_24901_1190117}><span className={styles.Label_24901_1190121}>{rule.id}:</span></div>
                <div className={styles.Values_24901_1190122}>
                    <div className={styles.Value_24901_1190123}>
                        <div className={styles.Title_24901_1190124}><span className={styles.Value_24901_1190125}>{rule.tags.join(", ")}</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.Tags_25511_35389}>
            <div className={styles.Label_25511_35438}><span className={styles.Label_25511_35441}>Issue Tags:</span></div>
            <div className={styles.Container_25512_17190}>
                {rule.tags.map(tag => 
                <div className={styles.Tag_1_25511_35375}>
                    <div className={styles.Container_24893_1090785}><span className={styles.Title_24893_1090786}>{tag}</span></div>
                </div>
                )}
            </div>
        </div>
        <div className={styles.Spacing_25511_35669}><div className={styles.x4_18878_233694}></div></div>
        <div className={styles.TableDoc_25511_34634}>
            <RuleSummary nodes={rule.nodes}/>
        </div>
    </div>
  );
};
