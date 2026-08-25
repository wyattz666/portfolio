/**
 * Dữ liệu các dự án hiển thị trong Portfolio.
 * Dựa trên các dự án thật của Long — cập nhật tại đây khi có dự án mới.
 */
export const projects = [
  {
    id: 'dragonfilm',
    iconName: 'html5',
    title: 'DragonFilm',
    tag: 'Dự án chính',
    description:
      'Nền tảng xem phim trực tuyến tiếng Việt, tích hợp 3 API phim (KKPhim, OPhim, NguonC), hỗ trợ HLS streaming, lưu lịch sử xem và tiến độ tập phim.',
    stack: ['HTML', 'CSS', 'JavaScript', 'HLS.js'],
    href: 'https://dragonfilm.pages.dev',
    repo: 'https://github.com/wyattz666/dragonfilm',
    color: 'sakura',
  },
  {
    id: 'xemvoilong',
    iconName: 'javascript',
    title: 'Xem Với Long',
    tag: 'Phiên bản đầu tiên',
    description:
      'Dự án web xem phim tiền thân của DragonFilm — nơi mình bắt đầu học cách gọi API phim và xây dựng giao diện xem trực tuyến.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    // TODO: xác nhận domain Pages đã build lại dưới username mới (Pages không tự redirect như repo URL)
    href: 'https://wyattz666.github.io/xemvoilong1/',
    repo: 'https://github.com/wyattz666',
    color: 'sky',
  },
  {
    id: 'polifort',
    iconName: 'vitejs',
    title: 'Portfolio',
    tag: 'Đang xây dựng',
    description:
      'Chính là website bạn đang xem! Portfolio cá nhân theo phong cách anime pastel, xây bằng React với kiến trúc feature-based.',
    stack: ['React', 'Vite', 'Framer Motion'],
    href: '#top',
    repo: 'https://github.com/wyattz666',
    color: 'lavender',
  },
];
