import { motion } from 'framer-motion';
import SectionTitle from '../../../components/SectionTitle';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionTitle
            eyebrow="Kết nối"
            title="Cùng tạo nên điều gì đó thú vị?"
            subtitle="Dù là một dự án, một câu hỏi, hay chỉ đơn giản muốn chào hỏi — mình luôn sẵn sàng lắng nghe."
          />

          <motion.div
            className={styles.mascotNote}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              "Đừng ngại nhắn cho mình nhé, mình phản hồi khá nhanh đó!"
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
