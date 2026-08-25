import { motion } from 'framer-motion';
import styles from './SkillBar.module.css';

/**
 * Thanh kỹ năng dạng "level bar" — mang cảm giác thanh EXP trong game.
 */
export default function SkillBar({ name, level, icon, index }) {
  return (
    <motion.div
      className={styles.row}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.08 } }
      }}
    >
      <div className={styles.label}>
        <span className={styles.icon}>{icon}</span>
        <span>{name}</span>
      </div>
      <div className={styles.track}>
        <motion.div
          className={styles.fill}
          variants={{
            hidden: { width: 0 },
            visible: { 
              width: `${level}%`, 
              transition: { duration: 1, delay: index * 0.08 + 0.2, ease: [0.22, 1, 0.36, 1] } 
            }
          }}
        >
          <span className={styles.sparkle} />
        </motion.div>
      </div>
    </motion.div>
  );
}
