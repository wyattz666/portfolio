/**
 * SVG linh vật chibi (cáo nhỏ) — signature element của Polifort.
 * eyeOffset: {x, y} độ lệch tối đa của con ngươi để tạo hiệu ứng "dõi theo chuột".
 */
export default function MascotSVG({ eyeOffset = { x: 0, y: 0 }, blinking = false }) {
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%">
      {/* Tai */}
      <path d="M55 55 L35 10 L80 45 Z" fill="var(--color-sakura)" />
      <path d="M145 55 L165 10 L120 45 Z" fill="var(--color-sakura)" />
      <path d="M58 48 L45 20 L72 42 Z" fill="#FFE3EE" />
      <path d="M142 48 L155 20 L128 42 Z" fill="#FFE3EE" />

      {/* Đầu */}
      <circle cx="100" cy="105" r="62" fill="var(--color-sakura)" />
      <ellipse cx="100" cy="122" rx="34" ry="26" fill="#FFF7FB" />

      {/* Má hồng */}
      <ellipse cx="62" cy="115" rx="10" ry="6" fill="var(--color-honey)" opacity="0.7" />
      <ellipse cx="138" cy="115" rx="10" ry="6" fill="var(--color-honey)" opacity="0.7" />

      {/* Mắt */}
      <g>
        <ellipse cx="78" cy="100" rx="9" ry={blinking ? 1 : 11} fill="var(--color-ink)" />
        <ellipse cx="122" cy="100" rx="9" ry={blinking ? 1 : 11} fill="var(--color-ink)" />
        {!blinking && (
          <>
            <circle
              cx={78 + eyeOffset.x}
              cy={97 + eyeOffset.y}
              r="3.4"
              fill="white"
            />
            <circle
              cx={122 + eyeOffset.x}
              cy={97 + eyeOffset.y}
              r="3.4"
              fill="white"
            />
          </>
        )}
      </g>

      {/* Mũi */}
      <path d="M96 118 Q100 123 104 118 Q100 121 96 118 Z" fill="var(--color-ink)" />

      {/* Đuôi (bay theo hoạt ảnh CSS bên ngoài) */}
      <path
        d="M155 150 Q195 145 185 185 Q175 165 150 165 Z"
        fill="var(--color-sakura)"
      />
      <path
        d="M170 158 Q192 158 185 180 Q178 168 163 168 Z"
        fill="#FFE3EE"
      />
    </svg>
  );
}
