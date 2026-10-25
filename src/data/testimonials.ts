export interface TestimonialItem {
  id: string;
  serviceId: "asr" | "translate" | "tts" | "data-collection" | "video-service";
  serviceLabel: string;
  clientOrganization: string;
  clientIndustry: string;
  partnerType: string;
  author: {
    name: string;
    role: string;
    location: string;
  };
  quote: string;
  challenge: string;
  solution: string;
  keyMetric: {
    value: string;
    label: string;
    detail: string;
  };
  additionalMetrics: {
    label: string;
    value: string;
  }[];
  themeColor: "indigo" | "violet" | "amber" | "teal" | "rose";
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testimonial-asr",
    serviceId: "asr",
    serviceLabel: "Automated Speech Recognition (ASR)",
    clientOrganization: "VoxPulse Telephony AI",
    clientIndustry: "Cloud Contact Centers & Conversational IVR",
    partnerType: "Speech AI Architecture Partner",
    author: {
      name: "Marcus Vance",
      role: "VP of Acoustic Engineering",
      location: "Singapore & Jakarta"
    },
    quote:
      "TCAI delivered clean, phonetically timestamped audio corpora across dense regional dialects that directly reduced our production WER by 32%. Their acoustic team understands telephony bandwidth cutoffs, 8kHz downsampling, and spontaneous conversational fillers better than any generic vendor we have worked with.",
    challenge:
      "High Word Error Rate (WER > 24%) on conversational Indonesian and mixed-code dialects over low-bitrate VoIP lines.",
    solution:
      "Provisioned 1,200+ hours of time-aligned acoustic corpora with custom lexical normalizations, hesitation tokens, and dual-channel speech separation.",
    keyMetric: {
      value: "-32%",
      label: "Production WER Reduction",
      detail: "Drop in Word Error Rate across mixed regional accents"
    },
    additionalMetrics: [
      { label: "Corpus Volume", value: "1,200+ hrs" },
      { label: "Timestamp Precision", value: "<15ms drift" },
      { label: "Lexical Normalization", value: "100% audited" }
    ],
    themeColor: "violet"
  },
  {
    id: "testimonial-translate",
    serviceId: "translate",
    serviceLabel: "Human Translation & Localization",
    clientOrganization: "OmniLingua Enterprise Cloud",
    clientIndustry: "Cross-Border B2B SaaS & Developer Infrastructure",
    partnerType: "Global Localization Partner",
    author: {
      name: "Dr. Elena Rostova",
      role: "Head of Internationalization (i18n)",
      location: "San Francisco & Berlin"
    },
    quote:
      "Localizing our technical documentation and developer consoles across 14 Asian language pairs required absolute register discipline. TCAI's native linguists maintained a 99.4% termbase consistency while respecting stringent UI string constraints. They integrate natively with our XLIFF pipelines.",
    challenge:
      "Inconsistent API documentation and truncated UI button strings across Southeast Asian and East Asian language variants.",
    solution:
      "Synchronized custom Translation Memories (TM), strict character-budget constraints, and native two-stage TEP (Translate, Edit, Proofread) review protocols.",
    keyMetric: {
      value: "99.4%",
      label: "Termbase Consistency",
      detail: "Audited against central glossary across 14 locale branches"
    },
    additionalMetrics: [
      { label: "Language Pairs", value: "14 Locales" },
      { label: "String Length Compliance", value: "100%" },
      { label: "Pipeline Turnaround", value: "48h Sprint SLA" }
    ],
    themeColor: "indigo"
  },
  {
    id: "testimonial-tts",
    serviceId: "tts",
    serviceLabel: "Text-to-Speech (TTS) Voice Synthesis",
    clientOrganization: "AuraVoice Interactive",
    clientIndustry: "Conversational Automotive & Smart Home Assistants",
    partnerType: "Synthetic Voice AI Client",
    author: {
      name: "Kenji Takahashi",
      role: "Lead Speech Synthesis Researcher",
      location: "Tokyo & Bangkok"
    },
    quote:
      "Building expressive, conversational neural voices requires pristine phoneme coverage and natural prosodic cadence. TCAI supplied custom SSML prompt tuning, studio-grade 48kHz acoustic captures, and phoneme-balanced scripts that yielded an exceptional 4.84 Mean Opinion Score (MOS) in user trials.",
    challenge:
      "Synthetic voices sounding robotic and fatigued during lengthy interactive in-car navigation dialogues.",
    solution:
      "Acoustic script design featuring emotional modulation, breath markers, dynamic pitch contouring, and strict 24-bit/48kHz soundproof studio mastering.",
    keyMetric: {
      value: "4.84 / 5.0",
      label: "Mean Opinion Score (MOS)",
      detail: "Double-blind subjective naturalness rating in user testing"
    },
    additionalMetrics: [
      { label: "Acoustic Sample Rate", value: "48kHz / 24-bit" },
      { label: "Phoneme Balance", value: "Full IPA Coverage" },
      { label: "Prosody Latency", value: "<120ms streaming" }
    ],
    themeColor: "amber"
  },
  {
    id: "testimonial-data-collection",
    serviceId: "data-collection",
    serviceLabel: "AI Data Collection & Annotation",
    clientOrganization: "CogniSphere AI Labs",
    clientIndustry: "Foundational LLM & Multimodal AI Research",
    partnerType: "Generative AI Training Partner",
    author: {
      name: "Soraya Damayanti, Ph.D.",
      role: "Director of Multilingual AI Datasets",
      location: "Jakarta & Melbourne"
    },
    quote:
      "For our regional foundational model pre-training, raw web scrape data was simply too noisy. TCAI managed ethically sourced, multi-demographic data collection across 30+ provinces with 99.2% Inter-Annotator Agreement (IAA) and rigorous PII anonymization. They are our go-to data pipeline partner.",
    challenge:
      "Severe demographic bias and hallucination-inducing toxicity in untrusted public web crawls for regional languages.",
    solution:
      "Recruited and verified 4,000+ native speakers for balanced multi-turn dialogue collection, intent labeling, and full ISO-compliant PII de-identification.",
    keyMetric: {
      value: "99.2%",
      label: "Inter-Annotator Agreement",
      detail: "Cohen's Kappa score across dual-annotated evaluation sets"
    },
    additionalMetrics: [
      { label: "Contributor Reach", value: "4,000+ Participants" },
      { label: "PII Scrubbing", value: "100% Anonymized" },
      { label: "Validation Batches", value: "Daily QA Loops" }
    ],
    themeColor: "teal"
  },
  {
    id: "testimonial-video-service",
    serviceId: "video-service",
    serviceLabel: "Video Service & Multilingual Media",
    clientOrganization: "KinetiQ Global Media",
    clientIndustry: "Educational Streaming & Interactive Corporate Media",
    partnerType: "Multilingual Media Studio Partner",
    author: {
      name: "Hannah Lindqvist",
      role: "Executive Producer of Multilingual Content",
      location: "Stockholm & Singapore"
    },
    quote:
      "TCAI handled localization, subtitling, and dynamic visual asset updates for our complete technical course catalog. Their frame-accurate subtitle burn-in and vocal-matched voiceover dubbing stayed within ±15ms sync drift across 4K master files without a single delivery delay.",
    challenge:
      "Managing complex frame-accurate subtitle alignment and localized on-screen typography across 200+ hours of high-resolution video.",
    solution:
      "Combined timecoded SRT/VTT mastering, on-screen text replacement (motion graphics localized in After Effects), and broadcast-spec audio loudness normalization (-24 LKFS).",
    keyMetric: {
      value: "±15ms",
      label: "Subtitle Sync Drift",
      detail: "Broadcast frame-accurate timing across all 4K localized masters"
    },
    additionalMetrics: [
      { label: "Catalog Volume", value: "200+ Video Hrs" },
      { label: "Audio Loudness", value: "-24 LKFS Broadcast" },
      { label: "On-Screen Graphic Sync", value: "100% Pixel Aligned" }
    ],
    themeColor: "rose"
  }
];
