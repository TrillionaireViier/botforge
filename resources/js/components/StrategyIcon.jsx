export default function StrategyIcon({ id, gradient, size = 32 }) {
  const iconSize = Math.round(size * 0.52);

  const renderIcon = () => {
    switch (id) {
      case 'breakout':
        return (
          <>
            <line x1="1" y1="9" x2="15" y2="9" stroke="white" strokeWidth="1.5" strokeDasharray="2.5 1.5" opacity="0.55" />
            <line x1="8" y1="14" x2="8" y2="3" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            <polyline points="5,6 8,2.5 11,6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </>
        );
      case 'range':
        return (
          <>
            <line x1="1" y1="4" x2="15" y2="4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="1" y1="12" x2="15" y2="12" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="8" y1="11" x2="8" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <polyline points="5.5,7 8,4.5 10.5,7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="5.5,9 8,11.5 10.5,9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </>
        );
      case 'pullback':
        return (
          <>
            <polyline points="1,13 5,9 8,11 13,4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="13" cy="4" r="2.2" stroke="white" strokeWidth="1.5" />
            <circle cx="13" cy="4" r="0.7" fill="white" />
          </>
        );
      case 'swing':
        return (
          <>
            <path d="M1,10 Q3,4 6.5,8 Q10,12 13,6 Q14,3.5 15,4" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="15" cy="4" r="1.8" fill="white" />
          </>
        );
      case 'trend':
        return (
          <>
            <polyline points="1,13 1,10 5,10 5,7 9,7 9,4 13,4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="11,2 13,4 11,6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </>
        );
      default:
        return (
          <>
            <polyline points="1,12 5,7 9,10 15,3" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="15" cy="3" r="1.5" fill="white" />
          </>
        );
    }
  };

  return (
    <div
      className={`rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0 shadow-sm`}
      style={{ width: size, height: size }}
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 16 16" fill="none">
        {renderIcon()}
      </svg>
    </div>
  );
}
