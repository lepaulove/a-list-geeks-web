export default function Logo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4D8CFF" />
          <stop offset="50%" stopColor="#6EEBFF" />
          <stop offset="100%" stopColor="#9D4EDD" />
        </linearGradient>
        <filter id="logoGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#logoGlow)">
        <path
          d="M 30 80 Q 40 60 80 60 L 220 60 Q 260 60 270 80 L 270 130 Q 270 150 250 150 L 50 150 Q 30 150 30 130 Z"
          stroke="url(#logoGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M 80 80 Q 150 120 220 80"
          stroke="url(#logoGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <rect
          x="50"
          y="170"
          width="70"
          height="70"
          rx="15"
          stroke="url(#logoGradient)"
          strokeWidth="6"
          fill="none"
        />

        <rect
          x="180"
          y="170"
          width="70"
          height="70"
          rx="15"
          stroke="url(#logoGradient)"
          strokeWidth="6"
          fill="none"
        />

        <line
          x1="85"
          y1="185"
          x2="85"
          y2="225"
          stroke="url(#logoGradient)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="100"
          y1="185"
          x2="100"
          y2="225"
          stroke="url(#logoGradient)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="75"
          y1="205"
          x2="110"
          y2="205"
          stroke="url(#logoGradient)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <text
          x="215"
          y="225"
          fontFamily="monospace"
          fontSize="32"
          fontWeight="bold"
          fill="url(#logoGradient)"
          textAnchor="middle"
        >
          &lt;/&gt;
        </text>

        <circle cx="150" cy="205" r="8" fill="url(#logoGradient)" />
      </g>
    </svg>
  );
}
