export interface CareerCategory {
  id: string;
  roleTitle: string;
  type: string;
  engagement: string;
  overview: string;
  responsibilities: string[];
  qualifications: string[];
}

export const CAREERS_DATA: CareerCategory[] = [
  {
    id: "translators-linguists",
    roleTitle: "Translators & Language Specialists",
    type: "Linguistic & Localization",
    engagement: "Project-based / Freelance Specialist",
    overview:
      "Collaborate on multilingual translation, terminology consistency review, and localized software string adaptation across varied regional language pairs.",
    responsibilities: [
      "Translate technical documentation, software strings, and business communications accurately.",
      "Conduct bilingual editing and adhere strictly to client-provided glossaries and style sheets.",
      "Identify cultural, semantic, or grammatical ambiguities and provide proactive feedback."
    ],
    qualifications: [
      "Native or near-native proficiency in the target language with demonstrable translation portfolio.",
      "Familiarity with standard CAT tools and localization workflows.",
      "Proven domain knowledge in technology, legal, commercial, or academic translations."
    ]
  },
  {
    id: "data-annotators",
    roleTitle: "Data Annotators & Labelers",
    type: "AI & Machine Learning Data",
    engagement: "Project-based / Scheduled Batches",
    overview:
      "Perform high-precision data annotation across text, audio, and visual datasets to power advanced machine learning and conversational AI models.",
    responsibilities: [
      "Tag entities, classify intent, and annotate semantic segments adhering to detailed schema rubrics.",
      "Maintain consistent labeling speed without compromising inter-annotator agreement standards.",
      "Flag guideline ambiguities or corrupt source data during initial batch sampling."
    ],
    qualifications: [
      "High attention to detail and strong linguistic comprehension.",
      "Comfort navigating annotation platforms and structured web-based data interfaces.",
      "Ability to follow complex rulebooks and adapt rapidly to rubric updates."
    ]
  },
  {
    id: "quality-reviewers",
    roleTitle: "Data Quality Reviewers (QA)",
    type: "Quality Assurance & Evaluation",
    engagement: "Project-based / Milestone Lead",
    overview:
      "Perform multi-tier verification on completed dataset batches, calculate error rates, and validate compliance with client acceptance criteria.",
    responsibilities: [
      "Audit annotated datasets and localized deliverables against defined golden standards.",
      "Score annotator outputs and generate constructive error classification logs.",
      "Participate in calibration sessions to harmonize review standards across the specialist team."
    ],
    qualifications: [
      "Prior experience in data QA, proofreading, or machine learning evaluation pipelines.",
      "Analytical mindset with familiarity in error taxonomy and quality metrics.",
      "Excellent communication skills for guiding annotators and linguists."
    ]
  },
  {
    id: "asr-specialists",
    roleTitle: "ASR Acoustic Specialists & Transcribers",
    type: "Speech Technology — ASR",
    engagement: "Project-based / Technical Audio",
    overview:
      "Support Automatic Speech Recognition (ASR) pipelines through phoneme boundary alignment, multi-speaker diarization verification, verbatim transcript auditing, and acoustic noise categorization.",
    responsibilities: [
      "Validate time-aligned speech transcripts down to syllable or word boundaries.",
      "Audit speaker turns, overlaps, and acoustic noise categories across multi-environment recordings.",
      "Check domain lexicons and pronunciation dictionaries against specialized audio files."
    ],
    qualifications: [
      "Background in phonetics, acoustics, linguistics, or audio transcription.",
      "Trained critical listening skills capable of distinguishing subtle phonetic variations.",
      "Experience with audio analysis tools and time-aligned transcription workflows."
    ]
  },
  {
    id: "tts-evaluators",
    roleTitle: "TTS Evaluation & Voice Assessment Specialists",
    type: "Speech Technology — TTS",
    engagement: "Project-based / Listening Panels",
    overview:
      "Perform subjective listening evaluations (MOS testing), prosody assessments, and pronunciation lexicon auditing to calibrate high-fidelity neural Text-to-Speech models.",
    responsibilities: [
      "Conduct Mean Opinion Score (MOS) evaluations on synthesized speech samples.",
      "Assess synthetic audio for naturalness, stress placement, and prosodic expressiveness.",
      "Identify synthetic audio artifacts, micro-glitches, and grapheme-to-phoneme discrepancies."
    ],
    qualifications: [
      "Native speaker listening intuition in target language pairs with keen auditory sensitivity.",
      "Familiarity with subjective voice scoring protocols and audio evaluation rubrics.",
      "Disciplined approach to structured batch evaluations in quiet listening environments."
    ]
  },
  {
    id: "video-editors",
    roleTitle: "Video Editors & Creative Professionals",
    type: "Media & Post-Production",
    engagement: "Project-based / Creative Collaboration",
    overview:
      "Craft engaging video cuts, dynamic motion graphics, and localized video assets for product marketing, company profiles, and educational showcases.",
    responsibilities: [
      "Assemble, trim, and color-grade video footage into compelling narrative edits.",
      "Incorporate motion graphics, lower thirds, titles, and localized subtitle tracks.",
      "Export multi-format assets optimized for various digital platforms and resolutions."
    ],
    qualifications: [
      "Proficiency in professional editing suites (Premiere Pro, DaVinci Resolve, After Effects).",
      "Strong portfolio of corporate, promotional, or technical demo video projects.",
      "Keen sense of pacing, typography, sound design, and visual rhythm."
    ]
  }
];
