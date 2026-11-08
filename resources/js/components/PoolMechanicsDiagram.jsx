import { motion } from 'framer-motion';

export default function PoolMechanicsDiagram() {
  const nodes = Array.from({ length: 8 }, (_, idx) => {
    const angle = (idx / 8) * 2 * Math.PI - Math.PI / 2;
    return {
      x: 220 + 148 * Math.cos(angle),
      y: 200 + 148 * Math.sin(angle),
    };
  });

  return (
    <div className="rounded-2xl border border-border/50 bg-secondary/20 p-4 overflow-hidden w-full max-w-[480px] mx-auto">
      <svg viewBox="0 0 440 445" className="w-full h-auto" aria-hidden="true">
        <defs>
          <radialGradient id="pmGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.06" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="220" cy="200" rx="165" ry="160" fill="url(#pmGrad)" />
        <circle cx="220" cy="200" r="148" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="3 6" />

        {/* Lines from satellites to center */}
        {nodes.map((node, idx) => (
          <line
            key={`line-${idx}`}
            x1={node.x}
            y1={node.y}
            x2={220}
            y2={200}
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="1.5"
          />
        ))}

        {/* Inflowing traveling dots */}
        {nodes.map((node, idx) => (
          <motion.circle
            key={`dot-${idx}`}
            cx={220}
            cy={200}
            r={5}
            fill="currentColor"
            initial={{ x: node.x - 220, y: node.y - 200, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: [0, 0.9, 0.9, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: idx * 0.26,
              ease: 'easeIn',
            }}
          />
        ))}

        {/* Satellite Participant Nodes */}
        {nodes.map((node, idx) => (
          <g key={`user-${idx}`}>
            <circle cx={node.x} cy={node.y} r={27} fill="white" stroke="currentColor" strokeOpacity="0.14" strokeWidth="1.5" />
            <circle cx={node.x} cy={node.y - 7} r={7.5} fill="currentColor" fillOpacity="0.22" />
            <path
              d={`M${node.x - 12} ${node.y + 17} C${node.x - 12} ${node.y + 6} ${node.x + 12} ${node.y + 6} ${node.x + 12} ${node.y + 17}`}
              fill="currentColor"
              fillOpacity="0.22"
            />
            <text
              x={node.x}
              y={node.y + 38}
              textAnchor="middle"
              fill="currentColor"
              fillOpacity="0.4"
              fontSize="9.5"
              fontFamily="system-ui, sans-serif"
            >
              Участник
            </text>
          </g>
        ))}

        {/* Central Manager Pulse */}
        <motion.circle
          cx={220}
          cy={200}
          r={64}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.15"
          strokeWidth="2"
          animate={{ scale: [1, 1.22, 1], opacity: [0.15, 0, 0.15] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          style={{ transformOrigin: '220px 200px' }}
        />
        <circle cx={220} cy={200} r={54} fill="currentColor" />

        {/* Shield Icon in Center */}
        <path
          d="M220 168 L234 176 L234 190 C234 206 220 216 220 216 C220 216 206 206 206 190 L206 176 Z"
          fill="white"
          fillOpacity="0.12"
        />
        <path
          d="M213 195 L218 202 L229 190"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.9"
        />
        <text
          x={220}
          y={218}
          textAnchor="middle"
          fill="white"
          fontSize="11"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.3"
        >
          ДЕСЯТНИК
        </text>
        <text
          x={220}
          y={232}
          textAnchor="middle"
          fill="white"
          fillOpacity="0.5"
          fontSize="9"
          fontFamily="system-ui, sans-serif"
        >
          верифицирован
        </text>

        {/* Max 24 Badge */}
        <rect x={246} y={125} width={58} height={21} rx={10.5} fill="currentColor" />
        <text
          x={275}
          y={140}
          textAnchor="middle"
          fill="white"
          fontSize="9.5"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.6"
        >
          MAX 24
        </text>

        {/* Bottom Description */}
        <text textAnchor="middle" fill="currentColor" fillOpacity="0.35" fontSize="10.5" fontFamily="system-ui, sans-serif">
          <tspan x={220} dy={0} y={416}>
            Максимальное количество участников пула для подключения
          </tspan>
          <tspan x={220} dy={14}>
            к одному кошельку — 24 участника
          </tspan>
        </text>
      </svg>
    </div>
  );
}
