import { motion } from 'framer-motion';
import { useLanguage } from '../../../contexts';
import SectionTitle from '../../../components/SectionTitle';
import styles from './About.module.css';

const getFacts = (t) => [
  { icon: '', title: t('about_fact1_title'), desc: t('about_fact1_desc') },
  { icon: '', title: t('about_fact2_title'), desc: t('about_fact2_desc') },
  { icon: '', title: t('about_fact3_title'), desc: t('about_fact3_desc') },
];

export default function About() {
  const { t } = useLanguage();
  const facts = getFacts(t);
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          eyebrow={t("about_eyebrow")}
          title={t("about_title")}
          subtitle={t("about_subtitle")}
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
              {fact.icon && <span className={styles.factIcon}>{fact.icon}</span>}
              <h3 className={styles.factTitle}>{fact.title}</h3>
              <p className={styles.factDesc}>{fact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
