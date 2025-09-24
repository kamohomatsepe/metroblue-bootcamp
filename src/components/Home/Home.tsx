import React from 'react';
import { Users, BarChart3, Smartphone, Calendar, CreditCard, ArrowRight } from 'lucide-react';
import '../styles/Home.css';

const Home: React.FC = () => {
  const styles = {
    hero: {
      backgroundColor: 'white',
      padding: '5rem 1rem',
    },
    heroContent: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '3rem',
      alignItems: 'center',
      maxWidth: '1280px',
      margin: '0 auto',
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '1rem',
      lineHeight: '1.2',
    },
    heroSubtitle: {
      fontSize: '1.125rem',
      color: '#6b7280',
      marginBottom: '2rem',
    },
    greenText: {
      color: '#10b981',
    },
    primaryButton: {
      backgroundColor: '#4CAF4F',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1.125rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    pagination: {
      display: 'flex',
      gap: '0.5rem',
      marginTop: '3rem',
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: '#d1d5db',
    },
    activeDot: {
      backgroundColor: '#10b981',
    },
    heroImage: {
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    },
    section: {
      padding: '5rem 1rem',
    },
    sectionWhite: {
      backgroundColor: 'white',
    },
    sectionGray: {
      backgroundColor: 'white',
    },
    sectionContent: {
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#111827',
      textAlign: 'center' as const,
      marginBottom: '1rem',
    },
    sectionSubtitle: {
      fontSize: '1.5rem',
      color: '#6b7280',
      textAlign: 'center' as const,
      marginBottom: '4rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
    },
    featureCard: {
      textAlign: 'center' as const,
      padding: '1.5rem',
    },
    featureIcon: {
      width: '64px',
      height: '64px',
      backgroundColor: '#f0fdf4',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem auto',
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '1rem',
    },
    featureText: {
      color: '#6b7280',
      lineHeight: '1.6',
    },
    twoColumnGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '3rem',
      alignItems: 'center',
    },
    textContent: {
      maxWidth: '600px',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      marginBottom: '2rem',
      color: '#374151',
    },
    listItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '1rem',
    },
    listBullet: {
      color: '#10b981',
      fontWeight: 'bold',
      marginRight: '0.5rem',
      flexShrink: 0,
    },
    redBullet: {
      color: '#ef4444',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2rem',
    },
    statCard: {
      textAlign: 'center' as const,
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0.5rem',
    },
    statLabel: {
      color: '#6b7280',
    },
    blogGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      marginTop: '3rem',
    },
    blogCard: {
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      padding: '1.5rem',
      textAlign: 'center' as const,
    },
    blogImage: {
      width: '100%',
      height: '160px',
      objectFit: 'cover' as const,
      borderRadius: '8px',
      marginBottom: '1rem',
    },
    blogTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '1rem',
    },
    blogLink: {
      color: '#10b981',
      textDecoration: 'none',
      fontWeight: '500',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.25rem',
    },
    aboutText: {
      color: '#6b7280',
      lineHeight: '1.6',
      maxWidth: '1024px',
      margin: '0 auto',
      textAlign: 'center' as const,
    },
    aboutStrip: {
      backgroundColor: '#F5F7FA',
      padding: '3rem 1rem',
      borderRadius: '8px',
      marginBottom: '4rem',
    },
    statsStrip: {
      backgroundColor: '#F5F7FA',
      padding: '3rem 1rem',
      borderRadius: '8px',
    },
  };

  return (
    <main>
      {/* Hero Section */}
      <section style={{...styles.hero}}>
        <div style={styles.heroContent}>
          <div className="hero-grid" style={styles.twoColumnGrid}>
            <div>
              <h1 className="hero-title" style={styles.heroTitle}>
                MetroBlue UI/UX{' '}
                <span style={styles.greenText}>BootCamp Program</span>
              </h1>
              <p style={styles.heroSubtitle}>
                Where to learn the full course on UI/UX design
              </p>
              <button style={styles.primaryButton} className="primary-button">
                Register
              </button>
              <div style={styles.pagination}>
                <div style={{...styles.dot, ...styles.activeDot}}></div>
                <div style={styles.dot}></div>
                <div style={styles.dot}></div>
              </div>
            </div>
            <div style={{textAlign: 'center'}}>
              <img 
                src="/ui-ux-bootcamp-hero.png" 
                alt="UI/UX Bootcamp" 
                style={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{...styles.section, ...styles.sectionWhite}}>
        <div style={styles.sectionContent}>
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={styles.sectionTitle}>
              Learn All You Need To Know
            </h2>
            <h3 style={{...styles.sectionSubtitle, marginBottom: 0}}>About UI/UX</h3>
          </div>

          <div className="features-grid" style={styles.grid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <Users size={32} color="#10b981" />
              </div>
              <h4 style={styles.featureTitle}>Figma Mastery</h4>
              <p style={styles.featureText}>
                Gain hands-on skills with Figma to design, collaborate, and bring your creative ideas to life with industry-standard tools.
              </p>
            </div>

            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <BarChart3 size={32} color="#10b981" />
              </div>
              <h4 style={styles.featureTitle}>Wireframing</h4>
              <p style={styles.featureText}>
                Turn ideas into simple visual layouts that map out structure and user flow before jumping into design details.
              </p>
            </div>

            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <Smartphone size={32} color="#10b981" />
              </div>
              <h4 style={styles.featureTitle}>prototyping</h4>
              <p style={styles.featureText}>
                Bring your designs to life with interactive models that let you test, refine, and perfect user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{...styles.section, ...styles.sectionGray}}>
        <div style={styles.sectionContent}>
          <div className="two-col-grid" style={styles.twoColumnGrid}>
            <div style={{textAlign: 'center'}}>
              <img 
                src="/design-journey-illustration.png" 
                alt="Design Journey" 
                style={styles.heroImage}
              />
            </div>
            <div style={styles.textContent}>
              <h2 style={{...styles.sectionTitle, textAlign: 'left', fontSize: '2.25rem'}}>
                Ready to start your design journey?
              </h2>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <span style={styles.listBullet}>•</span>
                  <span>
                    Join the MetroBlue UI/UX Bootcamp and gain the skills to design stunning, user-friendly websites and apps.
                  </span>
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listBullet}>•</span>
                  <span>Hands-on projects</span>
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listBullet}>•</span>
                  <span>Industry-relevant tools</span>
                </li>
                <li style={styles.listItem}>
                  <span style={styles.listBullet}>•</span>
                  <span>Expert mentorship</span>
                </li>
                <li style={styles.listItem}>
                  <span style={{...styles.listBullet, ...styles.redBullet}}>⚠</span>
                  <span style={{fontWeight: '500'}}>
                    Limited slots available – don't miss out!
                  </span>
                </li>
              </ul>
              <button style={styles.primaryButton} className="primary-button">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{...styles.section, ...styles.sectionWhite}}>
        <div style={styles.sectionContent}>
          <div style={styles.statsStrip}>
            <div className="two-col-grid" style={styles.twoColumnGrid}>
            <div style={styles.textContent}>
              <h2 style={{...styles.sectionTitle, textAlign: 'left', fontSize: '2.25rem'}}>
                Helping a local{' '}
                <span style={styles.greenText}>business reinvent itself</span>
              </h2>
              <p style={{...styles.featureText, fontSize: '1.125rem'}}>
                We reached here with our hard work and dedication
              </p>
            </div>
            <div className="stats-grid" style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>
                  <Users size={24} color="#10b981" style={{marginRight: '0.5rem'}} />
                  2,245,341
                </div>
                <p style={styles.statLabel}>Members</p>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>
                  <Users size={24} color="#10b981" style={{marginRight: '0.5rem'}} />
                  46,328
                </div>
                <p style={styles.statLabel}>Clubs</p>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>
                  <Calendar size={24} color="#10b981" style={{marginRight: '0.5rem'}} />
                  828,867
                </div>
                <p style={styles.statLabel}>Event Bookings</p>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>
                  <CreditCard size={24} color="#10b981" style={{marginRight: '0.5rem'}} />
                  1,926,436
                </div>
                <p style={styles.statLabel}>Payments</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section style={{...styles.section, ...styles.sectionGray}}>
        <div style={styles.sectionContent}>
          <div className="two-col-grid" style={styles.twoColumnGrid}>
            <div style={{textAlign: 'center'}}>
              <img 
                src="/webpage-design-illustration.png" 
                alt="Webpage Design Process" 
                style={styles.heroImage}
              />
            </div>
            <div style={styles.textContent}>
              <h2 style={{...styles.sectionTitle, textAlign: 'left', fontSize: '2.25rem'}}>
                How to design your webpage like we did
              </h2>
              <p style={{...styles.featureText, marginBottom: '2rem', lineHeight: '1.7'}}>
                Effective web design is about more than just making it look good — it's about creating an 
                experience that is clear, functional, and engaging. In this Bootcamp, you'll learn how to 
                transform your ideas into real designs by starting with good planning, applying design 
                principles, and choosing the right colors, fonts, and visual elements. You'll also explore 
                how to make webpages responsive so it looks great on all devices. By the end, you 
                won't just know how to design a webpage — you'll be able to create digital experiences 
                that attract, engage, and keep users coming back.
              </p>
              <button style={styles.primaryButton} className="primary-button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About & Blog Section */}
      <section style={{...styles.section, ...styles.sectionWhite}}>
        <div style={styles.sectionContent}>
          <div style={styles.aboutStrip}>
            <div style={{textAlign: 'center'}}>
              <h2 style={styles.sectionTitle}>
                About MetroBlue
              </h2>
              <p style={styles.aboutText}>
                MetroBlue is a creative tech brand dedicated to empowering individuals with the skills to thrive in today's digital world. We specialize in practical, 
                hands-on training programs such as our UI/UX Bootcamp, designed to bridge the gap between creativity and technology. With a focus on design 
                thinking, innovation, and real-world application, MetroBlue helps aspiring designers and tech enthusiasts build career-ready skills while working on 
                projects that matter. Our mission is simple — to inspire, train, and launch the next generation of digital creators.
              </p>
            </div>
          </div>

          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h3 style={{...styles.sectionTitle, fontSize: '1.75rem'}}>
              Caring is the new marketing
            </h3>
            <p style={{...styles.aboutText, maxWidth: '600px'}}>
              The Nexcent blog is the best place to read about the latest membership insights, 
              trends and more. See who's joining the community, read about how our community 
              are increasing their membership income and lot's more.
            </p>
          </div>

          <div className="blog-grid" style={styles.blogGrid}>
            <div style={styles.blogCard}>
              <h4 style={styles.blogTitle}>
                Creating Streamlined Safeguarding Processes with OneRen
              </h4>
              <a href="#" style={styles.blogLink} className="blog-link">
                Readmore <ArrowRight size={16} />
              </a>
            </div>

            <div style={styles.blogCard}>
              <h4 style={styles.blogTitle}>
                What are your safeguarding responsibilities and how can you manage them?
              </h4>
              <a href="#" style={styles.blogLink} className="blog-link">
                Readmore <ArrowRight size={16} />
              </a>
            </div>

            <div style={styles.blogCard}>
              <h4 style={styles.blogTitle}>
                Revamping the Membership Model with Triathlon Australia
              </h4>
              <a href="#" style={styles.blogLink} className="blog-link">
                Readmore <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{...styles.section, ...styles.sectionWhite, padding: 0}}>
        <div style={styles.sectionContent}>
          <div style={{...styles.statsStrip, textAlign: 'center', margin: 0}}>
            <h2 style={{...styles.sectionTitle, marginBottom: '2rem'}}>
              Don't Miss Out!!!
            </h2>
            <button style={{...styles.primaryButton, display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}} className="primary-button">
              Get Started <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;