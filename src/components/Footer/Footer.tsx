import React from 'react';

const Footer: React.FC = () => {
  const styles = {
    footer: {
      backgroundColor: '#e5e7eb',
      padding: '3rem 1rem',
    },
    sectionContent: {
      margin: '0 auto',
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
    },
    footerColumn: {
      marginBottom: '2rem',
    },
    footerTitle: {
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '1rem',
    },
    footerList: {
      listStyle: 'none',
      padding: 0,
    },
    footerLink: {
      color: '#6b7280',
      textDecoration: 'none',
      display: 'block',
      padding: '0.25rem 0',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.sectionContent}>
        <div className="footer-grid" style={styles.footerGrid}>
          <div style={styles.footerColumn}>
            <h5 style={styles.footerTitle}>Company</h5>
            <ul style={styles.footerList}>
              <li><a href="#" style={styles.footerLink} className="footer-link">About us</a></li>
              <li><a href="#" style={styles.footerLink} className="footer-link">Contact us</a></li>
              <li><a href="#" style={styles.footerLink} className="footer-link">Our careers</a></li>
              <li><a href="#" style={styles.footerLink} className="footer-link">Job Application</a></li>
            </ul>
          </div>

          <div style={styles.footerColumn}>
            <h5 style={styles.footerTitle}>Services</h5>
            <ul style={styles.footerList}>
              <li><a href="#" style={styles.footerLink} className="footer-link">Graphics</a></li>
              <li><a href="#" style={styles.footerLink} className="footer-link">Software App</a></li>
              <li><a href="#" style={styles.footerLink} className="footer-link">Digital Marketing</a></li>
              <li><a href="#" style={styles.footerLink} className="footer-link">Web Development</a></li>
            </ul>
          </div>

          <div style={styles.footerColumn}>
            <h5 style={styles.footerTitle}>Solutions</h5>
            <ul style={styles.footerList}>
              <li><a href="#" style={styles.footerLink} className="footer-link">Educesol</a></li>
              <li><a href="#" style={styles.footerLink} className="footer-link">Enterprise</a></li>
              <li><a href="#" style={styles.footerLink} className="footer-link">Metrobits</a></li>
              <li><a href="#" style={styles.footerLink} className="footer-link">Custom Solutions</a></li>
            </ul>
          </div>

          <div style={styles.footerColumn}>
            <h5 style={styles.footerTitle}>Training</h5>
            <ul style={styles.footerList}>
              <li><a href="#" style={styles.footerLink} className="footer-link">Mobile App</a></li>
              <li><a href="#" style={styles.footerLink} className="footer-link">Desktop App</a></li>
              <li><a href="#" style={styles.footerLink} className="footer-link">Web Development</a></li>
              <li><a href="#" style={styles.footerLink} className="footer-link">Digital Marketing</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;