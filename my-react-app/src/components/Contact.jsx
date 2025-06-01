import React from 'react';
import colors from '../colors'; // Assuming colors.js is correctly set up

const Contact = () => {
  return (
    <section id="contact" style={styles.pageContainer}>
      <div style={styles.contentWrapper}>
        <h1 style={styles.pageTitle}>Contact Us</h1>
        <p style={styles.textBlock}>
          Information on how to contact Navara will be available here soon.
          Thank you for your patience.
        </p>
      </div>
    </section>
  );
};

// Styling for Glassmorphism Theme
const styles = {
  pageContainer: {
    padding: '60px 20px 20px', // Added top padding for navbar
    fontFamily: 'var(--font-primary, Arial, sans-serif)',
    color: colors.textDark, // Default text color
    minHeight: 'calc(100vh - 70px)', // Ensure it takes full viewport height minus navbar
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically and horizontally
    // Background is set globally in App.css
  },
  contentWrapper: { // This will be the glass card
    backgroundColor: colors.glassBkg,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: `1px solid ${colors.glassBorder}`,
    borderRadius: '20px',
    padding: '40px', // Increased padding
    maxWidth: '700px', // Adjusted max width for a contact page
    width: '100%',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
    textAlign: 'center',
  },
  pageTitle: {
    fontSize: '2.8em',
    fontWeight: '700',
    color: colors.textDark,
    marginBottom: '25px', // Adjusted margin
    fontFamily: 'var(--font-secondary, Arial, sans-serif)',
  },
  textBlock: {
    fontSize: '1.15em', // Adjusted font size
    lineHeight: '1.7', // Adjusted line height
    color: colors.primary, // Use primary text color from new palette
    marginTop: '10px',
  }
};

export default Contact;