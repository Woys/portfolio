"use client";

import { useEffect, useMemo, useState } from "react";

const stages = [
  {
    name: "Sources",
    short: "APIs · SaaS · files",
    tool: "REST APIs · Twilio Segment · CSV · SaaS platforms",
    detail: "Collect structured and semi-structured business data from marketing, finance, customer, and operational systems.",
    evidence: "At KOALA, implemented Twilio Segment as a centralized customer-data layer and integrated financial and marketing sources into a governed analytics foundation.",
    outcome: "Unified source context for customer, finance, and marketing analysis.",
    rows: "1,240,000",
  },
  {
    name: "Ingest",
    short: "Load and normalize",
    tool: "Python · Fivetran · Airflow · typed schemas",
    detail: "Land source data predictably with typed schemas, normalized fields, scheduled loads, and analytics-ready storage formats.",
    evidence: "Professional work uses Fivetran and Airflow for repeatable ingestion. The Text Ingest project normalizes 14 public APIs and websites into JSONL, CSV, and Parquet.",
    outcome: "Repeatable ingestion with fewer manual handoffs and consistent schemas.",
    rows: "1,240,000",
  },
  {
    name: "Transform",
    short: "Model business logic",
    tool: "SQL · dbt · dimensional modeling · KPI logic",
    detail: "Create modular transformations, dimensional models, attribution logic, and documented KPI definitions for reusable reporting.",
    evidence: "Built tested dbt models across Snowflake and Redshift and translated ambiguous business questions into measurement logic for paid media, finance, and operations.",
    outcome: "Governed business definitions that analysts and stakeholders can reuse.",
    rows: "1,238,442",
  },
  {
    name: "Validate",
    short: "Test and observe",
    tool: "dbt tests · automated QA · business-rule checks",
    detail: "Catch freshness, uniqueness, relationship, reconciliation, and business-rule failures before data reaches decision makers.",
    evidence: "Automated recurring data-quality checks at Horizon Next, reducing manual QA and saving hours of repetitive validation work each week.",
    outcome: "Earlier failure detection and more trusted client-facing reporting.",
    rows: "1,238,442",
  },
  {
    name: "Warehouse",
    short: "Optimize and govern",
    tool: "Snowflake · Redshift · MySQL · BigQuery",
    detail: "Serve performant, governed datasets designed for reliable downstream analysis, predictable costs, and self-service access.",
    evidence: "Optimized complex warehouse workloads on Snowflake and Redshift, reducing query execution from hours to minutes while supporting enterprise reporting.",
    outcome: "Hours-to-minutes query performance and faster analytical iteration.",
    rows: "1,238,442",
  },
  {
    name: "Activate",
    short: "Decisions and action",
    tool: "Tableau · Sigma · Plotly · stakeholder enablement",
    detail: "Deliver trusted reporting, self-service exploration, executive metrics, and decision-ready views tailored to business users.",
    evidence: "Built reporting foundations for 5+ enterprise clients and more than $100M in annual paid-media spend, spanning Tableau and Sigma Computing.",
    outcome: "$100M+ in annual media decisions supported by governed reporting.",
    rows: "1,238,442",
  },
] as const;

export default function PipelinePlayground() {
  const [runState, setRunState] = useState<"idle" | "running" | "paused" | "complete">("idle");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [speed, setSpeed] = useState<1 | 2>(1);

  useEffect(() => {
    if (runState !== "running") return;

    const timer = window.setTimeout(() => {
      if (activeIndex >= stages.length - 1) {
        setRunState("complete");
        return;
      }
      const next = activeIndex + 1;
      setActiveIndex(next);
      setSelectedIndex(next);
    }, 920 / speed);

    return () => window.clearTimeout(timer);
  }, [activeIndex, runState, speed]);

  const progress = runState === "complete" ? 100 : Math.max(0, ((activeIndex + 1) / stages.length) * 100);
  const selected = stages[selectedIndex];
  const activeView = selectedIndex === 3 ? "quality" : selectedIndex === 5 ? "activation" : "delivery";
  const activity = useMemo(() => {
    if (activeIndex < 0) return "Ready. Press Run pipeline to start the simulation.";
    if (runState === "complete") return "Pipeline completed. All modeled checks passed.";
    if (runState === "paused") return `Paused after ${stages[activeIndex].name.toLowerCase()}.`;
    return `${stages[activeIndex].name}: processing ${stages[activeIndex].rows} simulated records…`;
  }, [activeIndex, runState]);

  function runPipeline() {
    if (runState === "complete" || runState === "idle") {
      setActiveIndex(-1);
      setSelectedIndex(0);
    }
    setRunState("running");
  }

  function resetPipeline() {
    setRunState("idle");
    setActiveIndex(-1);
    setSelectedIndex(2);
  }

  return (
    <div className="pipeline-app">
      <div className="pipeline-appbar">
        <div className="app-title">
          <div><strong>Analytics Delivery Pipeline</strong><small>Interactive architecture demo</small></div>
        </div>
        <div className="app-status"><i className={runState} />{runState === "complete" ? "Run complete" : runState}</div>
      </div>

      <div className="pipeline-tabs" aria-label="Pipeline views">
        <button className={activeView === "delivery" ? "active" : ""} type="button" onClick={() => setSelectedIndex(2)} aria-pressed={activeView === "delivery"}>Delivery pipeline</button>
        <button className={activeView === "quality" ? "active" : ""} type="button" onClick={() => setSelectedIndex(3)} aria-pressed={activeView === "quality"}>Quality controls</button>
        <button className={activeView === "activation" ? "active" : ""} type="button" onClick={() => setSelectedIndex(5)} aria-pressed={activeView === "activation"}>Activation layer</button>
      </div>

      <div className="pipeline-toolbar">
        <div className="toolbar-copy"><strong>decision_ready_reporting_v4</strong><span>Autosave on</span></div>
        <div className="toolbar-actions">
          <button className="speed-button" type="button" onClick={() => setSpeed(speed === 1 ? 2 : 1)} aria-label={`Pipeline speed ${speed} times`}>{speed}× speed</button>
          {runState === "running" ? (
            <button className="secondary-control" type="button" onClick={() => setRunState("paused")}>Pause</button>
          ) : (
            <button className="run-control" type="button" onClick={runPipeline}>{runState === "paused" ? "Resume" : "Run pipeline"}<span aria-hidden="true">▶</span></button>
          )}
          <button className="secondary-control" type="button" onClick={resetPipeline}>Reset</button>
        </div>
      </div>

      <div className="pipeline-workspace">
        <aside className="asset-library" aria-label="Pipeline asset library">
          <p>COMPONENTS</p>
          {stages.map((stage, index) => (
            <button type="button" key={stage.name} className={selectedIndex === index ? "selected" : ""} onClick={() => setSelectedIndex(index)}>
              <span>{String(index + 1).padStart(2, "0")}</span>{stage.name}
            </button>
          ))}
          <div className="library-note"><span>SQL · Python · dbt · Airflow · Fivetran · Snowflake · Redshift · Tableau · Sigma</span></div>
        </aside>

        <div className="pipeline-canvas">
          <div className="canvas-meta"><span>Canvas / production pattern</span><span>{Math.round(progress)}% complete</span></div>
          <div className="pipeline-track" role="group" aria-label="Interactive data pipeline stages">
            {stages.map((stage, index) => {
              const complete = runState === "complete" || index < activeIndex;
              const active = index === activeIndex && runState !== "complete";
              const state = complete ? "complete" : active ? "active" : "waiting";
              return (
                <div className="pipeline-stage-wrap" key={stage.name}>
                  <button
                    className={`pipeline-stage ${state} ${selectedIndex === index ? "selected" : ""}`}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`${stage.name}: ${stage.short}. ${state}`}
                  >
                    <span className="node-number">{String(index + 1).padStart(2, "0")}</span>
                    <strong>{stage.name}</strong>
                    <small>{stage.short}</small>
                    <em>{complete ? "Completed" : active ? "Running" : "Queued"}</em>
                    <i className="node-port left" aria-hidden="true" />
                    <i className="node-port right" aria-hidden="true" />
                  </button>
                  {index < stages.length - 1 && <span className={`stage-connector ${complete ? "complete" : ""}`} aria-hidden="true"><i /></span>}
                </div>
              );
            })}
          </div>
          <div className="canvas-bottom">
            <div className="selected-detail">
              <span>SELECTED NODE · {String(selectedIndex + 1).padStart(2, "0")}</span>
              <strong>{selected.name}</strong>
              <p>{selected.detail}</p>
              <div className="resume-evidence"><p>{selected.evidence}</p></div>
              <div className="node-outcome"><b>OUTCOME</b><p>{selected.outcome}</p></div>
              <small>{selected.tool}</small>
            </div>
            <div className="run-monitor" aria-live="polite">
              <span>RUN MONITOR</span>
              <div className="progress-track"><i style={{ width: `${progress}%` }} /></div>
              <p>{activity}</p>
              <small>Demo values are simulated using the same production technologies shown throughout this portfolio.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
