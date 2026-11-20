// Add this object to the PROJECTS array in data.js
// (set "category" to one of the values in PROJECT_FILTERS, e.g. "Power BI")
{
  title: "Telecom Debt Collection Performance Dashboard",
  category: "Power BI",
  featured: true,
  summary: "End-to-end collection dashboard for a telecom client's B2C debt portfolio: from a multi-join SQL Server extract to a star-style Power BI model tracking accounts, payments, contact channels and collector performance.",
  note: "All figures and collector names in these screenshots have been changed to protect client data confidentiality. The layout, visuals and logic are the original work.",
  details: [
    "Wrote the SQL Server extract with CTEs (loans, confirmed payments, customer phones) and 9 INNER/LEFT JOINs across customers, debt types, response statuses, collectors and template fields, using STRING_AGG, CASE and DATEDIFF to shape the data at the source.",
    "Cleaned and standardised data in Power Query: trimmed and normalised mobile numbers to one format, flagged invalid and duplicate numbers, and merged payment data from Excel with the SQL source.",
    "Designed the data model: 14 business tables, 49 relationships and dedicated date dimensions for distribution date and default year.",
    "Built 55 DAX measures: collection rate on amounts, response rate, contact coverage, attempts per customer, channel cost, net profit and ROI per riyal spent.",
    "Created DAX calculated tables that generate ready-to-send contact lists for SMS, IVR and AI-call campaigns, filtering out blank, invalid and duplicated numbers.",
    "Designed the report: KPI cards, an action summary matrix by product phase, a channel cost and ROI matrix, payment breakdown by amount bucket and payment type, status funnels, collector leaderboard and a daily payment trend, all driven by synced slicers.",
    "Gave management a daily view of where collections come from and which channels and portfolio phases are profitable, so effort could be focused on high-return segments."
  ],
  tools: ["Power BI", "SQL Server", "DAX", "Power Query", "Data Modeling", "Excel"],
  images: [
    "images/zain-01-overview.jpg",
    "images/zain-02-kpis-summary.jpg",
    "images/zain-03-channel-cost.jpg",
    "images/zain-04-payments-by-bucket.jpg",
    "images/zain-05-distribution.jpg",
    "images/zain-06-collectors-payday.jpg"
  ],
  links: {}
},
