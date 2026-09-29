# Sales & Revenue Analysis Dashboard

## Overview

A recruiter-facing Business Intelligence portfolio project that turns sales transactions into interactive KPIs, trends, rankings, filters, import validation, and source-data exploration.

## Live Demo

Deployment-ready; no live URL has been created yet.

## Features

- Deterministic demo data: 1,200 realistic transactions spanning 24 months
- Revenue, gross profit, margin, order, unit and AOV KPIs
- Global region, category and text filters with reset behavior
- Responsive Recharts trend and category performance views
- Product leaderboard, executive signal, empty state, and mobile navigation
- CSV/XLS/XLSX import with local parsing, inferred headers and row validation
- Data Explorer search and export of filtered rows as CSV
- About page documenting analytical and technical capabilities

## Technology Stack

Next.js App Router, React, TypeScript, Recharts, Papa Parse, SheetJS, Zod, date-fns and Lucide.

## Supported Data Sources

CSV, XLS, XLSX. The importer recognizes common aliases for `Date`, `Order ID`, `Region`, `Category`, `Product`, `Customer`, `Quantity`, `Revenue`, `Unit Price`, `Cost`, and `Profit`.

## Getting Started

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run lint
npm run build
```

## Environment Variables

No variables are required for demo mode. A future server-side data access layer may consume `DATABASE_URL`; never expose database credentials to client code.

## Author

Yashwanth Raghav
