import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    // Header
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_contact: 'Contact',
    nav_connect: "Let's connect",
    // Hero
    hero_greeting: 'Hi, I am Long',
    hero_subtitle: 'I am an Information Technology student at Ho Chi Minh City Open University with a passion for building and deploying real-world web products. From a personal movie streaming platform to ongoing ideas, I always consider each project an opportunity to refine my skills and tell a unique tech story.',
    hero_btn_projects: 'View Projects',
    hero_btn_talk: "Let's talk",
    hero_stat_1: 'Started learning IT',
    hero_stat_2: 'APIs integrated in DragonFilm',
    hero_scroll: 'Scroll down',
    // About
    about_eyebrow: 'About me',
    about_title: 'A small dev, big dreams',
    about_subtitle: 'I love turning ideas into real products — functional, usable, and delivering real value.',
    about_fact1_title: 'HCMC Open University',
    about_fact1_desc: 'First-year IT student, starting in 2024.',
    about_fact2_title: 'Passion for cinema',
    about_fact2_desc: 'Love for movies and Vietnamese cinema — an inspiration for many personal projects.',
    about_fact3_title: 'Self-taught & hands-on',
    about_fact3_desc: 'Building and deploying real web projects alongside my university studies.',
    // Projects
    proj_eyebrow: 'Quest log',
    proj_title: 'Projects I have completed',
    proj_subtitle: 'From the very first lines of code to a real deployed platform — each project is a journey.',
    proj_demo: 'Live Demo',
    proj_source: 'Source Code',
    // Tags
    tag_main: 'Main Project',
    tag_first: 'First Version',
    tag_wip: 'Work in Progress',
    // Project Descriptions
    desc_dragonfilm: 'Vietnamese online movie streaming platform, integrating 3 movie APIs, supporting HLS streaming, watch history, and episode progress.',
    desc_xemvoilong: 'The predecessor to DragonFilm — where I first learned to fetch movie APIs and build a streaming interface.',
    desc_polifort: 'The website you are looking at! A personal portfolio with a modern and elegant design, built with React using a feature-based architecture.',
    // Skills
    skills_eyebrow: 'Skill chart',
    skills_title: 'Skills I am leveling up',
    skills_subtitle: 'Still a first-year student, but I learn by building real projects every day.',
    // Contact
    contact_eyebrow: 'Connect',
    contact_title: "Let's create something awesome?",
    contact_subtitle: "Whether it's a project, a question, or just a simple hello — I'm always ready to listen.",
    contact_note: '"Don\'t hesitate to message me, I reply pretty fast!"',
    contact_label_name: 'Your name',
    contact_placeholder_name: 'John Doe',
    contact_label_msg: 'Message',
    contact_placeholder_msg: 'Tell me about your idea...',
    contact_btn_sending: 'Sending...',
    contact_btn_send: 'Send message',
    contact_success: 'Successfully sent! I will respond as soon as possible.',
    // Form validation
    val_name: 'What is your name?',
    val_email: 'This email seems to be invalid.',
    val_msg: "Please don't leave the message empty!",
    // Footer
    footer_tagline: "Long's Portfolio — coded from the heart.",
    footer_made: 'Made in Saigon',
  },
  vi: {
    // Header
    nav_about: 'Giới thiệu',
    nav_projects: 'Dự án',
    nav_skills: 'Kỹ năng',
    nav_contact: 'Liên hệ',
    nav_connect: 'Kết nối nào',
    // Hero
    hero_greeting: 'Xin chào, mình là Long',
    hero_subtitle: 'Mình là sinh viên ngành Công nghệ Thông tin tại ĐH Mở TP.HCM, có niềm đam mê xây dựng và triển khai các sản phẩm web thực tế. Từ nền tảng xem phim cá nhân đến những ý tưởng đang tiếp tục phát triển, mình luôn coi mỗi dự án là cơ hội để hoàn thiện kỹ năng và kể một câu chuyện công nghệ riêng.',
    hero_btn_projects: 'Xem dự án',
    hero_btn_talk: 'Nói chuyện với mình',
    hero_stat_1: 'Bắt đầu học IT',
    hero_stat_2: 'API tích hợp trong DragonFilm',
    hero_scroll: 'Cuộn xuống',
    // About
    about_eyebrow: 'Về mình',
    about_title: 'Một dev nhỏ, ước mơ lớn',
    about_subtitle: 'Mình thích biến những ý tưởng thành sản phẩm thật — chạy được, dùng được, và mang lại giá trị thực tế.',
    about_fact1_title: 'Đại Học Mở TP.HCM',
    about_fact1_desc: 'Sinh viên năm nhất ngành Công nghệ thông tin, bắt đầu từ 2024.',
    about_fact2_title: 'Đam mê điện ảnh',
    about_fact2_desc: 'Yêu thích phim ảnh và điện ảnh Việt Nam — nguồn cảm hứng cho nhiều dự án cá nhân.',
    about_fact3_title: 'Tự học, tự làm',
    about_fact3_desc: 'Xây dựng và triển khai các dự án web thực tế song song với việc học trên trường.',
    // Projects
    proj_eyebrow: 'Nhật ký nhiệm vụ',
    proj_title: 'Những dự án mình đã hoàn thành',
    proj_subtitle: 'Từ những dòng code đầu tiên đến nền tảng đang được dùng thật — mỗi dự án là một chặng hành trình.',
    proj_demo: 'Demo trực tiếp',
    proj_source: 'Mã nguồn',
    // Tags
    tag_main: 'Dự án chính',
    tag_first: 'Phiên bản đầu tiên',
    tag_wip: 'Đang xây dựng',
    // Project Descriptions
    desc_dragonfilm: 'Nền tảng xem phim trực tuyến tiếng Việt, tích hợp 3 API phim (KKPhim, OPhim, NguonC), hỗ trợ HLS streaming, lưu lịch sử xem và tiến độ tập phim.',
    desc_xemvoilong: 'Dự án web xem phim tiền thân của DragonFilm — nơi mình bắt đầu học cách gọi API phim và xây dựng giao diện xem trực tuyến.',
    desc_polifort: 'Chính là website bạn đang xem! Portfolio cá nhân với thiết kế hiện đại, tinh tế, xây bằng React với kiến trúc feature-based.',
    // Skills
    skills_eyebrow: 'Bảng năng lực',
    skills_title: 'Kỹ năng đang tu luyện',
    skills_subtitle: 'Vẫn đang là sinh viên năm nhất, nhưng mình học bằng cách làm dự án thật mỗi ngày.',
    // Contact
    contact_eyebrow: 'Kết nối',
    contact_title: 'Cùng tạo nên điều gì đó thú vị?',
    contact_subtitle: 'Dù là một dự án, một câu hỏi, hay chỉ đơn giản muốn chào hỏi — mình luôn sẵn sàng lắng nghe.',
    contact_note: '"Đừng ngại nhắn cho mình nhé, mình phản hồi khá nhanh đó!"',
    contact_label_name: 'Tên của bạn',
    contact_placeholder_name: 'Nguyễn Văn A',
    contact_label_msg: 'Lời nhắn',
    contact_placeholder_msg: 'Kể mình nghe ý tưởng của bạn nhé...',
    contact_btn_sending: 'Đang gửi...',
    contact_btn_send: 'Gửi lời nhắn',
    contact_success: 'Đã gửi thành công! Mình sẽ phản hồi sớm nhất có thể.',
    // Form validation
    val_name: 'Bạn tên gì nhỉ?',
    val_email: 'Email này hình như chưa đúng định dạng.',
    val_msg: 'Đừng để trống lời nhắn nhé!',
    // Footer
    footer_tagline: 'Portfolio của Long — code từ trái tim.',
    footer_made: 'Made tại Sài Gòn',
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'vi' : 'en'));
  };

  const t = (key) => translations[lang]?.[key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
