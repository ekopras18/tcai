export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortSummary: string;
  overviewHeadline: string;
  category: string;
  themeColor: "indigo" | "violet" | "amber" | "teal" | "rose";
  domainBadge: string;
  technicalMetric: string;
  interactiveSpecs: {
    label: string;
    value: string;
  }[];
  image?: string;
  description: string;
  scopeOfWork: string[];
  illustrativeUseCases: {
    title: string;
    description: string;
    applicableFields: string;
  }[];
  clientBenefits: {
    title: string;
    detail: string;
  }[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "translate",
    slug: "translate",
    title: "Translate",
    shortSummary:
      "Professional human translation and localization services supporting multilingual business communication and digital products.",
    overviewHeadline: "Nuanced Multilingual Translation & Cultural Localization by Native Linguists",
    category: "Language & Localization",
    themeColor: "indigo",
    domainBadge: "Multilingual Linguistic Engine",
    technicalMetric: "40+ Language Pairs · 99.2% Termbase Consistency · CAT Memory Sync",
    interactiveSpecs: [
      { label: "Linguistic Rigor", value: "Native dual-review signoff (TEP)" },
      { label: "Localization Memory", value: "TM alignment & custom glossary matching" },
      { label: "File Formats", value: "JSON, XLIFF, PO, YAML, Markdown, DOCX" },
      { label: "Register Fidelity", value: "Strict cultural, legal & technical register" }
    ],
    description:
      "Accurate human-powered translation tailored for technical manuals, enterprise software interfaces, marketing collateral, and cross-border communications. Our qualified native linguists ensure semantic fidelity, appropriate cultural register, and consistent terminology management across diverse language pairs.",
    scopeOfWork: [
      "Technical Documentation & Engineering Manual Translation",
      "Software, Web & Mobile Application String Localization",
      "Marketing Transcreation & Commercial Copy Adaptation",
      "Bilingual Quality Audits, Editing & Proofreading",
      "Terminology Glossary & Custom Translation Memory Maintenance"
    ],
    illustrativeUseCases: [
      {
        title: "Enterprise Software Localization",
        description:
          "Adapting user interfaces, help documentation, and customer onboarding journeys into target regional languages with strict UI length constraints.",
        applicableFields: "SaaS Platforms · Mobile Apps · Developer Portals"
      },
      {
        title: "Technical Specification Harmonization",
        description:
          "Translating complex engineering handbooks, industrial compliance guides, and safety protocols with certified terminology consistency.",
        applicableFields: "Hardware Manufacturing · Telecommunications · Electronics"
      }
    ],
    clientBenefits: [
      {
        title: "Contextual Accuracy",
        detail:
          "Eliminates machine translation ambiguities through experienced subject-matter linguists."
      },
      {
        title: "Brand Consistency",
        detail:
          "Preserves corporate tone of voice and technical nomenclature across all regional markets."
      },
      {
        title: "Standardized Review Cycles",
        detail:
          "Multi-stage peer editing and glossary validation ensure broadcast and production readiness."
      }
    ]
  },
  {
    id: "asr",
    slug: "asr",
    title: "ASR (Automatic Speech Recognition)",
    shortSummary:
      "Speech-to-text acoustic data preparation, verbatim audio transcription, time-aligned phonetic validation, and acoustic model tuning.",
    overviewHeadline: "High-Fidelity Acoustic Data Pipelines & Speech-to-Text Benchmarking",
    category: "Speech Technology",
    themeColor: "violet",
    domainBadge: "Acoustic Speech Recognition Pipelines",
    technicalMetric: "< 4.2% Word Error Rate (WER) · Millisecond Phoneme Boundaries · Multi-Diarization",
    interactiveSpecs: [
      { label: "Temporal Accuracy", value: "±10ms syllable and word timecode boundaries" },
      { label: "Noise Profiling", value: "SNR categorization across 12+ acoustic environments" },
      { label: "Multi-Speaker", value: "Overlap tagging and speaker diarization audit" },
      { label: "Lexicon Coverage", value: "Domain phonetic dictionaries & colloquial mapping" }
    ],
    image: "/src/assets/images/tcai_speech_studio_waveform_1792764142771.jpg",
    description:
      "Comprehensive acoustic engineering support for automated speech recognition engines. We deliver time-aligned phonetic transcriptions, speaker diarization validation, dialectal pronunciation mapping, and acoustic condition tagging across studio and real-world noisy environments.",
    scopeOfWork: [
      "Verbatim & Cleaned Speech Audio Transcription",
      "Time-Stamped Audio-to-Text Alignment (Word & Phoneme Level)",
      "Multi-Speaker Diarization Verification & Overlap Tagging",
      "Domain Lexicon & Pronunciation Dictionary Validation",
      "Acoustic Noise Condition & Signal-to-Noise Ratio (SNR) Categorization"
    ],
    illustrativeUseCases: [
      {
        title: "Telephony & Multi-Party Conference Calibration",
        description:
          "Reviewing and scoring automated speech-to-text outputs in conversational customer service recordings with ambient background interference.",
        applicableFields: "Telecommunications · Virtual Meeting Platforms · Call Centers"
      },
      {
        title: "Regional Dialect & Accent Adaptation",
        description:
          "Verifying colloquial phonetic variations to expand ASR speech engine accuracy across regional speaker demographics.",
        applicableFields: "Automotive Infotainment · Smart Home Devices · Mobile Assistants"
      }
    ],
    clientBenefits: [
      {
        title: "Phonetic Boundary Precision",
        detail:
          "Acoustic specialists manually audit audio boundaries that automated aligners frequently miscalculate."
      },
      {
        title: "Measurable WER Reduction",
        detail:
          "Provides clean ground truth datasets essential for driving down Word Error Rates (WER)."
      },
      {
        title: "Custom Vocabulary Integration",
        detail:
          "Ensures specialized technical jargon, industry acronyms, and product names are correctly recognized."
      }
    ]
  },
  {
    id: "tts",
    slug: "tts",
    title: "TTS (Text-to-Speech)",
    shortSummary:
      "Synthetic voice quality evaluation, MOS benchmark testing, prosody calibration, and pronunciation lexicons for neural voice models.",
    overviewHeadline: "Synthetic Voice Quality Assessment & Lexicon Engineering",
    category: "Speech Technology",
    themeColor: "amber",
    domainBadge: "Neural Voice Evaluation & Calibration",
    technicalMetric: "4.82 MOS Benchmark · Pitch Contour & Prosody · G2P Validation",
    interactiveSpecs: [
      { label: "Subjective Auditing", value: "Native listener Mean Opinion Score (MOS) panels" },
      { label: "Prosody Calibration", value: "Pitch variance, rhythm & conversational warmth" },
      { label: "Phonetic Integrity", value: "Grapheme-to-Phoneme (G2P) error detection" },
      { label: "Cadence & Pacing", value: "Natural breath placement & micro-pause auditing" }
    ],
    description:
      "End-to-end dataset engineering and subjective quality evaluation for neural voice synthesis. We conduct human subjective listening tests (Mean Opinion Score - MOS), prosody assessments, stress pattern auditing, and pronunciation dictionary curation to ensure expressive, natural-sounding synthetic speech.",
    scopeOfWork: [
      "Subjective Listening Tests & Mean Opinion Score (MOS) Evaluation",
      "Pronunciation Lexicon Creation & Grapheme-to-Phoneme (G2P) Auditing",
      "Prosody, Pitch Variation & Emotion Appropriateness Scoring",
      "Speech Corpus Quality Filtering for Studio Voice Model Training",
      "Synthetic Audio Artifact & Glitch Detection"
    ],
    illustrativeUseCases: [
      {
        title: "Brand Voice Persona Evaluation",
        description:
          "Evaluating synthesized brand voice prototypes across multiple emotional registers to maintain authentic corporate warmth and authority.",
        applicableFields: "Interactive Kiosks · Virtual Brand Avatars · Navigation Systems"
      },
      {
        title: "Long-Form Narration Calibration",
        description:
          "Auditing synthesized audio for listener fatigue, pause placement, breath naturalness, and rhythm consistency in extended text playback.",
        applicableFields: "Digital Publishing · E-Learning Courseware · Accessibility Tools"
      }
    ],
    clientBenefits: [
      {
        title: "Quantifiable Naturalness",
        detail:
          "Rigorous native speaker listening panels provide statistical validation of voice expressiveness and intelligibility."
      },
      {
        title: "Pronunciation Integrity",
        detail:
          "Eliminates jarring inflections and mispronunciations of regional proper nouns or foreign loanwords."
      },
      {
        title: "Demographic Alignment",
        detail:
          "Audited against target regional demographics to ensure genuine local acoustic acceptance."
      }
    ]
  },
  {
    id: "data-collection",
    slug: "data-collection",
    title: "Data Collection",
    shortSummary:
      "Structured speech, text, audio, and multimodal data collection and annotation pipelines to fuel machine learning and AI development.",
    overviewHeadline: "High-Hygiene Data Collection & Multi-Tier Annotation Pipelines",
    category: "AI Data Solutions",
    themeColor: "teal",
    domainBadge: "Structured AI Ground-Truth Datasets",
    technicalMetric: "99.1% Inter-Annotator Agreement · Clean Provenance · Multi-Modal Schemas",
    interactiveSpecs: [
      { label: "Corpus Acquisition", value: "Field & studio speech, multi-turn dialogues" },
      { label: "Annotation Schemas", value: "NER, intent classification, semantic segmentation" },
      { label: "Agreement Metrics", value: "Cohen's Kappa & multi-tier consensus arbitration" },
      { label: "Safety & Privacy", value: "Verified participant consent & strict PII scrubbing" }
    ],
    image: "/src/assets/images/tcai_data_annotation_workflow_1792764141771.jpg",
    description:
      "Targeted data collection and annotation workflows designed to supply machine learning models with verified ground-truth data. We coordinate field and studio speech corpus collection, conversational dialogue gathering, domain-specific text datasets, and multi-tier labeling under rigorous quality assurance schemas.",
    scopeOfWork: [
      "Custom Speech Audio Collection (Multi-Speaker, Varied Environments & Dialects)",
      "Conversational Dialogue Gathering & Multi-Turn Prompt-Response Pairs",
      "Text Classification, Named Entity Recognition (NER) & Intent Tagging",
      "Computer Vision & Multimodal Dataset Collection & Annotation",
      "Golden Benchmark Dataset Curation & Edge Case Validation"
    ],
    illustrativeUseCases: [
      {
        title: "Acoustic Speech Dataset Collection",
        description:
          "Collecting multi-device audio recordings across native speakers in quiet and real-world noisy conditions for acoustic model training.",
        applicableFields: "Voice Assistants · Automotive Voice Control · Smart Hardware"
      },
      {
        title: "Domain-Specific Text & Intent Tagging",
        description:
          "Gathering and annotating real-world customer inquiries to train intent classification models for enterprise virtual assistants.",
        applicableFields: "Customer Support AI · Enterprise Search · Financial Services"
      }
    ],
    clientBenefits: [
      {
        title: "Strict Demographic & Schema Adherence",
        detail:
          "Datasets are curated according to precise speaker demographics, microphone types, and labeling taxonomies."
      },
      {
        title: "High Inter-Annotator Agreement (IAA)",
        detail:
          "Multi-tier review protocols ensure reproducible, high-confidence annotations across large volumes."
      },
      {
        title: "Intellectual Property Confidentiality",
        detail:
          "Clean-chain data collection protocols with verified participant consent and strict non-disclosure security."
      }
    ]
  },
  {
    id: "video-service",
    slug: "video-service",
    title: "Video Service",
    shortSummary:
      "Comprehensive video editing, post-production, motion graphics, product demo videos, and multilingual subtitling for digital media.",
    overviewHeadline: "High-Engagement Video Production, Post-Editing & Multilingual Subtitling",
    category: "Media Production",
    themeColor: "rose",
    domainBadge: "Digital Media Post-Production & Subtitling",
    technicalMetric: "SMPTE Broadcast Standards · Subtitle Sync ±20ms · 4K 60fps Masters",
    interactiveSpecs: [
      { label: "Post-Production", value: "NLE precision cut, color grading & audio mastering" },
      { label: "Motion Graphics", value: "UI screen capture zoom-ins & animated callouts" },
      { label: "Timed Subtitling", value: "Burn-in & closed-caption exports (SRT, VTT, CEA)" },
      { label: "Multi-Platform Cuts", value: "16:9 widescreen, 9:16 vertical & 1:1 square" }
    ],
    image: "/src/assets/images/tcai_media_production_suite_1792764142163.jpg",
    description:
      "End-to-end digital video production and post-production editing services. We create polished product demos, dynamic motion graphics, localized marketing cutdowns, and synchronized multilingual subtitles for technology companies and creative digital brands.",
    scopeOfWork: [
      "Post-Production Video Assembly, Color Grading & Sound Polish",
      "Motion Graphics, Title Cards, Lower Thirds & Animated Callouts",
      "Software UI Screen Capture Polishing & Product Demo Walkthroughs",
      "Multilingual Subtitle Burn-in & Time-Aligned Captions (SRT/VTT)",
      "Multi-Format Aspect Ratio Optimization (16:9, 9:16, 1:1, 4:5)"
    ],
    illustrativeUseCases: [
      {
        title: "Software Product Demo Walkthrough",
        description:
          "Producing crisp, dynamic walkthrough videos demonstrating application features with zoom-ins, animated callouts, and clean voice sync.",
        applicableFields: "Software Startups · Enterprise SaaS · Product Marketing"
      },
      {
        title: "Localized Multilingual Video Campaigns",
        description:
          "Re-cutting and subtitling brand video campaigns for regional international distribution across digital channels.",
        applicableFields: "Digital Marketing Agencies · Global Brands · E-Learning"
      }
    ],
    clientBenefits: [
      {
        title: "Broadcast-Ready Visual Polish",
        detail:
          "Clean pacing, color grading, and modern motion graphics tailored for maximum engagement."
      },
      {
        title: "Seamless Linguistic Integration",
        detail:
          "Direct collaboration with native translation specialists ensures flawless subtitle timing and phrasing."
      },
      {
        title: "Cross-Platform Export Standards",
        detail:
          "Delivered formatted and compressed for immediate deployment on web, mobile, and social platforms."
      }
    ]
  }
];
