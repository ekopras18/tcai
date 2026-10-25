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
  th?: {
    serviceLabel: string;
    partnerType: string;
    clientIndustry: string;
    authorRole: string;
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
  };
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
    themeColor: "violet",
    th: {
      serviceLabel: "รู้จำเสียงพูด ASR (Speech Recognition)",
      partnerType: "พันธมิตรด้านสถาปัตยกรรม Speech AI",
      clientIndustry: "ศูนย์บริการลูกค้าคลาวด์และระบบ IVR สนทนา",
      authorRole: "รองประธานฝ่ายวิศวกรรมอะคูสติก",
      quote:
        "TCAI ส่งมอบคลังข้อมูลเสียงพร้อม Timecode ระดับโฟเนติกที่แม่นยำ ครอบคลุมสำเนียงท้องถิ่นหลากหลาย ซึ่งช่วยลดอัตราความผิดพลาดของคำ (WER) ในโปรดักชันของเราลงถึง 32% ทีมงานอะคูสติกของพวกเขามีความเข้าใจลึกซึ้งในข้อจำกัดแบนด์วิดท์โทรศัพท์ และการตัดเสียงรบกวนอย่างยอดเยี่ยม",
      challenge:
        "อัตราความผิดพลาดของคำ (WER > 24%) ในการสนทนาภาษาท้องถิ่นและภาษาผสมผสานผ่านสาย VoIP คุณภาพต่ำ",
      solution:
        "จัดเตรียมคลังข้อมูลเสียงอะคูสติกที่ซิงค์เวลาแม่นยำกว่า 1,200 ชั่วโมง พร้อมการปรับมาตรฐานคำศัพท์และการแยกแยะช่องสัญญาณเสียงสองทิศทาง",
      keyMetric: {
        value: "-32%",
        label: "ลดอัตราความผิดพลาด WER",
        detail: "อัตราความผิดพลาดของคำลดลงอย่างชัดเจนในสำเนียงท้องถิ่น"
      },
      additionalMetrics: [
        { label: "ปริมาณคลังเสียง", value: "1,200+ ชม." },
        { label: "ความแม่นยำ Timecode", value: "<15ms drift" },
        { label: "มาตรฐานคำศัพท์", value: "ตรวจสอบ 100%" }
      ]
    }
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
    themeColor: "indigo",
    th: {
      serviceLabel: "แปลภาษาและการปรับให้เหมาะกับท้องถิ่น (Translate)",
      partnerType: "พันธมิตรการปรับภาษาและเนื้อหาระดับโลก",
      clientIndustry: "B2B SaaS ข้ามพรมแดนและโครงสร้างพื้นฐานนักพัฒนา",
      authorRole: "หัวหน้าฝ่ายโลคัลไลเซชันสากล (i18n)",
      quote:
        "การแปลเอกสารทางเทคนิคและคอนโซลนักพัฒนาของเราใน 14 คู่ภาษาเอเชียต้องการระเบียบแบบแผนคำศัพท์ที่เข้มงวด นักภาษาศาสตร์ของ TCAI รักษาความสม่ำเสมอของคำศัพท์ได้สูงถึง 99.4% พร้อมทั้งควบคุมความยาวตัวอักษรของ UI ได้อย่างสมบูรณ์แบบ",
      challenge:
        "เอกสาร API ไม่สอดคล้องกัน และข้อความปุ่ม UI ล้นเกินขนาดที่กำหนดในตัวแปรภาษาแถบเอเชีย",
      solution:
        "เชื่อมโยงฐานความจำการแปล (TM) ปรับตามข้อจำกัดความยาวตัวอักษร และใช้ระเบียบวิธี TEP (แปล, บรรณาธิกร, พิสูจน์อักษร) โดยเจ้าของภาษา",
      keyMetric: {
        value: "99.4%",
        label: "ความสม่ำเสมอของคำศัพท์",
        detail: "ตรวจสอบเทียบกับอภิธานศัพท์กลางใน 14 สาขาภาษา"
      },
      additionalMetrics: [
        { label: "คู่ภาษาที่รองรับ", value: "14 ภาษา" },
        { label: "ความยาว UI พอดี", value: "100%" },
        { label: "รอบส่งมอบงาน", value: "รอบสปรินต์ 48 ชม." }
      ]
    }
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
    themeColor: "amber",
    th: {
      serviceLabel: "สังเคราะห์เสียงพูด TTS (Voice Synthesis)",
      partnerType: "ลูกค้าด้าน Synthetic Voice AI",
      clientIndustry: "ระบบสั่งการด้วยเสียงในรถยนต์และสมาร์ตโฮม",
      authorRole: "หัวหน้านักวิจัยด้านการสังเคราะห์เสียงพูด",
      quote:
        "การสร้างเสียงสังเคราะห์ที่ถ่ายทอดอารมณ์และเป็นธรรมชาติต้องการความสมบูรณ์ของเสียงโฟเนติกและจังหวะวรรณยุกต์ที่ลื่นไหล TCAI ช่วยปรับแต่งพรอมต์ SSML และบันทึกเสียงสตูดิโอ 48kHz คุณภาพสูง จนได้คะแนนความพึงพอใจ MOS สูงถึง 4.84 จากการทดสอบของผู้ใช้จริง",
      challenge:
        "เสียงสังเคราะห์ฟังดูแข็งกระด้างเหมือนหุ่นยนต์และทำให้ผู้ฟังรู้สึกล้าในระหว่างการนำทางระบบสนทนายาวๆ",
      solution:
        "ออกแบบสคริปต์อะคูสติกที่ผสานการปรับอารมณ์ จุดหยุดหายใจ การปรับระดับเสียงตามจังหวะธรรมชาติ และมาสเตอร์เสียง 24-bit/48kHz ในสตูดิโอกันเสียง",
      keyMetric: {
        value: "4.84 / 5.0",
        label: "คะแนนความคิดเห็นเฉลี่ย (MOS)",
        detail: "การประเมินความเป็นธรรมชาติแบบ Double-blind ในการทดสอบผู้ใช้"
      },
      additionalMetrics: [
        { label: "อัตราสุ่มตัวอย่างเสียง", value: "48kHz / 24-bit" },
        { label: "ความครอบคลุมโฟเนติก", value: "IPA ครบถ้วน" },
        { label: "ความหน่วงการสตรีม", value: "<120ms" }
      ]
    }
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
    themeColor: "teal",
    th: {
      serviceLabel: "เก็บรวบรวมชุดข้อมูล AI และกำกับข้อมูล (Data Collection)",
      partnerType: "พันธมิตรจัดเตรียมข้อมูลฝึกสอน Generative AI",
      clientIndustry: "การวิจัยโมเดลพื้นฐาน LLM และ Multimodal AI",
      authorRole: "ผู้อำนวยการฝ่ายชุดข้อมูล AI หลายภาษา",
      quote:
        "สำหรับการฝึกสอนโมเดลพื้นฐานระดับภูมิภาค ข้อมูลที่ดึงจากเว็บสาธารณะมีความสกปรกเกินไป TCAI เข้ามาบริหารการเก็บรวบรวมข้อมูลตามหลักจริยธรรมจากหลากหลายกลุ่มประชากรใน 30+ จังหวัด ด้วยความสอดคล้องของผู้ตรวจ (IAA) สูงถึง 99.2% และการปกปิดข้อมูล PII อย่างรัดกุม",
      challenge:
        "อคติทางประชากรและความเป็นพิษของข้อมูลที่ส่งผลให้โมเดลเกิดอาการหลอน (Hallucination) จากการกวาดข้อมูลเว็บสาธารณะ",
      solution:
        "คัดเลือกเจ้าของภาษามากกว่า 4,000 คนเพื่อรวบรวมบทสนทนาแบบโต้ตอบ การกำกับเจตนา (Intent) และการลบข้อมูลระบุตัวตน PII ตามมาตรฐาน ISO",
      keyMetric: {
        value: "99.2%",
        label: "ความสอดคล้องของผู้ตรวจ (IAA)",
        detail: "คะแนน Cohen's Kappa จากชุดข้อมูลประเมินที่มีผู้ตรวจสองคน"
      },
      additionalMetrics: [
        { label: "จำนวนผู้ร่วมโครงการ", value: "4,000+ คน" },
        { label: "การลบข้อมูล PII", value: "ปกปิดตัวตน 100%" },
        { label: "รอบการตรวจสอบ", value: "ลูป QA ประจำวัน" }
      ]
    }
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
    themeColor: "rose",
    th: {
      serviceLabel: "บริการงานวิดีโอและสื่อหลายภาษา (Video Service)",
      partnerType: "พันธมิตรสตรีมมิงและสตูดิโอสื่อข้ามชาติ",
      clientIndustry: "แพลตฟอร์มการศึกษาสตรีมมิงและสื่อองค์กรแบบโต้ตอบ",
      authorRole: "ผู้อำนวยการผลิตเนื้อหาหลายภาษา",
      quote:
        "TCAI รับผิดชอบงานแปล ทำคำบรรยาย และปรับปรุงภาพกราฟิกบนหน้าจอสำหรับแคตตาล็อกหลักสูตรเทคนิคทั้งหมดของเรา คำบรรยายที่ซิงค์ระดับเฟรมและการพากย์เสียงมีค่าความคลาดเคลื่อนเพียง ±15ms ในไฟล์มาสเตอร์ระดับ 4K โดยไม่เคยส่งงานล่าช้าเลยแม้แต่ครั้งเดียว",
      challenge:
        "การจัดการซับไตเติลที่ต้องซิงค์ตรงระดับเฟรม และการแก้ไขข้อความกราฟิกบนหน้าจอในวิดีโอความละเอียดสูงกว่า 200 ชั่วโมง",
      solution:
        "จัดทำมาสเตอร์ SRT/VTT ที่ซิงค์เวลาแม่นยำ เปลี่ยนข้อความบนจอผ่านโมชันกราฟิก After Effects และปรับระดับความดังเสียงตามมาตรฐานบรอดคาสต์ (-24 LKFS)",
      keyMetric: {
        value: "±15ms",
        label: "ความคลาดเคลื่อนซับไตเติล",
        detail: "ความแม่นยำระดับเฟรมในไฟล์มาสเตอร์ 4K ทั้งหมด"
      },
      additionalMetrics: [
        { label: "ชั่วโมงวิดีโอทั้งหมด", value: "200+ ชม." },
        { label: "มาตรฐานเสียง", value: "-24 LKFS Broadcast" },
        { label: "กราฟิกบนหน้าจอ", value: "จัดวางแม่นยำ 100%" }
      ]
    }
  }
];
