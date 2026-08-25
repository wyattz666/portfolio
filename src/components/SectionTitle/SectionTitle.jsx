import { motion } from 'framer-motion';
import styles from './SectionTitle.module.css';

/**
 * Tiêu đề dùng chung cho các section, xuất hiện dạng "trồi lên" khi cuộn tới.
 */
export default function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <motion.div
      className={styles.wrapper}
      data-align={align}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
}
