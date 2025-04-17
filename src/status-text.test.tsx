import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import styles from './styles/status-text.module.css';
import StatusText from './status-text';

describe('StatusText Component', () => {
  // beforeEach(cleanup);

  // Basic rendering test
  it('renders without crashing', () => {
    const { container } = render(<StatusText />);
    expect(container).toBeDefined();
  });

  // Structure verification
  describe('Component Structure', () => {
    it('has the correct container class', () => {
      const { container } = render(<StatusText />);
      const containerDiv = container.firstChild as HTMLElement;
      expect(containerDiv.className).contains(styles.axe_report_status_text);
    });

    it('contains both span elements', () => {
      const { container } = render(<StatusText />);
      const containerDiv = container.firstChild as HTMLElement;
      expect(containerDiv.children).toHaveLength(2);
      const spans = containerDiv.querySelectorAll('span');
      expect(spans).toHaveLength(2);
    });
  });

  // Content verification
  describe('Text Content', () => {
    it('displays correct title text', () => {
      render(<StatusText />);
      const title = screen.getByText('Accessibility Status');
      expect(title).toBeDefined();
      expect(title.className).contains(styles.axe_report_status_text_title);
    });

    it('displays full description text', () => {
      render(<StatusText />);
      const description = screen.getByText(
        /Automated testing tools do not cover all possible accessibility-related issues\. To ensure an appropriate level of compliance with a specific standard, manual testing\/audits should be used\./
      );
      expect(description).toBeDefined();
      expect(description.className).contains(styles.axe_report_status_text_description);
    });
  });

  // Accessibility checks
  describe('Accessibility', () => {
    it('has meaningful text content', () => {
      render(<StatusText />);
      expect(screen.getByText('Accessibility Status')).toBeDefined();
      expect(
        screen.getByText(/Automated testing tools do not cover/)
      ).toBeDefined();
    });

    it('maintains proper reading order', () => {
      const { container } = render(<StatusText />);
      const [title, description] = container.querySelectorAll('span');
      expect(title.textContent).toBe('Accessibility Status');
      expect(description.textContent).toMatch(/Automated testing tools/);
    });
  });

  // Style class verification
  describe('Styling Classes', () => {
    it('applies correct class to container', () => {
      const { container } = render(<StatusText />);
      const containerDiv = container.firstChild as HTMLElement;
      expect(containerDiv.className).contains(styles.axe_report_status_text);
    });

    it('applies correct class to title', () => {
      render(<StatusText />);
      const title = screen.getByText('Accessibility Status');
      expect(title.className).contains(styles.axe_report_status_text_title);
    });

    it('applies correct class to description', () => {
      render(<StatusText />);
      const description = screen.getByText(/Automated testing tools/);
      expect(description.className).contains(styles.axe_report_status_text_description);
    });
  });
});