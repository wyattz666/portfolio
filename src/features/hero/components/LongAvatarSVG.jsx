/**
 * Avatar chibi gốc của Long — tóc đỏ nhọn, biểu cảm deadpan/buồn ngủ đặc trưng,
 * áo hoodie đen kéo khóa. Artwork SVG tự vẽ lấy cảm hứng phong cách, không sao chép ảnh gốc.
 */
export default function LongAvatarSVG() {
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%">
      {/* Áo hoodie đen */}
      <path
        d="M40 200 Q40 155 60 148 L140 148 Q160 155 160 200 Z"
        fill="#2A2130"
      />
      <path d="M92 148 L100 172 L108 148 Z" fill="#3A3040" />
      <line x1="100" y1="172" x2="100" y2="200" stroke="#4A4050" strokeWidth="2" />
      <line x1="97" y1="180" x2="103" y2="184" stroke="#4A4050" strokeWidth="2" />
      <line x1="97" y1="192" x2="103" y2="188" stroke="#4A4050" strokeWidth="2" />

      {/* Cổ — thu hẹp để liền mạch với đầu */}
      <rect x="88" y="132" width="24" height="20" fill="#FFE0C4" />

      {/* Đầu */}
      <circle cx="100" cy="98" r="58" fill="#FFE0C4" />

      {/* Má hồng */}
      <ellipse cx="66" cy="108" rx="9" ry="5" fill="var(--color-sakura)" opacity="0.45" />
      <ellipse cx="134" cy="108" rx="9" ry="5" fill="var(--color-sakura)" opacity="0.45" />

      {/* Mắt nhắm deadpan — 2 gạch ngang đậm đặc trưng */}
      <rect x="58" y="93" width="34" height="7" rx="3.5" fill="var(--color-ink)" transform="rotate(-3 75 96)" />
      <rect x="108" y="97" width="34" height="7" rx="3.5" fill="var(--color-ink)" transform="rotate(-3 125 100)" />

      {/* Miệng hé nhỏ kiểu lơ mơ */}
      <ellipse cx="100" cy="122" rx="10" ry="5" fill="#B5715F" />
      <ellipse cx="100" cy="120" rx="7" ry="3" fill="#FF9E9E" />

      {/* Tóc đỏ — mảng lớn phủ đỉnh đầu, spike đổ chéo phải, rẽ ngôi lệch trái */}
      <path
        d="M46 95
           C30 60 42 24 82 14
           C76 26 80 34 90 30
           C94 18 112 12 128 20
           C120 26 122 34 132 32
           C142 20 166 22 176 40
           C164 40 158 48 168 52
           C184 50 198 68 190 88
           C178 82 168 86 174 98
           C168 112 150 108 148 92
           C144 106 128 108 124 92
           C120 108 104 110 100 92
           C98 108 82 112 76 96
           C70 110 54 108 50 92
           C44 100 40 100 46 95 Z"
        fill="var(--mascot-hair, #A83E42)"
      />
      <path
        d="M84 18 C78 30 82 42 94 36 C100 26 96 16 84 18 Z"
        fill="var(--mascot-hair-light, #C25459)"
        opacity="0.55"
      />
      <path
        d="M150 30 C158 40 168 44 178 40 C170 30 158 26 150 30 Z"
        fill="var(--mascot-hair-light, #C25459)"
        opacity="0.4"
      />

      {/* Khóa kéo áo phản chiếu ánh sáng nhỏ */}
      <circle cx="100" cy="176" r="3" fill="#6A6070" />
    </svg>
  );
}
