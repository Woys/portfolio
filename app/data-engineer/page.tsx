import type { Metadata } from "next";
import RoleProfile from "../role-profile";

export const metadata: Metadata = {
  title: "Data Engineer in New York",
  description: "Daniil Mikheev is a Brooklyn-based Data Engineer focused on analytics platforms, using Python, SQL, Airflow, dbt, Snowflake, Redshift, APIs, AWS S3, and Parquet.",
  alternates: { canonical: "/data-engineer/" },
  openGraph: {
    title: "Daniil Mikheev — Data Engineer in New York",
    description: "Data engineering experience across ingestion, orchestration, warehouse transformations, performance optimization, quality controls, and analytics delivery.",
    url: "/data-engineer/",
  },
};

export default function DataEngineerPage() {
  return <RoleProfile
    role="Data Engineer"
    intro="Daniil Mikheev is a data engineering professional focused on analytics platforms. He builds source ingestion, scheduled pipelines, warehouse transformations, dimensional models, and quality controls with Python, SQL, Airflow, dbt, and cloud data warehouses."
    strengths={[
      { title: "Pipeline engineering", body: "Built API ingestion and Airflow batch pipelines, including reusable jobs spanning 22 regions and a production pipeline that has continuously delivered daily Spotify data for years." },
      { title: "Warehouse systems", body: "Works with Snowflake, Amazon Redshift, BigQuery, dbt, Fivetran, AWS S3, and Parquet to move raw data into tested, analytics-ready structures." },
      { title: "Performance and reliability", body: "Optimized complex warehouse queries from hours to minutes and implemented automated validation to catch data issues before they reach business reporting." },
    ]}
    fit="Daniil is best suited to data engineering roles centered on analytical data platforms: ingestion, batch orchestration, ELT architecture, warehouse modeling, observability, performance, and dependable downstream datasets."
  />;
}
