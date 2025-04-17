import React from 'react';

/**
 * A circular gauge component that displays a percentage value with a visual indicator.
 * The gauge consists of a circular progress bar and a centered percentage text.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {number} [props.percentage=0] - The percentage value to display (0-100)
 * @param {number} [props.size=256] - The size of the gauge in pixels
 * @param {number} [props.strokeWidth=10] - The width of the gauge's stroke in pixels
 * @param {string} [props.color='#19B394'] - The color of the progress indicator
 * @param {string} [props.backgroundColor='rgb(245, 245, 245)'] - The color of the background track
 * @param {string} [props.textColor='#19B394'] - The color of the percentage text
 * @param {number} [props.textSize=48] - The size of the percentage text in pixels
 * @returns {JSX.Element} A circular gauge component
 */
export default function PercentageGauge({
  percentage = 0,
  size = 256,
  strokeWidth = 10,
  color = '#19B394',
  backgroundColor = 'rgb(245, 245, 245)',
  textColor = '#19B394',
  textSize = 48,
}) {
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (circumference * clampedPercentage) / 100;
  const gap = circumference - dash;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={backgroundColor}
        strokeWidth={strokeWidth}
      />
      
      <circle
        data-testid="circle"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={`${dash} ${gap}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      
      <text
        data-testid="circle"
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={textSize}
        fontFamily="Lato, Arial, Helvetica, sans-serif"
        fontWeight={600}
        fill={textColor}
      >
        {clampedPercentage}%
      </text>
    </svg>
  );
};
