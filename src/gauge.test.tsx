import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PercentageGauge from './gauge'; // Update import path

describe('PercentageGauge Component', () => {
  // Default props tests
  describe('Default Props', () => {
    it('renders with default props', () => {
      const { container } = render(<PercentageGauge />);
      const svg = container.querySelector('svg');
      expect(svg).toBeDefined();
      expect(svg!.getAttribute('width')).toBe('256');
      expect(svg!.getAttribute('height')).toBe('256');
      expect(screen.getByText('0%')).toBeDefined();
    });
  });

  // Prop validation tests
  describe('Prop Handling', () => {
    it('uses custom percentage value', () => {
      render(<PercentageGauge percentage={75} />);
      expect(screen.getByText('75%')).toBeDefined();
    });

    it('applies custom size', () => {
      const { container } = render(<PercentageGauge size={128} />);
      const svg = container.querySelector('svg');
      expect(svg).toBeDefined();
      expect(svg!.getAttribute('width')).toBe('128');
      expect(svg!.getAttribute('height')).toBe('128');
    });

    it('uses custom colors', () => {
      const { container } = render(<PercentageGauge color="red" backgroundColor="#eee" textColor="blue" />);
      const circles = container.querySelectorAll('circle');
      expect(circles[0].getAttribute('stroke')).toBe('#eee');
      expect(circles[1].getAttribute('stroke')).toBe('red');
      expect(screen.getByText('0%').getAttribute('fill')).toBe('blue');
    });

    it('applies stroke width correctly', () => {
      const { container } = render(<PercentageGauge strokeWidth={20} />);
      const circles = container.querySelectorAll('circle');
      circles.forEach(circle => {
        expect(circle.getAttribute('stroke-width')).toBe('20');
      });
    });

    it('adjusts text size', () => {
      render(<PercentageGauge textSize={32} />);
      expect(screen.getByText('0%').getAttribute('font-size')).toBe('32');
    });
  });

  // Percentage clamping logic
  describe('Percentage Clamping', () => {
    it('clamps values below 0 to 0', () => {
      render(<PercentageGauge percentage={-50} />);
      expect(screen.getByText('0%')).toBeDefined();
    });

    it('clamps values above 100 to 100', () => {
      render(<PercentageGauge percentage={150} />);
      expect(screen.getByText('100%')).toBeDefined();
    });

    it('handles decimal values', () => {
      render(<PercentageGauge percentage={99.9} />);
      expect(screen.getByText('99.9%')).toBeDefined();
    });
  });

  // SVG structure validation
  describe('SVG Structure', () => {
    it('contains two circles and one text element', () => {
      const { container } = render(<PercentageGauge />);
      const circles = container.querySelectorAll('circle');
      expect(circles).toHaveLength(2);
      expect(screen.getByText('0%')).toBeDefined();
    });

    it('has correct circle transformations', () => {
      const { container } = render(<PercentageGauge size={200} />);
      const circles = container.querySelectorAll('circle');
      expect(circles[1].getAttribute('transform')).toBe('rotate(-90 100 100)');
    });

    it('applies stroke-linecap correctly', () => {
      const { container } = render(<PercentageGauge />);
      const circles = container.querySelectorAll('circle');
      expect(circles[1].getAttribute('stroke-linecap')).toBe('round');
    });
  });

  // Stroke calculations
  describe('Stroke Calculations', () => {
    const calculateStrokeValues = (size: number, strokeWidth: number, percentage: number) => {
      const radius = (size - strokeWidth) / 2;
      const circumference = 2 * Math.PI * radius;
      const dash = (circumference * Math.min(Math.max(percentage, 0), 100)) / 100;
      return [dash, circumference - dash];
    };

    it('calculates correct stroke values for default props', () => {
      const [dash, gap] = calculateStrokeValues(256, 6.67, 0);
      const { container } = render(<PercentageGauge />);
      const circles = container.querySelectorAll('circle');
      expect(circles[1].getAttribute('stroke-dasharray')).toBe(`${dash} ${gap}`);

    });

    it('calculates correct stroke values for custom props', () => {
      const [dash, gap] = calculateStrokeValues(200, 15, 75);
      const { container } = render(<PercentageGauge size={200} strokeWidth={15} percentage={75} />);
      const circles = container.querySelectorAll('circle');
      expect(circles[1].getAttribute('stroke-dasharray')).toBe(`${dash} ${gap}`);
    });
  });

  // Text rendering
  describe('Text Rendering', () => {
    it('displays percentage with % sign', () => {
      render(<PercentageGauge percentage={42.5} />);
      expect(screen.getByText('42.5%')).toBeDefined();
    });

    it('applies correct font styles', () => {
      render(<PercentageGauge />);
      const text = screen.getByText('0%');
      expect(text.getAttribute('font-family')).toBe('Lato, Arial, Helvetica, sans-serif');
      expect(text.getAttribute('font-weight')).toBe('600');
    });

    it('positions text correctly', () => {
      render(<PercentageGauge />);
      const text = screen.getByText('0%');
      expect(text.getAttribute('x')).toBe('50%');
      expect(text.getAttribute('y')).toBe('50%');
      expect(text.getAttribute('text-anchor')).toBe('middle');
      expect(text.getAttribute('dominant-baseline')).toBe('central');
    });
  });
});
