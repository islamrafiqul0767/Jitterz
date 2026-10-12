// Decorative SVG visual for the hero section — a stylized coffee cup illustration
export function CoffeeHeroVisual() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:flex items-center justify-center opacity-20" aria-hidden="true">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-80 h-80 xl:w-96 xl:h-96"
      >
        {/* Steam lines */}
        <path
          d="M160 120 C160 100, 170 90, 160 70"
          stroke="#B87945"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M200 110 C200 90, 210 80, 200 60"
          stroke="#B87945"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M240 120 C240 100, 250 90, 240 70"
          stroke="#B87945"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.4"
        />
        {/* Cup body */}
        <path
          d="M120 160 L130 300 C130 320, 150 340, 200 340 C250 340, 270 320, 270 300 L280 160 Z"
          fill="#2B1E18"
          opacity="0.9"
        />
        {/* Cup handle */}
        <path
          d="M280 180 C320 180, 330 220, 320 250 C310 280, 280 270, 280 260"
          stroke="#2B1E18"
          strokeWidth="12"
          fill="none"
          opacity="0.9"
        />
        {/* Coffee surface */}
        <ellipse
          cx="200"
          cy="165"
          rx="78"
          ry="15"
          fill="#B87945"
          opacity="0.7"
        />
        {/* Saucer */}
        <ellipse
          cx="200"
          cy="350"
          rx="120"
          ry="20"
          fill="#2B1E18"
          opacity="0.3"
        />
        {/* Decorative circle */}
        <circle cx="200" cy="200" r="160" stroke="#7D846B" strokeWidth="1" opacity="0.2" />
        <circle cx="200" cy="200" r="180" stroke="#B87945" strokeWidth="0.5" opacity="0.15" />
      </svg>
    </div>
  );
}
