import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const styles = {
    header: {
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      position: 'sticky' as const,
      top: 0,
      zIndex: 50,
    },
    nav: {
      padding: '0 1rem',
    },
    navContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '80px',
      maxWidth: '1280px',
      margin: '0 auto',
    },
    logo: {
      height: '48px',
      width: 'auto',
    },
    desktopNav: {
      display: 'none',
      alignItems: 'center',
      gap: '2rem',
      flex: 1,
      justifyContent: 'center',
    },
    navLink: {
      color: '#6b7280',
      textDecoration: 'none',
      padding: '0.5rem 0.75rem',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'color 0.3s',
      borderBottom: '2px solid transparent',
    },
    activeNavLink: {
      color: '#111827',
      borderBottomColor: '#10b981',
    },
    loginButton: {
      backgroundColor: '#10b981',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    mobileMenuButton: {
      display: 'block',
      padding: '0.5rem',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: 'transparent',
      color: '#6b7280',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    mobileMenu: {
      padding: '0.5rem',
      paddingBottom: '1rem',
      backgroundColor: 'white',
      borderTop: '1px solid #e5e7eb',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    mobileNavLink: {
      display: 'block',
      padding: '0.75rem 1rem',
      color: '#6b7280',
      textDecoration: 'none',
      borderRadius: '8px',
      marginBottom: '0.25rem',
      transition: 'all 0.3s',
    },
    activeMobileNavLink: {
      color: '#111827',
      backgroundColor: '#f0fdf4',
    },
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          {/* Logo */}
          <div>
            <img 
              src="/metroblue-logo.png" 
              alt="MetroBlue" 
              style={styles.logo}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav" style={styles.desktopNav}>
            <a href="#home" style={{...styles.navLink, ...styles.activeNavLink}} className="nav-link">Home</a>
            <a href="#service" style={styles.navLink} className="nav-link">Service</a>
            <a href="#feature" style={styles.navLink} className="nav-link">Feature</a>
            <a href="#product" style={styles.navLink} className="nav-link">Product</a>
            <a href="#testimonial" style={styles.navLink} className="nav-link">Testimonial</a>
            <a href="#faq" style={styles.navLink} className="nav-link">FAQ</a>
          </div>

          {/* Login Button */}
          <div className="desktop-nav" style={{display: 'none'}}>
            <button style={styles.loginButton} className="login-button">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-btn">
            <button
              onClick={toggleMobileMenu}
              style={styles.mobileMenuButton}
              className="mobile-menu-btn"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div style={styles.mobileMenu}>
            <a href="#home" style={{...styles.mobileNavLink, ...styles.activeMobileNavLink}} className="mobile-nav-link">Home</a>
            <a href="#service" style={styles.mobileNavLink} className="mobile-nav-link">Service</a>
            <a href="#feature" style={styles.mobileNavLink} className="mobile-nav-link">Feature</a>
            <a href="#product" style={styles.mobileNavLink} className="mobile-nav-link">Product</a>
            <a href="#testimonial" style={styles.mobileNavLink} className="mobile-nav-link">Testimonial</a>
            <a href="#faq" style={styles.mobileNavLink} className="mobile-nav-link">FAQ</a>
            <div style={{paddingTop: '1rem'}}>
              <button style={{...styles.loginButton, width: '100%'}} className="login-button">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;