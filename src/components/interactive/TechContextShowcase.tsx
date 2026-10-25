import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Languages, 
  AudioWaveform, 
  Volume2, 
  Database, 
  Video, 
  Play, 
  Pause, 
  CheckCircle2, 
  Sliders, 
  Layers, 
  Activity, 
  Sparkles,
  Maximize2,
  VolumeX,
  Volume1,
  Tag
} from "lucide-react";

type ActiveTab = "translate" | "asr" | "tts" | "data-collection" | "video-service";

interface TechContextShowcaseProps {
  initialTab?: ActiveTab;
  onSelectService?: (tab: ActiveTab) => void;
}

export const TechContextShowcase: React.FC<TechContextShowcaseProps> = ({
  initialTab = "asr",
  onSelectService
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(initialTab);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [selectedLang, setSelectedLang] = useState<"id" | "ja" | "de">("id");
  const [selectedPersona, setSelectedPersona] = useState<string>("executive");
  const [timecode, setTimecode] = useState<string>("00:01:24:18");

  // Simulated timecode ticker when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      const now = new Date();
      const s = String(now.getSeconds()).padStart(2, "0");
      const ms = String(Math.floor(now.getMilliseconds() / 40)).padStart(2, "0");
      setTimecode(`00:01:${s}:${ms}`);
    }, 120);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const tabs = [
    { id: "translate" as const, label: "Translate", icon: Languages, color: "text-indigo-400", border: "border-indigo-500", bg: "bg-indigo-500/10" },
    { id: "asr" as const, label: "ASR", icon: AudioWaveform, color: "text-violet-400", border: "border-violet-500", bg: "bg-violet-500/10" },
    { id: "tts" as const, label: "TTS", icon: Volume2, color: "text-amber-400", border: "border-amber-500", bg: "bg-amber-500/10" },
    { id: "data-collection" as const, label: "Data Collection", icon: Database, color: "text-teal-400", border: "border-teal-500", bg: "bg-teal-500/10" },
    { id: "video-service" as const, label: "Video Service", icon: Video, color: "text-rose-400", border: "border-rose-500", bg: "bg-rose-500/10" },
  ];

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (onSelectService) {
      onSelectService(tab);
    }
  };

  return (
    <div className="w-full rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden flex flex-col text-slate-100 font-sans">
      {/* Top Console Navigation */}
      <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-[11px] font-mono text-slate-400 ml-2 tracking-wide hidden sm:inline">
            TCAI WORKSTATION CONSOLE
          </span>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 shrink-0">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <motion.button
                key={t.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleTabChange(t.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? `${t.bg} ${t.color} border border-slate-700 shadow-xs`
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{t.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="p-5 sm:p-6 min-h-[360px] flex flex-col justify-between relative bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/90">
        <AnimatePresence mode="wait">
          {/* TAB 1: TRANSLATE */}
          {activeTab === "translate" && (
            <motion.div
              key="translate"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-mono text-[11px] border border-indigo-500/30">
                    CAT Engine v4.2
                  </span>
                  <span className="text-slate-400">Pair:</span>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-white">English (US)</span>
                    <span className="text-indigo-400">➔</span>
                    <select
                      value={selectedLang}
                      onChange={(e) => setSelectedLang(e.target.value as "id" | "ja" | "de")}
                      className="bg-slate-900 border border-slate-700 text-white rounded px-2 py-0.5 text-xs focus:outline-none focus:border-indigo-500"
                    >
                      <option value="id">Indonesian (ID)</option>
                      <option value="ja">Japanese (JA)</option>
                      <option value="de">German (DE)</option>
                    </select>
                  </div>
                </div>
                <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Dual QA Signoff</span>
                </span>
              </div>

              {/* Source & Target Panels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>SOURCE STRING #4182</span>
                    <span className="text-indigo-400">Technical UI</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed font-sans">
                    &ldquo;Configure multi-speaker acoustic model training across conversational audio datasets and evaluate phonetic boundary alignment.&rdquo;
                  </p>
                  <div className="pt-2 text-[10px] text-slate-400 border-t border-slate-800/80 flex items-center gap-2 font-mono">
                    <span className="text-indigo-400">Glossary Matches:</span>
                    <span>acoustic model · phonetic alignment</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-500/30 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-indigo-300 font-mono">
                    <span>TARGET TRANSLATION</span>
                    <span className="text-emerald-400">Confidence: 99.4%</span>
                  </div>
                  <p className="text-white leading-relaxed font-sans">
                    {selectedLang === "id" &&
                      "“Konfigurasikan pelatihan model akustik multi-pembicara di seluruh dataset audio percakapan dan evaluasi penyelarasan batas fonetik.”"}
                    {selectedLang === "ja" &&
                      "「対話音声データセット全体でマルチスピーカー音響モデルのトレーニングを設定し、音素境界アライメントを評価します。」"}
                    {selectedLang === "de" &&
                      "„Konfigurieren Sie das Multi-Speaker-Akustikmodelltraining über Konversations-Audiodatensätze hinweg und bewerten Sie die phonetische Grenzausrichtung.“"}
                  </p>
                  <div className="pt-2 text-[10px] text-indigo-300/80 border-t border-indigo-500/20 flex items-center justify-between font-mono">
                    <span>Terminology Match: 100%</span>
                    <span className="text-emerald-400">Native Reviewer Approved</span>
                  </div>
                </div>
              </div>

              {/* Translation Metrics */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center font-mono text-[11px]">
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">BLEU / TER SCORE</div>
                  <div className="text-indigo-400 font-bold text-sm">98.6 / 100</div>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">CAT MEMORY REUSE</div>
                  <div className="text-emerald-400 font-bold text-sm">74.2% Leveraged</div>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">ISO 17100 TEP</div>
                  <div className="text-white font-bold text-sm">Certified QA</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: ASR (Automatic Speech Recognition) */}
          {activeTab === "asr" && (
            <motion.div
              key="asr"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-400 font-mono text-[11px] border border-violet-500/30">
                    ASR Acoustic Pipeline
                  </span>
                  <span className="text-slate-400 font-mono">48 kHz / 24-bit PCM</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-violet-400">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                  <span>WER: 3.4% · Ground Truth</span>
                </div>
              </div>

              {/* Dynamic Waveform Visualizer */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-violet-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-8 h-8 rounded-lg bg-violet-600 hover:bg-violet-500 text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </motion.button>
                    <div className="font-mono text-xs text-white">
                      <span>{timecode}</span>
                      <span className="text-slate-500"> / 00:04:850</span>
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
                    <span>SNR: +38.2 dB</span>
                    <span className="text-slate-600">|</span>
                    <span className="text-emerald-400">Clean Studio</span>
                  </div>
                </div>

                {/* Animated Audio Equalizer Bars */}
                <div className="h-16 flex items-end justify-between gap-1 px-2 pt-2 bg-slate-950/80 rounded-lg border border-slate-800 overflow-hidden">
                  {[
                    18, 32, 54, 78, 62, 85, 40, 92, 70, 48, 66, 88, 95, 74, 52, 38,
                    80, 64, 45, 90, 72, 58, 84, 96, 68, 50, 77, 86, 60, 42, 65, 82
                  ].map((height, i) => (
                    <motion.div
                      key={i}
                      animate={
                        isPlaying
                          ? {
                              height: [
                                `${Math.max(12, height * 0.4)}%`,
                                `${Math.min(95, height * 1.05)}%`,
                                `${Math.max(16, height * 0.6)}%`
                              ]
                            }
                          : { height: `${height * 0.5}%` }
                      }
                      transition={{
                        duration: 0.5 + (i % 5) * 0.1,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-full rounded-t bg-gradient-to-t from-violet-600 to-cyan-400 min-h-[4px]"
                    />
                  ))}
                </div>

                {/* Time-aligned phonetic transcript tags */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                    <span>TIME-ALIGNED PHONETIC BOUNDARY TIMECODES</span>
                    <span className="text-violet-400">±10ms precision</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-white">
                      <span className="text-slate-400 text-[9px] mr-1">00:00.12</span>
                      &ldquo;Automatic&rdquo;
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-white">
                      <span className="text-slate-400 text-[9px] mr-1">00:00.64</span>
                      &ldquo;Speech&rdquo;
                    </span>
                    <span className="px-2 py-1 rounded bg-violet-900/60 border border-violet-500/50 text-violet-200">
                      <span className="text-violet-400 text-[9px] mr-1">00:01.08</span>
                      &ldquo;Recognition&rdquo;
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-white">
                      <span className="text-slate-400 text-[9px] mr-1">00:01.82</span>
                      &ldquo;Benchmark&rdquo;
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: TTS (Text-to-Speech) */}
          {activeTab === "tts" && (
            <motion.div
              key="tts"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono text-[11px] border border-amber-500/30">
                    Neural Voice Synthesis QA
                  </span>
                  <span className="text-slate-400 font-mono">MOS Score: 4.82 / 5.00</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-slate-400">Voice Persona:</span>
                  <select
                    value={selectedPersona}
                    onChange={(e) => setSelectedPersona(e.target.value)}
                    className="bg-slate-900 border border-slate-700 text-white rounded px-2 py-0.5 text-xs focus:outline-none focus:border-amber-500"
                  >
                    <option value="executive">Executive Warm (F)</option>
                    <option value="narrator">Documentary Deep (M)</option>
                    <option value="conversational">Conversational Agile (F)</option>
                  </select>
                </div>
              </div>

              {/* Pitch Curve & Prosody Display */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-300 text-[11px]">
                    PROSODY & PITCH CONTOUR (F0 FREQUENCY)
                  </span>
                  <span className="font-mono text-amber-400 text-[11px]">
                    Mean F0: 218 Hz · Variance: 24.6%
                  </span>
                </div>

                {/* Simulated Pitch Wave SVG */}
                <div className="h-20 bg-slate-950 rounded-lg border border-slate-800 p-2 relative flex items-center overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 400 80" preserveAspectRatio="none">
                    <motion.path
                      d="M 0 40 Q 40 10, 80 40 T 160 40 T 240 20 T 320 50 T 400 35"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                      animate={{
                        d: isPlaying
                          ? [
                              "M 0 40 Q 40 10, 80 40 T 160 40 T 240 20 T 320 50 T 400 35",
                              "M 0 40 Q 40 60, 80 30 T 160 55 T 240 15 T 320 40 T 400 30",
                              "M 0 40 Q 40 10, 80 40 T 160 40 T 240 20 T 320 50 T 400 35"
                            ]
                          : "M 0 40 Q 40 30, 80 40 T 160 40 T 240 35 T 320 45 T 400 40"
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <path
                      d="M 0 40 L 400 40"
                      fill="none"
                      stroke="#334155"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  </svg>
                  <div className="absolute right-3 top-2 px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono border border-amber-500/40">
                    G2P Accuracy: 99.8%
                  </div>
                </div>

                {/* Synthesis Output Script */}
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-200">
                  <p className="italic">
                    &ldquo;Delivering human-caliber vocal warmth with neural synthetic speech precision for enterprise applications.&rdquo;
                  </p>
                </div>
              </div>

              {/* TTS Evaluation Checklist */}
              <div className="grid grid-cols-3 gap-2 font-mono text-[11px] text-center">
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">NATURALNESS</div>
                  <div className="text-amber-400 font-bold text-sm">4.85 MOS</div>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">INTELLIGIBILITY</div>
                  <div className="text-emerald-400 font-bold text-sm">99.7% Score</div>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">ARTIFACT RATE</div>
                  <div className="text-white font-bold text-sm">&lt; 0.2% Glitch</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: DATA COLLECTION */}
          {activeTab === "data-collection" && (
            <motion.div
              key="data-collection"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 font-mono text-[11px] border border-teal-500/30">
                    AI Ground-Truth Annotation
                  </span>
                  <span className="text-slate-400 font-mono">Dataset #TC-7921</span>
                </div>
                <span className="text-teal-400 font-mono text-[11px]">
                  IAA Agreement: 99.1% (κ = 0.94)
                </span>
              </div>

              {/* Annotated Sentence with Token Tags */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-teal-500/30 space-y-3">
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>CONVERSATIONAL INTENT & ENTITY EXTRACTION</span>
                  <span className="text-emerald-400">Clean-Chain Verified</span>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  <span>&ldquo;Please </span>
                  <span className="px-1.5 py-0.5 rounded bg-teal-900/60 border border-teal-500/50 text-teal-200 font-mono text-xs">
                    schedule a technical review [INTENT: Book_Meeting]
                  </span>
                  <span> with the engineering leads in </span>
                  <span className="px-1.5 py-0.5 rounded bg-indigo-900/60 border border-indigo-500/50 text-indigo-200 font-mono text-xs">
                    Singapore [ENTITY: Location]
                  </span>
                  <span> next </span>
                  <span className="px-1.5 py-0.5 rounded bg-amber-900/60 border border-amber-500/50 text-amber-200 font-mono text-xs">
                    Thursday at 2 PM [ENTITY: DateTime]
                  </span>
                  <span>.&rdquo;</span>
                </div>

                {/* Taxonomy Schema Breakdown */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-[10px] pt-1">
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 block">TAGGING TAXONOMY</span>
                    <span className="text-teal-300 font-semibold">BIO Named Entity</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 block">PII REDACTION</span>
                    <span className="text-emerald-400 font-semibold">100% Scrubbed</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 col-span-2 sm:col-span-1">
                    <span className="text-slate-400 block">CORPUS VALIDATION</span>
                    <span className="text-white font-semibold">Dual Annotator Signoff</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 5: VIDEO SERVICE */}
          {activeTab === "video-service" && (
            <motion.div
              key="video-service"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 font-mono text-[11px] border border-rose-500/30">
                    NLE Media Production Suite
                  </span>
                  <span className="text-slate-400 font-mono">4K 60fps ProRes</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-rose-400 font-bold">
                  <span>SMPTE: {timecode}</span>
                </div>
              </div>

              {/* Multi-Track Timeline View */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-rose-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs pb-1">
                  <span className="font-mono text-[11px] text-slate-300">
                    MULTI-TRACK TIMELINE & SUBTITLE BURN-IN
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">
                    Sync Drift: ±15ms
                  </span>
                </div>

                <div className="space-y-1.5 font-mono text-[11px]">
                  {/* Track V1: Video */}
                  <div className="flex items-center gap-2 p-1.5 rounded bg-slate-950 border border-slate-800">
                    <span className="w-8 text-rose-400 font-bold text-[10px]">V1</span>
                    <div className="flex-1 h-5 rounded bg-rose-950/60 border border-rose-500/40 px-2 flex items-center justify-between text-[10px] text-rose-200">
                      <span>Software_Demo_4K_Master.mov</span>
                      <span className="text-slate-400">Rec.709 10-bit</span>
                    </div>
                  </div>

                  {/* Track A1: Audio */}
                  <div className="flex items-center gap-2 p-1.5 rounded bg-slate-950 border border-slate-800">
                    <span className="w-8 text-violet-400 font-bold text-[10px]">A1</span>
                    <div className="flex-1 h-5 rounded bg-violet-950/60 border border-violet-500/40 px-2 flex items-center justify-between text-[10px] text-violet-200">
                      <span>Voice_Over_Studio_Mastered.wav (-14 LUFS)</span>
                      <span className="text-slate-400">48kHz</span>
                    </div>
                  </div>

                  {/* Track S1: Subtitle */}
                  <div className="flex items-center gap-2 p-1.5 rounded bg-slate-950 border border-slate-800">
                    <span className="w-8 text-teal-400 font-bold text-[10px]">S1</span>
                    <div className="flex-1 h-5 rounded bg-teal-950/60 border border-teal-500/40 px-2 flex items-center justify-between text-[10px] text-teal-200">
                      <span>Bilingual_BurnIn_SRT [EN &amp; ID Synchronized]</span>
                      <span className="text-emerald-400">100% Paced</span>
                    </div>
                  </div>
                </div>

                {/* Subtitle Caption Overlay Preview */}
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                  <span className="text-xs text-slate-400 font-mono text-[10px] block mb-1">
                    FRAME PREVIEW @ {timecode}
                  </span>
                  <p className="text-xs text-white font-semibold">
                    &ldquo;Technology, Data, and Human Expertise — Working Together.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Status Bar */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>ACTIVE SYSTEM ONLINE</span>
            </span>
            <span className="text-slate-600">|</span>
            <span>TCAI CLOUD CORE v2.8</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>5 Core Capabilities Integrated</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechContextShowcase;
