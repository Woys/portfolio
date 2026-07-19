import PipelinePlayground from "./pipeline-playground";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mikheevs.com";
const basePath = process.env.BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH || "";

const projects = [
  {
    title: "Text Ingest",
    type: "Multi-source ingestion toolkit",
    description: "Normalizes public data from 14 APIs and websites into one typed schema and exports analytics-ready JSONL, CSV, or Parquet.",
    stack: "Python · Pydantic · Parquet · APIs",
    href: "https://github.com/Woys/text-ingest",
    visual: "ingest",
    metric: "14 sources → 3 formats",
  },
  {
    title: "Spotify Sentiment",
    type: "High-performance NLP pipeline",
    description: "Turns millions of podcast records into weighted sentiment and market-intelligence signals through a containerized Python and C++ engine.",
    stack: "Python · C++ · NLP · Plotly",
    href: "https://github.com/Woys/Spotify-Sentiment-Project",
    visual: "sentiment",
    metric: "Millions of records",
  },
  {
    title: "NYC Evictions",
    type: "Dimensional analytics warehouse",
    description: "Models NYC Open Data with dbt in BigQuery and delivers clear neighborhood and time-based analysis through Tableau.",
    stack: "BigQuery · dbt · SQL · Tableau",
    href: "https://github.com/Woys/NYC_Evictions_Warehouse",
    visual: "warehouse",
    metric: "Dimensional model",
  },
  {
    title: "Airflow Batch",
    type: "Production-minded orchestration",
    description: "Runs a production pipeline that has continuously published daily Spotify podcast data to Kaggle for years, alongside reusable jobs across 22 regions and Amazon S3 delivery.",
    stack: "Airflow · AWS S3 · Docker · Pandas",
    href: "https://github.com/Woys/Airflow-Batch",
    visual: "airflow",
    metric: "22 regions · daily",
  },
] as const;

const faqs = [
  ["Which roles is Daniil best suited for?", "Analytics Engineer, Data Engineer focused on analytics platforms, BI Engineer, and Senior Business Intelligence Analyst roles."],
  ["What production systems has he worked with?", "Daniil has built and optimized dbt and Airflow workflows on Snowflake and Redshift, implemented governed ELT with Fivetran, and delivered Tableau and Sigma reporting."],
  ["What measurable business scope has he supported?", "His work has supported more than $100 million in annual paid-media spend across 5+ enterprise clients, with query performance improved from hours to minutes."],
  ["What makes his profile engineering-oriented?", "He works across the full analytics lifecycle: source ingestion, transformation, dimensional modeling, orchestration, quality controls, warehouse performance, and data activation."],
] as const;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#daniil-mikheev`,
  name: "Daniil Mikheev",
  url: siteUrl,
  image: `${siteUrl}/daniil-mikheev.webp`,
  email: "mailto:daniil@mikheevs.com",
  telephone: "REMOVED",
  jobTitle: "Senior Business Intelligence Analyst",
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Senior Business Intelligence Analyst",
      occupationLocation: { "@type": "City", name: "New York" },
      skills: "SQL, Python, dbt, Apache Airflow, Snowflake, Redshift, Tableau, data modeling, data quality",
    },
    {
      "@type": "Occupation",
      name: "Analytics Engineer",
      occupationLocation: { "@type": "City", name: "New York" },
      skills: "SQL, Python, dbt, ELT, dimensional modeling, warehouse optimization, business intelligence",
    },
  ],
  description: "Analytics Engineer and Senior Business Intelligence Analyst with 3+ years of production experience in data pipelines, dimensional modeling, warehouse optimization, data quality, and business intelligence.",
  address: { "@type": "PostalAddress", addressLocality: "Brooklyn", addressRegion: "NY", addressCountry: "US" },
  sameAs: ["https://github.com/Woys", "https://www.linkedin.com/in/daniil-mikheev/"],
  worksFor: { "@type": "Organization", name: "Horizon Next" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "CUNY Baruch College" },
  knowsAbout: ["Analytics Engineering", "Data Engineering", "Business Intelligence", "SQL", "Python", "dbt", "Apache Airflow", "Snowflake", "Amazon Redshift", "Dimensional Data Modeling", "ELT Pipelines", "Data Quality", "Tableau", "Sigma Computing"],
};

const projectSchemas = projects.map((project) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: project.title,
  description: project.description,
  codeRepository: project.href,
  author: { "@id": `${siteUrl}/#daniil-mikheev` },
  programmingLanguage: project.stack.split(" · "),
  keywords: `${project.type}, ${project.stack}`,
}));

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profile`,
  url: siteUrl,
  name: "Daniil Mikheev — Analytics Engineer and Data Engineer Portfolio",
  description: "Evidence-led professional portfolio for analytics engineering, data engineering, and business intelligence hiring teams.",
  dateModified: "2026-07-18",
  mainEntity: { "@id": `${siteUrl}/#daniil-mikheev` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

function ProjectVisualization({ type }: { type: (typeof projects)[number]["visual"] }) {
  if (type === "ingest") return (
    <svg viewBox="0 0 520 150" role="img" aria-label="Fourteen source streams normalized into one schema and delivered to JSONL, CSV, and Parquet outputs">
      <g className="viz-grid"><path d="M0 30h520M0 75h520M0 120h520" /></g>
      <g className="viz-sources">{[18,38,58,78,98,118,138].map((y,i)=><circle key={y} cx={22+(i%2)*24} cy={y} r="4" />)}</g>
      <g className="viz-flow">{[18,38,58,78,98,118,138].map((y)=><path key={y} d={`M50 ${y} C145 ${y}, 120 75, 205 75`} />)}</g>
      <rect className="viz-node" x="205" y="47" width="112" height="56" rx="8" /><text x="261" y="70">NORMALIZE</text><text className="sub" x="261" y="87">typed schema</text>
      <g className="viz-flow"><path d="M317 75h74M391 75V29M391 75v46" /></g>
      <g className="viz-output"><rect x="391" y="13" width="96" height="28" rx="5"/><rect x="391" y="61" width="96" height="28" rx="5"/><rect x="391" y="109" width="96" height="28" rx="5"/></g>
      <g className="viz-label"><text x="439" y="31">JSONL</text><text x="439" y="79">CSV</text><text x="439" y="127">PARQUET</text></g>
    </svg>
  );
  if (type === "sentiment") return (
    <svg viewBox="0 0 520 150" role="img" aria-label="Podcast records moving through an NLP sentiment signal with positive, neutral, and negative output bands">
      <g className="viz-grid"><path d="M0 30h520M0 75h520M0 120h520" /></g>
      <path className="viz-wave" d="M8 82l24-8 20 12 28-45 24 77 30-54 27 17 25-30 27 60 28-74 27 49 23-12 25 22 25-58 27 76 27-55 26 22 24-10" />
      <g className="sentiment-bars"><rect x="389" y="18" width="105" height="24" rx="4"/><rect x="389" y="61" width="72" height="24" rx="4"/><rect x="389" y="104" width="45" height="24" rx="4"/></g>
      <g className="viz-label left"><text x="397" y="35">POSITIVE</text><text x="397" y="78">NEUTRAL</text><text x="397" y="121">NEGATIVE</text></g>
    </svg>
  );
  if (type === "warehouse") return (
    <svg viewBox="0 0 520 150" role="img" aria-label="Dimensional warehouse star schema connected to an analytical bar chart">
      <g className="viz-grid"><path d="M0 30h520M0 75h520M0 120h520" /></g>
      <g className="viz-flow"><path d="M64 28l112 47M64 122l112-47M176 75h94M270 75l80-42M270 75l80 42" /></g>
      <g className="schema-dims"><rect x="8" y="12" width="92" height="32" rx="6"/><rect x="8" y="106" width="92" height="32" rx="6"/></g>
      <rect className="viz-node" x="176" y="48" width="94" height="54" rx="8" />
      <g className="viz-label"><text x="54" y="32">DIM_DATE</text><text x="54" y="126">DIM_GEO</text><text x="223" y="70">FACT</text><text className="sub" x="223" y="86">EVICTIONS</text></g>
      <g className="warehouse-bars">{[44,70,53,98,78].map((h,i)=><rect key={i} x={344+i*30} y={132-h} width="17" height={h} rx="2" />)}</g>
    </svg>
  );
  return (
    <svg viewBox="0 0 520 150" role="img" aria-label="Airflow directed acyclic graph scheduling regional data jobs into Amazon S3">
      <g className="viz-grid"><path d="M0 30h520M0 75h520M0 120h520" /></g>
      <g className="viz-flow"><path d="M62 75h68M190 75h68M318 75h68M190 75c26 0 30-48 68-48M190 75c26 0 30 48 68 48M318 27c34 0 30 48 68 48M318 123c34 0 30-48 68-48" /></g>
      <g className="dag-nodes"><circle cx="40" cy="75" r="22"/><circle cx="160" cy="75" r="30"/><circle cx="288" cy="27" r="25"/><circle cx="288" cy="75" r="25"/><circle cx="288" cy="123" r="25"/><circle cx="416" cy="75" r="30"/></g>
      <g className="viz-label"><text x="40" y="79">API</text><text x="160" y="79">DAG</text><text x="288" y="31">US</text><text x="288" y="79">EU</text><text x="288" y="127">APAC</text><text x="416" y="79">S3</text></g>
      <text className="region-count" x="472" y="79">×22</text>
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, profilePageSchema, faqSchema, ...projectSchemas]) }} />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Daniil Mikheev home"><div>Daniil Mikheev<small>Analytics systems professional</small></div></a>
        <nav aria-label="Main navigation"><a href="#pipeline">Pipeline</a><a href="#proof">Expertise</a><a href="#experience">Experience</a><a href="#work">Projects</a></nav>
        <a className="header-cta" href="mailto:daniil@mikheevs.com">Start a conversation</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="overline"><span />Analytics Engineer · Data Engineer · BI Engineer</p>
          <h1>I build the data systems behind <em>confident decisions.</em></h1>
          <p className="hero-lead">I’m Daniil Mikheev, a Brooklyn-based analytics professional with 3+ years of experience turning fragmented business data into governed pipelines, trusted models, and decision-ready reporting.</p>
          <div className="hero-actions"><a className="primary-button" href="#pipeline">Explore the pipeline <span>↓</span></a><a className="secondary-link" href="https://github.com/Woys" target="_blank" rel="noreferrer">View GitHub <span className="link-arrow" aria-hidden="true">↗</span></a><a className="secondary-link" href="https://www.linkedin.com/in/daniil-mikheev/" target="_blank" rel="noreferrer">LinkedIn <span className="link-arrow" aria-hidden="true">↗</span></a><a className="secondary-link" href="mailto:daniil@mikheevs.com">daniil@mikheevs.com <span className="link-arrow" aria-hidden="true">↗</span></a></div>
          <div className="trust-line"><span>PRODUCTION STACK</span><p>SQL · Python · dbt · Airflow · Snowflake · Redshift · Tableau · Sigma</p></div>
        </div>
        <aside className="profile-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${basePath}/daniil-mikheev.webp`} alt="Daniil Mikheev, analytics engineering professional based in Brooklyn, New York" width="960" height="960" fetchPriority="high" decoding="async" />
          <div className="profile-card-copy"><span>AVAILABLE FOR THE RIGHT OPPORTUNITY</span><strong>Daniil Mikheev</strong><p>Senior Business Intelligence Analyst<br />Analytics Engineering focus</p><div><i />Brooklyn, New York</div></div>
        </aside>
      </section>

      <section className="proof-band" aria-label="Selected career evidence">
        <article><strong>$100M+</strong><span>annual paid-media spend supported</span></article>
        <article><strong>5+</strong><span>enterprise client data foundations</span></article>
        <article><strong>Hours → minutes</strong><span>warehouse query optimization</span></article>
        <article><strong>3+ years</strong><span>analytics and data experience</span></article>
      </section>

      <section className="pipeline-section" id="pipeline">
        <div className="section-intro centered"><p className="section-label">INTERACTIVE SYSTEM DESIGN</p><h2>See how I build a reliable<br /><em>data delivery pipeline.</em></h2><p>Run the simulation, inspect each node, and follow data from raw source to stakeholder decision.</p></div>
        <PipelinePlayground />
      </section>

      <section className="expertise-section" id="proof">
        <div className="section-intro"><p className="section-label">PROFESSIONAL PROFILE</p><h2>Engineering rigor.<br /><em>Business fluency.</em></h2></div>
        <div className="expertise-grid">
          <article><span>01</span><h3>Build dependable foundations</h3><p>Design governed ingestion, modular dbt transformations, dimensional models, and orchestration that make business reporting repeatable.</p><strong>ELT · MODELING · ORCHESTRATION</strong></article>
          <article><span>02</span><h3>Improve warehouse performance</h3><p>Diagnose complex SQL workloads, optimize Snowflake and Redshift patterns, and reduce analysis bottlenecks from hours to minutes.</p><strong>SQL · SNOWFLAKE · REDSHIFT</strong></article>
          <article><span>03</span><h3>Deliver trusted decisions</h3><p>Translate ambiguous stakeholder needs into KPI definitions, quality checks, self-service datasets, and clear executive reporting.</p><strong>QUALITY · TABLEAU · SIGMA</strong></article>
        </div>
        <div className="role-search-links" aria-label="Role-specific professional profiles">
          <span>HIRING PROFILES</span>
          <Link href="/analytics-engineer/">Analytics Engineer profile →</Link>
          <Link href="/data-engineer/">Data Engineer profile →</Link>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-intro"><p className="section-label">CAREER TRAJECTORY</p><h2>Production experience,<br /><em>clearly documented.</em></h2></div>
        <div className="experience-list">
          <article><time>2024—PRESENT</time><div><span>HORIZON NEXT</span><h3>Senior Business Intelligence Analyst</h3><p>Builds data foundations, workflow automation, measurement logic, and client reporting supporting more than $100M in annual paid-media spend.</p></div><b>New York, NY</b></article>
          <article><time>2023—2024</time><div><span>KOALA</span><h3>Analytics Engineer</h3><p>Rebuilt financial and marketing data infrastructure with Snowflake, dbt, Fivetran, Segment, and governed self-service BI.</p></div><b>New York, NY</b></article>
          <article><time>2022</time><div><span>KOALA</span><h3>Data Analyst Intern</h3><p>Delivered Python behavioral analysis, forecasting, SQL transformation, and weekly management reporting.</p></div><b>New York, NY</b></article>
          <article><time>2018—2022</time><div><span>CUNY BARUCH COLLEGE</span><h3>Bachelor of Arts in Statistics</h3><p>Statistical foundations for analytical reasoning, experimentation, forecasting, and evidence-based communication.</p></div><b>New York, NY</b></article>
        </div>
      </section>

      <section className="projects-section" id="work">
        <div className="section-intro project-intro"><div><p className="section-label">SELECTED ENGINEERING WORK</p><h2>Proof in the<br /><em>repository.</em></h2></div><p>Open-source systems that demonstrate ingestion, orchestration, warehouse modeling, and analytical delivery.</p></div>
        <div className="project-grid">
          {[projects[3], ...projects.slice(0, 3)].map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-meta"><span>0{index + 1}</span><span>{project.type}</span><b>↗</b></div>
              <h3>{project.title}</h3><p>{project.description}</p>
              <div className="project-chart"><ProjectVisualization type={project.visual} /><span>{project.metric}</span></div>
              <strong>{project.stack}</strong>
              <div className="project-links"><a href={project.href} target="_blank" rel="noreferrer">View repository ↗</a>{project.title === "Airflow Batch" && <a href="https://www.kaggle.com/datasets/daniilmiheev/top-spotify-podcasts-daily-updated/data" target="_blank" rel="noreferrer">Years of continuous Kaggle delivery ↗</a>}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" aria-labelledby="faq-title"><div><p className="section-label">HIRING TEAM FAQ</p><h2 id="faq-title">The short version.</h2><p>Clear context for recruiters, hiring managers, and AI-assisted candidate research.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="contact-section"><p className="section-label">LET’S BUILD RELIABLE DATA</p><h2>Looking for an analytics engineer<br />who can connect <em>systems to decisions?</em></h2><div><a className="primary-button" href="mailto:daniil@mikheevs.com">Email Daniil <span>↗</span></a><a href="https://www.linkedin.com/in/daniil-mikheev/" target="_blank" rel="noreferrer">LinkedIn <span className="link-arrow" aria-hidden="true">↗</span></a><a href="tel:REMOVED">REMOVED</a></div></section>
      <footer className="site-footer"><span>© 2026 Daniil Mikheev · Brooklyn, NY</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
