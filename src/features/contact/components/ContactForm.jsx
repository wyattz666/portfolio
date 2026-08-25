import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../../components/Button';
import { useContactForm } from '../hooks/useContactForm';
import { cn } from '../../../utils/cn';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const { values, errors, status, handleChange, submit } = useContactForm();

  return (
    <form className={styles.form} onSubmit={submit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Tên của bạn</label>
        <input
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Nguyễn Văn A"
          className={cn(styles.input, errors.name && styles.inputError)}
        />
        {errors.name && <span className={styles.errorText}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="ban@email.com"
          className={cn(styles.input, errors.email && styles.inputError)}
        />
        {errors.email && <span className={styles.errorText}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Lời nhắn</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          placeholder="Kể mình nghe ý tưởng của bạn nhé..."
          className={cn(styles.input, styles.textarea, errors.message && styles.inputError)}
        />
        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
      </div>

      <Button type="submit" variant="primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Đang gửi...' : 'Gửi lời nhắn 💌'}
      </Button>

      <AnimatePresence>
        {status === 'success' && (
          <motion.p
            className={styles.successMsg}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            🎉 Đã gửi thành công! Mình sẽ phản hồi sớm nhất có thể.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
