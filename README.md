# React Axe HTML Reporter

A React-based HTML reporter that integrates with [axe-core](https://github.com/dequelabs/axe-core) accessibility checker to report any web accessibility issues that might make it hard for people with disabilities to use your application. It provides an interactive and visually appealing UI that displays accessibility testing results as a list of passed and failed accessibility checks, along with detailed information about each issue.

![React Axe HTML Reporter](https://github.com/surveyjs/react-axe-reporter/blob/7c7b4cc7105cf50d55aa0f30371cf5ad55f3be82/docs/image.png)

Developed by the SurveyJS team, this Axe reporter is designed to make it easier for developers to interpret accessibility test results for dynamic forms built with the Survey Creator component and validate their WCAG compliance.

## Features

- 📊 Visual percentage gauge showing overall accessibility score
- 📋 Summary table of accessibility violations
- 🔍 Detailed view of each accessibility rule check
- 📑 Collapsible sections for passed and failed checks
- 🏷️ WCAG tag formatting and categorization
- 📱 Responsive design
- 🎨 Customizable styling through CSS modules

## Installation and Usage

Follow the steps below to install the required packages and use React Axe Reporter in a Next.js application:

1. **Install dependencies**\
Install `react-axe-reporter` along with `axe-core` to enable accessibility checks and generate data for visual reports dynamically:

    ```bash
    npm install react-axe-reporter axe-core --save
    # or
    yarn add react-axe-reporter axe-core
    ```

2. **Create a client component for accessibility checks**\
Create a client-side component that receives HTML content and runs Axe accessibility validation. For example, `AxeChecker.tsx`:

    ```tsx
    // src/components/AxeChecker.tsx
    'use client';
    import AxeReport from 'react-axe-reporter';
    import 'react-axe-reporter/style.css';
    import axe from 'axe-core';
    import { useEffect, useState } from 'react';

    export default function AxeChecker() {
      const [report, setReport] = useState<axe.AxeResults | null>(null);

      useEffect(() => {
        // Notify the opener window that the AxeChecker is ready to receive HTML
        if (window.opener) {
          window.opener.postMessage('ready-for-html', '*');
        }

        // Listen for HTML content and run Axe checks on it
        const handler = (event: MessageEvent) => {
          if (event.data?.type === 'AXE_HTML') {
            const parser = new DOMParser();
            const doc = parser.parseFromString(event.data.html, 'text/html');
            axe.run(doc, {}, (err, results) => {
              if (err) {
                console.error('axe error:', err);
                return;
              }
              setReport(results);
            });
          }
        };

        window.addEventListener('message', handler);
        return () => window.removeEventListener('message', handler);
      }, []);

      if (!report) return <p>Running accessibility scan...</p>;

      return (
        <>
          <AxeReport
            data={report}
            info1={'Tested on: ' + window.opener.location.href}
            info2={'Date: ' + new Date().toLocaleDateString()}
          />
        </>
      );
    }
    ```

3. **Add the component to a page**\
Render the `AxeChecker` component in a separate page, for example, `axe-report.tsx`:

    ```tsx
    // src/pages/axe-report.tsx
    import Head from "next/head";
    import dynamic from 'next/dynamic';

    const AxeChecker = dynamic(() => import("@/components/AxeChecker"), { ssr: false });

    export default function AxeReport() {
      return (
        <>
          <Head>
            <title>Axe Report</title>
            <meta name="description" content="Axe Report" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <AxeChecker />
        </>
      );
    }
    ```

4. **Trigger the Axe validation from another page**\
Use the following code to open the Axe report page and send the current page's HTML content to it:

    ```tsx
    // src/components/index.tsx
    import Head from "next/head";

    export default function Home() {
      const openAxeReport = () => {
        const html = document.documentElement.outerHTML;
        const win = window.open('/axe-report', '_blank');

        const sendWhenReady = (e: MessageEvent) => {
          if (e.data === 'ready-for-html') {
            win?.postMessage({ type: 'AXE_HTML', html }, '*');
            window.removeEventListener('message', sendWhenReady);
          }
        };
        window.addEventListener('message', sendWhenReady);
      };

      return (
        <>
          <Head>
            {/* ... */}
          </Head>
          <button onClick={openAxeReport}>Run Axe Validation</button>
        </>
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

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- [axe-core](https://github.com/dequelabs/axe-core) for the accessibility testing engine
- [Original axe-html-reporter](https://github.com/lpelypenko/axe-html-reporter) for inspiration 
