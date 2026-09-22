import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  Download,
  Info,
  Upload,
  Palette,
  CheckCircle2,
  ExternalLink,
  Award,
  Users,
  Compass,
  Code2,
  Copy,
  Check
} from 'lucide-react';
import { AJIETLogo } from './components/AJIETLogo';
import { playInaugurationFanfare, playCurtainSlideSound } from './utils/audio';
import { fireInaugurationConfetti } from './utils/confetti';
import { STANDALONE_HTML_CODE } from './data/standaloneHtml';

type CurtainTheme = 'maroon' | 'crimson' | 'blue' | 'emerald';

interface ThemeConfig {
  id: CurtainTheme;
  name: string;
  className: string;
  pelmetColor: string;
  accentBorder: string;
  badgeBg: string;
}

const THEMES: ThemeConfig[] = [
  {
    id: 'maroon',
    name: 'Imperial Maroon',
    className: 'curtain-velvet-maroon',
    pelmetColor: 'linear-gradient(180deg, #1c050b 0%, #580f21 65%, #3d0714 100%)',
    accentBorder: '#d97706',
    badgeBg: 'linear-gradient(135deg, #1e3a8a, #0f172a)',
  },
  {
    id: 'crimson',
    name: 'Royal Crimson',
    className: 'curtain-velvet-red',
    pelmetColor: 'linear-gradient(180deg, #2b020a 0%, #881337 65%, #4c0519 100%)',
    accentBorder: '#f59e0b',
    badgeBg: 'linear-gradient(135deg, #172554, #1e1b4b)',
  },
  {
    id: 'blue',
    name: 'Sapphire & Gold',
    className: 'curtain-velvet-blue',
    pelmetColor: 'linear-gradient(180deg, #030712 0%, #1e3a8a 65%, #0f172a 100%)',
    accentBorder: '#fbbf24',
    badgeBg: 'linear-gradient(135deg, #b45309, #78350f)',
  },
  {
    id: 'emerald',
    name: 'Prestige Emerald',
    className: 'curtain-velvet-emerald',
    pelmetColor: 'linear-gradient(180deg, #022c22 0%, #064e3b 65%, #065f46 100%)',
    accentBorder: '#f59e0b',
    badgeBg: 'linear-gradient(135deg, #1e3a8a, #064e3b)',
  },
];

export default function App() {
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState<CurtainTheme>('maroon');
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasCelebrated, setHasCelebrated] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentTheme = THEMES.find((t) => t.id === selectedTheme) || THEMES[0];

  const [showCodeModal, setShowCodeModal] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(STANDALONE_HTML_CODE).then(() => {
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 3000);
    });
  };

  // Inaugurate trigger
  const handleInaugurate = () => {
    if (!isCurtainOpen) {
      playCurtainSlideSound(soundEnabled);
      setIsCurtainOpen(true);
      setHasCelebrated(true);

      // Play rich fanfare harmony after curtains start pulling apart
      setTimeout(() => {
        playInaugurationFanfare(soundEnabled);
        fireInaugurationConfetti();
      }, 400);
    } else {
      playCurtainSlideSound(soundEnabled);
      setIsCurtainOpen(false);
    }
  };

  const handleReset = () => {
    playCurtainSlideSound(soundEnabled);
    setIsCurtainOpen(false);
  };

  const handleFireConfetti = (e: React.MouseEvent) => {
    e.stopPropagation();
    fireInaugurationConfetti();
    playInaugurationFanfare(soundEnabled);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  // Handle image upload for custom logo file (like user's sc.jpeg)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomLogoUrl(url);
    }
  };

  // Download the 1-Page Standalone HTML file as requested by the user
  const handleDownloadStandaloneHtml = () => {
    const link = document.createElement('a');
    link.href = '/standalone-inauguration.html';
    link.download = 'AJIET_Staff_Club_Inauguration_SinglePage.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-amber-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-emerald-600/10 rounded-full blur-[160px]" />
      </div>

      {/* Top Institutional Header */}
      <header
        id="ceremony-header"
        className="relative z-30 border-b border-amber-600/25 bg-slate-950/80 backdrop-blur-md px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20 flex items-center justify-center">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <span className="font-serif font-black text-amber-400 text-sm tracking-wider">A</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif font-bold text-base sm:text-lg text-amber-200 tracking-wide">
                AJIET STAFF CLUB
              </h1>
              <span className="hidden sm:inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30 rounded-full">
                Digital Inauguration
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              A.J. Institute of Engineering & Technology, Mangaluru
            </p>
          </div>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Sound Toggle */}
          <button
            id="audio-toggle-button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 transition flex items-center gap-1.5"
            title={soundEnabled ? 'Mute Fanfare' : 'Unmute Fanfare'}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden md:inline text-slate-300">Fanfare On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden md:inline text-slate-400">Fanfare Off</span>
              </>
            )}
          </button>

          {/* Theme Selector */}
          <div className="relative">
            <button
              id="theme-selector-button"
              onClick={() => setShowThemeSelector(!showThemeSelector)}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 transition flex items-center gap-1.5"
            >
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline text-slate-300">Theme</span>
            </button>

            {showThemeSelector && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-900/95 border border-slate-700 rounded-xl shadow-2xl p-2 z-50 backdrop-blur-xl">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 mb-1">
                  Curtain Velvet Fabric
                </div>
                {THEMES.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => {
                      setSelectedTheme(theme.id);
                      setShowThemeSelector(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition ${
                      selectedTheme === theme.id
                        ? 'bg-amber-500/20 text-amber-300 font-bold'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span>{theme.name}</span>
                    {selectedTheme === theme.id && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Upload Custom Logo Button */}
          <button
            id="upload-custom-logo-button"
            onClick={() => fileInputRef.current?.click()}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 transition flex items-center gap-1.5"
            title="Upload/Replace with your image file"
          >
            <Upload className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden md:inline text-slate-300">Custom Image</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />

          {/* 1-Click Copy Complete 1-Page HTML */}
          <button
            id="copy-standalone-html-btn"
            onClick={handleCopyHtml}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 shadow-md shadow-amber-500/20 transition flex items-center gap-1.5 cursor-pointer"
            title="Copy entire 1-Page HTML code to clipboard"
          >
            {copiedToast ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copiedToast ? 'HTML Copied!' : 'Copy 1-Page HTML'}</span>
            <span className="sm:hidden">{copiedToast ? 'Copied' : 'HTML'}</span>
          </button>

          {/* View Standalone HTML Code Modal Button */}
          <button
            id="view-standalone-code-btn"
            onClick={() => setShowCodeModal(true)}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition flex items-center gap-1.5 text-blue-300"
            title="Inspect 1-Page HTML Code"
          >
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden md:inline">View Code</span>
          </button>

          {/* Download Standalone 1-Page HTML button */}
          <button
            id="download-standalone-html-btn"
            onClick={handleDownloadStandaloneHtml}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 transition flex items-center gap-1.5 text-emerald-300"
            title="Download 100% self-contained 1-page HTML file"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline">Download .html</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            id="fullscreen-toggle-btn"
            onClick={toggleFullscreen}
            className="p-2 rounded-full text-slate-300 hover:text-amber-400 hover:bg-slate-800 transition"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* About Club Info */}
          <button
            id="info-modal-button"
            onClick={() => setShowDetailsModal(true)}
            className="p-2 rounded-full text-slate-300 hover:text-amber-400 hover:bg-slate-800 transition"
            title="Logo Details & Significance"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Inauguration Stage Canvas */}
      <main className="relative flex-1 flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 z-10">
        
        {/* Stage Frame Container */}
        <div
          ref={stageRef}
          id="stage-grand-viewport"
          className="relative w-full max-w-5xl h-[560px] sm:h-[620px] md:h-[660px] rounded-3xl overflow-hidden shadow-2xl border border-amber-600/30 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center select-none"
        >
          {/* Spotlight Beams */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
              isCurtainOpen ? 'opacity-100' : 'opacity-20'
            }`}
          >
            <div className="absolute inset-0 stage-spotlight-left" />
            <div className="absolute inset-0 stage-spotlight-right" />
            <div className="absolute inset-0 stage-center-beam" />
          </div>

          {/* Stage floor & pedestal */}
          <div className="absolute bottom-0 inset-x-0 h-44 stage-floor pointer-events-none z-10 flex items-end justify-center pb-8">
            <div className="w-[85%] max-w-xl h-16 rounded-full border border-amber-500/30 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent blur-[1px] shadow-[0_0_50px_rgba(245,158,11,0.25)]" />
          </div>

          {/* ======================================================== */}
          {/* CENTERPIECE: LOGO REVEAL (Rendered behind the curtains)  */}
          {/* ======================================================== */}
          <div
            id="inaugurated-logo-stage"
            className="relative z-15 flex flex-col items-center justify-center p-4"
          >
            {/* Soft Luminous Aura */}
            <div
              className={`absolute w-80 sm:w-96 md:w-[460px] h-80 sm:h-96 md:h-[460px] rounded-full transition-all duration-1000 ${
                isCurtainOpen
                  ? 'revealed-logo-aura scale-100 opacity-90'
                  : 'scale-75 opacity-0'
              }`}
            />

            {/* Official Logo Container */}
            <div
              className={`relative z-20 transition-all duration-1000 transform ${
                isCurtainOpen
                  ? 'scale-100 opacity-100 translate-y-0 rotate-0'
                  : 'scale-75 opacity-0 translate-y-8 rotate-1'
              }`}
            >
              <div className="relative group cursor-pointer" onClick={handleFireConfetti}>
                <AJIETLogo
                  size="clamp(260px, 46vw, 420px)"
                  customImageUrl={customLogoUrl}
                  className="transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Interactive Hint after reveal */}
                {isCurtainOpen && (
                  <div className="absolute -top-3 right-2 bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg animate-bounce pointer-events-none flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Inaugurated</span>
                  </div>
                )}
              </div>
            </div>

            {/* Revealing Plaque / Motto */}
            <div
              className={`mt-4 text-center z-25 transition-all duration-1000 delay-300 ${
                isCurtainOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6 pointer-events-none'
              }`}
            >
              <h2 className="font-serif font-black text-xl sm:text-2xl md:text-3xl text-amber-200 tracking-wider drop-shadow-md">
                AJIET STAFF CLUB
              </h2>
              <div className="mt-2 inline-flex items-center gap-2 sm:gap-4 px-4 py-1.5 rounded-full bg-slate-900/80 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-lg shadow-blue-900/30">
                <span>CONNECT</span>
                <span className="text-amber-400">•</span>
                <span>COLLABORATE</span>
                <span className="text-amber-400">•</span>
                <span>CELEBRATE</span>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CURTAIN LAYER: Left & Right Wings + Ropes + Gold Seal    */}
          {/* ======================================================== */}
          <div
            id="curtain-interactive-layer"
            onClick={handleInaugurate}
            className={`absolute inset-0 z-30 cursor-pointer overflow-hidden transition-all duration-300`}
            title={isCurtainOpen ? 'Click to close curtains' : 'Click to inaugurate logo'}
          >
            {/* Left Curtain Wing */}
            <div
              id="curtain-wing-left"
              style={{
                transform: isCurtainOpen ? 'translateX(-88%) scaleX(0.45)' : 'translateX(0%) scaleX(1)',
                transformOrigin: 'left center',
                transition: 'transform 1.8s cubic-bezier(0.65, 0, 0.35, 1)',
              }}
              className={`absolute top-0 bottom-0 left-0 w-[52%] ${currentTheme.className} border-r-4 border-amber-600/80 shadow-[15px_0_35px_rgba(0,0,0,0.85)] z-20 flex flex-col justify-between`}
            >
              {/* Internal shadow creases */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />
              {/* Bottom Gold Fringe */}
              <div className="w-full h-4 gold-braid relative z-10 mt-auto" />
            </div>

            {/* Right Curtain Wing */}
            <div
              id="curtain-wing-right"
              style={{
                transform: isCurtainOpen ? 'translateX(88%) scaleX(0.45)' : 'translateX(0%) scaleX(1)',
                transformOrigin: 'right center',
                transition: 'transform 1.8s cubic-bezier(0.65, 0, 0.35, 1)',
              }}
              className={`absolute top-0 bottom-0 right-0 w-[52%] ${currentTheme.className} border-l-4 border-amber-600/80 shadow-[-15px_0_35px_rgba(0,0,0,0.85)] z-20 flex flex-col justify-between`}
            >
              {/* Internal shadow creases */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/30 pointer-events-none" />
              {/* Bottom Gold Fringe */}
              <div className="w-full h-4 gold-braid relative z-10 mt-auto" />
            </div>

            {/* Left & Right Golden Hanging Tassels */}
            <div
              style={{
                transform: isCurtainOpen ? 'translateX(-340px) scale(0.6)' : 'translateX(0)',
                opacity: isCurtainOpen ? 0.3 : 1,
                transition: 'transform 1.8s ease, opacity 1.2s ease',
              }}
              className="absolute left-[45%] top-[34%] -translate-x-12 z-25 pointer-events-none flex flex-col items-center"
            >
              <div className="w-1.5 h-16 bg-gradient-to-b from-amber-400 to-amber-600 shadow-md" />
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-700 shadow-lg border border-amber-100" />
              <div className="w-4 h-12 bg-gradient-to-b from-amber-400 via-amber-600 to-amber-900 rounded-b shadow-md" />
            </div>

            <div
              style={{
                transform: isCurtainOpen ? 'translateX(340px) scale(0.6)' : 'translateX(0)',
                opacity: isCurtainOpen ? 0.3 : 1,
                transition: 'transform 1.8s ease, opacity 1.2s ease',
              }}
              className="absolute right-[45%] top-[34%] translate-x-12 z-25 pointer-events-none flex flex-col items-center"
            >
              <div className="w-1.5 h-16 bg-gradient-to-b from-amber-400 to-amber-600 shadow-md" />
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-700 shadow-lg border border-amber-100" />
              <div className="w-4 h-12 bg-gradient-to-b from-amber-400 via-amber-600 to-amber-900 rounded-b shadow-md" />
            </div>

            {/* Central Inauguration Golden Seal & Button (Visible when closed) */}
            <div
              id="ceremony-central-seal"
              style={{
                opacity: isCurtainOpen ? 0 : 1,
                transform: isCurtainOpen ? 'translate(-50%, -50%) scale(0.6)' : 'translate(-50%, -50%) scale(1)',
                pointerEvents: isCurtainOpen ? 'none' : 'auto',
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
              className="absolute top-1/2 left-1/2 z-35 flex flex-col items-center gap-4 cursor-pointer group"
            >
              {/* Gleaming Gold Medallion */}
              <div className="relative w-28 sm:w-32 h-28 sm:h-32 rounded-full p-1 bg-gradient-to-br from-amber-200 via-amber-400 to-amber-700 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_40px_rgba(245,158,11,0.6)] group-hover:scale-110 group-hover:shadow-[0_20px_50px_rgba(245,158,11,0.8)] transition-all duration-300">
                <div className="w-full h-full rounded-full border-2 border-amber-100 flex flex-col items-center justify-center bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-slate-950 p-2 text-center shadow-inner">
                  <span className="font-serif font-black text-xs sm:text-sm tracking-wider leading-none">
                    AJIET
                  </span>
                  <span className="font-serif font-black text-base sm:text-lg tracking-wider leading-tight text-amber-950">
                    STAFF
                  </span>
                  <div className="w-8 h-0.5 bg-amber-900 my-0.5" />
                  <span className="text-[9px] font-black tracking-widest uppercase text-amber-950">
                    INAUGURATE
                  </span>
                </div>
              </div>

              {/* Tap to Unveil Badge */}
              <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-slate-950/90 border border-amber-500/60 text-amber-300 font-bold text-xs sm:text-sm tracking-widest uppercase shadow-2xl group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-400 transition-all duration-300 animate-pulse">
                <Sparkles className="w-4 h-4" />
                <span>Click Curtain to Unveil</span>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* TOP PELMET / VALANCE BANNER FRAME (Overhangs Curtains)   */}
          {/* ======================================================== */}
          <div
            id="stage-pelmet-valance"
            style={{ background: currentTheme.pelmetColor }}
            className="absolute top-0 inset-x-0 h-16 sm:h-20 z-40 border-b-4 border-amber-500 shadow-2xl flex items-center justify-center px-4"
          >
            {/* Ceremonial Inscription Plaque */}
            <div
              style={{ background: currentTheme.badgeBg }}
              className="px-5 sm:px-8 py-1.5 sm:py-2 rounded-full border-2 border-amber-400 shadow-lg flex items-center gap-3"
            >
              <span className="text-amber-400 text-xs sm:text-sm">★</span>
              <span className="font-serif font-extrabold text-xs sm:text-sm md:text-base text-amber-200 uppercase tracking-widest text-center">
                Official Logo Inauguration Ceremony
              </span>
              <span className="text-amber-400 text-xs sm:text-sm">★</span>
            </div>

            {/* Bottom Golden Fringe Accent */}
            <div className="absolute -bottom-2 inset-x-0 h-2 gold-braid" />
          </div>

          {/* Re-Inaugurate / Confetti Action Floating Button when open */}
          {isCurtainOpen && (
            <div className="absolute bottom-6 right-6 z-40 flex items-center gap-3">
              <button
                id="confetti-cannon-btn"
                onClick={handleFireConfetti}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-xl flex items-center gap-1.5 transition-all transform hover:scale-105 active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Confetti Blast</span>
              </button>
              <button
                id="close-curtain-btn"
                onClick={handleReset}
                className="px-4 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm tracking-wide shadow-xl flex items-center gap-1.5 transition-all"
              >
                <RotateCcw className="w-4 h-4 text-amber-400" />
                <span>Close Curtain</span>
              </button>
            </div>
          )}
        </div>

        {/* Primary Ceremony Action Bar (Bottom of Stage) */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 z-20">
          <button
            id="main-inauguration-toggle-btn"
            onClick={handleInaugurate}
            className={`px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-serif font-bold text-sm sm:text-base tracking-wider transition-all duration-300 shadow-2xl flex items-center gap-2.5 ${
              isCurtainOpen
                ? 'bg-slate-900 border border-amber-500/50 text-amber-300 hover:bg-slate-800 hover:border-amber-400'
                : 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 shadow-amber-500/30 hover:scale-105 active:scale-95'
            }`}
          >
            {isCurtainOpen ? (
              <>
                <RotateCcw className="w-4 h-4" />
                <span>Replay Inauguration Ceremony</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 text-slate-950 fill-slate-950" />
                <span>Inaugurate Official Logo</span>
              </>
            )}
          </button>

          <button
            id="view-logo-details-btn"
            onClick={() => setShowDetailsModal(true)}
            className="px-5 py-3 rounded-full bg-slate-900/90 border border-slate-700 hover:border-amber-500/50 text-slate-300 hover:text-amber-200 text-xs sm:text-sm font-semibold tracking-wide transition flex items-center gap-2"
          >
            <Info className="w-4 h-4 text-amber-400" />
            <span>Logo Significance</span>
          </button>
        </div>
      </main>

      {/* Institutional Footer */}
      <footer className="relative z-20 border-t border-slate-800/80 bg-slate-950/90 px-4 sm:px-8 py-3.5 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-300">AJIET Mangaluru</span>
          <span>•</span>
          <span>Staff Club Inaugural Portal</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-amber-400 font-bold">Connect • Collaborate • Celebrate</span>
          <button
            onClick={handleDownloadStandaloneHtml}
            className="text-emerald-400 hover:text-emerald-300 underline font-medium flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" />
            Download Standalone 1-Page HTML
          </button>
        </div>
      </footer>

      {/* ======================================================== */}
      {/* MODAL: Logo Significance & Emblem Symbolism Breakdown    */}
      {/* ======================================================== */}
      {showDetailsModal && (
        <div
          id="logo-details-modal-overlay"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowDetailsModal(false)}
        >
          <div
            id="logo-details-modal-card"
            className="w-full max-w-2xl bg-slate-900 border border-amber-600/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
                  Symbolism & Vision
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-200">
                  AJIET Staff Club Official Logo
                </h3>
              </div>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4 text-sm text-slate-300 leading-relaxed">
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-start gap-3.5">
                <Users className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-300">Three Celebrating Figures in Unity</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Represent the harmonious blend of Teaching Faculty, Technical Staff, and Administrative Staff. The raised arms in blue, yellow, and red embody joy, mutual support, and joint triumphs.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-start gap-3.5">
                <Compass className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-blue-300">Dynamic Coastal Waves Base</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Rooted in Mangaluru’s coastal heritage, the flowing cyan and blue swooshes signify the steady foundation of institutional values, continuous movement, and boundless growth.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-start gap-3.5">
                <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-emerald-300">AJIET Crest & Radiating Sunburst</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    The apex gear cog and book emblem reflect technical excellence, engineering mastery, and lifelong learning, with rays extending enlightenment and positivity.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/50 to-indigo-950/50 border border-blue-800/40">
                <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400">
                  Staff Club Tri-Motto
                </span>
                <p className="font-serif text-lg font-bold text-amber-300 mt-1">
                  Connect • Collaborate • Celebrate
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Connecting minds across departments, collaborating for institutional advancement, and celebrating individual & collective milestones.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="px-6 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Code Inspector & 1-Page HTML Modal */}
      {showCodeModal && (
        <div
          id="code-inspector-modal"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setShowCodeModal(false)}
        >
          <div
            className="bg-slate-900 border border-amber-500/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-950/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-amber-200">
                    Self-Contained 1-Page HTML Code
                  </h3>
                  <p className="text-xs text-slate-400">
                    Single file with zero dependencies • Inline CSS, SVG Logo, Web Audio fanfare & Canvas Confetti
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyHtml}
                  className="px-3.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition"
                >
                  {copiedToast ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedToast ? 'Copied to Clipboard!' : 'Copy Entire Code'}</span>
                </button>
                <button
                  onClick={handleDownloadStandaloneHtml}
                  className="px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .html</span>
                </button>
                <button
                  onClick={() => setShowCodeModal(false)}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-sm font-bold ml-2"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Offline Usage Banner */}
            <div className="px-5 py-3 bg-blue-950/40 border-b border-blue-900/30 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span><strong>100% Offline Compatible:</strong> Save this code as <code>index.html</code> or <code>inauguration.html</code> and double-click to open in any web browser without needing internet or a server.</span>
              </span>
              <a
                href="/standalone-inauguration.html"
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1 shrink-0 ml-3"
              >
                <span>Preview in Tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Code Body */}
            <div className="flex-1 overflow-auto p-4 sm:p-5 bg-slate-950 text-slate-300 font-mono text-xs select-all leading-relaxed">
              <pre>
                <code>{STANDALONE_HTML_CODE}</code>
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Floating Copied Toast */}
      {copiedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2 text-sm border border-amber-300 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-slate-950" />
          <span>Single-Page HTML copied to clipboard!</span>
        </div>
      )}
    </div>
  );
}
