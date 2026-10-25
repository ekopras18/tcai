export interface CompanyValue {
  title: string;
  description: string;
}

export interface WorkflowStep {
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export const COMPANY_INFO = {
  name: "TCAI Information Technology co. ltd.",
  shortName: "TCAI",
  legalEntity: "TCAI Information Technology co. ltd.",
  tagline: "Technology, Data, and Human Expertise — Working Together.",
  heroSubheadline:
    "TCAI Information Technology co. ltd. delivers high-precision Translate, ASR, TTS, Data Collection, and Video Service solutions to help organizations build superior digital products and AI experiences.",
  introTitle: "Connecting Human Expertise with Technology",
  introDescription:
    "TCAI unites specialized capabilities across Translate, ASR, TTS, Data Collection, and Video Service, combining native human discernment with structured operational workflows.",
  pillars: [
    {
      title: "Human Expertise",
      description:
        "Subject-matter linguists, acoustic speech engineers, and data collection specialists who bring contextual nuance that automated systems alone cannot produce."
    },
    {
      title: "Quality-Driven Delivery",
      description:
        "Structured validation protocols, inter-annotator agreement metrics, and rigorous QA rubrics tailored to enterprise and AI research benchmarks."
    },
    {
      title: "Scalable Project Support",
      description:
        "Flexible operational infrastructure designed to scale across diverse language pairs, acoustic recording volumes, and multi-format media production schedules."
    }
  ],
  whyChoose: [
    {
      title: "Flexible Project Support",
      description:
        "We adapt our operational cadence and resource allocation directly to your sprint cycles, dataset updates, or publication timelines."
    },
    {
      title: "Structured Quality Assurance",
      description:
        "Every batch passes multi-tier peer reviews, consistency checks, and guideline conformance tests before client delivery."
    },
    {
      title: "Cross-Disciplinary Expertise",
      description:
        "Our team brings together professional translators, ASR acoustic specialists, TTS evaluators, data collection leads, and video editors under unified project management."
    },
    {
      title: "Business-Focused Delivery",
      description:
        "We focus on deliverables that integrate cleanly into your existing tech stack, ML pipelines, or marketing distribution channels."
    }
  ],
  mission:
    "To empower organizations worldwide through reliable Translate, ASR, TTS, Data Collection, and Video Service solutions driven by human precision and rigorous quality engineering.",
  vision:
    "To become a trusted technology services partner connecting human expertise, verified data quality, and digital innovation.",
  coreValues: [
    {
      title: "Integrity",
      description:
        "Transparent communication, strict intellectual property confidentiality, and honest capability assessments."
    },
    {
      title: "Quality",
      description:
        "Systematic verification processes prioritizing semantic accuracy, data hygiene, and broadcast-ready production."
    },
    {
      title: "Collaboration",
      description:
        "Active listening and iterative alignment with client engineering, localization, and creative stakeholders."
    },
    {
      title: "Adaptability",
      description:
        "Responsive scaling across emerging data schemas, niche language varieties, and evolving client tooling."
    },
    {
      title: "Continuous Improvement",
      description:
        "Ongoing training of domain specialists and refinement of quality rubrics following every completed project cycle."
    }
  ],
  approachPillars: [
    {
      title: "Human-in-the-Loop Foundation",
      description:
        "While AI accelerates generation, human specialists ensure nuanced domain comprehension, cultural sensitivity, and ethical adherence."
    },
    {
      title: "Iterative Feedback Loops",
      description:
        "Pilot milestones and sample batch sign-offs establish precise accuracy standards before large-scale project execution."
    },
    {
      title: "Confidentiality & Data Hygiene",
      description:
        "Rigorous data handling protocols designed to safeguard proprietary datasets, proprietary source audio, and pre-release media."
    }
  ],
  workflow: [
    {
      number: "01",
      name: "Discover",
      tagline: "Understanding project goals",
      description:
        "We analyze your specifications, taxonomy, target language nuances, and output formatting requirements through in-depth intake sessions.",
      deliverables: ["Scope Definition Document", "Quality Benchmark Agreement", "Sample Pilot Criteria"]
    },
    {
      number: "02",
      name: "Plan",
      tagline: "Structuring scope & deliverables",
      description:
        "We assign qualified domain specialists, configure annotation guidelines or translation glossaries, and define delivery milestones.",
      deliverables: ["Project Schedule", "Guideline Rubric & Style Guide", "Resource Allocation Plan"]
    },
    {
      number: "03",
      name: "Execute",
      tagline: "Running operations rigorously",
      description:
        "Work proceeds strictly according to agreed specifications with active monitoring, interim checkpoint reviews, and prompt clarification loops.",
      deliverables: ["Interim Batch Exports", "Progress Status Summaries", "Active Query Tracking"]
    },
    {
      number: "04",
      name: "Review & Deliver",
      tagline: "Validating quality & handing off",
      description:
        "Our QA reviewers conduct comprehensive acceptance tests against quality rubrics before final packaged data or media handoff.",
      deliverables: ["Verified Asset Package", "Quality Assurance Report", "Post-Delivery Debrief"]
    }
  ],
  contact: {
    officialEmail: "inquiry@tcai-tech.example.com",
    careersEmail: "talent@tcai-tech.example.com",
    inquiryNotice:
      "Official contact channels are monitored by our business development and project coordination team. Responses are delivered within 1–2 business days.",
    locationDisclaimer:
      "TCAI serves global and regional enterprise clients through distributed specialized specialist teams and project-based workflows."
  }
};
