import React from 'react';
import colors from '../colors'; // Assuming colors.js is correctly set up

const Services = () => {
  return (
    <section id="services" style={styles.pageContainer}>
      {/* DIAGNOSTICS Section */}
      <div style={styles.serviceSection} id="diagnostics">
        <h2 style={styles.mainTitle}>DIAGNOSTICS</h2>
        <h3 style={styles.subTitle}>Comprehensive Psychological & Developmental Diagnostics</h3>
        <p style={styles.tagline}>Clarity. Direction. Action.</p>
        <p style={styles.textBlock}>
          At Navara Diagnostics, we specialize in high-quality psychological and developmental
          assessments tailored to your child's needs. Our streamlined, parent-focused approach
          eliminates long wait times and confusing reports—delivering clear answers and practical
          next steps.
        </p>

        <div style={styles.contentBlock}>
          <h4 style={styles.sectionHeader}>Why Choose Navara Diagnostics?</h4>
          <ul style={styles.list}>
            <li>Fast Turnaround – Get results in days, not months.</li>
            <li>Clear, Actionable Reports – No fluff. Every report includes detailed findings and specific recommendations.</li>
            <li>Multidisciplinary Expertise – Licensed psychologists, BCBAs, and medical collaboration where needed.</li>
            <li>Parent-Friendly Process – We guide you step-by-step, from intake to feedback.</li>
            <li>School & Treatment Collaboration – We liaise directly with providers (when authorized) to support services like IEPs, ABA, or therapy.</li>
          </ul>
        </div>

        <div style={styles.contentBlock}>
          <h4 style={styles.sectionHeader}>What We Test For</h4>
          <ul style={styles.list}>
            <li>Autism Spectrum Disorder (ASD)</li>
            <li>ADHD & Executive Functioning</li>
            <li>Learning Disabilities (e.g., Dyslexia, Dysgraphia, Dyscalculia)</li>
            <li>Anxiety, OCD, Mood Disorders</li>
            <li>Behavior & Emotional Regulation Challenges</li>
            <li>Intellectual & Cognitive Functioning (IQ testing)</li>
            <li>School Readiness & Giftedness</li>
          </ul>
        </div>

        <div style={styles.contentBlock}>
          <h4 style={styles.sectionHeader}>Who We Serve</h4>
          <ul style={styles.list}>
            <li>Children, Adolescents, and Adults (ages 2 and up)</li>
            <li>Parents seeking diagnostic clarity for their child’s learning, behavior, or development.</li>
            <li>Schools and ABA agencies requiring independent evaluations for treatment planning or IEP support.</li>
            <li>Pediatricians, therapists, and other professionals needing comprehensive assessments for their clients.</li>
          </ul>
        </div>

        <div style={styles.contentBlock}>
          <h4 style={styles.sectionHeader}>What to Expect</h4>
          <ol style={styles.list}>
            <li>Free 15-minute phone consult to discuss your needs.</li>
            <li>Initial intake session (virtual or in-person) to gather background information.</li>
            <li>Testing day(s) – comprehensive and tailored to the referral questions.</li>
            <li>Results meeting to review findings and recommendations.</li>
            <li>Support for next steps, including referrals and collaboration with your team.</li>
          </ol>
        </div>

        <div style={styles.contentBlock}>
          <h4 style={styles.sectionHeader}>Packages & Pricing</h4>
          <p style={styles.textBlock}>Direct-pay diagnostic packages. No waiting lists. No insurance roadblocks. Payment plans available. HSA/FSA eligible.</p>
          <ul style={styles.list}>
            <li><strong>Standard Evaluation:</strong> $1,500–$2,200 (e.g., ADHD, learning disability, mood disorder)</li>
            <li><strong>Autism Diagnostic Package:</strong> $2,000–$2,500 (includes ADOS-2, cognitive testing, adaptive behavior scales, and developmental history)</li>
            <li><strong>Full Psychoeducational Battery:</strong> $2,500–$3,200 (comprehensive assessment of cognitive, academic, and psychological functioning)</li>
          </ul>
        </div>

        <p style={styles.contactInfo}>
          📞 Book your free consult | 📧 diagnostics@navarabehavioralgroup.com
        </p>
      </div>

      {/* Behavior Mastery Program Section */}
      <div style={styles.serviceSection} id="behavior-mastery">
        <h2 style={styles.mainTitle}>Behavior mastery program</h2>
        <h3 style={styles.subTitle}>You Are the Most Important Part of the Solution. Learn BCBA Essentials in Just 8 Weeks.</h3>
        <p style={styles.textBlock}>
          We help parents reduce challenging behaviors and improve quality of life at home. You'll learn how to respond effectively, teach new skills, and build a relationship that works. This program is designed for parents who are ready to become active participants in their child's behavioral progress, providing them with the foundational knowledge and practical tools typically used by Board Certified Behavior Analysts (BCBAs).
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
    color: colors.textDark, // Default text color for the page
    // Background is set globally in App.css
  },
  serviceSection: { // Main glass card for each service type
    backgroundColor: colors.glassBkg,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: `1px solid ${colors.glassBorder}`,
    borderRadius: '20px',
    padding: '30px', // Standardized padding
    marginBottom: '40px', // Spacing between glass sections
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
  },
  mainTitle: {
    fontSize: '2.2em',
    fontWeight: '700',
    color: colors.textDark, // Dark text for titles on glass
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '15px', // Adjusted margin
    fontFamily: 'var(--font-secondary, Arial, sans-serif)',
  },
  subTitle: {
    fontSize: '1.6em',
    fontWeight: '700',
    color: colors.secondary, // Accent color for subtitles
    textAlign: 'center',
    marginBottom: '25px', // Adjusted margin
    fontFamily: 'var(--font-secondary, Arial, sans-serif)',
  },
  tagline: {
    fontSize: '1.2em',
    fontWeight: '600', // Slightly less bold
    color: colors.primary, // Main text color, or a slightly lighter dark
    textAlign: 'center',
    marginBottom: '30px', // Adjusted margin
    fontStyle: 'italic',
  },
  textBlock: {
    fontSize: '1.1em', // Slightly larger for better readability
    lineHeight: '1.7',
    marginBottom: '20px',
    color: colors.primary, // Main text color
  },
  contentBlock: {
    marginBottom: '30px',
  },
  sectionHeader: {
    fontSize: '1.4em', // Slightly larger section headers
    fontWeight: '700',
    color: colors.secondary, // Accent color for headers within the card
    marginBottom: '15px',
    paddingBottom: '8px', // Adjusted padding
    borderBottom: `2px solid ${colors.secondary}`, // Use accent color for border
    fontFamily: 'var(--font-secondary, Arial, sans-serif)',
  },
  list: {
    listStylePosition: 'inside',
    paddingLeft: '5px', // Slight indent for list items
    lineHeight: '1.8', // Increased line height for lists
    color: colors.primary,
  },
  contactInfo: {
    textAlign: 'center',
    fontSize: '1.1em',
    fontWeight: '600',
    marginTop: '30px',
    padding: '20px', // Increased padding
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Lighter glass or subtle solid
    // backdropFilter: 'blur(5px)', // Optional: subtle blur if glass
    // WebkitBackdropFilter: 'blur(5px)',
    border: `1px solid ${colors.glassBorder}`,
    color: colors.textDark, // Dark text for readability
    borderRadius: '10px', // Rounded corners
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
  }
};

export default Services;