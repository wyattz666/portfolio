import { motion } from 'framer-motion';
import styles from './SkillBar.module.css';

/**
 * Thanh kỹ năng dạng "level bar" — mang cảm giác thanh EXP trong game.
 */
export default function SkillBar({ name, level, icon, index }) {
  return (
    <motion.div
      className={styles.row}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className={styles.label}>
        <span className={styles.icon}>{icon}</span>
        <span>{name}</span>
      </div>
      <div className={styles.track}>
        <motion.div
          className={styles.fill}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, delay: index * 0.08 + 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.sparkle} />
        </motion.div>
      </div>
    </motion.div>
  );
}
