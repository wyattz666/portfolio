import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import MascotSVG from './MascotSVG';
import styles from './MascotCursor.module.css';

/**
 * Linh vật chibi bay theo con trỏ chuột với độ trễ đàn hồi (spring lag),
 * mắt dõi theo hướng chuột di chuyển, thỉnh thoảng chớp mắt.
 * Trên mobile hoặc khi reduced-motion bật, mascot đứng yên ở góc màn hình
 * và chỉ "thở" nhẹ — không theo dõi con trỏ để tránh gây xao nhãng khi chạm.
 */
export default function MascotCursor() {
  const reduced = useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);
  const [blinking, setBlinking] = useState(false);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth - 140 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight - 140 : 0);
  const x = useSpring(mouseX, { stiffness: 90, damping: 14, mass: 0.6 });
  const y = useSpring(mouseY, { stiffness: 90, damping: 14, mass: 0.6 });

  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  useEffect(() => {
    if (isTouch || reduced) return;

    function handleMove(e) {
      mouseX.set(e.clientX - 45);
      mouseY.set(e.clientY - 45);

      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      lastPos.current = { x: e.clientX, y: e.clientY };

      const clampedX = Math.max(-4, Math.min(4, dx * 0.15));
      const clampedY = Math.max(-4, Math.min(4, dy * 0.15));
      setEyeOffset({ x: clampedX, y: clampedY });
    }

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [isTouch, reduced, mouseX, mouseY]);

  // Chớp mắt định kỳ ngẫu nhiên
  useEffect(() => {
    if (reduced) return;
    let timeout;
    function scheduleBlink() {
      timeout = setTimeout(() => {
        setBlinking(true);
        setTimeout(() => setBlinking(false), 140);
        scheduleBlink();
      }, 2400 + Math.random() * 2600);
    }
    scheduleBlink();
    return () => clearTimeout(timeout);
  }, [reduced]);

  if (isTouch) return null;

  if (reduced) {
    return (
      <motion.div
        className={styles.mascot}
        style={{ bottom: 24, right: 24, position: 'fixed' }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <MascotSVG eyeOffset={{ x: 0, y: 0 }} blinking={blinking} />
      </motion.div>
    );
  }

  return (
    <motion.div
      className={styles.mascot}
      style={{ x, y }}
      animate={{ rotate: [-3, 3, -3] }}
      transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <MascotSVG eyeOffset={eyeOffset} blinking={blinking} />
    </motion.div>
  );
}
