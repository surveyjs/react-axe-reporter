import React from 'react';

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
