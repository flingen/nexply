// Site copy. Edit text here.

export const contact = {
  email: "hello@nexply.xyz",
  phoneDisplay: "+234 810 890 6104",
  phoneTel: "+2348108906104",
  whatsappNumber: "2348108906104",
  address: "11 LFS Maben Rd, Chevron Drive, Lekki, Lagos",
  addressLines: ["11 LFS Maben Rd", "Chevron Drive, Lekki", "Lagos, Nigeria"],
  social: {
    twitter: "https://twitter.com/nexply_xyz",
    linkedin: "https://linkedin.com/company/nexply_xyz",
  },
};

export const site = {
  name: "Nexply",
  tagline: "Compliance · Risk · Legal",
  url: "https://nexply.xyz",
  lawFirm: "TNL Legals",
};

export const consultHref = "/free-consultation";

export const nav = {
  links: [
    { label: "Compliance", href: "/compliance" },
    { label: "Risk", href: "/risk" },
    { label: "Legal", href: "/legal" },
    { label: "Who we act for", href: "/who-we-act-for" },
    { label: "Markets", href: "/markets" },
    { label: "Why Nexply", href: "/why-nexply" },
  ],
  cta: { label: "Free consultation", href: consultHref },
};

export const footer = {
  line: "One firm for compliance, risk and legal. Africa, the United Kingdom, the United States and Canada.",
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
  ],
  whatsappLabel: "Message us on WhatsApp",
};

export const seo = {
  home: {
    title: "Nexply | Compliance, risk and legal for businesses built to last",
    description:
      "One firm for compliance, risk and legal. AML/CFT, transaction monitoring, fraud desk, cybersecurity, PCI DSS, incorporation and licensing for companies in every sector, with a focus on fintechs, payment companies and digital businesses.",
    ogTitle: "Compliance, risk and legal for businesses built to last.",
  },
  compliance: {
    title: "Financial compliance, AML/CFT and regulatory reporting | Nexply",
    description:
      "AML/CFT programmes, transaction monitoring, fraud desk, suspicious transaction reporting and data protection audits by a licensed DPCO.",
    ogTitle: "Compliance that holds up when the regulator looks.",
  },
  risk: {
    title: "Risk, controls audit and cybersecurity for fintechs | Nexply",
    description:
      "Controls audits, mock regulatory examinations, penetration testing, PCI DSS, ISO 27001 and SOC 2 readiness, and regulatory cybersecurity frameworks.",
    ogTitle: "Controls that pass the audit. Security that holds.",
  },
  legal: {
    title: "Incorporation and financial licensing across Africa, UK, US and Canada | Nexply",
    description:
      "Incorporation, licensing and regulatory advice across Africa, the United Kingdom, the United States and Canada. Delivered with TNL Legals.",
    ogTitle: "Incorporated, licensed and on the right side of the rules.",
  },
  sectors: {
    title: "Who we act for | Nexply",
    description:
      "Companies in every sector, with a focus on fintechs, payment companies, lenders, digital asset and other digital businesses.",
    ogTitle: "Any sector, with deep fintech experience.",
  },
  markets: {
    title: "Markets we work in | Nexply",
    description:
      "Nigeria, Ghana, Kenya, South Africa and other African markets, plus the United Kingdom, the United States and Canada.",
    ogTitle: "One firm across your markets.",
  },
  why: {
    title: "Why Nexply | One firm for compliance, risk and legal",
    description:
      "Most businesses juggle a law firm, a compliance consultant, a security vendor and a software platform. Nexply puts all of it under one umbrella.",
    ogTitle: "Everything regulated. One umbrella.",
  },
  consult: {
    title: "Book a free consultation | Nexply",
    description:
      "A free 30-minute call with a specialist. Leave with your regulatory map, your main exposures and clear next steps.",
    ogTitle: "Book a free consultation.",
  },
  privacy: {
    title: "Privacy Policy | Nexply",
    description: "How Nexply collects, uses and protects personal data.",
    ogTitle: "Privacy Policy",
  },
  terms: {
    title: "Terms of Service | Nexply",
    description: "The terms that govern your use of the Nexply website.",
    ogTitle: "Terms of Service",
  },
};

// Shared: Practices, Lifecycle


export type Tone = "blue" | "teal" | "gold";

export type Practice = {
  tone: Tone;
  n: string;
  name: string;
  href: string;
  line: string;
  points: string[];
};

export const practices: Practice[] = [
  {
    tone: "blue",
    n: "01",
    name: "Compliance",
    href: "/compliance",
    line: "Financial crime and regulatory compliance, built and run for you.",
    points: [
      "AML/CFT programmes and KYC",
      "Transaction monitoring and fraud desk",
      "STR, CTR and SAR reporting",
      "Data protection audits by a licensed DPCO",
    ],
  },
  {
    tone: "teal",
    n: "02",
    name: "Risk",
    href: "/risk",
    line: "Controls audits and cybersecurity that stand up to examiners and attackers.",
    points: [
      "Controls audits and mock examinations",
      "Penetration testing",
      "PCI DSS, ISO 27001 and SOC 2",
      "Incident response and third-party risk",
    ],
  },
  {
    tone: "gold",
    n: "03",
    name: "Legal",
    href: "/legal",
    line: "Incorporation, licensing and regulatory advice across multiple markets.",
    points: [
      "Incorporation and structuring",
      "Licensing across multiple markets",
      "Regulatory advice and documentation",
      "Regulator queries and enforcement",
    ],
  },
];

export const lifecycle = [
  {
    n: "01",
    title: "Incorporate",
    text: "The right entity, in the right market, structured for the licence you need.",
    detail: "We confirm the right entity and structure for your model and target market, then set it up.",
  },
  {
    n: "02",
    title: "License",
    text: "Your application pack written, filed and seen through every regulator query.",
    detail: "We write your application pack, file it and answer every query until you are approved.",
  },
  {
    n: "03",
    title: "Build controls",
    text: "Policies, risk frameworks and security controls that match how you actually operate.",
    detail: "We build your AML/CFT, risk and security controls around how your business actually runs.",
  },
  {
    n: "04",
    title: "Monitor and report",
    text: "Transaction monitoring, fraud review and regulatory returns, filed on time.",
    detail: "We run transaction monitoring, review alerts and file your returns on time, every time.",
  },
  {
    n: "05",
    title: "Audit and defend",
    text: "Independent audits before the examiner arrives, and support when they do.",
    detail: "We audit your controls before the examiner does, and stand with you when they arrive.",
  },
];

// Home

export const home = {
  hero: {
    eyebrow: "Compliance · Risk · Legal",
    h1: "Compliance, risk and legal for businesses built to last.",
    sub: "One firm for everything regulated. We help companies in every sector get licensed, compliant and secure, with a particular focus on fintechs, payment companies and digital businesses.",
    primary: { label: "Book a free consultation", href: consultHref },
    secondary: { label: "Explore our practices", href: "#practices" },
  },
  umbrella: {
    eyebrow: "One umbrella",
    h2: "Everything regulated, under one roof.",
    sub: "Most businesses juggle a law firm, a compliance consultant, a security vendor and a software tool. With us, it's one team that already knows your business.",
    pillars: ["One team", "One scope", "One point of contact"],
  },
  compare: {
    eyebrow: "How we compare",
    h2: "Most providers cover one piece. We cover the whole.",
    sub: "A general comparison of the types of provider businesses usually hire. Many specialise by design, and that's fine. You just end up managing several of them.",
    link: { label: "Why one firm matters", href: "/why-nexply" },
  },
  lifecycle: {
    eyebrow: "End to end",
    h2: "From incorporation to examination.",
    sub: "Wherever you are in the lifecycle, we pick up from there.",
    link: { label: "How an engagement runs", href: "/why-nexply#engagement" },
  },
  sectors: {
    eyebrow: "Who we act for",
    h2: "Any sector, with deep fintech experience.",
    link: { label: "See who we act for", href: "/who-we-act-for" },
  },
  dpco: {
    badge: "Licensed DPCO",
    h2: "Licensed to audit and file.",
    body: "Nexply is a licensed Data Protection Compliance Organisation. We audit how you handle personal data and file your annual data protection Compliance Audit Return.",
    link: { label: "Data protection services", href: "/compliance#data-protection" },
  },

};

// Practice Pages

export type ServiceSection = {
  id: string;
  h2: string;
  sub: string;
  body: string;
  listLabel: string;
  list: string[];
};

export type PracticePage = {
  tone: Tone;
  eyebrow: string;
  h1: string;
  sub: string;
  sections: ServiceSection[];
  aside: { label: string; items: string[] };
  cta: { h2: string; body: string };
  note?: string;
};

export const compliancePage: PracticePage = {
  tone: "blue",
  eyebrow: "01 · Compliance",
  h1: "Compliance that holds up when the regulator looks.",
  sub: "We design your financial crime programme, run the monitoring and file the reports, so you meet your obligations in every market you operate in.",
  aside: {
    label: "Reporting we handle",
    items: [
      "Suspicious transaction reports (STRs)",
      "Currency and threshold reports (CTRs)",
      "Suspicious activity reports (SARs)",
      "Data protection audit returns",
      "VAT, withholding and company tax returns",
    ],
  },
  sections: [
    {
      id: "aml-cft",
      h2: "AML/CFT programmes",
      sub: "The programme your regulator expects to see on day one, and checks at every examination.",
      body: "We write your policies against the rules of each market you operate in, then make sure your team can run them.",
      listLabel: "What we handle",
      list: [
        "AML/CFT and sanctions policies",
        "Business-wide risk assessment",
        "KYC, CDD and EDD procedures",
        "Compliance officer appointment and staff training",
      ],
    },
    {
      id: "monitoring",
      h2: "Transaction monitoring and fraud desk",
      sub: "Rules that catch what matters, and people who review the alerts.",
      body: "We design and tune your monitoring rules, then review alerts and investigate cases as an extension of your team.",
      listLabel: "What we handle",
      list: [
        "Monitoring rules and thresholds",
        "Alert review and case investigation",
        "Managed fraud desk",
        "Sanctions and PEP screening",
      ],
    },
    {
      id: "reporting",
      h2: "Regulatory reporting",
      sub: "Suspicious and threshold reports, filed correctly and on time.",
      body: "We set up your reporting with each financial intelligence unit and run the workflow from alert to filing.",
      listLabel: "What we handle",
      list: [
        "Reporting portal registration and setup",
        "Suspicious transaction and activity reports",
        "Currency and threshold reports",
        "Periodic returns to your regulators",
      ],
    },
    {
      id: "data-protection",
      h2: "Data protection",
      sub: "Audits and filings by a licensed Data Protection Compliance Organisation.",
      body: "If you hold customer financial data, assume you are in scope of the Nigeria Data Protection Act until we confirm otherwise. Returns are due by 31 March every year.",
      listLabel: "What we handle",
      list: [
        "Data protection registration",
        "Annual data protection audit and Compliance Audit Return",
        "DPO support and data protection impact assessments",
        "Privacy policy and breach response plan",
      ],
    },
    {
      id: "managed",
      h2: "Outsourced compliance",
      sub: "A compliance function, without building one from scratch.",
      body: "We act as your compliance team and keep a calendar of every obligation, with a date and an owner on our side.",
      listLabel: "What we handle",
      list: [
        "Outsourced CCO and MLRO support",
        "Compliance calendar across your markets",
        "Board and regulator reporting",
        "Tax registration and filings",
      ],
    },
  ],
  cta: {
    h2: "Know where you stand.",
    body: "Tell us your licences and markets. We'll map your obligations and show you where the gaps are.",
  },
};

export const riskPage: PracticePage = {
  tone: "teal",
  eyebrow: "02 · Risk",
  h1: "Controls that pass the audit. Security that holds.",
  sub: "We test your controls the way examiners do, and your systems the way attackers do. Then we help you fix what we find.",
  aside: {
    label: "Standards we work to",
    items: [
      "PCI DSS",
      "ISO/IEC 27001",
      "SOC 2",
      "Regulatory cybersecurity frameworks",
      "Data protection laws",
    ],
  },
  sections: [
    {
      id: "controls-audit",
      h2: "Controls audit and examination readiness",
      sub: "Find the gaps before the regulator does.",
      body: "We audit your controls against what examiners actually test, and run mock inspections so your team knows what to expect.",
      listLabel: "What we handle",
      list: [
        "Internal controls and compliance audits",
        "Mock regulatory examinations",
        "Independent AML effectiveness reviews",
        "Remediation plans with owners and dates",
      ],
    },
    {
      id: "cybersecurity",
      h2: "Cybersecurity",
      sub: "Security testing and frameworks for businesses that hold money and data.",
      body: "We test your applications, APIs and infrastructure, then build the security programme your regulators and banking partners expect.",
      listLabel: "What we handle",
      list: [
        "Penetration testing and vulnerability assessments",
        "PCI DSS scoping, gap assessment and certification",
        "ISO 27001 and SOC 2 readiness",
        "Regulatory cybersecurity frameworks",
      ],
    },
    {
      id: "risk-frameworks",
      h2: "Risk management",
      sub: "A framework that shows the board and the regulator you are in control.",
      body: "We build risk frameworks sized to your business, not copied from a bank ten times your size.",
      listLabel: "What we handle",
      list: [
        "Enterprise risk framework and risk register",
        "Third-party and vendor risk",
        "Business continuity and disaster recovery",
        "Incident response planning",
      ],
    },
  ],
  cta: {
    h2: "Test before they do.",
    body: "Tell us what is coming up: an examination, a partner bank review or a PCI deadline. We'll scope the work.",
  },
};

export const legalPage: PracticePage = {
  tone: "gold",
  eyebrow: "03 · Legal",
  h1: "Incorporated, licensed and on the right side of the rules.",
  sub: "We set up your company, secure your licences and handle your dealings with regulators across Africa, the UK, the US and Canada.",
  note: "Legal services are provided by TNL Legals, working in line with Nexply.",
  aside: {
    label: "Licences we handle",
    items: [
      "Payment and e-money licences",
      "Lending and microfinance licences",
      "Money services and remittance registrations",
      "Digital asset and capital market registrations",
      "Market entry approvals",
    ],
  },
  sections: [
    {
      id: "incorporation",
      h2: "Incorporation and structuring",
      sub: "The right entity in the right market, from the start.",
      body: "We incorporate and structure your company so it meets the ownership, capital and governance rules of the licence you need.",
      listLabel: "What we handle",
      list: [
        "Incorporation in Nigeria and other markets",
        "Group and holding structures",
        "Board, governance and fit-and-proper documents",
        "Company secretarial support",
      ],
    },
    {
      id: "licensing",
      h2: "Licensing",
      sub: "We prepare your application, file it and answer the regulator until you are approved.",
      body: "Each regulator has its own process and its own reviewers. We know what they ask for, and we make sure your file does not come back.",
      listLabel: "Licences we handle",
      list: [
        "Payment service and switching licences",
        "Remittance and money services registrations",
        "Finance house, lending and microfinance licences",
        "E-money and payment institution authorisations",
        "Digital asset and capital market registrations",
        "Licences across Africa, the UK, the US and Canada",
      ],
    },
    {
      id: "advisory",
      h2: "Regulatory advisory and documentation",
      sub: "Clear answers on what applies to your product, and the documents to match.",
      body: "We tell you which rules apply before you launch, then draft the documents your customers and partners will sign.",
      listLabel: "What we handle",
      list: [
        "Regulatory perimeter advice for new products",
        "Customer terms and privacy policies",
        "Partnership and outsourcing agreements",
        "Market entry advice for foreign companies",
      ],
    },
    {
      id: "regulator-engagement",
      h2: "Regulator engagement",
      sub: "When the regulator writes to you, we write back.",
      body: "We handle queries, inspections and enforcement matters, and prepare your team for interviews.",
      listLabel: "What we handle",
      list: [
        "Responses to regulator queries",
        "Inspection and interview preparation",
        "Enforcement and sanctions responses",
        "Significant change notices and approvals",
      ],
    },
  ],
  cta: {
    h2: "Start with your licence path.",
    body: "Tell us what you're building and where. We'll confirm the licence you need and what it will take.",
  },
};

// Who We Act For

export const sectorsPage = {
  eyebrow: "Who we act for",
  h1: "Any sector, with deep fintech experience.",
  sub: "We work with companies across every sector, with particular depth in fintech, payments and digital businesses. Find the one that sounds like yours.",
  items: [
    {
      id: "payments",
      name: "Payment companies",
      text: "Payment processors, switches, gateways and wallets.",
      needs: ["Payment licence", "PCI DSS", "Transaction monitoring", "Cybersecurity framework"],
    },
    {
      id: "remittance",
      name: "Remittance and money services",
      text: "Businesses moving money across borders.",
      needs: ["Remittance licence", "Money services registrations", "Cross-border AML", "STR and SAR reporting"],
    },
    {
      id: "lending",
      name: "Lenders and digital banks",
      text: "Finance houses, microfinance banks and digital lenders.",
      needs: ["Lending or microfinance licence", "Risk framework", "Data protection", "Fraud desk"],
    },
    {
      id: "digital-assets",
      name: "Digital asset businesses",
      text: "Exchanges, custodians, wallets and stablecoin products.",
      needs: ["Digital asset registration", "Travel rule and AML", "Custody controls", "Penetration testing"],
    },
    {
      id: "market-entry",
      name: "Foreign companies entering a new market",
      text: "Groups expanding into Africa, or African companies expanding abroad.",
      needs: ["Incorporation", "Licensing", "Market entry advice", "Local compliance officer"],
    },
    {
      id: "other-sectors",
      name: "Companies in other sectors",
      text: "Any business that handles customer data, money or regulated activity and needs it done properly.",
      needs: ["Incorporation", "Data protection", "Cybersecurity", "Compliance programme"],
    },
    {
      id: "licensed",
      name: "Licensed businesses under review",
      text: "Firms facing an examination, a partner bank review or a regulator query.",
      needs: ["Controls audit", "Mock examination", "Remediation", "Regulator engagement"],
    },
  ],
  needsLabel: "What you'll need",
  cta: {
    h2: "Not sure where you fit?",
    body: "Tell us what you do and where. We'll tell you what applies.",
  },
};

// Markets

export const marketsPage = {
  eyebrow: "Markets",
  h1: "One firm across your markets.",
  sub: "We work across Africa, the United Kingdom, the United States and Canada, so your next market doesn't mean a new adviser.",
  regions: [
    {
      region: "Africa",
      markets: [
        {
          id: "nigeria",
          name: "Nigeria",
          text: "Licensing, AML/CFT, data protection, tax and incorporation. Home to our Lagos office.",
        },
        {
          id: "ghana",
          name: "Ghana",
          text: "Payment, fintech and capital market licensing.",
        },
        {
          id: "kenya",
          name: "Kenya",
          text: "Payment service provider and capital market licensing.",
        },
        {
          id: "south-africa",
          name: "South Africa",
          text: "Financial services, payments and crypto asset licensing.",
        },
        {
          id: "africa-other",
          name: "Other African markets",
          text: "Licensing and compliance support across the continent.",
        },
      ],
    },
    {
      region: "Beyond Africa",
      markets: [
        {
          id: "uk",
          name: "United Kingdom",
          text: "EMI, payment institution and cryptoasset registration.",
        },
        {
          id: "us",
          name: "United States",
          text: "MSB registration, BSA/AML programme and SAR reporting.",
        },
        {
          id: "canada",
          name: "Canada",
          text: "MSB and foreign MSB registration, reporting and RPAA registration.",
        },
      ],
    },
  ],
  cta: {
    h2: "Entering a new market?",
    body: "Tell us where you're going. We'll map the licence, the timeline and the obligations that come with it.",
  },
};

export const faq = {
  eyebrow: "Questions",
  h2: "What clients usually ask",
  items: [
    {
      q: "Do you only work with fintechs?",
      a: "No. We work with companies in every sector. Fintechs, payment companies and digital businesses are where we go deepest, because they carry the heaviest regulatory load.",
    },
    {
      q: "Can we hire you for just one thing?",
      a: "Yes. Many clients start with a single licence, audit or penetration test and add more later. Having one firm pays off when the next need comes up.",
    },
    {
      q: "Do you write the documents or just advise?",
      a: "We write them. Policies, applications and returns come to you ready to sign, and we file them for you.",
    },
    {
      q: "How do you charge?",
      a: "Every engagement starts with a written scope and a fixed fee. Regulator and filing fees are separate and paid directly by you.",
    },
    {
      q: "Which markets do you cover?",
      a: "Nigeria and other African markets, the United Kingdom, the United States and Canada.",
    },
    {
      q: "Is the first consultation really free?",
      a: "Yes. Thirty minutes, no cost and no obligation. You'll leave with clear next steps whether or not you work with us.",
    },
  ],
};


export const comparison = {
  providers: ["Law firms", "Compliance software", "Cybersecurity firms", "Licensing consultancies", "Nexply"],
  short: ["Law firm", "Software", "Cyber firm", "Licensing", "Nexply"],
  rows: [
    { label: "Incorporation and licensing across Africa, UK, US and Canada", values: [1, 0, 0, 1, 2] },
    { label: "AML/CFT programmes and outsourced compliance officers", values: [1, 1, 0, 1, 2] },
    { label: "Transaction monitoring, fraud desk and suspicious activity reports", values: [0, 1, 0, 0, 2] },
    { label: "Penetration testing and PCI DSS", values: [0, 1, 2, 0, 2] },
    { label: "Data protection audits by a licensed DPCO", values: [1, 0, 1, 0, 2] },
    { label: "Regulator queries, inspections and enforcement", values: [2, 0, 0, 1, 2] },
  ],
  legend: [
    { v: 2, label: "Usually covers" },
    { v: 1, label: "Partly or sometimes" },
    { v: 0, label: "Usually not" },
  ],
  note: "Based on the services each type of provider typically lists publicly. Individual firms vary.",
};

// Why Nexply

export const whyPage = {
  eyebrow: "Why Nexply",
  h1: "Everything regulated. One umbrella.",
  sub: "Compliance, risk and legal are one problem to a regulator. We treat them as one engagement, with one team that knows your business end to end.",
  gaps: {
    eyebrow: "The problem with four advisers",
    h2: "Things fall between firms.",
    items: [
      {
        title: "The licence describes controls nobody tested.",
        text: "The application promises a security framework. The pen test happens a year later, with a different firm, against a different scope.",
      },
      {
        title: "Findings never reach the policies.",
        text: "The audit report lands with the cyber vendor. The AML programme sits with the consultant. Nobody joins them up before the examiner does.",
      },
      {
        title: "The regulator writes to the wrong person.",
        text: "A query arrives about transaction monitoring. The lawyer answering it never saw the alerts, the rules or the STRs.",
      },
    ],
    close: "With Nexply, the team that writes your application also builds your controls, runs your monitoring, tests your systems and answers the regulator.",
  },
  engagement: {
    eyebrow: "What to expect",
    h2: "How an engagement runs",
    steps: [
      { title: "Free consultation", text: "A 30-minute call to understand your business and what's in the way." },
      { title: "Written scope", text: "One scope across compliance, risk and legal, with a timeline and a fixed fee." },
      { title: "Delivery", text: "One team does the work, and you always know where it stands." },
      { title: "Ongoing support", text: "We keep your calendar, filings and controls current across every market." },
    ],
  },
  cta: {
    h2: "One call covers all three.",
    body: "Tell us what you're building and where. We'll map your compliance, risk and legal needs in one conversation.",
  },
};

// Free Consultation

export const consult = {
  eyebrow: "Free consultation",
  h1: "Book a free consultation.",
  sub: "A 30-minute call with a specialist, covering compliance, risk and legal in one conversation. No cost and no obligation.",
  getLabel: "You'll leave with",
  get: [
    "A map of the regulators and rules that apply to you",
    "Your main compliance, risk and legal exposures",
    "Clear next steps, and what they will take",
  ],
  orLabel: "Prefer to reach us directly?",
  form: {
    fields: {
      name: "Name",
      email: "Work email",
      company: "Company",
      market: "Where you operate",
      service: "What you need",
      urgency: "How soon",
      message: "Anything else we should know",
      optional: "Optional",
    },
    markets: ["Nigeria", "Rest of Africa", "United Kingdom", "United States", "Canada", "Multiple markets"],
    services: [
      {
        group: "Compliance",
        options: [
          "AML/CFT programme",
          "Transaction monitoring or fraud desk",
          "Regulatory reporting (STR, CTR, SAR)",
          "Data protection audit and filing",
          "Outsourced compliance",
        ],
      },
      {
        group: "Risk",
        options: [
          "Controls audit or mock examination",
          "Penetration testing",
          "PCI DSS",
          "ISO 27001 or SOC 2",
          "Risk management framework",
        ],
      },
      {
        group: "Legal",
        options: [
          "Incorporation",
          "Licensing",
          "Regulatory advice or documents",
          "Regulator query or enforcement",
        ],
      },
      { group: "Other", options: ["Not sure yet"] },
    ],
    urgencies: ["Deadline in under 30 days", "Within 3 months", "Planning ahead"],
    select: "Select",
    whatsappButton: "Send on WhatsApp",
    emailButton: "Send by email",
    helper: "Opens WhatsApp or your email app with your details filled in.",
    errors: {
      required: "Fill this in so we can reply.",
      email: "Enter an email address like name@company.com.",
    },
    intro: "Hi Nexply, I'd like to book a free consultation.",
    emailSubject: "Free consultation request",
    sent: "Your message should now be open, ready to send.",
    fallback: "Didn't open? Try again",
  },
  next: {
    h2: "What happens next",
    steps: [
      "We reply to set a time that suits you.",
      "On the call, we look at your business, markets and deadlines.",
      "After the call, you get your next steps in writing.",
    ],
  },
};

export const contactWhatsappText = "Hi Nexply, I have a question.";

export const consultButton = { label: "Book a free consultation", href: consultHref };
