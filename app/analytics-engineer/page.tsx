import type { Metadata } from "next";
import RoleProfile from "../role-profile";

export const metadata: Metadata = {
  title: "Analytics Engineer in New York",
  description: "Daniil Mikheev is a Brooklyn-based Analytics Engineer experienced in SQL, Python, dbt, Airflow, Snowflake, Redshift, dimensional modeling, data quality, and self-service BI.",
  alternates: { canonical: "/analytics-engineer/" },
  openGraph: {
    title: "Daniil Mikheev — Analytics Engineer in New York",
    description: "Production analytics engineering experience across governed ELT, dimensional modeling, warehouse optimization, data quality, and BI delivery.",
    url: "/analytics-engineer/",
  },
};

export default function AnalyticsEngineerPage() {
  return <RoleProfile
    role="Analytics Engineer"
    intro="Daniil Mikheev is an analytics engineering professional with more than three years of experience turning fragmented business data into governed transformations, trusted dimensional models, quality-controlled datasets, and decision-ready reporting."
    strengths={[
      { title: "Analytics modeling", body: "Built tested and documented dimensional models with dbt across Snowflake, Redshift, and BigQuery, creating reusable foundations for finance, marketing, and operational reporting." },
      { title: "Reliable data delivery", body: "Developed Airflow orchestration, Fivetran ELT workflows, automated data-quality checks, and source-to-report pipelines that reduce recurring manual work." },
      { title: "Business impact", body: "Supports reporting for more than $100 million in annual paid-media spend across 5+ enterprise clients and has improved warehouse workloads from hours to minutes." },
    ]}
    fit="Daniil combines the software-minded habits of analytics engineering—modular SQL, testing, documentation, orchestration, and version-controlled models—with the ability to define KPIs and translate stakeholder questions into durable data products."
  />;
}
