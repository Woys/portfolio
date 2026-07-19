import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mikheevs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Daniil Mikheev — Analytics Engineer & Data Engineer Portfolio",
    template: "%s | Daniil Mikheev",
  },
  description:
    "Daniil Mikheev is a Brooklyn-based Analytics Engineer and Senior Business Intelligence Analyst with 3+ years of experience building dbt and Airflow pipelines, dimensional models, data quality systems, and reporting on Snowflake and Redshift.",
  keywords: [
    "Daniil Mikheev",
    "Analytics Engineer",
    "Data Engineer",
    "Business Intelligence Analyst",
    "BI Engineer",
    "dbt",
    "Airflow",
    "Snowflake",
    "Redshift",
    "SQL",
    "Python",
    "data pipelines",
    "dimensional modeling",
    "data quality",
    "New York data engineer",
  ],
  authors: [{ name: "Daniil Mikheev", url: "https://github.com/Woys" }],
  creator: "Daniil Mikheev",
  publisher: "Daniil Mikheev",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "profile",
    url: "/",
    title: "Daniil Mikheev — Analytics Engineer & Data Engineer Portfolio",
    description:
      "Analytics engineering, data pipelines, dimensional modeling, warehouse optimization, and BI systems built with SQL, Python, dbt, Airflow, Snowflake, and Redshift.",
    siteName: "Daniil Mikheev Portfolio",
    locale: "en_US",
    images: [{ url: `${siteUrl}/daniil-mikheev.webp`, width: 960, height: 1440, alt: "Portrait of Daniil Mikheev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniil Mikheev — Analytics Engineer & Data Engineer Portfolio",
    description:
      "3+ years building reliable analytics systems with SQL, Python, dbt, Airflow, Snowflake, and Redshift.",
    images: [`${siteUrl}/daniil-mikheev.webp`],
  },
  category: "technology",
  other: { "codex-preview": "development" },
  icons: { icon: `${siteUrl}/favicon.svg`, shortcut: `${siteUrl}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
