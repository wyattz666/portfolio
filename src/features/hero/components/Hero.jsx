import { motion } from 'framer-motion';
import Button from '../../../components/Button';
import avatarImg from '../../../assets/images/avatar.jpg';
import styles from './Hero.module.css';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const orbitIcons = ['reactjs', 'javascript', 'html5', 'css3'];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.copy}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span className="eyebrow" variants={item}>
            Xin chào, mình là Long
          </motion.span>

          <motion.h1 className={styles.title} variants={item}>
            <span className="gradient-text">Full-stack Developer</span>
          </motion.h1>

          <motion.p className={styles.subtitle} variants={item}>
            Mình là sinh viên ngành Công nghệ Thông tin tại ĐH Mở TP.HCM, có niềm đam mê xây dựng và triển khai các sản phẩm web thực tế. Từ nền tảng xem phim cá nhân đến những ý tưởng đang tiếp tục phát triển, mình luôn coi mỗi dự án là cơ hội để hoàn thiện kỹ năng và kể một câu chuyện công nghệ riêng.
          </motion.p>

          <motion.div className={styles.actions} variants={item}>
            <Button as="a" href="#projects" variant="primary">
              Xem dự án
            </Button>
            <Button as="a" href="#contact" variant="secondary">
              Nói chuyện với mình
            </Button>
          </motion.div>

          <motion.div className={styles.stats} variants={item}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>2024</span>
              <span className={styles.statLabel}>Bắt đầu học IT</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>3+</span>
              <span className={styles.statLabel}>API tích hợp trong DragonFilm</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }}
        >
          <motion.div
            className={styles.blobBg}
            animate={{ borderRadius: ['42% 58% 65% 35% / 45% 40% 60% 55%', '58% 42% 35% 65% / 55% 60% 40% 45%', '42% 58% 65% 35% / 45% 40% 60% 55%'] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            className={styles.avatarCard}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className={styles.avatarEmoji}>
              <img src={avatarImg} alt="Long" className={styles.avatarImage} />
            </div>
            <p className={styles.avatarName}>Long</p>
            <p className={styles.avatarRole}>Full-stack Developer</p>
          </motion.div>

          {orbitIcons.map((icon, i) => {
            const duration = 16 + i * 3;
            return (
              <motion.div
                key={icon}
                className={styles.orbitIcon}
                style={{ '--i': i }}
                animate={{ rotate: 360 }}
                transition={{ duration, repeat: Infinity, ease: 'linear' }}
              >
                <motion.span
                  className={styles.orbitIconInner}
                  animate={{ rotate: -360 }}
                  transition={{ duration, repeat: Infinity, ease: 'linear' }}
                >
                  <img src={`https://cdn.jsdelivr.net/gh/xandemon/developer-icons/icons/${icon}.svg`} alt={icon} width="24" height="24" />
                </motion.span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollHint}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>Cuộn xuống</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}
