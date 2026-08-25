import { motion } from 'framer-motion';
import SectionTitle from '../../../components/SectionTitle';
import styles from './About.module.css';

const facts = [
  { icon: '🎓', title: 'Đại Học Mở TP.HCM', desc: 'Sinh viên năm nhất ngành Công nghệ thông tin, bắt đầu từ 2024.' },
  { icon: '🎬', title: 'Đam mê điện ảnh', desc: 'Yêu thích phim ảnh và điện ảnh Việt Nam — nguồn cảm hứng cho nhiều dự án cá nhân.' },
  { icon: '🛠️', title: 'Tự học, tự làm', desc: 'Xây dựng và triển khai các dự án web thực tế song song với việc học trên trường.' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="🍡 Về mình"
          title="Một dev nhỏ, ước mơ lớn"
          subtitle="Mình thích biến những ý tưởng thành sản phẩm thật — chạy được, dùng được, và có chút hồn anime trong đó."
        />

        <div className={styles.factGrid}>
          {facts.map((fact, i) => (
            <motion.div
              key={fact.title}
              className={styles.factCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
            >
              <span className={styles.factIcon}>{fact.icon}</span>
              <h3 className={styles.factTitle}>{fact.title}</h3>
              <p className={styles.factDesc}>{fact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
