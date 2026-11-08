import { motion } from 'framer-motion';

export default function HowItWorksCircle({ activeStep = 0 }) {
  const steps = [
    { label: 'Регистрация', sub: 'Личный кабинет', ldx: 0, ldy: -36, anchor: 'middle' },
    { label: 'API-ключи', sub: 'Биржа → BF', ldx: 34, ldy: 0, anchor: 'start' },
    { label: 'Стратегия', sub: 'Один из 5 ботов', ldx: 0, ldy: 36, anchor: 'middle' },
    { label: 'Прибыль', sub: 'С каждой сделки', ldx: -34, ldy: 0, anchor: 'end' },
  ].map((step, idx) => {
    const angle = -Math.PI / 2 + (idx / 4) * 2 * Math.PI;
    return {
      ...step,
      x: 220 + 100 * Math.cos(angle),
      y: 200 + 100 * Math.sin(angle),
      angle,
    };
  });

  const nextStep = (activeStep + 1) % 4;
  const segments = 24;
  const currentAngle = steps[activeStep].angle;
  const dotX = Array.from({ length: segments + 1 }, (_, i) => 220 + 100 * Math.cos(currentAngle + (i / segments) * (Math.PI / 2)));
  const dotY = Array.from({ length: segments + 1 }, (_, i) => 200 + 100 * Math.sin(currentAngle + (i / segments) * (Math.PI / 2)));
  const times = Array.from({ length: segments + 1 }, (_, i) => i / segments);

  return (
    <div className="rounded-2xl border border-border/50 bg-secondary/20 p-4 overflow-hidden w-full max-w-[440px] mx-auto">
      <svg viewBox="0 0 440 400" className="w-full h-auto" aria-hidden="true">
        <defs>
          <radialGradient id="hwGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.06" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="220" cy="200" r="200" fill="url(#hwGrad)" />
        <circle cx="220" cy="200" r="100" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="3 7" />

        {/* Orbit Arcs */}
        {steps.map((st, idx) => {
          const next = steps[(idx + 1) % 4];
          return (
            <path
              key={idx}
              d={`M ${st.x} ${st.y} A 100 100 0 0 1 ${next.x} ${next.y}`}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.1"
              strokeWidth="1.5"
            />
          );
        })}

        {/* Active Traveling Arc */}
        <motion.path
          key={`arc-${activeStep}`}
          d={`M ${steps[activeStep].x} ${steps[activeStep].y} A 100 100 0 0 1 ${steps[nextStep].x} ${steps[nextStep].y}`}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.65"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />

        {/* Traveling Dot */}
        <motion.circle
          key={`dot-${activeStep}`}
          r="4"
          fill="currentColor"
          fillOpacity="0.8"
          animate={{ cx: dotX, cy: dotY }}
          initial={{ cx: dotX[0], cy: dotY[0] }}
          transition={{ duration: 2.5, ease: 'easeInOut', times }}
        />

        {/* Central Hub */}
        <motion.circle
          cx="220"
          cy="200"
          r="36"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0, 0.12] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <circle cx="220" cy="200" r="27" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" />
        <text x="220" y="195" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" fill="currentColor" fillOpacity="0.45">
          Bot
        </text>
        <text x="220" y="208" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" fill="currentColor" fillOpacity="0.45">
          Forge
        </text>

        {/* 4 Station Nodes */}
        {steps.map((st, idx) => {
          const isActive = idx === activeStep;
          const labelX = st.x + st.ldx;
          const labelY = st.y + st.ldy;

          return (
            <g key={idx}>
              {isActive && (
                <motion.circle
                  cx={st.x}
                  cy={st.y}
                  r="26"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.25"
                  strokeWidth="2"
                  animate={{ scale: [1, 1.55, 1], opacity: [0.25, 0, 0.25] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                />
              )}
              <circle cx={st.x} cy={st.y} r="22" fill="white" />
              <motion.circle
                cx={st.x}
                cy={st.y}
                r="20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.5"
                animate={{
                  fillOpacity: isActive ? 0.88 : 0.07,
                  strokeOpacity: isActive ? 0.88 : 0.2,
                }}
                transition={{ duration: 0.4 }}
              />
              <motion.text
                x={st.x}
                y={st.y + 1}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="13"
                fontWeight="bold"
                fontFamily="system-ui, sans-serif"
                animate={{ fill: isActive ? '#ffffff' : 'rgba(0,0,0,0.45)' }}
                transition={{ duration: 0.4 }}
              >
                {idx + 1}
              </motion.text>
              <text
                x={labelX}
                y={labelY - 5}
                textAnchor={st.anchor}
                fontSize="11"
                fontWeight="600"
                fontFamily="system-ui, sans-serif"
                fill="currentColor"
                fillOpacity={isActive ? 0.9 : 0.38}
              >
                {st.label}
              </text>
              <text
                x={labelX}
                y={labelY + 9}
                textAnchor={st.anchor}
                fontSize="9.5"
                fontFamily="system-ui, sans-serif"
                fill="currentColor"
                fillOpacity={isActive ? 0.55 : 0.22}
              >
                {st.sub}
              </text>
            </g>
          );
        })}

        {/* Step Indicator Dots */}
        {[0, 1, 2, 3].map((stepIdx) => (
          <motion.circle
            key={`ind-${stepIdx}`}
            cx={202 + stepIdx * 12}
            cy={375}
            r="3"
            fill="currentColor"
            animate={{ fillOpacity: activeStep === stepIdx ? 0.75 : 0.18 }}
            transition={{ duration: 0.4 }}
          />
        ))}
      </svg>
    </div>
  );
}
