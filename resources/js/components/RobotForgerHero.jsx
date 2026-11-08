import { motion } from 'framer-motion';

const DURATION = 2.5;
const IMPACT_X = 261;
const IMPACT_Y = 271;

const SPARKS = [
  { angle: -88, len: 36, color: '#fbbf24', w: 2.4 },
  { angle: -70, len: 28, color: '#fb923c', w: 2 },
  { angle: -52, len: 34, color: '#fbbf24', w: 2.2 },
  { angle: -108, len: 26, color: '#fde68a', w: 1.8 },
  { angle: -128, len: 30, color: '#fb923c', w: 2 },
  { angle: -34, len: 22, color: '#fbbf24', w: 1.8 },
  { angle: -8, len: 18, color: '#fde68a', w: 1.6 },
  { angle: -152, len: 24, color: '#fbbf24', w: 1.6 },
  { angle: -168, len: 16, color: '#fb923c', w: 1.4 },
];

const COINS = [
  { dx: -34, peakDy: 72, tOff: 0 },
  { dx: -12, peakDy: 86, tOff: 0.02 },
  { dx: 14, peakDy: 80, tOff: 0.01 },
  { dx: 36, peakDy: 60, tOff: 0.03 },
];

const FLOATING_TEXTS = [
  { text: '$', color: '#22c55e', dx: 4, size: 17, tOff: 0 },
  { text: '</>', color: '#6366f1', dx: -22, size: 11, tOff: 0.04 },
  { text: '+%', color: '#f59e0b', dx: 24, size: 13, tOff: 0.02 },
  { text: '</>', color: '#8b5cf6', dx: -6, size: 10, tOff: 0.06 },
];

export default function RobotForgerHero() {
  return (
    <svg
      viewBox="0 0 360 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[340px] mx-auto"
      style={{ filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.07))' }}
    >
      <defs>
        <linearGradient id="hav_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3f1f1" />
          <stop offset="100%" stopColor="#e3e0e0" />
        </linearGradient>
        <linearGradient id="hav_ham" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a848f" />
          <stop offset="100%" stopColor="#4a5363" />
        </linearGradient>
        <linearGradient id="hav_anv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b6bdc9" />
          <stop offset="100%" stopColor="#6b7280" />
        </linearGradient>
        <linearGradient id="hav_coin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="55%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>

      {/* Antenna */}
      <line x1="120" y1="21" x2="120" y2="50" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
      <motion.circle
        cx="120"
        cy="13"
        r="6.5"
        fill="#6366f1"
        initial={{ r: 6.5, opacity: 1 }}
        animate={{ r: [6.5, 10, 6.5], opacity: [1, 0.32, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Head */}
      <rect x="76" y="50" width="104" height="76" rx="13" fill="url(#hav_body)" stroke="#c8c8c8" strokeWidth="1.5" />

      {/* Left Eye */}
      <circle cx="108" cy="80" r="12" fill="#6366f111" stroke="#6366f1" strokeWidth="1.5" />
      <circle cx="108" cy="80" r="5.5" fill="white" />
      <motion.circle
        cy="78"
        r="2.2"
        fill="#1a1a1a"
        initial={{ cx: 110 }}
        animate={{ cx: [110, 111.5, 108.5, 110] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Right Eye */}
      <circle cx="150" cy="80" r="12" fill="#6366f111" stroke="#6366f1" strokeWidth="1.5" />
      <circle cx="150" cy="80" r="5.5" fill="white" />
      <motion.circle
        cy="78"
        r="2.2"
        fill="#1a1a1a"
        initial={{ cx: 152 }}
        animate={{ cx: [152, 153.5, 150.5, 152] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.12 }}
      />

      {/* Smile */}
      <path d="M 103 109 Q 128 120 153 109" stroke="#b8b8b8" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Neck */}
      <rect x="112" y="126" width="26" height="13" rx="5" fill="#eae7e7" stroke="#c8c8c8" strokeWidth="1" />

      {/* Body */}
      <rect x="56" y="139" width="132" height="116" rx="14" fill="url(#hav_body)" stroke="#c8c8c8" strokeWidth="1.5" />

      {/* Chest Screen */}
      <rect x="73" y="154" width="98" height="86" rx="8" fill="#fafaf9" stroke="#e2e0e0" strokeWidth="1" />
      <text x="122" y="176" fill="#6366f1" fontSize="8.5" fontFamily="monospace" fontWeight="700" textAnchor="middle">
        ALGO v5.0
      </text>
      <line x1="83" y1="185" x2="161" y2="185" stroke="#6366f128" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="83" y1="196" x2="147" y2="196" stroke="#22c55e28" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="83" y1="207" x2="154" y2="207" stroke="#f59e0b28" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="83" y="215" width="78" height="16" rx="3" fill="#6366f108" stroke="#6366f128" strokeWidth="1" />
      <text x="122" y="227" fill="#6366f170" fontSize="7" fontFamily="monospace" textAnchor="middle">
        FORGING PROFITS
      </text>

      {/* Left Arm Idle */}
      <motion.g
        style={{ transformOrigin: '56px 157px' }}
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <rect x="26" y="151" width="30" height="68" rx="12" fill="url(#hav_body)" stroke="#c8c8c8" strokeWidth="1.5" />
        <circle cx="41" cy="225" r="12" fill="url(#hav_body)" stroke="#c8c8c8" strokeWidth="1.5" />
      </motion.g>

      {/* Legs & Feet */}
      <rect x="78" y="255" width="30" height="54" rx="10" fill="#eae7e7" stroke="#c8c8c8" strokeWidth="1.5" />
      <rect x="130" y="255" width="30" height="54" rx="10" fill="#eae7e7" stroke="#c8c8c8" strokeWidth="1.5" />
      <rect x="70" y="301" width="46" height="14" rx="7" fill="#e0dcdc" stroke="#c8c8c8" strokeWidth="1.5" />
      <rect x="124" y="301" width="46" height="14" rx="7" fill="#e0dcdc" stroke="#c8c8c8" strokeWidth="1.5" />

      {/* Right Arm Shoulder */}
      <circle cx="188" cy="157" r="12" fill="url(#hav_body)" stroke="#c8c8c8" strokeWidth="1.5" />
      <circle cx="188" cy="157" r="5" fill="#e0dcdc" stroke="#c8c8c8" strokeWidth="1" />

      {/* Right Arm Hammer Swing */}
      <motion.g
        style={{ transformOrigin: '188px 157px' }}
        animate={{ rotate: [-25, -25, 59, -25, -25] }}
        transition={{
          duration: DURATION,
          times: [0, 0.16, 0.33, 0.5, 1],
          ease: ['linear', 'easeIn', 'easeOut', 'linear'],
          repeat: Infinity,
        }}
      >
        <rect x="188" y="147" width="64" height="20" rx="10" fill="url(#hav_body)" stroke="#c8c8c8" strokeWidth="1.5" />
        <circle cx="252" cy="157" r="10" fill="url(#hav_body)" stroke="#c8c8c8" strokeWidth="1.5" />
        <rect x="248" y="150" width="56" height="14" rx="7" fill="url(#hav_body)" stroke="#c8c8c8" strokeWidth="1.5" />
        <rect x="300" y="152" width="18" height="10" rx="4" fill="url(#hav_body)" stroke="#c8c8c8" strokeWidth="1.2" />
        <rect x="314" y="135" width="28" height="44" rx="5" fill="url(#hav_ham)" stroke="#333c4a" strokeWidth="1.5" />
        <rect x="317" y="138" width="9" height="12" rx="2" fill="white" opacity="0.18" />
        <rect x="314" y="155" width="28" height="2.5" fill="#22293a" opacity="0.35" />
      </motion.g>

      {/* Anvil */}
      <path d="M 224 277 L 237 265 L 237 277 Z" fill="url(#hav_anv)" stroke="#6b7280" strokeWidth="1" />
      <rect x="237" y="265" width="62" height="14" rx="3" fill="url(#hav_anv)" stroke="#6b7280" strokeWidth="1.5" />
      <rect x="241" y="267" width="22" height="4" rx="2" fill="white" opacity="0.28" />
      <rect x="244" y="279" width="46" height="10" rx="2" fill="#8b97a6" stroke="#6b7280" strokeWidth="1" />
      <rect x="229" y="289" width="76" height="18" rx="4" fill="url(#hav_anv)" stroke="#6b7280" strokeWidth="1.5" />
      <rect x="231" y="303" width="72" height="4" rx="2" fill="#515d6a" opacity="0.4" />

      {/* Floor Line */}
      <line x1="40" y1="323" x2="322" y2="323" stroke="#e5e7eb" strokeWidth="1.5" strokeLinecap="round" />

      {/* Impact Glow */}
      <motion.circle
        cx={IMPACT_X}
        cy={IMPACT_Y}
        fill="#fef3c7"
        initial={{ r: 0, opacity: 0 }}
        animate={{ r: [0, 0, 32, 14, 0], opacity: [0, 0, 0.8, 0.25, 0] }}
        transition={{ duration: DURATION, times: [0, 0.32, 0.36, 0.43, 0.5], repeat: Infinity }}
      />

      {/* Sparks */}
      {SPARKS.map((spark, idx) => {
        const rad = (spark.angle * Math.PI) / 180;
        const dx = Math.cos(rad) * spark.len;
        const dy = Math.sin(rad) * spark.len;
        return (
          <motion.line
            key={idx}
            x1={IMPACT_X}
            y1={IMPACT_Y}
            initial={{ x2: IMPACT_X, y2: IMPACT_Y, opacity: 0 }}
            animate={{
              x2: [IMPACT_X, IMPACT_X, IMPACT_X + dx * 0.35, IMPACT_X + dx],
              y2: [IMPACT_Y, IMPACT_Y, IMPACT_Y + dy * 0.35, IMPACT_Y + dy],
              opacity: [0, 0, 1, 0],
            }}
            transition={{
              duration: DURATION,
              times: [0, 0.33, 0.39, 0.49],
              repeat: Infinity,
              delay: idx * 0.016,
            }}
            stroke={spark.color}
            strokeWidth={spark.w}
            strokeLinecap="round"
          />
        );
      })}

      {/* Flying Coins */}
      {COINS.map((coin, idx) => {
        const start = 0.33 + coin.tOff;
        const mid = start + 0.2;
        const end = start + 0.34;
        const cxPath = [IMPACT_X, IMPACT_X, IMPACT_X + coin.dx * 0.4, IMPACT_X + coin.dx * 0.8, IMPACT_X + coin.dx];
        const cyPath = [IMPACT_Y, IMPACT_Y, IMPACT_Y - coin.peakDy * 0.55, IMPACT_Y - coin.peakDy, IMPACT_Y - coin.peakDy * 0.85];
        const times = [0, start, start + 0.07, mid, end];

        return (
          <g key={idx}>
            <motion.ellipse
              cx={IMPACT_X}
              cy={IMPACT_Y + 4}
              rx={5}
              ry={2.5}
              fill="rgba(0,0,0,0.12)"
              initial={{ opacity: 0 }}
              animate={{
                cx: cxPath,
                cy: cyPath.map((p) => p + 6),
                opacity: [0, 0, 0.35, 0.1, 0],
                rx: [5, 5, 4, 3, 2],
              }}
              transition={{ duration: DURATION, times, repeat: Infinity }}
            />
            <motion.circle
              r="8"
              fill="url(#hav_coin)"
              stroke="#b45309"
              strokeWidth="1.2"
              initial={{ cx: IMPACT_X, cy: IMPACT_Y, opacity: 0 }}
              animate={{ cx: cxPath, cy: cyPath, opacity: [0, 0, 1, 0.9, 0] }}
              transition={{ duration: DURATION, times, repeat: Infinity }}
            />
            <motion.text
              fontFamily="monospace"
              fontSize="9"
              fontWeight="900"
              fill="#92400e"
              textAnchor="middle"
              dominantBaseline="central"
              initial={{ x: IMPACT_X, y: IMPACT_Y, opacity: 0 }}
              animate={{ x: cxPath, y: cyPath, opacity: [0, 0, 1, 0.85, 0] }}
              transition={{ duration: DURATION, times, repeat: Infinity }}
            >
              $
            </motion.text>
            <motion.line
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ x1: IMPACT_X - 2, y1: IMPACT_Y - 3, x2: IMPACT_X + 3, y2: IMPACT_Y - 1, opacity: 0 }}
              animate={{
                x1: cxPath.map((p) => p - 2),
                y1: cyPath.map((p) => p - 3),
                x2: cxPath.map((p) => p + 3),
                y2: cyPath.map((p) => p - 1),
                opacity: [0, 0, 0.9, 0.5, 0],
              }}
              transition={{ duration: DURATION, times, repeat: Infinity }}
            />
          </g>
        );
      })}

      {/* Rising Floating Text Particles */}
      {FLOATING_TEXTS.map((particle, idx) => {
        const start = 0.35 + particle.tOff;
        return (
          <motion.text
            key={idx}
            x={IMPACT_X + particle.dx}
            fontFamily="monospace"
            fontSize={particle.size}
            fontWeight="800"
            fill={particle.color}
            textAnchor="middle"
            initial={{ y: IMPACT_Y + 4, opacity: 0 }}
            animate={{
              y: [IMPACT_Y + 4, IMPACT_Y + 4, IMPACT_Y - 12, IMPACT_Y - 52, IMPACT_Y - 72],
              opacity: [0, 0, 1, 0.65, 0],
            }}
            transition={{
              duration: DURATION,
              times: [0, start, start + 0.04, start + 0.22, start + 0.38],
              repeat: Infinity,
            }}
          >
            {particle.text}
          </motion.text>
        );
      })}
    </svg>
  );
}
