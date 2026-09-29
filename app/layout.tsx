import type { Metadata } from 'next';
import './globals.css';
import './fixes.css';
export const metadata: Metadata = { title: 'Sales & Revenue Analysis Dashboard | Business Intelligence Portfolio', description: 'Interactive sales analytics dashboard for revenue, profitability, products, customers, regions and business performance.', openGraph: { title: 'Sales & Revenue Analysis Dashboard', description: 'Interactive BI portfolio dashboard.' } };
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
