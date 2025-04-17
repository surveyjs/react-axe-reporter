import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ReportItem from './report-item'; // Update import path
import styles from './styles/report-item.module.css';
import RuleSummary from './rule-summary';
import { getWcagTagTitles } from './tags';

// Mock dependencies
vi.mock('./tags', () => ({
  getWcagTagTitles: vi.fn().mockReturnValue('WCAG 2.1 AA')
}));

vi.mock('./rule-summary', () => ({
  default: vi.fn(() => <div data-testid="rule-summary-mock" />)
}));

const mockRule: any = {
  id: 'color-contrast',
  impact: 'serious',
  tags: ['wcag2aa', 'wcag143'],
  description: 'Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds',
  help: 'Elements must have sufficient color contrast',
  helpUrl: 'https://dequeuniversity.com/rules/axe/4.7/color-contrast',
  nodes: Array(3).fill({ target: ['body'], html: '<body>' })
};

describe('ReportItem Component', () => {
  // Basic rendering tests
  describe('Rendering', () => {
    it('renders without crashing with default props', () => {
      const { container } = render(<ReportItem />);
      expect(container).toBeInTheDocument();
    });

    it('renders all main sections with valid rule', () => {
      render(<ReportItem rule={mockRule} />);
      expect(screen.getByTestId('report-header')).toBeInTheDocument();
      expect(screen.getByTestId('description')).toBeInTheDocument();
      expect(screen.getByTestId('wcag-info')).toBeInTheDocument();
      expect(screen.getByTestId('tags-section')).toBeInTheDocument();
      expect(screen.getByTestId('rule-summary')).toBeInTheDocument();
    });
  });

  // Content verification
  describe('Content Display', () => {
    it('displays correct header text', () => {
      render(<ReportItem rule={mockRule} />);
      expect(screen.getByText(mockRule.help)).toBeInTheDocument();
    });

    it('shows rule description', () => {
      render(<ReportItem rule={mockRule} />);
      expect(screen.getByText(mockRule.description)).toBeInTheDocument();
    });

    it('displays rule ID with colon', () => {
      render(<ReportItem rule={mockRule} />);
      expect(screen.getByText(`${mockRule.id}:`)).toBeInTheDocument();
    });

    it('shows formatted WCAG titles', () => {
      render(<ReportItem rule={mockRule} />);
      expect(screen.getByText('WCAG 2.1 AA')).toBeInTheDocument();
      expect(getWcagTagTitles).toHaveBeenCalledWith(mockRule.tags);
    });
  });

  // Tag rendering tests
  describe('Tag Handling', () => {
    it('renders all tags', () => {
      render(<ReportItem rule={mockRule} />);
      mockRule.tags.forEach((tag: any) => {
        expect(screen.getByText(tag)).toBeInTheDocument();
      });
    });

    it('handles empty tags array', () => {
      const { container } = render(<ReportItem rule={{ ...mockRule, tags: [] }} />);
      const tags = container.querySelectorAll(`.${styles.axe_rule_tag}`);
      expect(tags).toHaveLength(0);
    });
  });

  // RuleSummary integration
  describe('RuleSummary Integration', () => {
    it('passes nodes to RuleSummary', () => {
      render(<ReportItem rule={mockRule} />);
      expect(RuleSummary).toHaveBeenCalledWith(
        { nodes: mockRule.nodes },
        expect.anything()
      );
    });

    it('handles empty nodes array', () => {
      render(<ReportItem rule={{ ...mockRule, nodes: [] }} />);
      expect(RuleSummary).toHaveBeenCalledWith(
        { nodes: [] },
        expect.anything()
      );
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles missing rule prop', () => {
      render(<ReportItem />);
      expect(screen.queryByText(/Elements must have sufficient color contrast/, { ignore: true })).not.toBeInTheDocument();
      expect(screen.queryByText('Issue Tags:')).toBeInTheDocument();
    });

    it('handles partial rule data', () => {
      const partialRule: any = { id: 'test-id', help: 'Test help' };
      render(<ReportItem rule={partialRule} />);
      expect(screen.getByText('Test help')).toBeInTheDocument();
      expect(screen.getByText('test-id:')).toBeInTheDocument();
    });

    it('handles invalid tag types', () => {
      const invalidRule = { ...mockRule, tags: [123, null] };
      render(<ReportItem rule={invalidRule} />);
      expect(screen.queryByText('123')).toBeInTheDocument();
      expect(screen.queryByText('null')).not.toBeInTheDocument();
    });
  });

  // Styling classes verification
  describe('Styling Classes', () => {
    it('applies correct container class', () => {
      const { container } = render(<ReportItem />);
      expect(container.firstChild).toHaveClass(styles.axe_report_item_container);
    });

    it('applies header classes correctly', () => {
      render(<ReportItem rule={mockRule} />);
      expect(screen.getByTestId('report-header')).toHaveClass(styles.axe_report_item_header);
      expect(screen.getByTestId('title-text')).toHaveClass(styles.axe_report_item_header_title_text);
    });

    it('applies tag container classes', () => {
      render(<ReportItem rule={mockRule} />);
      const tagContainer = screen.getByTestId('tags-section');
      expect(tagContainer).toHaveClass(styles.axe_report_item_tags);
      expect(tagContainer.children[0]).toHaveClass(styles.axe_report_item_tags_label);
      expect(tagContainer.children[1]).toHaveClass(styles.axe_report_item_tags_container);
    });
  });

  // Accessibility checks
  describe('Accessibility', () => {
    it('has semantic heading structure', () => {
      render(<ReportItem rule={mockRule} />);
      const header = screen.getByTestId('report-header');
      expect(header.tagName).toBe('DIV'); // Should be more semantic in actual implementation
      expect(header).toHaveAttribute('role', 'heading');
    });

    it('maintains text readability', () => {
      render(<ReportItem rule={mockRule} />);
      const textElements = screen.getAllByTestId('title-text');
      textElements.forEach(element => {
        expect(getComputedStyle(element).color).not.toBe('transparent');
      });
    });
  });
});