import { motion } from 'framer-motion';
import SectionTitle from '../../../components/SectionTitle';
import { useLanguage } from '../../../contexts';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="section">
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionTitle
            eyebrow={t("contact_eyebrow")}
            title={t("contact_title")}
            subtitle={t("contact_subtitle")}
          />

          <motion.div
            className={styles.mascotNote}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              {t("contact_note")}
            </p>
          </motion.div>
        </div>

        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
