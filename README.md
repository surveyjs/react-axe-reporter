# React Axe HTML Reporter

A React-based HTML reporter for [axe-core](https://github.com/dequelabs/axe-core) accessibility testing results. This component provides an interactive and visually appealing UI that displays lists of passed and failed accessibility checks and detailed information about each issue.

## Features

- 📊 Visual percentage gauge showing overall accessibility score
- 📋 Summary table of accessibility violations
- 🔍 Detailed view of each accessibility rule check
- 📑 Collapsible sections for passed and failed checks
- 🏷️ WCAG tag formatting and categorization
- 📱 Responsive design
- 🎨 Customizable styling through CSS modules

## Installation

```bash
npm install axe-html-reporter
# or
yarn add axe-html-reporter
```

## Usage

```jsx
import React from 'react';
import AxeReport from 'axe-html-reporter';

function App() {
  // Example axe-core results
  const axeResults = {
    passes: [
      {
        id: "color-contrast",
        impact: "serious",
        tags: ["wcag2aa", "wcag143"],
        description: "Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds",
        help: "Elements must have sufficient color contrast",
        helpUrl: "https://dequeuniversity.com/rules/axe/4.4/color-contrast",
        nodes: []
      }
    ],
    violations: [
      {
        id: "image-alt",
        impact: "critical",
        tags: ["wcag2a", "wcag111", "section508", "section508.22.a"],
        description: "Ensures <img> elements have alternate text or a role of none or presentation",
        help: "Images must have alternate text",
        helpUrl: "https://dequeuniversity.com/rules/axe/4.4/image-alt",
        nodes: []
      }
    ]
  };

  return (
    <AxeReport 
      data={axeResults}
      info1="Tested on: example.com"
      info2="Date: 2025-04-17"
    />
  );
}
```

## Components

### `AxeReport`

The main component that displays the complete accessibility report.

Props:

- `data`: `object`\
An `axe-core` results object that contains the `passes` and `violations` arrays.
- `info1`: `string`\
Additional information to display in the header.
- `info2`: `string`\
Additional information to display in the header.

### `PercentageGauge`

A circular gauge component that displays the overall accessibility score.

Props:

- `percentage`: `number`\
A percentage value to display (0-100).
- `size`: `number`\
The size of the gauge in pixels.
- `strokeWidth`: `number`\
The width of the gauge's stroke.
- `color`: `string`\
The color of the progress indicator.
- `backgroundColor`: `string`\
The color of the background track.
- `textColor`: `string`\
The color of the percentage text.
- `textSize`: `number`\
The size of the percentage text.

### `ReportSection`

A collapsible section component that displays a list of accessibility check results.

Props:

- `title`: `string`\
The section title.
- `data`: `object[]`\
An array of accessibility check results.

### `ReportItem`

A component that displays detailed information about a single accessibility rule check.

Props:

- `rule`: `object`\
An accessibility rule data object.

### `ReportSummary`

A table component that displays a summary of accessibility rule violations.

Props:

- `data`: `object[]`\
An array of accessibility rule violations.

### `RuleSummary`

A table component that displays detailed information about nodes affected by an accessibility rule.

Props:

- `nodes`: `object[]`\
An array of DOM nodes affected by the rule.

## Styling

The component [uses CSS modules](./src/styles/) for styling. You can customize the appearance by overriding the CSS classes in your own stylesheet.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- [axe-core](https://github.com/dequelabs/axe-core) for the accessibility testing engine
- [Original axe-html-reporter](https://github.com/lpelypenko/axe-html-reporter) for inspiration 