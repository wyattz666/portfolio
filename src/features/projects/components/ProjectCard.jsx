import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';
import styles from './ProjectCard.module.css';
import { useLanguage } from '../../../contexts';

/**
 * Thẻ dự án dạng "quest card" — mang tinh thần game:
 * mỗi dự án là một "nhiệm vụ" đã hoàn thành hoặc đang tiến hành.
 */
export default function ProjectCard({ project, index }) {
  const { t } = useLanguage();
  return (
    <motion.article
      className={cn(styles.card, styles[project.color])}
      initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -3 : 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className={styles.cardHeader}>
        <span className={styles.emoji}>
          <img src={`https://cdn.jsdelivr.net/gh/xandemon/developer-icons/icons/${project.iconName}.svg`} alt={project.iconName} width="24" height="24" />
        </span>
        <span className={styles.tag}>{t(project.tagKey)}</span>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{t(project.descKey)}</p>

      <div className={styles.stack}>
        {project.stack.map((tech) => (
          <span key={tech} className={styles.stackItem}>
            {tech}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        <a href={project.href} target="_blank" rel="noreferrer" className={styles.primaryLink}>
          Xem live →
        </a>
        <a href={project.repo} target="_blank" rel="noreferrer" className={styles.secondaryLink}>
          Source
        </a>
      </div>

      <div className={styles.shine} aria-hidden="true" />
    </motion.article>
  );
}
