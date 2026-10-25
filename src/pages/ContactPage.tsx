import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigation } from "../context/NavigationContext";
import { useLanguage } from "../context/LanguageContext";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { COMPANY_INFO } from "../data/company";
import { SERVICES_DATA } from "../data/services";
import { FadeInView } from "../components/ui/FadeInView";
import { 
  Mail, 
  Send, 
  Copy, 
  CheckCheck, 
  Clock, 
  ShieldCheck, 
  HelpCircle,
  AlertCircle
} from "lucide-react";

interface FormState {
  fullName: string;
  email: string;
  company: string;
  serviceInterest: string;
  projectDetails: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  serviceInterest?: string;
  projectDetails?: string;
}

export const ContactPage: React.FC = () => {
  const { activeParam } = useNavigation();
  const { language, t } = useLanguage();
  const isThai = language === "th";

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    company: "",
    serviceInterest: "Translate",
    projectDetails: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedDraft, setSubmittedDraft] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (activeParam) {
      const match = SERVICES_DATA.find(
        (s) => s.id === activeParam || s.slug === activeParam
      );
      if (match) {
        setFormData((prev) => ({ ...prev, serviceInterest: match.title }));
      }
    }
  }, [activeParam]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = isThai ? "กรุณากรอกชื่อ - นามสกุล" : "Please provide your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = isThai ? "กรุณากรอกอีเมลสำหรับงาน" : "Please provide your business email.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = isThai ? "กรุณากรอกที่อยู่อีเมลที่ถูกต้อง" : "Please enter a valid email address.";
    }

    if (!formData.company.trim()) {
      newErrors.company = isThai ? "กรุณาระบุชื่อบริษัทหรือองค์กร" : "Please provide your organization or company name.";
    }

    if (!formData.serviceInterest) {
      newErrors.serviceInterest = isThai ? "กรุณาเลือกบริการที่สนใจ" : "Please select a service interest.";
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = isThai ? "กรุณากรอกรายละเอียดโครงการ" : "Please describe your project requirements or objectives.";
    } else if (formData.projectDetails.trim().length < 15) {
      newErrors.projectDetails = isThai ? "กรุณากรอกข้อมูลอย่างน้อย 15 ตัวอักษร" : "Please provide at least 15 characters describing your requirements.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(
      `[Project Inquiry] ${formData.serviceInterest} — ${formData.company}`
    );
    const body = encodeURIComponent(
      `To TCAI Information Technology Project Team,\n\nI would like to inquire about project collaboration.\n\nClient Details:\n- Name: ${formData.fullName}\n- Business Email: ${formData.email}\n- Company / Organization: ${formData.company}\n- Service Interest: ${formData.serviceInterest}\n\nProject Scope & Objectives:\n${formData.projectDetails}\n\nBest regards,\n${formData.fullName}\n`
    );
    return `mailto:${COMPANY_INFO.contact.officialEmail}?subject=${subject}&body=${body}`;
  };

  const getDraftText = () => {
    return `To: ${COMPANY_INFO.contact.officialEmail}
Subject: [Project Inquiry] ${formData.serviceInterest} — ${formData.company}

Dear TCAI Project Team,

I would like to discuss potential collaboration regarding: ${formData.serviceInterest}.

Client Details:
- Name: ${formData.fullName}
- Email: ${formData.email}
- Company: ${formData.company}
- Service Area: ${formData.serviceInterest}

Project Specifications & Scope:
${formData.projectDetails}

Looking forward to your evaluation and response.

Regards,
${formData.fullName}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedDraft(getDraftText());
      setCopied(false);
      window.location.href = generateMailtoUrl();
    }
  };

  const handleCopy = () => {
    if (submittedDraft) {
      navigator.clipboard.writeText(submittedDraft);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs currentPage={t.pages.contact.breadcrumbs} />
          <FadeInView direction="up" className="max-w-3xl space-y-4 pt-2">
            <p className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
              {isThai ? "การปรึกษาโครงการ" : "Project Consultation"}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              {t.pages.contact.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
              {t.pages.contact.subtitle}
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Communication Channels & Operational Notes */}
            <FadeInView direction="up" className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {isThai ? "ช่องทางติดต่อและรับเรื่องโดยตรง" : "Direct Inquiries & Intake"}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {isThai
                    ? "เราร่วมงานกับทีมพัฒนาผลิตภัณฑ์ ผู้นำฝ่าย Machine Learning ผู้อำนวยการด้านการปรับภาษา และโปรดิวเซอร์สื่อทั่วโลก"
                    : "We engage with product teams, machine learning leads, localization directors, and creative producers worldwide."}
                </p>
              </div>

              {/* Contact Card */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {isThai ? "อีเมลทางการสำหรับโครงการ" : "Official Project Email"}
                  </span>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" />
                    <motion.a
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.15 }}
                      href={`mailto:${COMPANY_INFO.contact.officialEmail}`}
                      className="text-sm sm:text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors break-all cursor-pointer"
                    >
                      {COMPANY_INFO.contact.officialEmail}
                    </motion.a>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-200/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {isThai ? "โต๊ะรับสมัครผู้ร่วมงานและผู้เชี่ยวชาญ" : "Collaborator & Talent Desk"}
                  </span>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-cyan-600 shrink-0" aria-hidden="true" />
                    <motion.a
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.15 }}
                      href={`mailto:${COMPANY_INFO.contact.careersEmail}`}
                      className="text-sm sm:text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors break-all cursor-pointer"
                    >
                      {COMPANY_INFO.contact.careersEmail}
                    </motion.a>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-200/80 text-xs text-slate-600">
                  <div className="flex items-center gap-2 font-semibold text-slate-900">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
                    <span>{isThai ? "ระยะเวลาการตอบกลับ" : "Response Timeframe"}</span>
                  </div>
                  <p>
                    {isThai
                      ? "ข้อเสนอโครงการและ RFP ทั้งหมดจะได้รับการตอบรับภายใน 24 ถึง 48 ชั่วโมงในวันทำการปกติ"
                      : "All project briefs and RFPs are acknowledged within 24 to 48 hours on standard business days."}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-200/80 text-xs text-slate-600">
                  <div className="flex items-center gap-2 font-semibold text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
                    <span>{isThai ? "การรักษาความลับ NDA" : "Confidentiality & Non-Disclosure"}</span>
                  </div>
                  <p>
                    {isThai
                      ? "เราพร้อมลงนามข้อตกลงไม่เปิดเผยข้อมูล (NDA) ก่อนการตรวจสอบชุดข้อมูล กรรมสิทธิ์ซอร์สโค้ด หรือไฟล์สื่อของท่าน"
                      : "We readily execute mutual NDAs prior to reviewing proprietary datasets, source code, or pre-release media assets."}
                  </p>
                </div>
              </div>

              {/* Explanatory note on client-side form */}
              <div className="p-4 rounded-lg bg-blue-50/70 border border-blue-100 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-xs text-slate-700 leading-relaxed">
                  <strong>{isThai ? "ข้อสังเกต:" : "Notice:"}</strong>{" "}
                  {isThai
                    ? "เว็บไซต์นี้ทำงานแบบ Client-side สถิตโดยไม่มีฐานข้อมูลระยะไกล การกรอกฟอร์มนี้จะตรวจสอบความถูกต้องและสร้างร่างอีเมลในโปรแกรมอีเมลของคุณโดยอัตโนมัติ"
                    : "This website operates strictly as a static client-side application without a remote database. Completing this form validates your inputs and compiles a structured email draft in your local mail client."}
                </div>
              </div>
            </FadeInView>

            {/* Right: Validated Form */}
            <FadeInView delay={0.1} direction="up" className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {isThai ? "แบบฟอร์มปรึกษาโครงการ" : "Project Inquiry Form"}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isThai ? "กรอกข้อมูลความต้องการเพื่อสร้างร่างข้อความสอบถาม" : "Fill in your project requirements to generate an inquiry draft."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    {t.pages.contact.formName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={isThai ? "เช่น สมชาย มั่นคง" : "e.g. Sarah Jenkins"}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                      errors.fullName
                        ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                        : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Business Email & Company in 2-columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      {t.pages.contact.formEmail} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                        errors.email
                          ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                          : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      {t.pages.contact.formOrg} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={isThai ? "เช่น สยาม อินโนเวชัน จำกัด" : "Acme Technologies"}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                        errors.company
                          ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                          : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                      }`}
                    />
                    {errors.company && (
                      <p className="text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.company}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Interest */}
                <div className="space-y-1.5">
                  <label htmlFor="serviceInterest" className="block text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    {t.pages.contact.formService} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors"
                  >
                    <option value="Translate">
                      {isThai ? "แปลภาษา (Translate)" : "Translate (Language & Localization)"}
                    </option>
                    <option value="ASR (Automatic Speech Recognition)">
                      {isThai ? "รู้จำเสียงพูด ASR (Automatic Speech Recognition)" : "ASR (Automatic Speech Recognition)"}
                    </option>
                    <option value="TTS (Text-to-Speech)">
                      {isThai ? "สังเคราะห์เสียงพูด TTS (Text-to-Speech & Evaluation)" : "TTS (Text-to-Speech & Evaluation)"}
                    </option>
                    <option value="Data Collection">
                      {isThai ? "เก็บรวบรวมชุดข้อมูล AI (Data Collection)" : "Data Collection (AI Data Solutions)"}
                    </option>
                    <option value="Video Service">
                      {isThai ? "บริการงานวิดีโอ (Video Service)" : "Video Service (Media Production)"}
                    </option>
                    <option value="Comprehensive / Multi-Service Project">
                      {isThai ? "โครงการครบวงจรหลายบริการ (Multi-Service Project)" : "Comprehensive / Multi-Service Project"}
                    </option>
                  </select>
                </div>

                {/* Project Details */}
                <div className="space-y-1.5">
                  <label htmlFor="projectDetails" className="block text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    {t.pages.contact.formMessage} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    rows={5}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder={
                      isThai
                        ? "อธิบายเป้าหมายโครงการ ภาษาเป้าหมาย ปริมาณโดยประมาณ และกรอบเวลาที่คาดหวัง..."
                        : "Briefly describe your objectives, target languages or data schemas, estimated volumes, and expected delivery timeline..."
                    }
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                      errors.projectDetails
                        ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                        : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                    }`}
                  />
                  {errors.projectDetails && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.projectDetails}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.015, y: -1 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ duration: 0.15 }}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.pages.contact.formSubmit}</span>
                  </motion.button>
                </div>
              </form>

              {/* Submitted Draft Preview Confirmation */}
              <AnimatePresence>
                {submittedDraft && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                    className="mt-6 p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4 overflow-hidden"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                        <CheckCheck className="w-4 h-4 text-emerald-600" />
                        <span>{isThai ? "ร่างอีเมลได้รับการตรวจสอบแล้ว" : "Validated Draft Prepared"}</span>
                      </p>
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        onClick={handleCopy}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                      >
                        {copied ? (
                          <>
                            <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{isThai ? "คัดลอกลงคลิปบอร์ดแล้ว!" : "Copied to Clipboard!"}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>{isThai ? "คัดลอกข้อความ" : "Copy Message"}</span>
                          </>
                        )}
                      </motion.button>
                    </div>

                    <div className="rounded-lg bg-white border border-slate-200 p-4 font-mono text-xs text-slate-700 whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
                      {submittedDraft}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <motion.a
                        whileHover={{ scale: 1.025, y: -1 }}
                        whileTap={{ scale: 0.975 }}
                        transition={{ duration: 0.15 }}
                        href={generateMailtoUrl()}
                        className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-xs cursor-pointer"
                      >
                        <Mail className="w-4 h-4" />
                        <span>{isThai ? "เปิดใหม่ในแอปอีเมล" : "Re-open in Mail App"}</span>
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeInView>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
