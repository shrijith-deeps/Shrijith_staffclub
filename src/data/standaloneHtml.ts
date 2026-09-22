// Standalone 1-Page Complete HTML Code for AJIET Staff Club Digital Inauguration
export const STANDALONE_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AJIET Staff Club - Digital Logo Inauguration Ceremony</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: radial-gradient(circle at 50% 25%, #0f172a 0%, #060913 70%, #020408 100%);
      color: #f1f5f9;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      min-height: 100vh;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      user-select: none;
    }
    h1, h2, h3, .serif-font { font-family: 'Cinzel', Georgia, serif; }
    .header-bar {
      background: rgba(10, 16, 32, 0.88);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(245, 158, 11, 0.3);
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 50;
      position: relative;
    }
    .inst-brand { display: flex; align-items: center; gap: 12px; }
    .inst-crest-icon {
      width: 40px; height: 40px; border-radius: 10px;
      background: linear-gradient(135deg, #d97706, #fbbf24);
      padding: 2px; display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
    }
    .inst-crest-inner {
      width: 100%; height: 100%; background: #0f172a; border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      color: #fbbf24; font-family: 'Cinzel', serif; font-weight: 900; font-size: 1.1rem;
    }
    .inst-title { font-size: 1.15rem; font-weight: 800; color: #fef08a; letter-spacing: 1.2px; line-height: 1.2; }
    .inst-subtitle { font-size: 0.72rem; color: #94a3b8; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 500; }
    .controls-group { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
    .btn {
      background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.18);
      color: #e2e8f0; padding: 8px 16px; border-radius: 9999px; font-size: 0.82rem;
      font-weight: 600; cursor: pointer; transition: all 0.2s ease; display: inline-flex;
      align-items: center; gap: 6px;
    }
    .btn:hover { background: rgba(245, 158, 11, 0.2); border-color: #f59e0b; color: #fbbf24; transform: translateY(-1px); }
    .btn-gold {
      background: linear-gradient(135deg, #d97706, #f59e0b); color: #0f172a; border: none;
      box-shadow: 0 4px 15px rgba(245, 158, 11, 0.35); font-weight: 700;
    }
    .btn-gold:hover { background: linear-gradient(135deg, #b45309, #d97706); color: #ffffff; box-shadow: 0 6px 20px rgba(245, 158, 11, 0.5); }
    .stage-container { position: relative; flex: 1; display: flex; align-items: center; justify-content: center; padding: 20px; overflow: hidden; }
    .stage-frame {
      position: relative; width: 100%; max-width: 980px; height: 640px; border-radius: 24px;
      overflow: hidden; box-shadow: 0 30px 70px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(245, 158, 11, 0.3);
      background: radial-gradient(circle at 50% 45%, #101935 0%, #080c1a 75%, #03050c 100%);
      perspective: 1200px;
    }
    .spotlight-left, .spotlight-right, .spotlight-center {
      position: absolute; top: 0; width: 100%; height: 100%; pointer-events: none;
      transition: opacity 1.5s ease; opacity: 0.15;
    }
    .spotlight-left { background: radial-gradient(ellipse at 15% 0%, rgba(254, 240, 138, 0.35) 0%, transparent 60%); }
    .spotlight-right { background: radial-gradient(ellipse at 85% 0%, rgba(254, 240, 138, 0.35) 0%, transparent 60%); }
    .spotlight-center { background: radial-gradient(circle at 50% 50%, rgba(254, 249, 195, 0.25) 0%, rgba(217, 119, 6, 0.1) 40%, transparent 70%); }
    .curtain-opened .spotlight-left, .curtain-opened .spotlight-right, .curtain-opened .spotlight-center { opacity: 0.95; }
    .stage-floor {
      position: absolute; bottom: 0; left: 0; width: 100%; height: 150px;
      background: linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.85) 45%, #020617 100%);
      border-top: 1px solid rgba(245, 158, 11, 0.2); z-index: 10; pointer-events: none;
    }
    .pedestal-ring {
      position: absolute; bottom: 45px; left: 50%; transform: translateX(-50%) rotateX(70deg);
      width: 500px; height: 190px; border-radius: 50%; border: 2px solid rgba(245, 158, 11, 0.35);
      background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.18) 0%, transparent 70%);
      box-shadow: 0 0 50px rgba(245, 158, 11, 0.25);
    }
    .stage-content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 15; }
    .logo-reveal-wrapper {
      position: relative; display: flex; align-items: center; justify-content: center;
      transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1s ease;
      transform: scale(0.7) translateY(45px); opacity: 0;
    }
    .curtain-opened .logo-reveal-wrapper { transform: scale(1) translateY(0); opacity: 1; }
    .logo-halo {
      position: absolute; width: 440px; height: 440px; border-radius: 50%;
      background: radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, rgba(37, 99, 235, 0.25) 50%, transparent 70%);
      filter: blur(28px); z-index: 1; animation: pulseAura 3.8s ease-in-out infinite;
    }
    @keyframes pulseAura { 0%, 100% { transform: scale(1); opacity: 0.65; } 50% { transform: scale(1.12); opacity: 1; } }
    .revealed-text-box { margin-top: 18px; text-align: center; z-index: 20; transition: all 1s ease 0.6s; opacity: 0; transform: translateY(20px); }
    .curtain-opened .revealed-text-box { opacity: 1; transform: translateY(0); }
    .revealed-title {
      font-size: 1.7rem; font-weight: 800; color: #fef08a; letter-spacing: 3px;
      text-shadow: 0 4px 15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(245, 158, 11, 0.5);
    }
    .revealed-motto {
      display: inline-block; margin-top: 6px; padding: 5px 22px; border-radius: 9999px;
      background: rgba(30, 58, 138, 0.5); border: 1px solid rgba(59, 130, 246, 0.4);
      color: #93c5fd; font-size: 0.85rem; font-weight: 700; letter-spacing: 2.2px;
      text-transform: uppercase; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    }
    .curtain-layer { position: absolute; inset: 0; z-index: 30; pointer-events: auto; cursor: pointer; }
    .curtain-wing {
      position: absolute; top: 0; bottom: 0; width: 52%;
      transition: transform 1.8s cubic-bezier(0.65, 0, 0.35, 1);
      box-shadow: 0 0 45px rgba(0, 0, 0, 0.9); overflow: hidden;
    }
    .curtain-left {
      left: 0;
      background: repeating-linear-gradient(90deg, #38040e 0px, #700a1c 16px, #9f1239 30px, #700a1c 44px, #38040e 60px), radial-gradient(circle at 10% 40%, #be123c 0%, #4c0519 80%);
      transform-origin: left center; border-right: 4px solid #b45309;
    }
    .curtain-right {
      right: 0;
      background: repeating-linear-gradient(90deg, #38040e 0px, #700a1c 16px, #9f1239 30px, #700a1c 44px, #38040e 60px), radial-gradient(circle at 90% 40%, #be123c 0%, #4c0519 80%);
      transform-origin: right center; border-left: 4px solid #b45309;
    }
    .curtain-opened .curtain-left { transform: translateX(-92%) scaleX(0.4); }
    .curtain-opened .curtain-right { transform: translateX(92%) scaleX(0.4); }
    .curtain-wing::after {
      content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 18px;
      background: repeating-linear-gradient(90deg, #f59e0b 0px, #b45309 4px, #fef08a 8px);
      box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.5);
    }
    .stage-pelmet {
      position: absolute; top: 0; left: 0; right: 0; height: 74px;
      background: linear-gradient(180deg, #1f0208 0%, #5c0717 65%, #3e040f 100%);
      border-bottom: 4px solid #f59e0b; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
      z-index: 40; display: flex; align-items: center; justify-content: center;
    }
    .pelmet-fringe {
      position: absolute; bottom: -10px; left: 0; right: 0; height: 10px;
      background: repeating-linear-gradient(90deg, #fbbf24 0px, #d97706 5px, #f59e0b 10px);
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    }
    .pelmet-badge {
      background: linear-gradient(135deg, #1e3a8a, #0f172a); border: 2px solid #fbbf24;
      padding: 6px 24px; border-radius: 9999px; display: flex; align-items: center;
      gap: 10px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
    }
    .pelmet-text { font-size: 0.95rem; font-weight: 800; color: #fef08a; letter-spacing: 2px; text-transform: uppercase; }
    .ceremony-ribbon-lock {
      position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
      z-index: 45; display: flex; flex-direction: column; align-items: center;
      gap: 16px; cursor: pointer; transition: all 0.5s ease;
    }
    .curtain-opened .ceremony-ribbon-lock { opacity: 0; pointer-events: none; transform: translate(-50%, -50%) scale(0.6); }
    .golden-seal {
      width: 116px; height: 116px; border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #fef08a 0%, #f59e0b 50%, #92400e 100%);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(245, 158, 11, 0.7);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      border: 3px solid #ffffff; animation: pulseSeal 2.2s infinite ease-in-out;
    }
    @keyframes pulseSeal { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.06); } }
    .seal-text { font-family: 'Cinzel', serif; font-size: 0.8rem; font-weight: 900; color: #451a03; text-align: center; }
    .seal-sub { font-size: 0.6rem; color: #78350f; text-transform: uppercase; font-weight: 900; }
    .tap-hint-pill {
      background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(245, 158, 11, 0.6);
      color: #fbbf24; padding: 8px 22px; border-radius: 9999px; font-size: 0.85rem;
      font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.7); display: flex; align-items: center; gap: 8px;
    }
    .golden-tassel {
      position: absolute; top: 36%; width: 32px; height: 90px; z-index: 35;
      display: flex; flex-direction: column; align-items: center; transition: all 1.8s ease; pointer-events: none;
    }
    .tassel-left { left: 48%; transform: translateX(-40px); }
    .tassel-right { right: 48%; transform: translateX(40px); }
    .curtain-opened .tassel-left { transform: translateX(-420px); opacity: 0.2; }
    .curtain-opened .tassel-right { transform: translateX(420px); opacity: 0.2; }
    .cord-line { width: 4px; height: 42px; background: linear-gradient(180deg, #f59e0b, #d97706); }
    .tassel-ball { width: 18px; height: 18px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, #fef08a, #b45309); }
    .tassel-fringes { width: 14px; height: 32px; background: repeating-linear-gradient(90deg, #f59e0b 0px, #78350f 2px, #fef08a 4px); border-radius: 0 0 4px 4px; }
    #confettiCanvas { position: fixed; inset: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 9999; }
    .ceremony-footer {
      padding: 14px 24px; text-align: center; font-size: 0.82rem; color: #94a3b8;
      border-top: 1px solid rgba(255, 255, 255, 0.08); background: rgba(8, 12, 24, 0.95);
      display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;
    }
    @media (max-width: 768px) {
      .stage-frame { height: 520px; }
      .revealed-title { font-size: 1.3rem; }
      .inst-title { font-size: 1rem; }
      .inst-subtitle { display: none; }
    }
  </style>
</head>
<body>
  <canvas id="confettiCanvas"></canvas>
  <header class="header-bar">
    <div class="inst-brand">
      <div class="inst-crest-icon"><div class="inst-crest-inner">A</div></div>
      <div>
        <div class="inst-title serif-font">AJIET STAFF CLUB</div>
        <div class="inst-subtitle">A.J. Institute of Engineering & Technology, Mangaluru</div>
      </div>
    </div>
    <div class="controls-group">
      <button class="btn" id="audioToggleBtn" onclick="toggleSound()">
        <span id="soundIcon">🔊</span> <span id="soundLabel">Sound On</span>
      </button>
      <button class="btn btn-gold" id="actionBtn" onclick="toggleCurtain()">
        ✨ Inaugurate Logo
      </button>
    </div>
  </header>

  <main class="stage-container">
    <div class="stage-frame" id="stageFrame">
      <div class="spotlight-left"></div>
      <div class="spotlight-right"></div>
      <div class="spotlight-center"></div>
      <div class="stage-floor"><div class="pedestal-ring"></div></div>

      <div class="stage-content">
        <div class="logo-reveal-wrapper">
          <div class="logo-halo"></div>
          <svg id="ajietLogoEmblem" viewBox="0 0 600 600" width="380" height="380" style="position: relative; z-index: 2; filter: drop-shadow(0 15px 35px rgba(0,0,0,0.6));">
            <defs>
              <linearGradient id="stWaveBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#1e40af" /><stop offset="50%" stop-color="#2563eb" /><stop offset="100%" stop-color="#3b82f6" />
              </linearGradient>
              <linearGradient id="stWaveCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#0284c7" /><stop offset="50%" stop-color="#38bdf8" /><stop offset="100%" stop-color="#7dd3fc" />
              </linearGradient>
              <linearGradient id="stGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f59e0b" /><stop offset="50%" stop-color="#fbbf24" /><stop offset="100%" stop-color="#d97706" />
              </linearGradient>
              <path id="stTopPath" d="M 68 300 A 232 232 0 1 1 532 300" fill="none" />
              <path id="stBottomPath" d="M 125 408 A 215 215 0 0 0 475 408" fill="none" />
            </defs>
            <circle cx="300" cy="300" r="290" fill="#ffffff" />
            <circle cx="300" cy="300" r="270" fill="none" stroke="#18367F" stroke-width="10" />
            <path d="M 45 300 A 255 255 0 0 1 70 230" fill="none" stroke="#18367F" stroke-width="4" stroke-linecap="round" />
            <path d="M 555 300 A 255 255 0 0 0 530 230" fill="none" stroke="#18367F" stroke-width="4" stroke-linecap="round" />
            <circle cx="300" cy="300" r="248" fill="none" stroke="#0F7638" stroke-width="3.5" />
            <circle cx="300" cy="300" r="238" fill="none" stroke="#0F7638" stroke-width="6" />
            <text fill="#18367F" font-size="21" font-weight="800" font-family="'Plus Jakarta Sans', sans-serif" letter-spacing="2.8px">
              <textPath href="#stTopPath" startOffset="50%" text-anchor="middle">
                AJ INSTITUTE OF ENGINEERING AND TECHNOLOGY
              </textPath>
            </text>
            <g transform="translate(0, -10)">
              <line x1="250" y1="185" x2="238" y2="168" stroke="#3730A3" stroke-width="8" stroke-linecap="round" />
              <line x1="268" y1="172" x2="260" y2="150" stroke="#2563EB" stroke-width="9" stroke-linecap="round" />
              <line x1="332" y1="172" x2="340" y2="150" stroke="#EA580C" stroke-width="9" stroke-linecap="round" />
              <line x1="350" y1="185" x2="362" y2="168" stroke="#DC2626" stroke-width="8" stroke-linecap="round" />
              <g transform="translate(300, 195)">
                <circle cx="0" cy="-36" r="16" fill="#FBBF24" />
                <g transform="translate(0, -36)">
                  <circle cx="0" cy="0" r="15" fill="#FFFFFF" stroke="#D97706" stroke-width="2.5" />
                  <polygon points="0,-10 9,6 -9,6" fill="none" stroke="#DC2626" stroke-width="2" />
                  <path d="M -7,2 Q 0,0 7,2" stroke="#1D4ED8" stroke-width="2" fill="none" />
                  <circle cx="0" cy="-2" r="2.5" fill="#1D4ED8" />
                </g>
                <text x="0" y="-10" text-anchor="middle" font-size="10" font-weight="900" fill="#18367F" font-family="'Cinzel', serif">AJIET</text>
              </g>
              <path d="M 195 270 C 220 310, 270 330, 330 320 C 370 314, 385 295, 400 280 C 380 305, 340 335, 280 330 C 230 325, 205 295, 195 270 Z" fill="url(#stWaveBlue)" />
              <path d="M 260 326 C 295 338, 345 335, 395 292 C 375 328, 335 345, 285 340 C 275 338, 268 332, 260 326 Z" fill="url(#stWaveCyan)" />
              <g>
                <circle cx="236" cy="242" r="17" fill="#293988" />
                <path d="M 236 264 C 215 250, 195 220, 198 185 C 208 220, 222 245, 236 270 C 248 290, 255 305, 264 316 C 245 305, 230 285, 236 264 Z" fill="#293988" />
                <path d="M 236 264 C 245 250, 260 230, 272 225 C 265 240, 252 260, 246 276 Z" fill="#293988" />
              </g>
              <g>
                <circle cx="300" cy="235" r="18" fill="url(#stGold)" />
                <path d="M 300 258 C 285 242, 268 215, 256 198 C 270 216, 285 240, 292 262 L 292 312 C 297 313, 303 313, 308 312 L 308 262 C 315 240, 330 216, 344 198 C 332 215, 315 242, 300 258 Z" fill="url(#stGold)" />
              </g>
              <g>
                <circle cx="364" cy="242" r="17" fill="#D32F2F" />
                <path d="M 364 264 C 355 250, 340 230, 328 225 C 335 240, 348 260, 354 276 Z" fill="#D32F2F" />
                <path d="M 364 264 C 385 250, 405 220, 402 185 C 392 220, 378 245, 364 270 C 352 290, 345 305, 336 316 C 355 305, 370 285, 364 264 Z" fill="#D32F2F" />
              </g>
            </g>
            <g transform="translate(0, 395)">
              <text x="300" y="0" text-anchor="middle" font-size="48" font-weight="900" fill="#18367F" font-family="'Cinzel', serif" letter-spacing="4px">STAFF CLUB</text>
            </g>
            <path d="M 125 412 A 205 205 0 0 0 475 412" fill="none" stroke="#0F7638" stroke-width="4" />
            <path d="M 112 435 A 225 225 0 0 0 488 435" fill="none" stroke="#18367F" stroke-width="7" />
            <text fill="#18367F" font-size="17.5" font-weight="800" font-family="'Plus Jakarta Sans', sans-serif" letter-spacing="2.5px">
              <textPath href="#stBottomPath" startOffset="50%" text-anchor="middle">
                CONNECT  |  COLLABORATE  |  CELEBRATE
              </textPath>
            </text>
          </svg>
        </div>
        <div class="revealed-text-box">
          <h2 class="revealed-title serif-font">AJIET STAFF CLUB</h2>
          <div class="revealed-motto">CONNECT • COLLABORATE • CELEBRATE</div>
        </div>
      </div>

      <div class="curtain-layer" id="curtainLayer" onclick="toggleCurtain()">
        <div class="curtain-wing curtain-left" id="curtainLeft"></div>
        <div class="curtain-wing curtain-right" id="curtainRight"></div>
        <div class="golden-tassel tassel-left">
          <div class="cord-line"></div><div class="tassel-ball"></div><div class="tassel-fringes"></div>
        </div>
        <div class="golden-tassel tassel-right">
          <div class="cord-line"></div><div class="tassel-ball"></div><div class="tassel-fringes"></div>
        </div>
        <div class="ceremony-ribbon-lock" id="ribbonLock">
          <div class="golden-seal">
            <span class="seal-text">AJIET<br>STAFF</span>
            <span class="seal-sub">INAUGURATE</span>
          </div>
          <div class="tap-hint-pill"><span>✨ Click Curtain to Unveil Logo</span></div>
        </div>
      </div>

      <div class="stage-pelmet">
        <div class="pelmet-badge">
          <span style="color:#fbbf24;">★</span>
          <span class="pelmet-text serif-font">Grand Digital Inauguration</span>
          <span style="color:#fbbf24;">★</span>
        </div>
        <div class="pelmet-fringe"></div>
      </div>
    </div>
  </main>

  <footer class="ceremony-footer">
    <div>A.J. Institute of Engineering & Technology, Mangaluru • <span style="color:#38bdf8; font-weight:700;">Staff Club</span></div>
    <div>Official Motto: <span style="color:#fbbf24; font-weight:700;">Connect • Collaborate • Celebrate</span></div>
  </footer>

  <script>
    let isOpened = false;
    let soundEnabled = true;
    let audioCtx = null;

    function getAudioContext() {
      if (!audioCtx) {
        const AudioClass = window.AudioContext || window.webkitAudioContext;
        if (AudioClass) audioCtx = new AudioClass();
      }
      if (audioCtx && audioCtx.state === 'suspended') { audioCtx.resume(); }
      return audioCtx;
    }

    function playCeremonyFanfare() {
      if (!soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        const chordNotes = [
          { f: 293.66, d: 0.0, dur: 3.0, g: 0.18 },
          { f: 369.99, d: 0.1, dur: 3.2, g: 0.16 },
          { f: 440.00, d: 0.2, dur: 3.5, g: 0.20 },
          { f: 587.33, d: 0.35, dur: 3.8, g: 0.22 },
          { f: 739.99, d: 0.5, dur: 4.0, g: 0.15 },
          { f: 880.00, d: 0.65, dur: 4.5, g: 0.24 },
          { f: 1174.66, d: 0.8, dur: 4.2, g: 0.12 }
        ];

        chordNotes.forEach(n => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(n.f, now + n.d);
          gain.gain.setValueAtTime(0.001, now + n.d);
          gain.gain.exponentialRampToValueAtTime(n.g, now + n.d + 0.1);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + n.d + n.dur);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + n.d);
          osc.stop(now + n.d + n.dur);
        });

        [880, 1174.66, 1318.5, 1760].forEach((freq, idx) => {
          const chime = ctx.createOscillator();
          const chimeGain = ctx.createGain();
          const st = now + 0.8 + idx * 0.15;
          chime.type = 'sine';
          chime.frequency.setValueAtTime(freq, st);
          chimeGain.gain.setValueAtTime(0.001, st);
          chimeGain.gain.exponentialRampToValueAtTime(0.14, st + 0.03);
          chimeGain.gain.exponentialRampToValueAtTime(0.0001, st + 1.8);
          chime.connect(chimeGain);
          chimeGain.connect(ctx.destination);
          chime.start(st);
          chime.stop(st + 1.9);
        });
      } catch (err) { console.warn(err); }
    }

    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    let confettiParticles = [];
    let isConfettiActive = false;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const AJIET_COLORS = ['#1d4ed8', '#f59e0b', '#047857', '#dc2626', '#38bdf8', '#fbbf24', '#ffffff'];

    function createConfettiBurst(x, y, count, angleSpread, speedBase) {
      for (let i = 0; i < count; i++) {
        const angle = angleSpread.min + Math.random() * (angleSpread.max - angleSpread.min);
        const speed = speedBase + Math.random() * 12;
        confettiParticles.push({
          x: x, y: y,
          vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
          size: 6 + Math.random() * 8,
          color: AJIET_COLORS[Math.floor(Math.random() * AJIET_COLORS.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 12,
          opacity: 1, decay: 0.006 + Math.random() * 0.006,
          shape: Math.random() > 0.4 ? 'rect' : 'circle'
        });
      }
      if (!isConfettiActive) {
        isConfettiActive = true;
        requestAnimationFrame(renderConfetti);
      }
    }

    function renderConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = confettiParticles.length - 1; i >= 0; i--) {
        const p = confettiParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.28;
        p.vx *= 0.985;
        p.rotation += p.rotationSpeed;
        p.opacity -= p.decay;

        if (p.opacity <= 0 || p.y > canvas.height + 20) {
          confettiParticles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.6);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      if (confettiParticles.length > 0) {
        requestAnimationFrame(renderConfetti);
      } else {
        isConfettiActive = false;
      }
    }

    function triggerCelebrationConfetti() {
      createConfettiBurst(canvas.width * 0.1, canvas.height * 0.75, 80, { min: -1.3, max: -0.6 }, 14);
      createConfettiBurst(canvas.width * 0.9, canvas.height * 0.75, 80, { min: -2.5, max: -1.8 }, 14);
      setTimeout(() => {
        createConfettiBurst(canvas.width * 0.5, canvas.height * 0.5, 100, { min: -Math.PI, max: 0 }, 10);
      }, 350);
    }

    function toggleCurtain() {
      const stage = document.getElementById('stageFrame');
      const actionBtn = document.getElementById('actionBtn');
      if (!isOpened) {
        stage.classList.add('curtain-opened');
        isOpened = true;
        actionBtn.innerHTML = '🔄 Close Curtains';
        playCeremonyFanfare();
        triggerCelebrationConfetti();
      } else {
        stage.classList.remove('curtain-opened');
        isOpened = false;
        actionBtn.innerHTML = '✨ Inaugurate Logo';
      }
    }

    function toggleSound() {
      soundEnabled = !soundEnabled;
      document.getElementById('soundIcon').innerText = soundEnabled ? '🔊' : '🔇';
      document.getElementById('soundLabel').innerText = soundEnabled ? 'Sound On' : 'Sound Muted';
      if (soundEnabled) { getAudioContext(); }
    }
  </script>
</body>
</html>`;
