import React from 'react';
import colors from '../colors'; // Assuming colors.js exists and is set up

const Home = () => {
  return (
    <section id="home" style={styles.pageContainer}>
      {/* Video Placeholder */}
      <div style={styles.videoPlaceholder}>
        {/* In a later step, a video component will go here */}
        <p>Logo Video (final comp.mp4) will be here.</p>
      </div>

      {/* Who we are Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Who we are</h2>
        <p style={styles.textBlock}>
          Navara is a comprehensive support system for individuals and families navigating
          developmental and behavioral challenges. We understand that finding the right resources can be
          overwhelming. That’s why we offer a streamlined approach, connecting you with expert
          diagnosticians, evidence-based behavioral therapies, and personalized career pathways. Our
          mission is to empower you with clear answers, effective strategies, and a supportive community,
          helping you unlock your full potential and build a brighter future.
        </p>
      </div>

      {/* Our Services Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div style={styles.servicesGrid}>
          {/* Diagnostics Sub-section */}
          <div style={styles.serviceCard}>
            {/* Add LOGO */}
            <div style={styles.logoPlaceholder}><p>LOGO</p></div>
            <h3 style={styles.subSectionTitle}>Diagnostics</h3>
            <p style={styles.textBlock}>
              At Navara Diagnostics, we specialize in high-quality psychological and developmental
              assessments tailored to your child's needs. Our streamlined, parent-focused approach
              eliminates long wait times and confusing reports—delivering clear answers and practical
              next steps.
            </p>
          </div>

          {/* Navara Pathways Sub-section */}
          <div style={styles.serviceCard}>
            {/* Add LOGO */}
            <div style={styles.logoPlaceholder}><p>LOGO</p></div>
            <h3 style={styles.subSectionTitle}>Navara Pathways</h3>
            <p style={styles.textBlock}>
              Navara Pathways is our innovative approach to career exploration and skill development for
              young adults. We provide personalized coaching and resources to help individuals discover their
              passions, build essential life skills, and navigate the transition to meaningful employment or
              further education.
            </p>
          </div>

          {/* The Navara Behavior Method Sub-section */}
          <div style={styles.serviceCard}>
            {/* Add LOGO */}
            <div style={styles.logoPlaceholder}><p>LOGO</p></div>
            <h3 style={styles.subSectionTitle}>The Navara Behavior Method</h3>
            <p style={styles.textBlock}>
              The Navara Behavior Method offers evidence-based strategies and compassionate support for
              families facing behavioral challenges. Our certified therapists work collaboratively with you to
              develop individualized plans that foster positive behavior change and strengthen family
              relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Styling for Glassmorphism Theme
const styles = {
  pageContainer: {
    padding: '60px 20px 20px', // Added more top padding to account for fixed navbar
    fontFamily: 'var(--font-primary, Arial, sans-serif)', // From App.css
    color: colors.textDark, // Default text color for the page
    // Background is set globally in App.css
  },
  videoPlaceholder: {
    height: '40vh', // Relative height
    minHeight: '300px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Darker, subtle placeholder
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '40px',
    textAlign: 'center',
    borderRadius: '15px',
    color: colors.textDark,
    fontSize: '1.2em',
  },
  section: { // This will be the main glass card for "Who we are" and "Our Services"
    backgroundColor: colors.glassBkg,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)', // Safari
    border: `1px solid ${colors.glassBorder}`,
    borderRadius: '20px',
    padding: '30px',
    marginBottom: '40px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)', // Softer shadow
  },
  sectionTitle: {
    fontSize: '2.2em',
    fontWeight: '700', // Ensure Lato bold is used if available
    marginBottom: '25px',
    color: colors.textDark, // Use the dark text color from the new palette
    textAlign: 'center',
    fontFamily: 'var(--font-secondary, Arial, sans-serif)', // Lato for headings
  },
  subSectionTitle: {
    fontSize: '1.6em',
    fontWeight: '700',
    marginBottom: '20px',
    color: colors.secondary, // Use accent color from new palette
    fontFamily: 'var(--font-secondary, Arial, sans-serif)',
  },
  textBlock: {
    fontSize: '1.1em',
    lineHeight: '1.7',
    marginBottom: '20px',
    color: colors.primary, // Main text color from new palette
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Responsive grid
    gap: '25px',
  },
  serviceCard: { // Mini glass cards for individual services
    backgroundColor: 'rgba(255, 255, 255, 0.75)', // Slightly more opaque glass for readability
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: `1px solid rgba(255, 255, 255, 0.4)`, // Slightly more defined border
    borderRadius: '15px',
    padding: '25px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)', // More subtle shadow for sub-cards
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content like logo and title
    textAlign: 'center', // Center text
  },
  logoPlaceholder: {
    height: '80px', // Adjust as needed
    width: '80px', // Adjust as needed
    backgroundColor: colors.secondary, // Use accent color
    borderRadius: '50%', // Make it circular
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px', // Increased margin
    color: colors.textLight, // Light text on accent background
    fontSize: '0.9em',
    fontWeight: 'bold',
  }
};

export default Home;