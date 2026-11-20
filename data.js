/* ==========================================================================
   كل محتوى البورتفوليو هنا.
   عدّل النصوص بين علامات التنصيص " " بس، وما تمسحش الفواصل , ولا الأقواس.
   الصور: حطها في فولدر images واكتب اسمها هنا، مثلاً "images/collection-1.png"
   ========================================================================== */

const PROFILE = {
  name: "Kirillos Said Ghabriel",
  role: "Power BI Developer & Data Analyst",
  tagline: "End-to-end data solutions. Data storyteller.",
  summary:
    "I turn raw operational data into dashboards people use to make decisions — " +
    "advanced SQL, ETL/ELT pipelines, data modeling and Power BI with advanced DAX, " +
    "plus Python automation that removes manual daily work.",
  location: "Cairo, Egypt",
  openTo: "Open to Power BI Developer roles",
  email: "kirillossaid@gmail.com",
  phone: "+201207694672",
  linkedin: "https://www.linkedin.com/in/kirillossaid/",
  github: "",                       // لو عندك GitHub حط اللينك هنا
  resume: "Kirillos_Said_Resume.pdf",
  photo: ""                         // صورتك الشخصية، مثلاً "images/me.jpg" (اختياري)
};

/* أرقام سريعة في أول الصفحة — خليها حقيقية دايماً */
const HIGHLIGHTS = [
  { value: 8, suffix: "+", label: "Power BI dashboards delivered" },
  { value: 8, suffix: "",  label: "Certifications" },
  { value: 2, suffix: "",  label: "Years building BI solutions" }
];

/* ==========================================================================
   المشاريع — لإضافة مشروع جديد: انسخ مشروع كامل من { لحد }, وعدّل قيمه.
   category: لازم تكون واحدة من القيم اللي في PROJECT_FILTERS
   images:   أول صورة هي اللي بتظهر على الكارت، والباقي في صفحة المشروع
   featured: true يخلي المشروع ياخد كارت كبير
   ========================================================================== */

const PROJECT_FILTERS = ["All", "Power BI", "Python", "Machine Learning"];

const PROJECTS = [
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
      "images/zain-07-data-model.png",
      "images/zain-02-kpis-summary.jpg",
      "images/zain-03-channel-cost.jpg",
      "images/zain-04-payments-by-bucket.jpg",
      "images/zain-05-distribution.jpg",
      "images/zain-06-collectors-payday.jpg"
    ],
    links: {}
  },
  {
    title: "Telecom Billing Scraping Bot",
    category: "Python",
    featured: false,
    summary:
      "A desktop tool that checks each customer account against the operator's online payment page, " +
      "reads the live balance and compares it with the balance on file, so the collections team " +
      "knows who has already paid and stops spending effort on them.",
    note:
      "The source code is not published because the tool was built for a client's internal use.",
    details: [
      "Takes an Excel list of accounts with their verified outstanding balance and reads the current amount due for each one from the operator's payment page",
      "Classifies every account automatically: full payment, partial payment, no payment, or balance on the site higher than expected. Accounts that cannot be read are flagged for review",
      "Built for long unattended runs: automatic retries, paced requests, a live progress bar with time remaining, running counters, searchable result tables and an activity log",
      "Exports the results to Excel with a separate sheet for each status, ready to load back into the collection database",
      "Gives the team an up-to-date list of customers who have paid, so they can be taken out of call, SMS and IVR campaigns and contact budget goes to customers who still owe",
      "Planned next step: connect it to an AI call agent so the agent can read the customer's current invoice during the call, and stop contacting customers who paid in full to cut communication costs"
    ],
    tools: ["Python", "Selenium", "pandas", "Tkinter", "Excel"],
    images: [],
    links: { live: "", github: "", video: "" }
  },

  {
    title: "Nitrogen Estimation in Plant Leaves",
    category: "Machine Learning",
    featured: false,
    summary:
      "Built with the Agricultural Research Center: detects nitrogen deficiency and toxicity " +
      "from leaf color, deployed as a web app farmers use from their phones.",
    details: [
      "Image processing pipeline on leaf color",
      "Responsive web app for smartphone use in the field"
    ],
    tools: ["Python", "Image processing", "Web app"],
    images: [],
    links: { live: "", github: "", video: "" }
  },
  {
    title: "Gender Identifier from Names",
    category: "Python",
    featured: false,
    summary:
      "Turns a column of customer names into a gender field. It handles Arabic and English spellings " +
      "by combining a names database, fuzzy matching, translation and rule-based fallbacks, " +
      "and processes full customer lists in one run.",
    note:
      "The source code is not published because the tool was built for a client's internal use.",
    details: [
      "Extracts the first name from the full name, ignoring titles such as Mr, Dr, Eng and their Arabic equivalents, plus digits and punctuation",
      "Detects whether each name is written in Arabic or English, then looks it up in an Arabic names database expanded with common spelling variants (hamza forms, taa marbuta, alef maqsura, diacritics)",
      "Translates English names to Arabic and keeps a local translation cache, so repeated names are not translated twice",
      "Falls back to fuzzy matching, narrowed by first letter to stay fast on large lists, and then to name-ending rules with lists of known exceptions",
      "Labels each name as male, female, unisex or unknown, so unmatched names are clearly separated for review instead of guessed",
      "Built for large lists: autosaves every 50 rows and resumes from the last saved result if interrupted, then exports an Excel file with a summary of success rate, gender split and name languages",
      "Gives the team a usable gender field so messages and call scripts can be worded correctly for each customer"
    ],
    tools: ["Python", "pandas", "NLP", "Fuzzy matching", "Excel"],
    images: [],
    links: { live: "", github: "", video: "" }
  }
];

/* الخبرة — الأحدث الأول */
const EXPERIENCE = [
  {
    role: "Data Analyst",
    company: "Maharah Co. for Debt Collection",
    period: "Feb 2025 – Present",
    place: "Maadi, Cairo",
    points: [
      "Built 5+ Power BI dashboards with advanced DAX tracking recovery rates and channel effectiveness.",
      "Wrote advanced SQL (joins, window functions, CTEs) against the collection data warehouse.",
      "Built ETL/ELT pipelines moving billing and payment data into reporting-ready tables.",
      "Defined KPIs — recovery rate, channel effectiveness, portfolio profitability — used in strategy decisions.",
      "Supervised an AI agent for electronic collection outreach, reviewing outputs and deciding actions on flagged accounts.",
      "Automated payment-status tracking with a Python bot, saving several hours of manual work per day."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Digital Egypt Pioneers (DEPI)",
    period: "Nov 2024 – May 2025",
    place: "Cairo, Egypt",
    points: [
      "Delivered 3+ interactive Power BI dashboards and published them through Power BI Service.",
      "Modeled and optimized datasets for reusable analysis across reporting cycles.",
      "Built companion Excel dashboards for teams without Power BI access."
    ]
  }
];

const SKILLS = [
  { group: "BI & Visualization", items: ["Power BI", "DAX", "Power Query / M", "Power BI Service", "Tableau", "Excel dashboards"] },
  { group: "Data Engineering",   items: ["Advanced SQL", "Data warehousing", "ETL / ELT pipelines", "Data modeling"] },
  { group: "Programming",        items: ["Python", "Web scraping", "Automation", "SQL", "C"] },
  { group: "AI & Analytics",     items: ["AI for data analysis", "Machine learning", "AI agent supervision", "Prompt engineering"] },
  { group: "Business",           items: ["KPI definition", "Data cleaning", "Report automation"] }
];

const CERTIFICATIONS = [
  { name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)", issuer: "Microsoft", date: "Feb 2025", main: true },
  { name: "Data Analytics, Microsoft Power BI Engineer", issuer: "Digital Egypt Pioneers", date: "May 2025" },
  { name: "Data Analytics Certificate", issuer: "IBM", date: "May 2025" },
  { name: "Data Usability for Organizations", issuer: "IBM", date: "May 2025" },
  { name: "Data Preparation for Analysis", issuer: "IBM", date: "May 2025" },
  { name: "Business English & Team Leadership", issuer: "Digital Egypt Pioneers", date: "May 2025" },
  { name: "AI Augmented Professional Development Skills", issuer: "ALX", date: "Jul 2024" },
  { name: "HCIA-AI", issuer: "Huawei", date: "Sep 2021" }
];

const EDUCATION = {
  degree: "B.Sc. Computer & AI Engineering",
  school: "Shorouk Academy",
  period: "2018 – 2024"
};