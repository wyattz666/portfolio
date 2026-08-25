import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './AnimatedBackground.module.css';

const blobs = [
  { size: 340, top: '5%', left: '-8%', color: 'var(--color-sakura)', dur: 22 },
  { size: 260, top: '55%', left: '85%', color: 'var(--color-sky)', dur: 18 },
  { size: 200, top: '80%', left: '10%', color: 'var(--color-honey)', dur: 26 },
  { size: 180, top: '20%', left: '75%', color: 'var(--color-lavender)', dur: 20 },
];

const sparkles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  top: `${(i * 37) % 100}%`,
  left: `${(i * 53) % 100}%`,
  delay: (i % 7) * 0.4,
  size: 4 + (i % 3) * 3,
}));

/**
 * Nền động toàn trang: các blob pastel trôi nổi chậm rãi + sparkle lấp lánh.
 * Tôn trọng prefers-reduced-motion — chỉ hiển thị tĩnh khi người dùng bật giảm chuyển động.
 */
export default function AnimatedBackground() {
  const reduced = useReducedMotion();

  return (
    <div className={styles.wrapper} aria-hidden="true">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={styles.blob}
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            background: blob.color,
          }}
          animate={
            reduced
              ? {}
              : {
                  y: [0, -30, 10, 0],
                  x: [0, 20, -15, 0],
                  scale: [1, 1.06, 0.97, 1],
                }
          }
          transition={{
            duration: blob.dur,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {!reduced &&
        sparkles.map((s) => (
          <motion.div
            key={s.id}
            className={styles.sparkle}
            style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              delay: s.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
    </div>
  );
}
