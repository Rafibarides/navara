import React from 'react';
import colors from '../colors'; // Assuming colors.js is correctly set up

const About = () => {
  return (
    <section id="about" style={styles.pageContainer}>
      <div style={styles.contentWrapper}>
        <h1 style={styles.pageTitle}>About Navara</h1>

        <p style={styles.textBlock}>
          Navara was founded to bridge the gap between families and the support they actually need.
          We provide high-quality diagnostic evaluations, evidence-based behavior support, and guided
          career exploration—all under one streamlined, client-focused model.
        </p>

        <div style={styles.missionSection}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.textBlock}>
            We exist to simplify the process of getting help. Whether it’s understanding a child’s
            development, managing challenging behaviors, or navigating early career decisions, our
            goal is to give families and young adults the tools, clarity, and confidence they need
            to move forward.
          </p>
        </div>
      </div>
    </section>
  );
};

// Styling for Glassmorphism Theme
const styles = {
  pageContainer: {
    padding: '60px 20px 20px', // Added top padding for navbar
    fontFamily: 'var(--font-primary, Arial, sans-serif)',
    color: colors.textDark, // Default text color for the page
    minHeight: 'calc(100vh - 70px)', // Ensure it takes at least full viewport height minus navbar
    display: 'flex', // To center contentWrapper if needed, or for alignment
    alignItems: 'flex-start', // Align content to the top
    justifyContent: 'center', // Center content horizontally
    // Background is set globally in App.css
  },
  contentWrapper: { // This will be the main glass card
    backgroundColor: colors.glassBkg,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: `1px solid ${colors.glassBorder}`,
    borderRadius: '20px',
    padding: '40px', // Increased padding
    margin: '20px 0', // Add some vertical margin if page is short
    maxWidth: '900px',
    width: '100%', // Ensure it uses maxWidth
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
  },
  pageTitle: {
    fontSize: '2.8em', // Slightly larger page title
    fontWeight: '700',
    color: colors.textDark,
    textAlign: 'center',
    marginBottom: '30px',
    fontFamily: 'var(--font-secondary, Arial, sans-serif)',
  },
  textBlock: {
    fontSize: '1.15em', // Slightly larger text
    lineHeight: '1.8', // Increased line height
    marginBottom: '30px', // Increased margin
    color: colors.primary, // Use primary text color from new palette
  },
  missionSection: {
    marginTop: '30px', // Adjusted margin
    paddingTop: '30px', // Adjusted padding
    borderTop: `1px solid ${colors.glassBorder}`, // More subtle border, consistent with glass
  },
  sectionTitle: { // For "Our Mission"
    fontSize: '2.2em', // Slightly larger
    fontWeight: '700',
    color: colors.secondary, // Accent color
    marginBottom: '20px',
    textAlign: 'center',
    fontFamily: 'var(--font-secondary, Arial, sans-serif)',
  }
};

export default About;