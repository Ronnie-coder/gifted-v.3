import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoContainer} onClick={closeMenu}>
          <Image 
            src="/assets/images/logo.jpg"
            alt="Gifted Tours Logo"
            width={180}
            height={60}
            className={styles.logo}
            priority
          />
        </Link>

        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen ? "true" : "false"} // Fix: Explicitly set as string "true" or "false" for ARIA compliance
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          {[
            { href: '/', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#services', label: 'Services' },
            { href: '#fleet', label: 'Our Fleet' },
            { href: '#contact', label: 'Contact Us' }
          ].map((link) => (
            <Link 
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className={styles.navLink}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;