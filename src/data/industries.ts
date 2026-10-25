export interface IndustryItem {
  id: string;
  name: string;
  headline: string;
  summary: string;
  challenges: string[];
  relevantServices: string[];
  illustrativeScenario: {
    title: string;
    description: string;
    keyDeliverables: string[];
  };
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "ai-ml",
    name: "Artificial Intelligence & Machine Learning",
    headline: "Fueling Algorithm Development with Verified Ground-Truth Data",
    summary:
      "AI research teams and model builders require meticulously annotated, high-hygiene datasets and rigorous human-in-the-loop validation to benchmark and fine-tune models.",
    challenges: [
      "Inconsistent annotation quality and noise in crowdsourced datasets",
      "Shortage of qualified domain linguists for low-resource languages and regional dialects",
      "Hallucination and safety alignment evaluation bottlenecks in generative AI pipelines"
    ],
    relevantServices: [
      "Data Collection (Custom Audio & Multi-Tier Annotation)",
      "ASR (Speech Recognition & Acoustic Model Tuning)",
      "TTS (Synthetic Voice MOS & Prosody Evaluation)"
    ],
    illustrativeScenario: {
      title: "Conversational Virtual Assistant Alignment",
      description:
        "An AI laboratory training a regional customer service agent requires multi-turn dialogue classification, sentiment tagging, and safety policy auditing across vernacular phrases.",
      keyDeliverables: [
        "Gold-standard prompt/response rubrics",
        "Multi-tier inter-annotator agreement metrics",
        "Structured JSON schema export"
      ]
    }
  },
  {
    id: "tech-software",
    name: "Technology & Software",
    headline: "Globalizing Applications with Flawless Localization and Product Media",
    summary:
      "SaaS and software engineering platforms expanding internationally need accurate string localization, technical manual translation, and product walkthrough media.",
    challenges: [
      "Context-stripped translation errors causing broken UI text layouts and truncations",
      "Rapid sprint release cycles requiring rapid turnaround for localized software strings",
      "Complex developer documentation requiring precise technical terminology"
    ],
    relevantServices: [
      "Translate (Software UI Localization & Technical Docs)",
      "Video Service (Product Demos & UI Walkthroughs)",
      "Data Collection (Intent Annotation & Benchmark Datasets)"
    ],
    illustrativeScenario: {
      title: "B2B SaaS Multi-Market Deployment",
      description:
        "An enterprise software firm launching into new international markets needs its UI strings, help documentation, and product demo videos localized simultaneously.",
      keyDeliverables: [
        "Validated localized key-value string files",
        "Glossary-checked API and user documentation",
        "Localized video walkthroughs with synced subtitles"
      ]
    }
  },
  {
    id: "media-entertainment",
    name: "Media & Entertainment",
    headline: "Broadcast-Grade Audio Engineering and Dynamic Creative Storytelling",
    summary:
      "Entertainment studios, streaming platforms, and digital content creators require expressive synthetic voice evaluation, meticulous subtitles, and rapid video post-production.",
    challenges: [
      "Lack of natural vocal warmth and pacing in automated voice tools",
      "Strict timing and character count constraints in multi-lingual subtitling",
      "High turnaround pressure for multi-platform video cuts"
    ],
    relevantServices: [
      "Video Service (Post-Production, Color Grading & Cutdowns)",
      "Translate (Subtitling, Captioning & Script Adaptation)",
      "TTS (Synthetic Narration Naturalness & Cadence Scoring)"
    ],
    illustrativeScenario: {
      title: "Digital Documentary Series Adaptation",
      description:
        "A digital media publisher creating a documentary series requires professional video re-edits, multi-track audio polishing, and subtitle burn-ins for international broadcast.",
      keyDeliverables: [
        "Treated studio audio tracks with broadcast mastering",
        "Time-aligned SRT and closed-caption packages",
        "Multi-aspect ratio video cutdowns (16:9 and 9:16)"
      ]
    }
  },
  {
    id: "advertising-marketing",
    name: "Advertising & Digital Marketing",
    headline: "Compelling Multilingual Commercial Content and High-Retention Media",
    summary:
      "Growth agencies and brand marketing teams need persuasive transcreation, dynamic promo videos, and high-retention media tailored to local target audiences.",
    challenges: [
      "Literal translations that lose brand humor, idiom, and emotional punch",
      "Short attention spans requiring crisp, high-production video pacing",
      "Adapting creative campaigns across diverse regional demographics"
    ],
    relevantServices: [
      "Video Service (Promo Reels, Motion Graphics & Social Ads)",
      "Translate (Commercial Transcreation & Copy Adaptation)",
      "Data Collection (Regional Demographic Sentiment Tagging)"
    ],
    illustrativeScenario: {
      title: "Regional Paid Campaign Rollout",
      description:
        "A digital marketing agency running performance campaigns across Southeast Asia requires localized video ad variants featuring culturally adapted copy and platform-optimized formats.",
      keyDeliverables: [
        "Transcreated ad copy and call-to-actions",
        "Platform-optimized short-form video ads",
        "Synchronized localized subtitle burn-ins"
      ]
    }
  },
  {
    id: "education-elearning",
    name: "Education & E-Learning",
    headline: "Clear Instructional Narration, Lesson Localization, and Audio Accessibility",
    summary:
      "Universities, ed-tech platforms, and corporate training divisions need clear explanatory video media, accurate lesson translation, and speech technology validation.",
    challenges: [
      "Monotonous synthetic audio causing high learner fatigue in long modules",
      "Complex academic and technical terminology that automated translation misinterprets",
      "Accessibility compliance for auditory and visual learning materials"
    ],
    relevantServices: [
      "Translate (Curriculum, Courseware & Textbook Localization)",
      "Video Service (Educational Walkthroughs & Subtitle Burn-In)",
      "ASR & TTS (Time-Aligned Transcriptions & Voice Naturalness Scoring)"
    ],
    illustrativeScenario: {
      title: "Corporate Compliance & Technical Curriculum",
      description:
        "An enterprise training provider transforming a 20-hour certification course into engaging audio-visual lessons with verified transcripts and localized slide graphics.",
      keyDeliverables: [
        "Time-indexed transcripts for accessible learning",
        "Localized slide graphics and translated course outlines",
        "Edited instructional video modules with burned-in subtitles"
      ]
    }
  },
  {
    id: "enterprise-business",
    name: "Enterprise & Business Services",
    headline: "Structured Data Workflows and Corporate Communications at Scale",
    summary:
      "Multinational corporations, financial institutions, and legal consultancies demand secure data collection, exact document translation, and executive communication assets.",
    challenges: [
      "Strict data confidentiality and privacy requirements for sensitive corporate files",
      "Need for unified terminology across cross-border divisions and internal communications",
      "Consistent high-stakes presentations for executive stakeholders and investors"
    ],
    relevantServices: [
      "Translate (Contracts, Financial Reports & Corporate Policies)",
      "Data Collection (Internal Knowledge Base & Text Annotation)",
      "Video Service (Executive Briefings & Corporate Profile Media)"
    ],
    illustrativeScenario: {
      title: "Annual Shareholder & Strategic Report Media",
      description:
        "A diversified business group producing multi-lingual corporate reports and executive video briefings for cross-border shareholders and partners.",
      keyDeliverables: [
        "Audited bilingual legal and financial translations",
        "Executive-ready video presentation with polished motion graphics",
        "Standardized corporate terminology glossary"
      ]
    }
  }
];
