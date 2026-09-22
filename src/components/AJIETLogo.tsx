import React from 'react';

interface AJIETLogoProps {
  className?: string;
  size?: number | string;
  customImageUrl?: string | null;
}

export const AJIETLogo: React.FC<AJIETLogoProps> = ({
  className = '',
  size = 480,
  customImageUrl,
}) => {
  if (customImageUrl) {
    return (
      <div 
        id="ajiet-logo-image-container"
        className={`relative rounded-full overflow-hidden flex items-center justify-center bg-white shadow-2xl ${className}`}
        style={{ width: size, height: size }}
      >
        <img
          id="ajiet-logo-custom-image"
          src={customImageUrl}
          alt="AJIET Staff Club Official Logo"
          className="w-full h-full object-contain p-2"
        />
      </div>
    );
  }

  return (
    <svg
      id="ajiet-logo-vector-svg"
      viewBox="0 0 600 600"
      width={size}
      height={size}
      className={`select-none drop-shadow-2xl ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="blueRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="50%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>

        <linearGradient id="greenRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>

        <linearGradient id="goldGleam" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>

        <linearGradient id="waveBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <linearGradient id="waveCyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>

        {/* Shadow filters for depth */}
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15" />
        </filter>

        {/* Text Paths */}
        {/* Top Arc for "AJ INSTITUTE OF ENGINEERING AND TECHNOLOGY" */}
        <path
          id="topTextPath"
          d="M 68 300 A 232 232 0 1 1 532 300"
          fill="none"
        />

        {/* Bottom Arc for "CONNECT | COLLABORATE | CELEBRATE" */}
        <path
          id="bottomTextPath"
          d="M 125 408 A 215 215 0 0 0 475 408"
          fill="none"
        />
      </defs>

      {/* Outer White Background Disc */}
      <circle cx="300" cy="300" r="290" fill="#ffffff" filter="url(#softShadow)" />

      {/* Main Outer Blue Ring */}
      <circle
        cx="300"
        cy="300"
        r="270"
        fill="none"
        stroke="#18367F"
        strokeWidth="10"
      />

      {/* Top Outer Segment Accent Lines */}
      <path
        d="M 45 300 A 255 255 0 0 1 70 230"
        fill="none"
        stroke="#18367F"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 555 300 A 255 255 0 0 0 530 230"
        fill="none"
        stroke="#18367F"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Inner Green Dual Rings */}
      <circle
        cx="300"
        cy="300"
        r="248"
        fill="none"
        stroke="#0F7638"
        strokeWidth="3.5"
      />
      <circle
        cx="300"
        cy="300"
        r="238"
        fill="none"
        stroke="#0F7638"
        strokeWidth="6"
      />

      {/* Top Arc Curved Text */}
      <text
        fill="#18367F"
        fontSize="21"
        fontWeight="800"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        letterSpacing="2.8px"
      >
        <textPath
          href="#topTextPath"
          startOffset="50%"
          textAnchor="middle"
        >
          AJ INSTITUTE OF ENGINEERING AND TECHNOLOGY
        </textPath>
      </text>

      {/* Central Celebrating Unity Figures Group */}
      <g id="central-emblem-figures" transform="translate(0, -10)">
        {/* Sunburst Rays */}
        {/* Ray 1 (Left far) */}
        <line x1="250" y1="185" x2="238" y2="168" stroke="#3730A3" strokeWidth="8" strokeLinecap="round" />
        {/* Ray 2 (Left near) */}
        <line x1="268" y1="172" x2="260" y2="150" stroke="#2563EB" strokeWidth="9" strokeLinecap="round" />

        {/* Ray 4 (Right near) */}
        <line x1="332" y1="172" x2="340" y2="150" stroke="#EA580C" strokeWidth="9" strokeLinecap="round" />
        {/* Ray 5 (Right far) */}
        <line x1="350" y1="185" x2="362" y2="168" stroke="#DC2626" strokeWidth="8" strokeLinecap="round" />

        {/* AJIET Apex Crest at the center ray */}
        <g id="ajiet-apex-crest" transform="translate(300, 195)">
          {/* Outer Sun Rays burst for crest */}
          <circle cx="0" cy="-36" r="16" fill="#FBBF24" />
          
          {/* Gear / Cog silhouette */}
          <g transform="translate(0, -36)">
            {/* Cog teeth */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <rect
                key={deg}
                x="-2.5"
                y="-18"
                width="5"
                height="6"
                fill="#D97706"
                transform={`rotate(${deg})`}
              />
            ))}
            <circle cx="0" cy="0" r="15" fill="#FFFFFF" stroke="#D97706" strokeWidth="2.5" />
            
            {/* Triangular Book / Tech Symbol */}
            <polygon points="0,-10 9,6 -9,6" fill="none" stroke="#DC2626" strokeWidth="2" />
            <path d="M -7,2 Q 0,0 7,2" stroke="#1D4ED8" strokeWidth="2" fill="none" />
            <circle cx="0" cy="-2" r="2.5" fill="#1D4ED8" />
          </g>

          {/* AJIET Text under Cog */}
          <text
            x="0"
            y="-10"
            textAnchor="middle"
            fontSize="10"
            fontWeight="900"
            fill="#18367F"
            fontFamily="'Cinzel', serif"
            letterSpacing="0.5px"
          >
            AJIET
          </text>
        </g>

        {/* Dynamic Waves / Swooshes Foundation */}
        {/* Deep Blue Wave */}
        <path
          d="M 195 270 C 220 310, 270 330, 330 320 C 370 314, 385 295, 400 280 C 380 305, 340 335, 280 330 C 230 325, 205 295, 195 270 Z"
          fill="url(#waveBlueGrad)"
        />
        {/* Light Cyan Wave */}
        <path
          d="M 260 326 C 295 338, 345 335, 395 292 C 375 328, 335 345, 285 340 C 275 338, 268 332, 260 326 Z"
          fill="url(#waveCyanGrad)"
        />

        {/* Celebrating Figures */}
        {/* 1. Left Figure: Violet/Blue (#3730A3 / #2563EB) */}
        <g id="figure-left">
          {/* Head */}
          <circle cx="236" cy="242" r="17" fill="#293988" />
          {/* Body and Raised Arms */}
          <path
            d="M 236 264 C 215 250, 195 220, 198 185 C 208 220, 222 245, 236 270 C 248 290, 255 305, 264 316 C 245 305, 230 285, 236 264 Z"
            fill="#293988"
          />
          {/* Inner Left Arm reaching to center */}
          <path
            d="M 236 264 C 245 250, 260 230, 272 225 C 265 240, 252 260, 246 276 Z"
            fill="#293988"
          />
        </g>

        {/* 2. Center Figure: Golden Yellow (#F59E0B) */}
        <g id="figure-center">
          {/* Head */}
          <circle cx="300" cy="235" r="18" fill="url(#goldGleam)" />
          {/* Body reaching up proudly with high V arms */}
          <path
            d="M 300 258 C 285 242, 268 215, 256 198 C 270 216, 285 240, 292 262 L 292 312 C 297 313, 303 313, 308 312 L 308 262 C 315 240, 330 216, 344 198 C 332 215, 315 242, 300 258 Z"
            fill="url(#goldGleam)"
          />
        </g>

        {/* 3. Right Figure: Red (#DC2626) */}
        <g id="figure-right">
          {/* Head */}
          <circle cx="364" cy="242" r="17" fill="#D32F2F" />
          {/* Inner Arm reaching to center */}
          <path
            d="M 364 264 C 355 250, 340 230, 328 225 C 335 240, 348 260, 354 276 Z"
            fill="#D32F2F"
          />
          {/* Outer Right Arm spread wide */}
          <path
            d="M 364 264 C 385 250, 405 220, 402 185 C 392 220, 378 245, 364 270 C 352 290, 345 305, 336 316 C 355 305, 370 285, 364 264 Z"
            fill="#D32F2F"
          />
        </g>
      </g>

      {/* Prominent Center Title: STAFF CLUB */}
      <g id="staff-club-title" transform="translate(0, 395)">
        <text
          x="300"
          y="0"
          textAnchor="middle"
          fontSize="48"
          fontWeight="900"
          fill="#18367F"
          fontFamily="'Cinzel', 'Times New Roman', serif"
          letterSpacing="4px"
        >
          STAFF CLUB
        </text>
      </g>

      {/* Bottom Concentric Arcs */}
      <path
        d="M 125 412 A 205 205 0 0 0 475 412"
        fill="none"
        stroke="#0F7638"
        strokeWidth="4"
      />
      <path
        d="M 112 435 A 225 225 0 0 0 488 435"
        fill="none"
        stroke="#18367F"
        strokeWidth="7"
      />

      {/* Bottom Curved Motto Text */}
      <text
        fill="#18367F"
        fontSize="17.5"
        fontWeight="800"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        letterSpacing="2.5px"
      >
        <textPath
          href="#bottomTextPath"
          startOffset="50%"
          textAnchor="middle"
        >
          CONNECT  |  COLLABORATE  |  CELEBRATE
        </textPath>
      </text>

      {/* Inner Accent Ring highlights */}
      <circle
        cx="300"
        cy="300"
        r="285"
        fill="none"
        stroke="#93C5FD"
        strokeWidth="1.5"
        opacity="0.4"
      />
    </svg>
  );
};
