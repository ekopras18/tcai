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
  th?: {
    title: string;
    shortSummary: string;
    overviewHeadline: string;
    category: string;
    domainBadge: string;
    technicalMetric: string;
    interactiveSpecs: {
      label: string;
      value: string;
    }[];
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
  };
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
    image: "https://i.postimg.cc/Xv1tMNsY/image1.jpg",
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
    ],
    th: {
      title: "แปลภาษา (Translate)",
      shortSummary:
        "บริการแปลภาษาและการปรับเนื้อหาให้เข้ากับท้องถิ่นโดยผู้เชี่ยวชาญ รองรับการสื่อสารทางธุรกิจและผลิตภัณฑ์ดิจิทัลหลากหลายภาษา",
      overviewHeadline: "การแปลภาษาและการปรับภาษาให้เข้ากับบริบททางวัฒนธรรมโดยนักภาษาศาสตร์เจ้าของภาษา",
      category: "ภาษาและการปรับเนื้อหาให้เข้ากับท้องถิ่น",
      domainBadge: "ระบบวิศวกรรมภาษาศาสตร์หลายภาษา",
      technicalMetric: "40+ คู่ภาษา · ความสอดคล้องของคำศัพท์ 99.2% · ซิงค์ฐานความจำ CAT",
      interactiveSpecs: [
        { label: "ความเข้มงวดทางภาษา", value: "ตรวจสอบสองระดับโดยเจ้าของภาษา (TEP)" },
        { label: "ฐานความจำการแปล", value: "ซิงค์ TM และอภิธานศัพท์เฉพาะทาง" },
        { label: "รูปแบบไฟล์ที่รองรับ", value: "JSON, XLIFF, PO, YAML, Markdown, DOCX" },
        { label: "ความเที่ยงตรงของระดับภาษา", value: "ตรงตามบริบทวัฒนธรรม กฎหมาย และเทคนิค" }
      ],
      description:
        "บริการแปลโดยผู้เชี่ยวชาญที่เป็นมนุษย์ ออกแบบมาโดยเฉพาะสำหรับคู่มือทางเทคนิค ส่วนติดต่อผู้ใช้ซอฟต์แวร์องค์กร สื่อการตลาด และการสื่อสารข้ามพรมแดน นักภาษาศาสตร์เจ้าของภาษาของเรารับประกันความถูกต้องของความหมาย ระดับภาษาที่เหมาะสมกับวัฒนธรรม และการจัดการคำศัพท์ที่สม่ำเสมอตลอดทุกคู่ภาษา",
      scopeOfWork: [
        "แปลเอกสารทางเทคนิคและคู่มือวิศวกรรม",
        "แปลส่วนติดต่อผู้ใช้ (UI Strings) สำหรับซอฟต์แวร์ เว็บไซต์ และแอปพลิเคชันมือถือ",
        "การสร้างสรรค์เนื้อหาการตลาดข้ามภาษา (Transcreation) และงานโฆษณา",
        "การตรวจทานคุณภาพสองภาษา การแก้ไข และการพิสูจน์อักษร",
        "การจัดทำและบำรุงรักษาอภิธานศัพท์และฐานความจำการแปล (Translation Memory)"
      ],
      illustrativeUseCases: [
        {
          title: "การปรับซอฟต์แวร์ระดับองค์กรให้เหมาะกับภาษาท้องถิ่น",
          description:
            "ปรับส่วนติดต่อผู้ใช้ เอกสารวิธีใช้งาน และขั้นตอนเริ่มต้นใช้งานให้เป็นภาษาเป้าหมาย พร้อมควบคุมความยาวตัวอักษรอย่างเข้มงวด",
          applicableFields: "แพลตฟอร์ม SaaS · แอปพลิเคชันมือถือ · พอร์ทัลนักพัฒนา"
        },
        {
          title: "การประสานคู่มือข้อกำหนดทางเทคนิค",
          description:
            "แปลคู่มือวิศวกรรมที่มีความซับซ้อน แนวปฏิบัติตามกฎหมาย และระเบียบความปลอดภัยด้วยความสม่ำเสมอของคำศัพท์ที่ผ่านการรับรอง",
          applicableFields: "การผลิตฮาร์ดแวร์ · โทรคมนาคม · อิเล็กทรอนิกส์"
        }
      ],
      clientBenefits: [
        {
          title: "ความถูกต้องตามบริบท",
          detail: "กำจัดข้อผิดพลาดและความคลุมเครือจากการแปลด้วยเครื่องจักรด้วยนักภาษาศาสตร์ผู้เชี่ยวชาญเฉพาะทาง"
        },
        {
          title: "ความสม่ำเสมอของแบรนด์",
          detail: "รักษาโทนเสียงของแบรนด์และคำศัพท์เทคนิคให้สอดคล้องกันทั่วทุกตลาดภูมิภาค"
        },
        {
          title: "รอบการตรวจทานมาตรฐาน",
          detail: "กระบวนการตรวจทานหลายขั้นตอนและการตรวจสอบอภิธานศัพท์ทำให้มั่นใจได้ว่างานพร้อมใช้งานทันที"
        }
      ]
    }
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
    image: "https://i.postimg.cc/nLSN8V3q/image2.jpg",
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
    ],
    th: {
      title: "รู้จำเสียงพูด ASR (Automatic Speech Recognition)",
      shortSummary:
        "จัดเตรียมข้อมูลเสียงอะคูสติก ถอดความเสียงพูดตรงตามต้นฉบับ ตรวจสอบโฟเนติกซิงค์เวลาแม่นยำ และปรับจูนโมเดลเสียงเพื่อเพิ่มความแม่นยำ",
      overviewHeadline: "ไปป์ไลน์ข้อมูลเสียงอะคูสติกความแม่นยำสูงและการวัดเกณฑ์ Speech-to-Text",
      category: "เทคโนโลยีเสียงพูด",
      domainBadge: "ไปป์ไลน์การรู้จำเสียงพูดอะคูสติก",
      technicalMetric: "WER < 4.2% · Timecode โฟเนติกระดับมิลลิวินาที · แยกแยะผู้พูดหลายคน",
      interactiveSpecs: [
        { label: "ความแม่นยำของเวลา", value: "ขอบเขตพยางค์และคำระดับ ±10ms" },
        { label: "การจำแนกสัญญาณรบกวน", value: "จัดหมวดหมู่ SNR ใน 12+ สภาพแวดล้อมเสียง" },
        { label: "แยกแยะผู้พูดหลายคน", value: "ติดแท็กคำพูดซ้อนและตรวจสอบ Diarization" },
        { label: "ความครอบคลุมคำศัพท์", value: "พจนานุกรมโฟเนติกเฉพาะทางและภาษาพูด" }
      ],
      description:
        "การสนับสนุนทางวิศวกรรมอะคูสติกครบวงจรสำหรับระบบรู้จำเสียงพูดอัตโนมัติ (ASR) เราส่งมอบการถอดเสียงที่ซิงค์เวลาตรงระดับโฟเนติก ตรวจสอบการแยกผู้พูด แมปการออกเสียงตามสำเนียงท้องถิ่น และจัดหมวดหมู่สภาพเสียงทั้งในห้องอัดและสภาพแวดล้อมที่มีเสียงรบกวนในชีวิตจริง",
      scopeOfWork: [
        "ถอดความเสียงพูดแบบตรงตามคำพูดทุกคำ (Verbatim) และแบบตัดคำฟุ่มเฟือย",
        "ซิงค์เวลาเสียงกับข้อความ (Time-Aligned Alignment) ทั้งระดับคำและระดับโฟเนติก",
        "ตรวจสอบและแยกแยะผู้พูดหลายคน (Diarization) พร้อมติดแท็กเสียงพูดทับซ้อน",
        "จัดทำและตรวจสอบพจนานุกรมการออกเสียงเฉพาะทาง (Pronunciation Dictionary)",
        "จัดหมวดหมู่สภาพเสียงรบกวนและอัตราส่วนสัญญาณต่อเสียงรบกวน (SNR)"
      ],
      illustrativeUseCases: [
        {
          title: "การปรับเทียบระบบโทรศัพท์และการประชุมหลายฝ่าย",
          description:
            "ประเมินและให้คะแนนผลลัพธ์ Speech-to-Text ในการสนทนาฝ่ายบริการลูกค้าที่มีเสียงรบกวนรอบข้าง",
          applicableFields: "โทรคมนาคม · แพลตฟอร์มประชุมเสมือน · คอลเซ็นเตอร์"
        },
        {
          title: "การปรับโมเดลเสียงให้เข้ากับสำเนียงท้องถิ่น",
          description:
            "ตรวจสอบความแปรผันของเสียงในภาษาพูด เพื่อเพิ่มความแม่นยำของ ASR ในกลุ่มประชากรที่หลากหลาย",
          applicableFields: "ระบบเสียงในรถยนต์ · อุปกรณ์สมาร์ตโฮม · ผู้ช่วยเสียงบนมือถือ"
        }
      ],
      clientBenefits: [
        {
          title: "ความแม่นยำของขอบเขตโฟเนติก",
          detail: "ผู้เชี่ยวชาญด้านเสียงตรวจสอบขอบเขตเสียงด้วยตนเองในจุดที่ระบบอัตโนมัติมักคำนวณคลาดเคลื่อน"
        },
        {
          title: "ลดอัตราความผิดพลาด WER อย่างเห็นผล",
          detail: "ส่งมอบชุดข้อมูล Ground-Truth ที่สะอาด ซึ่งจำเป็นต่อการลดอัตราความผิดพลาดของคำ"
        },
        {
          title: "ผสานคำศัพท์เฉพาะทาง",
          detail: "ทำให้มั่นใจว่าคำศัพท์เทคนิค ตัวย่ออุตสาหกรรม และชื่อผลิตภัณฑ์ได้รับการรู้จำอย่างถูกต้อง"
        }
      ]
    }
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
    image: "https://i.postimg.cc/1z7bxRvP/image3.jpg",
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
    ],
    th: {
      title: "สังเคราะห์เสียงพูด TTS (Text-to-Speech)",
      shortSummary:
        "ประเมินคุณภาพเสียงสังเคราะห์ ทดสอบคะแนน MOS ปรับเทียบจังหวะวรรณยุกต์ และจัดทำพจนานุกรมการออกเสียงสำหรับโมเดลเสียงประสาทวิทยา",
      overviewHeadline: "การประเมินคุณภาพเสียงสังเคราะห์และวิศวกรรมคลังเสียงพจนานุกรม",
      category: "เทคโนโลยีเสียงพูด",
      domainBadge: "การประเมินและปรับเทียบเสียงประสาทวิทยา",
      technicalMetric: "เกณฑ์คะแนน 4.82 MOS · วรรณยุกต์และจังหวะสนทนา · การตรวจสอบ G2P",
      interactiveSpecs: [
        { label: "การประเมินเชิงอัตวิสัย", value: "คณะผู้ฟังเจ้าของภาษาประเมินคะแนน MOS" },
        { label: "การปรับเทียบวรรณยุกต์", value: "ความแปรผันของระดับเสียง จังหวะ และความอบอุ่น" },
        { label: "ความถูกต้องโฟเนติก", value: "ตรวจจับข้อผิดพลาด Grapheme-to-Phoneme (G2P)" },
        { label: "จังหวะและจุดหยุด", value: "ตรวจสอบการวางจุดหายใจและการเว้นวรรคธรรมชาติ" }
      ],
      description:
        "วิศวกรรมชุดข้อมูลและการประเมินคุณภาพเชิงลึกสำหรับการสังเคราะห์เสียงประสาทวิทยา (Neural Voice) เราดำเนินการทดสอบการฟังโดยผู้เชี่ยวชาญที่เป็นมนุษย์ (Mean Opinion Score - MOS) การประเมินวรรณยุกต์ การเน้นเสียง และพจนานุกรมการออกเสียง เพื่อให้ได้เสียงสังเคราะห์ที่สื่ออารมณ์และเป็นธรรมชาติสูงสุด",
      scopeOfWork: [
        "การทดสอบการฟังเชิงอัตวิสัยและการประเมินคะแนน Mean Opinion Score (MOS)",
        "สร้างพจนานุกรมการออกเสียงและตรวจสอบการแปลงตัวอักษรเป็นเสียง (G2P)",
        "ให้คะแนนวรรณยุกต์ ความผันแปรของระดับเสียง และความเหมาะสมของอารมณ์",
        "คัดกรองคุณภาพคลังเสียงพูดสำหรับการฝึกสอนโมเดลเสียงสตูดิโอ",
        "ตรวจจับสิ่งแปลกปลอมในเสียงสังเคราะห์ (Audio Artifacts) และเสียงสะดุด"
      ],
      illustrativeUseCases: [
        {
          title: "การประเมินบุคลิกภาพเสียงของแบรนด์",
          description:
            "ประเมินเสียงสังเคราะห์ต้นแบบของแบรนด์ในระดับอารมณ์ต่างๆ เพื่อรักษาความอบอุ่นและความน่าเชื่อถือขององค์กร",
          applicableFields: "ตู้คีออสก์แบบโต้ตอบ · อวตารเสมือนของแบรนด์ · ระบบนำทาง"
        },
        {
          title: "การปรับเทียบเสียงบรรยายขนาดยาว",
          description:
            "ตรวจสอบเสียงสังเคราะห์เพื่อป้องกันอาการล้าของผู้ฟัง การวางจุดหยุดหายใจ และความสม่ำเสมอของจังหวะในการอ่านข้อความยาว",
          applicableFields: "สิ่งพิมพ์ดิจิทัล · บทเรียนอีเลิร์นนิง · เครื่องมือช่วยเหลือผู้พิการ"
        }
      ],
      clientBenefits: [
        {
          title: "ความเป็นธรรมชาติที่วัดผลได้",
          detail: "คณะผู้ฟังเจ้าของภาษาให้ข้อมูลทางสถิติที่พิสูจน์ได้เกี่ยวกับความสามารถในการสื่อสารและความชัดเจนของเสียง"
        },
        {
          title: "ความถูกต้องในการออกเสียง",
          detail: "กำจัดการขึ้นลงเสียงที่ผิดธรรมชาติและการออกเสียงผิดของคำเฉพาะท้องถิ่นหรือคำยืมภาษาต่างประเทศ"
        },
        {
          title: "ตรงตามกลุ่มเป้าหมาย",
          detail: "ผ่านการตรวจสอบกับกลุ่มประชากรเป้าหมายในแต่ละภูมิภาคเพื่อสร้างการยอมรับอย่างแท้จริง"
        }
      ]
    }
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
    image: "https://i.postimg.cc/1z7bxRv4/image4.jpg",
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
    ],
    th: {
      title: "เก็บรวบรวมชุดข้อมูล AI (Data Collection)",
      shortSummary:
        "ไปป์ไลน์รวบรวมและกำกับข้อมูลเสียง ข้อความ และมัลติโมดัลอย่างเป็นระบบ เพื่อขับเคลื่อนการวิจัยและพัฒนาปัญญาประดิษฐ์",
      overviewHeadline: "การเก็บรวบรวมข้อมูลความสะอาดสูงและไปป์ไลน์กำกับข้อมูลหลายระดับ",
      category: "โซลูชันข้อมูล AI",
      domainBadge: "ชุดข้อมูล Ground-Truth สำหรับ AI",
      technicalMetric: "ความสอดคล้องของผู้ตรวจ 99.1% · ที่มาโปร่งใส · สกีมามัลติโมดัล",
      interactiveSpecs: [
        { label: "การจัดหาคลังข้อมูล", value: "เสียงพูดภาคสนามและสตูดิโอ บทสนทนาโต้ตอบหลายตา" },
        { label: "สกีมาการกำกับข้อมูล", value: "NER, การจำแนกเจตนา, การแบ่งส่วนความหมาย" },
        { label: "ดัชนีความสอดคล้อง", value: "Cohen's Kappa และการตัดสินฉันทามติหลายระดับ" },
        { label: "ความปลอดภัยและความเป็นส่วนตัว", value: "หนังสือยินยอมถูกต้อง และลบข้อมูล PII เข้มงวด" }
      ],
      description:
        "กระบวนการเก็บรวบรวมและกำกับข้อมูลที่ออกแบบมาเพื่อส่งมอบข้อมูลความจริงพื้นฐาน (Ground-Truth) ที่ได้รับการยืนยันสำหรับโมเดล Machine Learning เราบริหารจัดการการเก็บเสียงพูดทั้งภาคสนามและในสตูดิโอ การรวบรวมบทสนทนาโต้ตอบ ชุดข้อมูลข้อความเฉพาะอุตสาหกรรม และการติดแท็กข้อมูลหลายระดับภายใต้เกณฑ์ประกันคุณภาพที่เข้มงวด",
      scopeOfWork: [
        "เก็บข้อมูลเสียงพูดแบบกำหนดเอง (ผู้พูดหลากหลาย สภาพแวดล้อมและสำเนียงที่ต่างกัน)",
        "รวบรวมบทสนทนาและคู่คำสั่ง-คำตอบ (Prompt-Response Pairs) แบบหลายรอบ",
        "การจัดหมวดหมู่ข้อความ การรู้จำชื่อเฉพาะ (NER) และการติดแท็กเจตนา (Intent Tagging)",
        "รวบรวมและกำกับชุดข้อมูลด้าน Computer Vision และมัลติโมดัล",
        "จัดเตรียมชุดข้อมูลเกณฑ์มาตรฐานสีทอง (Golden Benchmark) และทดสอบกรณีขอบเขต (Edge Cases)"
      ],
      illustrativeUseCases: [
        {
          title: "การเก็บชุดข้อมูลเสียงอะคูสติก",
          description:
            "บันทึกเสียงจากอุปกรณ์ที่หลากหลายโดยเจ้าของภาษา ทั้งในห้องเงียบและสภาพแวดล้อมที่มีเสียงรบกวนจริงเพื่อฝึกสอนโมเดลเสียง",
          applicableFields: "ผู้ช่วยคำสั่งเสียง · ระบบสั่งการด้วยเสียงในรถยนต์ · อุปกรณ์อัจฉริยะ"
        },
        {
          title: "การติดแท็กข้อความและเจตนาเฉพาะกลุ่มธุรกิจ",
          description:
            "รวบรวมและกำกับคำถามจริงของลูกค้าเพื่อฝึกสอนโมเดลจัดหมวดหมู่เจตนาสำหรับผู้ช่วยเสมือนขององค์กร",
          applicableFields: "AI บริการลูกค้า · ระบบค้นหาระดับองค์กร · ภาคการเงิน"
        }
      ],
      clientBenefits: [
        {
          title: "ตรงตามประชากรและสกีมาอย่างเคร่งครัด",
          detail: "ชุดข้อมูลถูกคัดสรรตามกลุ่มประชากรผู้พูด ประเภทไมโครโฟน และการจำแนกประเภทการติดแท็กอย่างแม่นยำ"
        },
        {
          title: "ความสอดคล้องของผู้ตรวจสูง (IAA)",
          detail: "ระเบียบการตรวจทานหลายระดับทำให้มั่นใจได้ว่าข้อมูลที่ได้มีความแม่นยำ สม่ำเสมอ และทำซ้ำได้ในปริมาณมาก"
        },
        {
          title: "การรักษาความลับทรัพย์สินทางปัญญา",
          detail: "กระบวนการจัดเก็บข้อมูลที่มีเอกสารยินยอมของผู้เข้าร่วมถูกต้อง และมาตรการรักษาความลับ NDA อย่างเคร่งครัด"
        }
      ]
    }
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
    image: "https://i.postimg.cc/g0t19cgc/image5.jpg",
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
    ],
    th: {
      title: "บริการงานวิดีโอ (Video Service)",
      shortSummary:
        "บริการตัดต่อวิดีโอครบวงจร โพสต์โปรดักชัน โมชันกราฟิก วิดีโอสาธิตผลิตภัณฑ์ และการทำคำบรรยายหลายภาษาสำหรับสื่อดิจิทัล",
      overviewHeadline: "การผลิตวิดีโอที่มีส่วนร่วมสูง ตัดต่อระดับมืออาชีพ และคำบรรยายหลายภาษา",
      category: "การผลิตและตัดต่อสื่อดิจิทัล",
      domainBadge: "โพสต์โปรดักชันสื่อดิจิทัลและคำบรรยาย",
      technicalMetric: "มาตรฐานบรอดคาสต์ SMPTE · ซับไตเติลซิงค์ ±15ms · มาสเตอร์ 4K 60fps",
      interactiveSpecs: [
        { label: "โพสต์โปรดักชัน", value: "ตัดต่อละเอียด NLE เกรดดิ้งสี และมาสเตอร์เสียง" },
        { label: "โมชันกราฟิก", value: "ซูมหน้าจอ UI และกราฟิกชี้เป้าเคลื่อนไหว" },
        { label: "คำบรรยายซิงค์เวลา", value: "ฝังซับในภาพและส่งออกไฟล์ซับ (SRT, VTT)" },
        { label: "สัดส่วนหลายแพลตฟอร์ม", value: "แนวนอน 16:9 แนวตั้ง 9:16 และจัตุรัส 1:1" }
      ],
      description:
        "บริการผลิตและตัดต่อวิดีโอดิจิทัลแบบครบวงจร เราสร้างสรรค์วิดีโอสาธิตผลิตภัณฑ์ที่ประณีต โมชันกราฟิกที่น่าตื่นตา วิดีโอการตลาดที่ปรับให้เข้ากับภูมิภาค และคำบรรยายหลายภาษาที่ตรงตามจังหวะเวลา สำหรับบริษัทเทคโนโลยีและแบรนด์ดิจิทัลชั้นนำ",
      scopeOfWork: [
        "ตัดต่อประกอบวิดีโอ เกรดสี ปรับแต่งเสียง และมาสเตอร์รอบสุดท้าย",
        "โมชันกราฟิก ไตเติลการ์ด กราฟิกชื่อผู้พูด (Lower Thirds) และลูกศรชี้เป้า",
        "บันทึกและปรับแต่งภาพหน้าจอซอฟต์แวร์ UI สำหรับวิดีโอสาธิตผลิตภัณฑ์",
        "ฝังคำบรรยายหลายภาษาและส่งออกไฟล์แคปชันที่ซิงค์เวลา (SRT/VTT)",
        "ปรับอัตราส่วนภาพให้เหมาะกับทุกแพลตฟอร์มโซเชียล (16:9, 9:16, 1:1, 4:5)"
      ],
      illustrativeUseCases: [
        {
          title: "วิดีโอสาธิตซอฟต์แวร์และผลิตภัณฑ์ (Demo Walkthrough)",
          description:
            "ผลิตวิดีโอสาธิตการใช้งานฟังก์ชันต่างๆ ของแอปพลิเคชันอย่างคมชัด พร้อมการซูมเน้นจุดสำคัญ กราฟิกชี้ตำแหน่ง และเสียงบรรยายที่ตรงกัน",
          applicableFields: "สตาร์ทอัพซอฟต์แวร์ · Enterprise SaaS · การตลาดผลิตภัณฑ์"
        },
        {
          title: "แคมเปญวิดีโอหลายภาษาสำหรับแต่ละภูมิภาค",
          description:
            "ตัดต่อวิดีโอแคมเปญของแบรนด์ใหม่และใส่คำบรรยายเพื่อเผยแพร่ในแต่ละประเทศผ่านช่องทางดิจิทัล",
          applicableFields: "เอเจนซีการตลาดดิจิทัล · แบรนด์ระดับโลก · แพลตฟอร์มอีเลิร์นนิง"
        }
      ],
      clientBenefits: [
        {
          title: "คุณภาพระดับมาตรฐานสถานีโทรทัศน์ (Broadcast-Ready)",
          detail: "จังหวะการตัดต่อที่กระชับ การเกรดสีที่สวยงาม และโมชันกราฟิกทันสมัยเพื่อการมีส่วนร่วมสูงสุด"
        },
        {
          title: "การผสานงานภาษาที่ไร้รอยต่อ",
          detail: "ทำงานร่วมกับนักแปลเจ้าของภาษาโดยตรง ทำให้ได้คำบรรยายที่สละสลวยและซิงค์เวลาตรงเป๊ะ"
        },
        {
          title: "มาตรฐานการส่งออกสำหรับทุกแพลตฟอร์ม",
          detail: "ส่งมอบไฟล์ที่ฟอร์แมตและบีบอัดพร้อมใช้งานทันทีบนเว็บ แอป และโซเชียลมีเดีย"
        }
      ]
    }
  }
];
