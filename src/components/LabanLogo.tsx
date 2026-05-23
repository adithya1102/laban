import React from 'react';

interface LabanLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCircle?: boolean;
}

export function LabanLogo({ className = '', size = 'md', showCircle = true }: LabanLogoProps) {
  // Dimensions based on size
  const dimensions = {
    sm: 'h-10 w-10',
    md: 'h-16 w-16',
    lg: 'h-32 w-32',
    xl: 'h-52 w-52',
  }[size];

  // SVG viewBox is 200x200
  return (
    <div className={`relative select-none ${dimensions} ${className}`} id="laban-brand-logo">
      <svg
        viewBox="0 0 200 200"
        fill="currentColor"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle if requested */}
        {showCircle && (
          <circle cx="100" cy="100" r="96" fill="#0c6be8" stroke="#ffffff" strokeWidth="2" />
        )}

        {/* 1. Halo above the 11:11 */}
        {/* Slightly angled glowing angel halo */}
        <g transform="translate(100, 48) rotate(-5)">
          {/* Halo back thickness */}
          <ellipse
            cx="0"
            cy="0"
            rx="32"
            ry="11"
            fill="none"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="8"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="32"
            ry="11"
            fill="none"
            stroke="#ffffff"
            strokeWidth="4"
          />
          {/* Glow effect surrounding halo */}
          <ellipse
            cx="0"
            cy="0"
            rx="36"
            ry="14"
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="6"
          />
        </g>

        {/* 2. Primary text: 11:11 (Playful hand-drawn font feel using SVG paths) */}
        {/* We draw the four 1s and the double colon dots */}
        <g fill="#ffffff" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* First "1": left side curves slightly outwards */}
          <path d="M 52,90 C 51,75 53,62 55,56 C 53,59 47,62 44,63 C 45,61 49,55 52,53 Q 56,51 58,52 C 58,54 57,69 56,91 Z" />
          
          {/* Second "1" */}
          <path d="M 72,90 C 71,76 72,61 74,56 C 72,59 66,62 63,63 C 64,61 68,55 71,53 Q 75,51 77,52 C 77,54 76,69 75,91 Z" />

          {/* Dots ":" */}
          <circle cx="93" cy="65" r="5.5" fill="#ffffff" stroke="none" />
          <circle cx="93" cy="80" r="5.5" fill="#ffffff" stroke="none" />

          {/* Third "1" */}
          <path d="M 112,90 C 111,76 112,61 114,56 C 112,59 106,62 103,63 C 104,61 108,55 111,53 Q 115,51 117,52 C 117,54 116,69 115,91 Z" />

          {/* Fourth "1" */}
          <path d="M 132,90 C 131,76 132,61 134,56 C 132,59 126,62 123,63 C 124,61 128,55 131,53 Q 135,51 137,52 C 137,54 136,69 135,91 Z" />
        </g>

        {/* 3. Bouncy "laban" logo font drawn as fluid paths below */}
        {/* Drawn to match the specific rounded Arabic-logo style Latin typography */}
        <g fill="#ffffff">
          {/* "l" with top loop/droplet */}
          <path d="M 46,125 C 43,121 41,114 41,106 C 44,106 48,111 48,116 L 48,136 Q 48,144 43,148 Q 38,152 32,152 Q 26,152 22,148 Q 18,144 18,138 L 22,138 Q 22,142 24,144 Q 27,146 32,146 Q 38,146 41,141 Q 42,139 42,134 Z" />

          {/* "a" with playful bounce */}
          <path d="M 70,126 Q 74,122 74,116 Q 74,110 68,110 Q 61,110 57,115 L 57,125 Q 56,134 51,139 Q 47,143 45,145 Q 49,147 54,147 Q 61,147 67,141 Q 70,138 72,134 L 72,135 Q 72,141 76,144 Q 80,146 84,146 L 84,142 Q 81,142 79,139 L 79,126 Z M 67,114 Q 70,114 70,118 L 70,127 C 69,127 65,129 62,131 C 59,132 58,135 58,138 C 58,141 61,144 65,144 Q 68,144 71,139 Z" />

          {/* "b" with nice baseline loop */}
          <path d="M 97,116 C 97,110 93,106 87,106 Q 81,106 78,112 L 78,103 L 74,103 L 74,136 Q 74,144 79,148 Q 84,152 90,152 Q 96,152 100,148 Q 104,144 104,136 L 104,116 Z M 93,114 Q 96,114 96,120 L 96,135 Q 96,140 94,142 Q 92,144 89,144 Q 85,144 82,141 Q 80,138 80,131 L 80,120 Q 80,114 83,111 T 93,114 Z" />

          {/* "a" bouncy */}
          <path d="M 124,126 Q 128,122 128,116 Q 128,110 122,110 Q 115,110 111,115 L 111,125 Q 110,134 105,139 Q 101,143 99,145 Q 103,147 108,147 Q 115,147 121,141 Q 124,138 126,134 L 126,135 Q 126,141 130,144 Q 134,146 138,146 L 138,142 Q 135,142 133,139 L 133,126 Z M 121,114 Q 124,114 124,118 L 124,127 C 123,127 119,129 116,131 C 113,132 112,135 112,138 C 112,141 115,144 119,144 Q 122,144 125,139 Z" />

          {/* "n" with curved terminal hook and milk drop splash */}
          <path d="M 154,115 Q 150,110 144,110 Q 138,110 134,115 L 134,103 L 130,103 L 130,136 Q 130,144 135,147 Q 140,150 146,150 Q 152,150 156,146 Q 159,142 161,136 L 157,136 Q 155,140 152,142 Q 149,144 145,144 Q 141,144 139,141 Q 137,138 137,133 L 137,121 Q 143,118 147,117 C 151,116 153,115 154,115 Z" />
          
          {/* Cute milk splash droplet / flairs above letters to enrich brand texture */}
          {/* Splashes on bottom of laban */}
          <path d="M 148,158 C 146,164 140,166 138,162 C 137,159 139,154 143,153 C 145,153 148,155 148,158 Z" />
          <path d="M 112,154 C 110,160 105,162 103,158 C 102,155 104,151 107,150 C 109,150 112,151 112,154 Z" />
          <path d="M 166,128 C 163,132 157,131 156,127 C 155,124 158,120 162,120 C 164,120 167,124 166,128 Z" />
          
          {/* Smile curves on accent drops */}
          <path d="M 152,102 C 146,102 143,100 142,98 C 141,96 142,94 144,94 C 147,95 150,96 154,95 C 157,94 159,96 159,98 C 158,100 155,102 152,102 Z" stroke="none" />
        </g>
      </svg>
    </div>
  );
}
