import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mikheevs.com";
const googleTagManagerId = "GTM-W239WBSM";
const googleAnalyticsId = "G-MYQXYQNKKR";

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
  icons: { icon: `${siteUrl}/favicon.png`, shortcut: `${siteUrl}/favicon.png` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="text/plain" href={`${siteUrl}/llms.txt`} title="AI-readable candidate profile" />
        <link rel="alternate" type="application/json" href={`${siteUrl}/profile.json`} title="Structured candidate profile" />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${googleTagManagerId}');`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`}
        </Script>
      </body>
    </html>
  );
}
