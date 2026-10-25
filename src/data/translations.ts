export type Language = "en" | "th";

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    industries: string;
    careers: string;
    contact: string;
    discussProject: string;
    taglineSubtitle: string;
  };
  hero: {
    companyBadge: string;
    title: string;
    description: string;
    exploreServicesBtn: string;
    discussProjectBtn: string;
    trustPoint1: string;
    trustPoint2: string;
    trustPoint3: string;
    pillarsHeader: string;
    pillarsCount: string;
    clickToViewSpecs: string;
    productionReadyBadge: string;
    services: {
      id: string;
      name: string;
      category: string;
      summary: string;
      badgeText: string;
    }[];
  };
  servicesOverview: {
    kicker: string;
    title: string;
    description: string;
    viewAllBtn: string;
    scopeDetailsBtn: string;
    services: {
      id: string;
      title: string;
      category: string;
      description: string;
      domainSnippet: string;
      metricBadge: string;
      specs: string[];
    }[];
  };
  companyIntro: {
    kicker: string;
    title: string;
    description: string;
    pillars: {
      title: string;
      description: string;
    }[];
  };
  whyChoose: {
    kicker: string;
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    kicker: string;
    title: string;
    description: string;
    selectFocus: string;
    verifiedOutcome: string;
    technicalMetricAudit: string;
    partnerChallenge: string;
    tcaiDelivery: string;
    exploreSpecs: string;
    auditParameters: string;
    complianceNote: string;
    caseCountText: string;
    ctaQuestion: string;
    ctaAction: string;
  };
  workflow: {
    kicker: string;
    title: string;
    description: string;
    steps: {
      number: string;
      name: string;
      tagline: string;
      description: string;
      deliverables: string[];
    }[];
  };
  industries: {
    kicker: string;
    title: string;
    description: string;
    viewCaseStudies: string;
  };
  cta: {
    kicker: string;
    title: string;
    description: string;
    buttonContact: string;
    buttonServices: string;
    trustNote: string;
  };
  footer: {
    legalDescription: string;
    qualityStatement: string;
    companyHeading: string;
    servicesHeading: string;
    inquiriesHeading: string;
    inquiriesDescription: string;
    draftInquiryBtn: string;
    copyrightText: string;
    aboutOrg: string;
    collaboratorNetwork: string;
    contactDesk: string;
  };
  pages: {
    services: {
      breadcrumbs: string;
      kicker: string;
      title: string;
      subtitle: string;
      allFilter: string;
      servicePrefix: string;
      inquiryTitle: string;
      inquiryPrompt: string;
      discussServiceBtn: string;
      technicalSpecsTitle: string;
      scopeTitle: string;
      useCasesTitle: string;
      benefitsTitle: string;
      applicableContext: string;
    };
    about: {
      breadcrumbs: string;
      title: string;
      subtitle: string;
      missionTitle: string;
      visionTitle: string;
      coreValuesTitle: string;
    };
    contact: {
      breadcrumbs: string;
      title: string;
      subtitle: string;
      formName: string;
      formEmail: string;
      formOrg: string;
      formService: string;
      formMessage: string;
      formSubmit: string;
      formSuccess: string;
    };
    careers: {
      breadcrumbs: string;
      title: string;
      subtitle: string;
      openRolesTitle: string;
      applyBtn: string;
    };
    industriesPage: {
      breadcrumbs: string;
      title: string;
      subtitle: string;
    };
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      industries: "Industries",
      careers: "Careers",
      contact: "Contact",
      discussProject: "Discuss a Project",
      taglineSubtitle: "Information Technology"
    },
    hero: {
      companyBadge: "TCAI Information Technology co. ltd.",
      title: "Precision Language, Speech & AI Data Services",
      description:
        "Specialized in five foundational disciplines: Translate, ASR, TTS, Data Collection, and Video Service. We unite certified native human expertise with production-grade engineering workflows.",
      exploreServicesBtn: "Explore All 5 Services",
      discussProjectBtn: "Discuss a Project",
      trustPoint1: "Dual Human-in-the-Loop QA",
      trustPoint2: "ISO 17100 Alignment",
      trustPoint3: "Enterprise NDA & PII Security",
      pillarsHeader: "Core Disciplines & Production Services",
      pillarsCount: "5 Capabilities",
      clickToViewSpecs: "Click any discipline to view technical specifications",
      productionReadyBadge: "Production-Ready",
      services: [
        {
          id: "translate",
          name: "Translate",
          category: "Localization & Linguistics",
          summary: "Human translation & software string localization across 40+ language pairs.",
          badgeText: "Native TEP Review"
        },
        {
          id: "asr",
          name: "ASR (Speech Recognition)",
          category: "Acoustic AI",
          summary: "Acoustic corpora preparation, phonetic timestamps & dialect model tuning.",
          badgeText: "Acoustic Corpora"
        },
        {
          id: "tts",
          name: "TTS (Text-to-Speech)",
          category: "Voice Synthesis",
          summary: "Neural voice calibration, SSML prosody design & natural conversational audio.",
          badgeText: "Prosody & Voice Tuning"
        },
        {
          id: "data-collection",
          name: "Data Collection",
          category: "AI Training Corpora",
          summary: "Demographic speech recording, high-agreement annotation & PII scrubbing.",
          badgeText: "Ethical AI Datasets"
        },
        {
          id: "video-service",
          name: "Video Service",
          category: "Multilingual Media",
          summary: "Frame-accurate subtitling, localized on-screen typography & master post-editing.",
          badgeText: "Broadcast Frame Sync"
        }
      ]
    },
    servicesOverview: {
      kicker: "Our Core Specializations",
      title: "Translate, ASR, TTS, Data Collection & Video Service",
      description:
        "Focused technological capabilities uniting qualified human discernment with scalable data and media engineering.",
      viewAllBtn: "View All Service Scopes",
      scopeDetailsBtn: "Scope details",
      services: [
        {
          id: "translate",
          title: "Translate",
          category: "Language & Localization",
          description:
            "Professional human translation and localization services supporting multilingual enterprise communication, technical manuals, and software interfaces.",
          domainSnippet: "EN ⇄ JA / ID / DE / ES",
          metricBadge: "99.2% Terminology Precision",
          specs: ["Native TEP Review", "Custom TM & Glossaries", "UI & Manuals"]
        },
        {
          id: "asr",
          title: "ASR (Speech Recognition)",
          category: "Speech Technology",
          description:
            "Automatic speech recognition acoustic data preparation, verbatim transcription, time-aligned phonetic validation, and acoustic model tuning.",
          domainSnippet: "±10ms Phoneme Boundaries",
          metricBadge: "WER < 4.2% Benchmark",
          specs: ["48kHz Studio & Field Audio", "Multi-Speaker Diarization", "SNR Tagging"]
        },
        {
          id: "tts",
          title: "TTS (Text-to-Speech)",
          category: "Speech Technology",
          description:
            "Synthetic voice evaluation, Mean Opinion Score (MOS) benchmark testing, prosody calibration, and pronunciation lexicons for neural voice models.",
          domainSnippet: "Neural Prosody & Pitch Contour",
          metricBadge: "4.82 / 5.00 MOS Score",
          specs: ["Native Listening Panels", "G2P Dictionary Auditing", "Vocal Warmth Scoring"]
        },
        {
          id: "data-collection",
          title: "Data Collection",
          category: "AI Data Solutions",
          description:
            "Structured speech, text, audio, and multimodal data collection and annotation pipelines designed to train and benchmark production AI models.",
          domainSnippet: "Multi-Turn Dialogue & NER",
          metricBadge: "99.1% Inter-Annotator Agreement",
          specs: ["Multi-Speaker Speech Corpus", "Strict PII Scrubbing", "Schema Tagging"]
        },
        {
          id: "video-service",
          title: "Video Service",
          category: "Media Production",
          description:
            "Comprehensive video editing, product demo walkthroughs, motion graphics, promotional cutdowns, and synchronized multilingual subtitling.",
          domainSnippet: "SMPTE 4K 60fps Masters",
          metricBadge: "Subtitle Drift ±15ms",
          specs: ["NLE Precision Post-Cuts", "Motion Graphics & UI Callouts", "SRT/VTT Burn-ins"]
        }
      ]
    },
    companyIntro: {
      kicker: "About TCAI",
      title: "Connecting Human Expertise with Technology",
      description:
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
      ]
    },
    whyChoose: {
      kicker: "Why Choose TCAI",
      title: "Engineering Rigor Built on Direct Domain Fluency",
      description:
        "We serve tier-one AI labs, technology corporations, and global enterprises requiring dependable ground-truth datasets, high-fidelity audio, and precise localization.",
      items: [
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
      ]
    },
    testimonials: {
      kicker: "Enterprise Testimonials & Case Results",
      title: "Validated Impact Across Speech, Language & AI Corpora",
      description:
        "Real engineering and localization outcomes achieved with partners in conversational AI, machine learning datasets, and cross-border multimedia.",
      selectFocus: "Select Focus:",
      verifiedOutcome: "Verified Outcome",
      technicalMetricAudit: "Technical Metric Audit",
      partnerChallenge: "Partner Challenge",
      tcaiDelivery: "TCAI Delivery",
      exploreSpecs: "Explore Specs",
      auditParameters: "Audit Parameters & Precision Data",
      complianceNote: "ISO 17100 & Enterprise NDA Protected",
      caseCountText: "Case",
      ctaQuestion: "Need similar benchmarks for your project?",
      ctaAction: "Discuss Your Pipeline"
    },
    workflow: {
      kicker: "Our Operational Methodology",
      title: "Systematic 4-Stage Delivery Pipeline",
      description:
        "Every project follows a defined engineering and linguistic progression to guarantee delivery speed, data security, and verifiable precision.",
      steps: [
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
      ]
    },
    industries: {
      kicker: "Sectors We Support",
      title: "Specialized Domain Adaptation Across Industries",
      description:
        "Delivering tailored linguistic accuracy, audio calibration, and dataset pipelines for specialized enterprise ecosystems.",
      viewCaseStudies: "View Industry Solutions"
    },
    cta: {
      kicker: "Initiate Your Project",
      title: "Ready to Accelerate Your Language, Speech or AI Dataset Pipeline?",
      description:
        "Connect with our specialist teams to discuss pilot requirements, evaluate volume feasibility, or receive formal scope specifications.",
      buttonContact: "Draft Project Inquiry",
      buttonServices: "Explore Service Specs",
      trustNote: "ISO 17100 aligned workflows · Strict mutual NDA · Dedicated project engineering"
    },
    footer: {
      legalDescription:
        "PT Teknologi Cipta Akustik Indonesia provides enterprise solutions across Translate, ASR, TTS, Data Collection, and Video Service.",
      qualityStatement: "Structured quality controls & strict project confidentiality.",
      companyHeading: "Company",
      servicesHeading: "Core Services",
      inquiriesHeading: "Project Inquiries",
      inquiriesDescription:
        "Have specifications, language requirements, or dataset volumes to review? Connect with our project desk.",
      draftInquiryBtn: "Draft project inquiry",
      copyrightText: "PT Teknologi Cipta Akustik Indonesia. All rights reserved.",
      aboutOrg: "About Organization",
      collaboratorNetwork: "Collaborator Network",
      contactDesk: "Contact Desk"
    },
    pages: {
      services: {
        breadcrumbs: "Services",
        kicker: "Core Capabilities & Scope of Work",
        title: "Translate, ASR, TTS, Data Collection & Video Service",
        subtitle:
          "Discover our structured delivery scopes across professional translation, speech recognition tuning (ASR), neural voice quality assessment (TTS), high-hygiene data collection, and broadcast-grade video service.",
        allFilter: "All Services",
        servicePrefix: "Service",
        inquiryTitle: "Project Inquiry",
        inquiryPrompt: "Ready to evaluate scopes, timelines, or pilot criteria for",
        discussServiceBtn: "Discuss",
        technicalSpecsTitle: "TECHNICAL SPECIFICATIONS",
        scopeTitle: "Scope of Work & Technical Deliverables",
        useCasesTitle: "Illustrative Use Cases",
        benefitsTitle: "Value & Advantages to Clients",
        applicableContext: "Applicable Context"
      },
      about: {
        breadcrumbs: "About Us",
        title: "About PT Teknologi Cipta Akustik Indonesia",
        subtitle:
          "Bridging verified human discernment and engineering precision across Translate, ASR, TTS, Data Collection, and Video Service.",
        missionTitle: "Our Corporate Mission",
        visionTitle: "Our Strategic Vision",
        coreValuesTitle: "Guiding Principles & Core Values"
      },
      contact: {
        breadcrumbs: "Contact",
        title: "Initiate a Project Discussion",
        subtitle:
          "Share your specifications, language requirements, or timeline objectives. Our solutions desk will review and respond promptly.",
        formName: "Full Name",
        formEmail: "Work Email",
        formOrg: "Organization / Company",
        formService: "Primary Service Area of Interest",
        formMessage: "Project Scope & Specifications",
        formSubmit: "Submit Project Inquiry",
        formSuccess: "Thank you for reaching out. A project manager will review your submission and respond within 1 business day."
      },
      careers: {
        breadcrumbs: "Careers",
        title: "Collaborator & Specialist Network",
        subtitle:
          "Join our distributed network of translators, acoustic engineers, annotators, voice talents, and video post-production professionals.",
        openRolesTitle: "Open Specialist Opportunities",
        applyBtn: "Apply to Join Roster"
      },
      industriesPage: {
        breadcrumbs: "Industries",
        title: "Enterprise Industry Solutions",
        subtitle:
          "Engineered language, speech, and multimodal data workflows tailored for demanding sector standards."
      }
    }
  },
  th: {
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับเรา",
      services: "บริการ",
      industries: "กลุ่มธุรกิจ",
      careers: "ร่วมงานกับเรา",
      contact: "ติดต่อเรา",
      discussProject: "ปรึกษาโครงการ",
      taglineSubtitle: "เทคโนโลยีสารสนเทศ"
    },
    hero: {
      companyBadge: "TCAI Information Technology co. ltd.",
      title: "บริการความแม่นยำสูงด้านภาษา เสียงพูด และชุดข้อมูล AI",
      description:
        "เชี่ยวชาญ 5 มิติหลัก: แปลภาษา (Translate), รู้จำเสียงพูด (ASR), สังเคราะห์เสียงพูด (TTS), เก็บรวบรวมชุดข้อมูล AI (Data Collection) และ บริการงานวิดีโอ (Video Service) ผสานความเชี่ยวชาญของมนุษย์กับวิศวกรรมข้อมูลระดับมาตรฐานสากล",
      exploreServicesBtn: "ดูบริการทั้ง 5 ด้าน",
      discussProjectBtn: "ปรึกษาโครงการ",
      trustPoint1: "ตรวจสอบคุณภาพโดยผู้เชี่ยวชาญ (Human-in-the-Loop)",
      trustPoint2: "มาตรฐานสากลระดับ ISO 17100",
      trustPoint3: "ความปลอดภัยระดับองค์กร NDA & PII",
      pillarsHeader: "5 สาขาความเชี่ยวชาญหลักและการส่งมอบงาน",
      pillarsCount: "5 บริการหลัก",
      clickToViewSpecs: "คลิกเลือกบริการเพื่อดูรายละเอียดและสเปกทางเทคนิค",
      productionReadyBadge: "พร้อมส่งมอบระดับองค์กร",
      services: [
        {
          id: "translate",
          name: "แปลภาษา (Translate)",
          category: "ภาษาและการปรับให้เหมาะกับท้องถิ่น",
          summary: "การแปลโดยผู้เชี่ยวชาญภาษาและการปรับเนื้อหาซอฟต์แวร์กว่า 40+ คู่ภาษา",
          badgeText: "ตรวจสอบ TEP สองระดับ"
        },
        {
          id: "asr",
          name: "รู้จำเสียงพูด ASR",
          category: "Acoustic AI & การรู้จำเสียง",
          summary: "จัดเตรียมคลังข้อมูลเสียง ตรวจจับ Timecode ระดับโฟเนติก และจูนโมเดลเสียง",
          badgeText: "คลังข้อมูลเสียงอะคูสติก"
        },
        {
          id: "tts",
          name: "สังเคราะห์เสียงพูด TTS",
          category: "วิศวกรรมเสียงสังเคราะห์",
          summary: "ปรับเทียบเสียงประสาทวิทยา การออกแบบวรรณยุกต์ SSML และประเมินความสมจริง",
          badgeText: "จูนจังหวะและเนื้อเสียง"
        },
        {
          id: "data-collection",
          name: "เก็บรวบรวมชุดข้อมูล AI",
          category: "ชุดข้อมูลฝึกฝนโมเดล AI",
          summary: "บันทึกเสียงตามกลุ่มประชากร การกำกับข้อมูลความแม่นยำสูง และคัดกรอง PII",
          badgeText: "ชุดข้อมูล AI ถูกต้องตามจริยธรรม"
        },
        {
          id: "video-service",
          name: "บริการงานวิดีโอ (Video Service)",
          category: "สื่อและวิดีโอหลายภาษา",
          summary: "คำบรรยายซิงค์ระดับเฟรม กราฟิกบนหน้าจอหลายภาษา และตัดต่อตกแต่งขั้นสูง",
          badgeText: "ซิงค์คำบรรยายระดับเฟรม"
        }
      ]
    },
    servicesOverview: {
      kicker: "ขอบเขตความเชี่ยวชาญเฉพาะทางของเรา",
      title: "แปลภาษา, ASR, TTS, จัดเตรียมข้อมูล AI และบริการวิดีโอ",
      description:
        "ศักยภาพทางเทคโนโลยีที่มุ่งเน้นการผสานดุลยพินิจอันลึกซึ้งของผู้เชี่ยวชาญที่เป็นมนุษย์ เข้ากับวิศวกรรมข้อมูลและสื่อที่รองรับการขยายตัวระดับสูง",
      viewAllBtn: "ดูขอบเขตบริการทั้งหมด",
      scopeDetailsBtn: "ดูรายละเอียดขอบเขตงาน",
      services: [
        {
          id: "translate",
          title: "แปลภาษา (Translate)",
          category: "ภาษาและการแปลภาษาเฉพาะทาง",
          description:
            "บริการแปลภาษาและการปรับเนื้อหาให้เข้ากับวัฒนธรรมท้องถิ่นโดยผู้เชี่ยวชาญ รองรับการสื่อสารระดับองค์กร คู่มือทางเทคนิค และส่วนติดต่อผู้ใช้งานซอฟต์แวร์",
          domainSnippet: "EN ⇄ TH / JA / ID / DE",
          metricBadge: "ความแม่นยำของคำศัพท์ 99.2%",
          specs: ["ตรวจทาน TEP สองขั้นตอน", "ระบบฐานความจำการแปล TM", "แปล UI และคู่มือ"]
        },
        {
          id: "asr",
          title: "รู้จำเสียงพูด ASR (Automatic Speech Recognition)",
          category: "เทคโนโลยีเสียงพูด",
          description:
            "จัดเตรียมข้อมูลเสียงอะคูสติก ถอดความเสียงพูดตรงตามต้นฉบับ ตรวจสอบโฟเนติกซิงค์เวลาแม่นยำ และปรับจูนโมเดลเสียงเพื่อลดอัตราความผิดพลาดของคำ",
          domainSnippet: "ขอบเขตโฟเนติก ±10ms",
          metricBadge: "เกณฑ์มาตรฐาน WER < 4.2%",
          specs: ["ไฟล์เสียงสตูดิโอและภาคสนาม 48kHz", "แยกแยะผู้พูดหลายคน", "ติดแท็ก SNR"]
        },
        {
          id: "tts",
          title: "สังเคราะห์เสียงพูด TTS (Text-to-Speech)",
          category: "เทคโนโลยีเสียงพูด",
          description:
            "การประเมินคุณภาพเสียงสังเคราะห์ ทดสอบคะแนนความคิดเห็นเฉลี่ย (MOS) ปรับแต่งจังหวะวรรณยุกต์ และสร้างพจนานุกรมการออกเสียงสำหรับโมเดลเสียงประสาทวิทยา",
          domainSnippet: "จังหวะวรรณยุกต์และความเป็นธรรมชาติ",
          metricBadge: "คะแนนทดสอบ 4.82 / 5.00 MOS",
          specs: ["คณะผู้ฟังเจ้าของภาษา", "ตรวจสอบดิกชันนารี G2P", "ให้คะแนนความอบอุ่นของเสียง"]
        },
        {
          id: "data-collection",
          title: "เก็บรวบรวมชุดข้อมูล AI (Data Collection)",
          category: "โซลูชันข้อมูล AI",
          description:
            "ไปป์ไลน์รวบรวมและกำกับข้อมูลเสียงพูด ข้อความ และสื่อหลายมิติ (Multimodal) อย่างเป็นระบบ เพื่อใช้ฝึกสอนและทดสอบโมเดลปัญญาประดิษฐ์ระดับโปรดักชัน",
          domainSnippet: "บทสนทนาโต้ตอบและแท็ก NER",
          metricBadge: "ความเห็นพ้องของผู้ตรวจ 99.1%",
          specs: ["คลังเสียงผู้พูดหลากหลาย", "ลบข้อมูลระบุตัวตน PII เข้มงวด", "ติดแท็กตามสกีมา"]
        },
        {
          id: "video-service",
          title: "บริการงานวิดีโอ (Video Service)",
          category: "การผลิตและตัดต่อสื่อดิจิทัล",
          description:
            "บริการตัดต่อวิดีโอครบวงจร วิดีโอสาธิตการใช้งานผลิตภัณฑ์ โมชันกราฟิก วิดีโอโปรโมตแบรนด์ และการทำคำบรรยายหลายภาษาที่ตรงตามจังหวะเวลาอย่างสมบูรณ์แบบ",
          domainSnippet: "มาสเตอร์ 4K 60fps มาตรฐาน SMPTE",
          metricBadge: "ความคลาดเคลื่อนซับไตเติล ±15ms",
          specs: ["ตัดต่อความแม่นยำสูง NLE", "โมชันกราฟิกและชี้เป้า UI", "ฝังซับไตเติล SRT/VTT"]
        }
      ]
    },
    companyIntro: {
      kicker: "เกี่ยวกับ TCAI",
      title: "เชื่อมโยงความเชี่ยวชาญของมนุษย์เข้ากับเทคโนโลยี",
      description:
        "TCAI ผสานความสามารถเฉพาะทางใน 5 ด้าน: แปลภาษา, ASR, TTS, การรวบรวมข้อมูล AI และบริการวิดีโอ โดยนำความเข้าใจลึกซึ้งของมนุษย์มาผสานกับกระบวนการทำงานที่เป็นมาตรฐาน",
      pillars: [
        {
          title: "ความเชี่ยวชาญของมนุษย์",
          description:
            "นักภาษาศาสตร์ วิศวกรเสียงอะคูสติก และผู้เชี่ยวชาญการเก็บข้อมูลที่ถ่ายทอดมิติความลึกซึ้งของบริบทที่ระบบอัตโนมัติไม่สามารถทำได้โดยลำพัง"
        },
        {
          title: "การส่งมอบที่ขับเคลื่อนด้วยคุณภาพ",
          description:
            "ระเบียบการตรวจสอบที่มีโครงสร้างชัดเจน ดัชนีความสอดคล้องของผู้ตรวจ และเกณฑ์การประเมินคุณภาพที่เข้มงวดตามมาตรฐานการวิจัย AI"
        },
        {
          title: "การสนับสนุนโครงการที่ปรับขนาดได้",
          description:
            "โครงสร้างพื้นฐานการดำเนินงานที่ยืดหยุ่น รองรับทั้งคู่ภาษาที่หลากหลาย ปริมาณการบันทึกเสียงขนาดใหญ่ และตารางผลิตสื่อหลายรูปแบบ"
        }
      ]
    },
    whyChoose: {
      kicker: "ทำไมต้องเลือก TCAI",
      title: "มาตรฐานวิศวกรรมที่สร้างบนความเข้าใจเฉพาะทางอย่างแท้จริง",
      description:
        "เราให้บริการแก่องค์กรเทคโนโลยีชั้นนำ สถาบันวิจัย AI และบริษัทระดับโลกที่ต้องการชุดข้อมูล Ground-Truth ที่เชื่อถือได้ เสียงคุณภาพสูง และการแปลภาษาที่แม่นยำ",
      items: [
        {
          title: "การสนับสนุนโครงการที่ยืดหยุ่น",
          description:
            "เราปรับจังหวะการทำงานและการจัดสรรทรัพยากรให้สอดรับกับสปรินต์ รอบการอัปเดตข้อมูล หรือกำหนดการเผยแพร่ของท่านโดยตรง"
        },
        {
          title: "การประกันคุณภาพที่มีแบบแผน",
          description:
            "งานทุกชุดผ่านการตรวจทานหลายระดับ การตรวจสอบความสม่ำเสมอ และการทดสอบตามข้อกำหนดอย่างครบถ้วนก่อนส่งมอบงานให้ลูกค้า"
        },
        {
          title: "ความเชี่ยวชาญแบบสหวิทยาการ",
          description:
            "ทีมงานของเรารวมเอานักแปลมืออาชีพ ผู้เชี่ยวชาญด้านเสียง ASR ผู้ประเมิน TTS ทีมจัดเก็บข้อมูล และนักตัดต่อวิดีโอไว้ภายใต้การบริหารโครงการแบบรวมศูนย์"
        },
        {
          title: "ส่งมอบงานที่ตอบโจทย์ธุรกิจ",
          description:
            "เรามุ่งเน้นส่งมอบชิ้นงานที่สามารถผสานเข้ากับระบบเทคโนโลยีเดิม ไปป์ไลน์ Machine Learning หรือช่องทางการตลาดของท่านได้อย่างราบรื่น"
        }
      ]
    },
    testimonials: {
      kicker: "เสียงตอบรับจากพันธมิตรและผลลัพธ์ของโครงการ",
      title: "ผลลัพธ์เชิงประจักษ์ด้านเสียง ภาษา และคลังข้อมูล AI",
      description:
        "ความสำเร็จทางวิศวกรรมและการปรับภาษาให้เข้ากับท้องถิ่น ร่วมกับพันธมิตรด้าน Conversational AI ชุดข้อมูล Machine Learning และสื่อมัลติมีเดียข้ามพรมแดน",
      selectFocus: "เลือกสายงาน:",
      verifiedOutcome: "ผลลัพธ์ที่ผ่านการตรวจสอบ",
      technicalMetricAudit: "การตรวจสอบดัชนีทางเทคนิค",
      partnerChallenge: "โจทย์และความท้าทายของพันธมิตร",
      tcaiDelivery: "แนวทางการส่งมอบของ TCAI",
      exploreSpecs: "ดูสเปกบริการ",
      auditParameters: "พารามิเตอร์การตรวจสอบและความแม่นยำ",
      complianceNote: "ได้รับการปกป้องตามมาตรฐาน ISO 17100 และสัญญา NDA องค์กร",
      caseCountText: "กรณีศึกษา",
      ctaQuestion: "ต้องการผลลัพธ์มาตรฐานระดับนี้สำหรับโครงการของคุณหรือไม่?",
      ctaAction: "ปรึกษารายละเอียดโครงการ"
    },
    workflow: {
      kicker: "ระเบียบวิธีปฏิบัติงานของเรา",
      title: "กระบวนการส่งมอบงาน 4 ขั้นตอนที่เป็นระบบ",
      description:
        "ทุกโครงการดำเนินตามขั้นตอนทางวิศวกรรมและภาษาศาสตร์ที่กำหนดไว้อย่างชัดเจน เพื่อรับประกันความรวดเร็ว ความปลอดภัยของข้อมูล และความถูกต้องที่พิสูจน์ได้",
      steps: [
        {
          number: "01",
          name: "ค้นหาและทำความเข้าใจ",
          tagline: "ทำความเข้าใจเป้าหมายของโครงการ",
          description:
            "เราวิเคราะห์ข้อกำหนด อนุกรมวิธาน ความละเอียดอ่อนของภาษาเป้าหมาย และรูปแบบผลลัพธ์ที่ต้องการผ่านการประชุมซักถามเชิงลึก",
          deliverables: ["เอกสารกำหนดขอบเขตงาน", "ข้อตกลงเกณฑ์คุณภาพ", "เกณฑ์การทดสอบชุดตัวอย่าง"]
        },
        {
          number: "02",
          name: "วางแผน",
          tagline: "กำหนดโครงสร้างขอบเขตงานและผลลัพธ์",
          description:
            "เรามอบหมายผู้เชี่ยวชาญเฉพาะด้าน กำหนดคู่มือการกำกับข้อมูลหรืออภิธานศัพท์การแปล และวางหมุดหมายการส่งมอบงาน",
          deliverables: ["ตารางเวลาดำเนินโครงการ", "คู่มือแนวทางและสไตล์ไกด์", "แผนการจัดสรรทรัพยากร"]
        },
        {
          number: "03",
          name: "ลงมือปฏิบัติ",
          tagline: "ดำเนินงานอย่างเคร่งครัดตามแผน",
          description:
            "ดำเนินงานตามข้อกำหนดที่ตกลงกันอย่างเข้มงวด พร้อมการติดตามงานต่อเนื่อง การตรวจเช็กตามระยะ และรอบการตอบข้อสงสัยทันท่วงที",
          deliverables: ["การส่งออกข้อมูลระหว่างงวด", "สรุปสถานะความคืบหน้า", "ระบบติดตามข้อซักถาม"]
        },
        {
          number: "04",
          name: "ตรวจสอบและส่งมอบ",
          tagline: "ตรวจสอบคุณภาพขั้นสุดท้ายและส่งมอบ",
          description:
            "ทีมตรวจสอบ QA ของเราดำเนินการทดสอบการยอมรับอย่างครอบคลุมเทียบกับเกณฑ์วัดคุณภาพ ก่อนส่งมอบข้อมูลหรือไฟล์สื่อฉบับสมบูรณ์",
          deliverables: ["แพ็กเกจข้อมูลที่ผ่านการตรวจสอบ", "รายงานการประกันคุณภาพ QA", "การประชุมสรุปหลังส่งมอบงาน"]
        }
      ]
    },
    industries: {
      kicker: "กลุ่มอุตสาหกรรมที่เราให้การสนับสนุน",
      title: "การปรับใช้ความเชี่ยวชาญเฉพาะทางในหลากหลายอุตสาหกรรม",
      description:
        "ส่งมอบความแม่นยำด้านภาษา การปรับเทียบเสียง และไปป์ไลน์ข้อมูลที่ออกแบบเฉพาะสำหรับระบบนิเวศทางธุรกิจที่มีมาตรฐานสูง",
      viewCaseStudies: "ดูโซลูชันสำหรับอุตสาหกรรม"
    },
    cta: {
      kicker: "เริ่มต้นโครงการของคุณ",
      title: "พร้อมยกระดับไปป์ไลน์ภาษา เสียงพูด หรือชุดข้อมูล AI ของคุณแล้วหรือยัง?",
      description:
        "ติดต่อทีมผู้เชี่ยวชาญของเราเพื่อปรึกษาข้อกำหนดโครงการทดสอบ ประเมินความเป็นไปได้ตามปริมาณงาน หรือขอรับข้อเสนอขอบเขตงานอย่างเป็นทางการ",
      buttonContact: "ส่งคำขอปรึกษาโครงการ",
      buttonServices: "ดูสเปกบริการทั้งหมด",
      trustNote: "กระบวนการทำงานสอดคล้องกับ ISO 17100 · สัญญาไม่เปิดเผยข้อมูล (NDA) เข้มงวด · มีทีมวิศวกรดูแลเฉพาะโครงการ"
    },
    footer: {
      legalDescription:
        "PT Teknologi Cipta Akustik Indonesia ให้บริการโซลูชันระดับองค์กรครอบคลุมทั้งงานแปลภาษา, ASR, TTS, การเก็บข้อมูล AI และบริการวิดีโอ",
      qualityStatement: "ระบบควบคุมคุณภาพเป็นระบบ และการรักษาความลับของโครงการอย่างเข้มงวด",
      companyHeading: "บริษัท",
      servicesHeading: "บริการหลัก",
      inquiriesHeading: "ติดต่อสอบถามโครงการ",
      inquiriesDescription:
        "มีข้อกำหนดเฉพาะ คู่ภาษาที่ต้องการ หรือปริมาณข้อมูลที่ต้องการประเมินหรือไม่? ติดต่อโต๊ะโครงการของเราได้ตลอดเวลา",
      draftInquiryBtn: "ส่งข้อความปรึกษาโครงการ",
      copyrightText: "PT Teknologi Cipta Akustik Indonesia สงวนลิขสิทธิ์ทั้งหมด",
      aboutOrg: "เกี่ยวกับองค์กร",
      collaboratorNetwork: "เครือข่ายผู้เชี่ยวชาญ",
      contactDesk: "ช่องทางติดต่อ"
    },
    pages: {
      services: {
        breadcrumbs: "บริการ",
        kicker: "ศักยภาพหลักและขอบเขตการทำงาน",
        title: "แปลภาษา, ASR, TTS, จัดเตรียมข้อมูล AI และบริการวิดีโอ",
        subtitle:
          "พบกับขอบเขตการส่งมอบงานที่เป็นระบบ ครอบคลุมทั้งการแปลภาษาระดับมืออาชีพ, การจูนระบบรู้จำเสียงพูด (ASR), การประเมินคุณภาพเสียงสังเคราะห์ (TTS), การเก็บข้อมูล AI ความสะอาดสูง และบริการวิดีโอมาตรฐานบรอดคาสต์",
        allFilter: "บริการทั้งหมด",
        servicePrefix: "บริการที่",
        inquiryTitle: "สอบถามโครงการ",
        inquiryPrompt: "พร้อมประเมินขอบเขตงาน กรอบเวลา หรือเกณฑ์ทดสอบสำหรับ",
        discussServiceBtn: "ปรึกษางาน",
        technicalSpecsTitle: "ข้อมูลจำเพาะทางเทคนิค (TECHNICAL SPECIFICATIONS)",
        scopeTitle: "ขอบเขตการดำเนินงานและผลงานที่ส่งมอบ",
        useCasesTitle: "ตัวอย่างการนำไปใช้งานจริง",
        benefitsTitle: "คุณค่าและประโยชน์ที่ลูกค้าจะได้รับ",
        applicableContext: "บริบทการนำไปใช้งาน"
      },
      about: {
        breadcrumbs: "เกี่ยวกับเรา",
        title: "เกี่ยวกับ PT Teknologi Cipta Akustik Indonesia",
        subtitle:
          "เชื่อมโยงดุลยพินิจของมนุษย์และความแม่นยำทางวิศวกรรมใน 5 ด้าน: แปลภาษา, ASR, TTS, การเก็บข้อมูล AI และบริการวิดีโอ",
        missionTitle: "พันธกิจขององค์กร",
        visionTitle: "วิสัยทัศน์เชิงกลยุทธ์",
        coreValuesTitle: "ค่านิยมและหลักการชี้นำของเรา"
      },
      contact: {
        breadcrumbs: "ติดต่อเรา",
        title: "เริ่มต้นปรึกษาโครงการกับเรา",
        subtitle:
          "ระบุข้อกำหนด คู่ภาษา หรือเป้าหมายกรอบเวลาของคุณ ทีมงานของเราจะตรวจสอบและติดต่อกลับโดยเร็วที่สุด",
        formName: "ชื่อ - นามสกุล",
        formEmail: "อีเมลติดต่อสำหรับงาน",
        formOrg: "องค์กร / บริษัท",
        formService: "บริการหลักที่ท่านสนใจ",
        formMessage: "ขอบเขตงานและข้อกำหนดของโครงการ",
        formSubmit: "ส่งข้อมูลปรึกษาโครงการ",
        formSuccess: "ขอบคุณสำหรับการติดต่อ ผู้จัดการโครงการของเราจะตรวจสอบข้อมูลและติดต่อกลับภายใน 1 วันทำการ"
      },
      careers: {
        breadcrumbs: "ร่วมงานกับเรา",
        title: "เครือข่ายผู้เชี่ยวชาญและผู้ร่วมงาน",
        subtitle:
          "ร่วมเป็นส่วนหนึ่งของเครือข่ายนักแปล วิศวกรเสียง ผู้กำกับข้อมูล นักพากย์เสียง และมืออาชีพด้านงานวิดีโอทั่วโลก",
        openRolesTitle: "ตำแหน่งผู้เชี่ยวชาญที่เปิดรับ",
        applyBtn: "สมัครเข้าร่วมบัญชีรายชื่อผู้เชี่ยวชาญ"
      },
      industriesPage: {
        breadcrumbs: "กลุ่มธุรกิจ",
        title: "โซลูชันสำหรับกลุ่มอุตสาหกรรมระดับองค์กร",
        subtitle:
          "กระบวนการทำงานด้านภาษา เสียงพูด และข้อมูลมัลติโมดัลที่ออกแบบให้สอดคล้องกับมาตรฐานอุตสาหกรรมเฉพาะทาง"
      }
    }
  }
};
