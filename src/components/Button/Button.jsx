import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import styles from './Button.module.css';

/**
 * Button dùng chung toàn trang.
 * variant: 'primary' | 'secondary' | 'ghost'
 * as: 'button' | 'a' — render thẻ <a> khi cần link ra ngoài
 */
export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  className,
  icon,
  ...props
}) {
  const Component = motion[as === 'a' ? 'a' : 'button'];

  return (
    <Component
      className={cn(styles.btn, styles[variant], className)}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ y: 0, scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      {...props}
    >
      <span className={styles.label}>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </Component>
  );
}
