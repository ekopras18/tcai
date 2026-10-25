import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { COMPANY_INFO } from "../data/company";
import { CTASection } from "../components/sections/CTASection";
import { FadeInView, StaggerContainer, StaggerItem } from "../components/ui/FadeInView";
import { 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Compass, 
  CheckCircle, 
  RefreshCw, 
  Lock, 
  Users2 
} from "lucide-react";

export const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();
  const isThai = language === "th";

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 text-white pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs currentPage={t.pages.about.breadcrumbs} />
          <FadeInView direction="up" className="max-w-3xl space-y-4 pt-2">
            <p className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
              {isThai ? "อัตลักษณ์และแนวทางการดำเนินงาน" : "Identity & Operational Approach"}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              {t.pages.about.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
              {t.pages.about.subtitle}
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Section 1: Company Overview */}
      <section className="py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeInView direction="up" className="lg:col-span-5 space-y-4">
              <SectionHeading
                kicker={isThai ? "ข้อมูลองค์กร" : "Company Profile"}
                title={isThai ? "เกี่ยวกับ TCAI Information Technology" : "About TCAI Information Technology"}
                description={
                  isThai
                    ? "ผู้ให้บริการเฉพาะทางด้านชุดข้อมูลความเที่ยงตรงสูง โซลูชันภาษาศาสตร์ และไปป์ไลน์งานสร้างสรรค์สื่อดิจิทัล"
                    : "A specialized provider of high-fidelity data, linguistic solutions, and digital creative pipelines."
                }
              />
            </FadeInView>
            <FadeInView delay={0.1} direction="up" className="lg:col-span-7 space-y-6 text-base text-slate-600 leading-relaxed">
              <p>
                <strong>{COMPANY_INFO.legalEntity}</strong> {isThai
                  ? "ก่อตั้งขึ้นเพื่อเชื่อมช่องว่างระหว่างระบบดิจิทัลอัตโนมัติกับความละเอียดอ่อนที่แอปพลิเคชันระดับองค์กรต้องการ เมื่อโมเดลปัญญาประดิษฐ์และแพลตฟอร์มสื่อดิจิทัลพัฒนาขึ้น การคำนวณดิบเพียงอย่างเดียวไม่สามารถทดแทนความเข้าใจทางวัฒนธรรมของนักภาษาศาสตร์เจ้าของภาษา การตรวจสอบของวิศวกรเสียง หรือทักษะการตัดต่อของช่างภาพวิดีโอที่มีประสบการณ์ได้"
                  : "was established to bridge the gap between automated digital systems and the nuanced precision required for high-stakes enterprise applications. As artificial intelligence models and digital media platforms evolve, raw computation alone cannot replicate the cultural accuracy of native linguists, the critical discernment of acoustic specialists, or the visual craftsmanship of seasoned video editors."}
              </p>
              <p>
                {isThai
                  ? "องค์กรของเรารวบรวมผู้เชี่ยวชาญใน 5 สาขาหลัก ได้แก่ แปลภาษา (Translate), รู้จำเสียงพูด (ASR), สังเคราะห์เสียงพูด (TTS), จัดเตรียมข้อมูล AI (Data Collection) และบริการงานวิดีโอ (Video Service) เราสร้างขั้นตอนการทำงานที่ขยายตัวได้อย่างราบรื่นตามความต้องการของลูกค้า เพื่อให้ได้มาตรฐานที่จำเป็นสำหรับการฝึกสอนโมเดล AI การปรับซอฟต์แวร์สู่ตลาดสากล และการส่งมอบสื่อคุณภาพมาตรฐานบรอดคาสต์"
                  : "Our organization brings together domain-tested specialists across Translate (language and localization), ASR (automatic speech recognition), TTS (text-to-speech evaluation), Data Collection (AI data pipelines), and Video Service (digital media production). We structure workflows that scale smoothly with client requirements, providing the operational rigor required to train production AI models, adapt software for international markets, and deliver broadcast-quality media."}
              </p>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-lg bg-slate-50 border border-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{isThai ? "ความปลอดภัยของข้อมูลสูงสุด" : "Rigorous Data Hygiene"}</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    {isThai
                      ? "ชุดข้อมูลกรรมสิทธิ์และทรัพย์สินทางปัญญาของลูกค้าอยู่ภายใต้สัญญา NDA เข้มงวด"
                      : "Proprietary datasets and client IP handled under strict confidentiality."}
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-lg bg-slate-50 border border-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                    <Users2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{isThai ? "มนุษย์ตรวจสอบในทุกขั้นตอน" : "Human-in-the-Loop"}</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    {isThai
                      ? "ผู้เชี่ยวชาญเฉพาะด้านตรวจสอบความหมายและคำศัพท์เชิงลึกทุกมิติ"
                      : "Subject matter specialists validating nuanced domain terminology."}
                  </p>
                </motion.div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Section 2: Mission & Vision */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeInView direction="up">
            <SectionHeading
              centered
              kicker={isThai ? "เป้าหมายและทิศทาง" : "Purpose & Direction"}
              title={isThai ? "พันธกิจและวิสัยทัศน์" : "Mission & Vision"}
              description={isThai ? "หลักการดำเนินงานและกรอบการส่งมอบบริการของเรา" : "Guiding our operational principles and service delivery frameworks."}
            />
          </FadeInView>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission */}
            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-white p-8 rounded-xl border border-slate-200 space-y-4 shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Target className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {t.pages.about.missionTitle}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  &ldquo;{isThai
                    ? "เพื่อเสริมพลังให้แก่องค์กรทั่วโลกผ่านโซลูชัน Translate, ASR, TTS, Data Collection และ Video Service ที่เชื่อถือได้ โดยขับเคลื่อนด้วยความแม่นยำของมนุษย์และวิศวกรรมคุณภาพที่เข้มงวด"
                    : COMPANY_INFO.mission}&rdquo;
                </p>
              </motion.div>
            </StaggerItem>

            {/* Vision */}
            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-white p-8 rounded-xl border border-slate-200 space-y-4 shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center">
                  <Compass className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {t.pages.about.visionTitle}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  &ldquo;{isThai
                    ? "เพื่อก้าวสู่การเป็นพันธมิตรบริการเทคโนโลยีที่ได้รับความไว้วางใจ เชื่อมโยงความเชี่ยวชาญของมนุษย์ คุณภาพข้อมูลที่พิสูจน์ได้ และนวัตกรรมดิจิทัลเข้าด้วยกัน"
                    : COMPANY_INFO.vision}&rdquo;
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Section 3: Core Values */}
      <section className="py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <FadeInView direction="up">
            <SectionHeading
              centered
              kicker={isThai ? "มาตรฐานขององค์กร" : "Organizational Standards"}
              title={t.pages.about.coreValuesTitle}
              description={
                isThai
                  ? "หลักการพื้นฐานที่ชี้นำความร่วมมือกับลูกค้าทุกโครงการและขั้นตอนภายในองค์กร"
                  : "The bedrock principles that govern every client collaboration and internal project phase."
              }
            />
          </FadeInView>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {COMPANY_INFO.coreValues.map((val) => (
              <StaggerItem key={val.title} className="h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full p-6 rounded-xl bg-slate-50/80 border border-slate-200 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-colors"
                >
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-md bg-blue-600/10 text-blue-600 flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 4: Our Approach */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeInView direction="up">
            <SectionHeading
              kicker={isThai ? "ระเบียบปฏิบัติงาน" : "Operational Rigor"}
              title={isThai ? "แนวทางการส่งมอบงานของเรา" : "Our Delivery Approach"}
              description={
                isThai
                  ? "วิธีที่เรารักษาคุณภาพให้สม่ำเสมอในทุกสกีมาข้อมูล คู่ภาษา และรูปแบบสื่อ"
                  : "How we maintain consistent quality across varied data schemas, language pairs, and media formats."
              }
            />
          </FadeInView>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-white p-6 rounded-xl border border-slate-200 space-y-3 hover:border-slate-300 hover:shadow-xs transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {isThai ? "รากฐาน Human-in-the-Loop" : "Human-in-the-Loop Foundation"}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {isThai
                    ? "แม้ระบบอัตโนมัติจะช่วยเพิ่มประสิทธิภาพ แต่ผลงานทุกชิ้นต้องผ่านการตรวจสอบโดยนักภาษาศาสตร์ วิศวกรเสียง หรือผู้ตรวจกำกับข้อมูลที่เป็นมนุษย์เสมอ"
                    : "Automated tools provide initial efficiency, but every deliverable undergoes human review by qualified native linguists, audio engineers, or annotation reviewers."}
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-white p-6 rounded-xl border border-slate-200 space-y-3 hover:border-slate-300 hover:shadow-xs transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {isThai ? "การปรับเทียบแบบวนซ้ำ (Calibration Loops)" : "Iterative Calibration Loops"}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {isThai
                    ? "ก่อนการผลิตเต็มรูปแบบ เราทำการทดสอบชุดนำร่องเพื่อปรับเทียบแนวทาง แก้ปัญหาเคสเฉพาะทาง และปรับให้ตรงกับเกณฑ์มาตรฐานของลูกค้าอย่างแม่นยำ"
                    : "Prior to full-scale production, we conduct pilot verification batches to calibrate guidelines, resolve borderline edge cases, and align with client benchmarks."}
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-white p-6 rounded-xl border border-slate-200 space-y-3 hover:border-slate-300 hover:shadow-xs transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {isThai ? "การรักษาความลับและการปฏิบัติตามกฎเกณฑ์" : "Confidentiality & Compliance"}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {isThai
                    ? "ผู้เชี่ยวชาญทุกคนทำงานภายใต้สัญญาไม่เปิดเผยข้อมูล (NDA) พร้อมระบบสิทธิ์เข้าถึงไฟล์ตามบทบาท เพื่อรักษาความปลอดภัยของทรัพย์สินทางปัญญา"
                    : "All specialists work under non-disclosure protocols with role-segregated access to source files, preserving the security of pre-release intellectual property."}
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default AboutPage;
