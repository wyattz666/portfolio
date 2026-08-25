import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const getIconUrl = (name) => `https://cdn.jsdelivr.net/gh/xandemon/developer-icons/icons/${name}.svg`;

const socials = [
  { label: 'GitHub', href: 'https://github.com/wyattz666', icon: getIconUrl('github-dark') },
  { label: 'Telegram', href: 'https://t.me/wyatt2222', icon: getIconUrl('telegram') },
  { label: 'Facebook', href: 'https://www.facebook.com/sky.dr4g0n', icon: getIconUrl('facebook') },
  { label: 'Email', href: 'mailto:dev.tranthienlong6th1@gmail.com', icon: getIconUrl('gmail') },
  { label: 'Discord', href: 'https://discord.com/users/563954494711267339', icon: getIconUrl('discord') },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path
            d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,80 L0,80 Z"
            fill="var(--color-lavender)"
            opacity="0.25"
          />
        </svg>
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <motion.span
            className={styles.mark}
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src="https://cdn.jsdelivr.net/gh/xandemon/developer-icons/icons/reactjs.svg" alt="React" width="32" height="32" />
          </motion.span>
          <div>
            <p className={styles.brandName}>Portfolio</p>
            <p className={styles.tagline}>Portfolio của Long — code từ trái tim.</p>
          </div>
        </div>

        <div className={styles.socials}>
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              whileHover={{ y: -4, rotate: -6 }}
              transition={{ type: 'spring', stiffness: 350 }}
            >
              <span aria-hidden="true">
                <img src={s.icon} alt={s.label} width="20" height="20" />
              </span>
              {s.label}
            </motion.a>
          ))}
        </div>
      </div>

      <p className={styles.copyright}>
        © {new Date().getFullYear()} Portfolio · Made with 💗 tại Sài Gòn
      </p>
    </footer>
  );
}
