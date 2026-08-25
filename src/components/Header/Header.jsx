import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import { useLanguage } from '../../contexts';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const navLinks = [
    { label: t('nav_about'), href: '#about' },
    { label: t('nav_projects'), href: '#projects' },
    { label: t('nav_skills'), href: '#skills' },
    { label: t('nav_contact'), href: '#contact' },
  ];

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(styles.header, scrolled && styles.scrolled)}>
      <div className={cn('container', styles.inner)}>
        <a href="#top" className={styles.logo}>
          <motion.span
            className={styles.logoMark}
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src="https://cdn.jsdelivr.net/gh/xandemon/developer-icons/icons/reactjs.svg" alt="React" width="28" height="28" />
          </motion.span>
          Portfolio
        </a>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <button 
            className={styles.langToggle} 
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'VI' : 'EN'}
          </button>
        </nav>

        <a href="#contact" className={styles.cta}>
          {t('nav_connect')}
        </a>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
        >
          <span className={cn(styles.burgerLine, menuOpen && styles.burgerLineOpen1)} />
          <span className={cn(styles.burgerLine, menuOpen && styles.burgerLineOpen2)} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className={styles.mobileNav}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              className={styles.mobileNavLink}
              style={{ textAlign: 'left', color: 'var(--color-sakura-deep)' }}
              onClick={() => {
                toggleLang();
                setMenuOpen(false);
              }}
            >
              Ngôn ngữ / Language: {lang === 'en' ? 'EN' : 'VI'} ⟳
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
