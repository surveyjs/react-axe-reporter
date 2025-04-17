import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RuleSummary from './rule-summary'; // Update import path
import styles from './styles/rule-summary.module.css';

// Mock data for testing
const mockNodes: Array<never> = [
  {
    target: ['#main-content'],
    html: '<div id="main-content">...</div>',
    any: [{ message: 'WCAG 2.1: Ensure landmark regions are unique' }]
  },
  {
    target: ['.nav-links'],
    html: '<ul class="nav-links">...</ul>',
    any: []
  }
] as any;

describe('RuleSummary Component', () => {
  // Basic rendering tests
  describe('Rendering', () => {
    it('renders without crashing with empty nodes', () => {
      const { container } = render(<RuleSummary nodes={[]} />);
      expect(container).toBeDefined();
    });

    it('renders correct number of rows', () => {
      render(<RuleSummary nodes={mockNodes} />);
      const rows = screen.getAllByTestId('rule-row');
      expect(rows).toHaveLength(mockNodes.length);
    });
  });

  // Structure verification
  describe('Component Structure', () => {
    it('has correct header structure', () => {
      render(<RuleSummary nodes={mockNodes} />);
      const headers = screen.getAllByTestId('rule-header-cell');
      expect(headers).toHaveLength(3);
      expect(headers[0]).toHaveTextContent('#');
      expect(headers[1]).toHaveTextContent('Description');
      expect(headers[2]).toHaveTextContent('WCAG / Rule');
    });

    it('has correct row cell structure', () => {
      render(<RuleSummary nodes={mockNodes} />);
      const firstRowCells = screen.getAllByTestId('rule-row-cell').slice(0, 3);
      expect(firstRowCells[0]).toHaveTextContent('1');
      expect(firstRowCells[1]).toContainHTML('Element location');
      expect(firstRowCells[2]).toContainHTML('Related node');
    });
  });

  // Content verification
  describe('Content Display', () => {
    it('displays correct index numbers', () => {
      render(<RuleSummary nodes={mockNodes} />);
      const indices = screen.getAllByText(/^[12]$/);
      expect(indices).toHaveLength(2);
    });

    it('displays element location and source correctly', () => {
      render(<RuleSummary nodes={mockNodes} />);
      expect(screen.getByText(/Element location: #main-content/)).toBeDefined();
      expect(screen.getByText(/Element source: <div id="main-content">/)).toBeDefined();
    });

    it('displays WCAG message when available', () => {
      render(<RuleSummary nodes={mockNodes} />);
      expect(screen.getByText(/WCAG 2.1: Ensure landmark regions are unique/)).toBeDefined();
    });

    it('handles missing WCAG message gracefully', () => {
      render(<RuleSummary nodes={mockNodes} />);
      const secondRowMessage = screen.getAllByTestId('rule-row-cell')[5];
      expect(secondRowMessage).not.toContainHTML('<br/>');
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles empty nodes array', () => {
      const { container } = render(<RuleSummary nodes={[]} />);
      const rows = container.querySelectorAll(`.${styles.axe_rule_report_row}`);
      expect(rows).toHaveLength(0);
    });

    it('handles missing any array', () => {
      const nodes: any = [{ target: ['footer'], html: '<footer>' }];
      render(<RuleSummary nodes={nodes} />);
      expect(screen.getByText(/Related node: footer/)).toBeDefined();
    });

    it('handles malformed node data', () => {
      const nodes = [{ invalidField: 'test' }];
      // @ts-ignore - Testing invalid prop
      render(<RuleSummary nodes={nodes} />);
      expect(screen.getByText(/Element location: undefined/)).toBeDefined();
    });
  });

  // Styling classes verification
  describe('Styling Classes', () => {
    it('applies correct container class', () => {
      const { container } = render(<RuleSummary />);
      expect(container.firstChild).toHaveClass(styles.axe_rule_report);
    });

    it('applies header cell classes correctly', () => {
      render(<RuleSummary />);
      const headerCells = screen.getByTestId('rule-header').children;
      expect(headerCells[0]).toHaveClass(styles.axe_rule_report_header_cell_1);
      expect(headerCells[1]).toHaveClass(styles.axe_rule_report_header_cell_2);
      expect(headerCells[2]).toHaveClass(styles.axe_rule_report_header_cell_3);
    });

    it('applies row cell classes correctly', () => {
      render(<RuleSummary nodes={mockNodes} />);
      const firstRowCells = screen.getAllByTestId('rule-row')[0].children;
      expect(firstRowCells[0]).toHaveClass(styles.axe_rule_report_row_cell_1);
      expect(firstRowCells[1]).toHaveClass(styles.axe_rule_report_row_cell_2);
      expect(firstRowCells[2]).toHaveClass(styles.axe_rule_report_row_cell_3);
    });
  });

  // Accessibility checks
  describe('Accessibility', () => {
    it('has proper semantic structure', () => {
      render(<RuleSummary nodes={mockNodes} />);
      const container = screen.getByRole('grid');
      expect(container).toBeDefined();
      expect(screen.getAllByRole('row')).toHaveLength(mockNodes.length + 1); // +1 for header
    });

    it.skip('maintains readable text contrast', () => {
      render(<RuleSummary nodes={mockNodes} />);
      const textElements = screen.getAllByTestId('rule-text');
      textElements.forEach(element => {
        expect(element).toHaveStyle('color: rgb(0, 0, 0);');
      });
    });
  });
});