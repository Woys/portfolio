import Link from "next/link";

type RoleProfileProps = {
  role: "Analytics Engineer" | "Data Engineer";
  intro: string;
  strengths: { title: string; body: string }[];
  fit: string;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mikheevs.com";

export default function RoleProfile({ role, intro, strengths, fit }: RoleProfileProps) {
  const slug = role.toLowerCase().replaceAll(" ", "-");
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `Daniil Mikheev — ${role}`,
    url: `${siteUrl}/${slug}/`,
    mainEntity: {
      "@type": "Person",
      "@id": `${siteUrl}/#daniil-mikheev`,
      name: "Daniil Mikheev",
      url: siteUrl,
      jobTitle: ["Senior Business Intelligence Analyst", "Analytics Engineer"],
      hasOccupation: {
        "@type": "Occupation",
        name: role,
        occupationLocation: { "@type": "City", name: "New York" },
        skills: "SQL, Python, dbt, Apache Airflow, Snowflake, Redshift, dimensional modeling, ELT, data quality, business intelligence",
      },
      sameAs: ["https://github.com/Woys", "https://www.linkedin.com/in/daniil-mikheev/"],
    },
  };

  return (
    <main className="role-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="site-header">
        <Link className="brand" href="/"><div>Daniil Mikheev<small>Analytics systems professional</small></div></Link>
        <nav aria-label="Profile navigation"><Link href="/">Portfolio</Link><Link href="/analytics-engineer/">Analytics Engineer</Link><Link href="/data-engineer/">Data Engineer</Link></nav>
        <a className="header-cta" href="mailto:daniil@mikheevs.com">Start a conversation</a>
      </header>

      <article className="role-content">
        <p className="overline"><span />{role} · Brooklyn and New York City</p>
        <h1>Daniil Mikheev — <em>{role}</em></h1>
        <p className="role-lead">{intro}</p>

        <section aria-labelledby="evidence-title">
          <p className="section-label">HIRING EVIDENCE</p>
          <h2 id="evidence-title">Production experience aligned with {role.toLowerCase()} work.</h2>
          <div className="role-grid">
            {strengths.map((strength) => <article key={strength.title}><h3>{strength.title}</h3><p>{strength.body}</p></article>)}
          </div>
        </section>

        <section className="role-summary" aria-labelledby="fit-title">
          <div><p className="section-label">ROLE FIT</p><h2 id="fit-title">Why Daniil is a strong {role} candidate</h2></div>
          <div>
            <p>{fit}</p>
            <p><strong>Core stack:</strong> SQL, Python, dbt, Apache Airflow, Snowflake, Amazon Redshift, BigQuery, Fivetran, AWS S3, Tableau, and Sigma Computing.</p>
            <p><strong>Location:</strong> Brooklyn, New York. Open to the right analytics engineering and data engineering opportunity.</p>
          </div>
        </section>

        <div className="role-actions"><a className="primary-button" href="mailto:daniil@mikheevs.com">Contact Daniil</a><Link className="secondary-link" href="/">View full portfolio</Link><a className="secondary-link" href="https://github.com/Woys">Review GitHub</a></div>
      </article>
      <footer className="site-footer"><span>© 2026 Daniil Mikheev · Brooklyn, NY</span><Link href="/">Full portfolio</Link></footer>
    </main>
  );
}
