import React from 'react';
import { motion } from 'framer-motion';
import colors from '../colors';

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      {/* Hero section */}
      <motion.div 
        style={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          style={styles.heroContent}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 style={styles.heroTitle}>Contact Us</h1>
          <p style={styles.heroText}>
            Get in touch with our team for more information about our services 
            or to schedule a consultation.
          </p>
        </motion.div>
      </motion.div>

      <div style={styles.contentContainer}>
        {/* Contact form and info section */}
        <div style={styles.contactSection}>
          <div style={styles.twoColumnGrid}>
            {/* Contact Form */}
            <motion.div 
              style={styles.formContainer}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 style={styles.sectionTitle}>Send a Message</h2>
              <p style={styles.sectionText}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form style={styles.form}>
                <div style={styles.formGroup}>
                  <label htmlFor="name" style={styles.label}>Full Name</label>
                  <motion.input 
                    type="text" 
                    id="name" 
                    placeholder="Your name"
                    style={styles.input}
                    whileFocus={{ boxShadow: '0 0 0 2px rgba(27, 59, 98, 0.3)' }}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.label}>Email Address</label>
                  <motion.input 
                    type="email" 
                    id="email" 
                    placeholder="Your email address"
                    style={styles.input}
                    whileFocus={{ boxShadow: '0 0 0 2px rgba(27, 59, 98, 0.3)' }}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label htmlFor="phone" style={styles.label}>Phone Number</label>
                  <motion.input 
                    type="tel" 
                    id="phone" 
                    placeholder="Your phone number"
                    style={styles.input}
                    whileFocus={{ boxShadow: '0 0 0 2px rgba(27, 59, 98, 0.3)' }}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label htmlFor="subject" style={styles.label}>Subject</label>
                  <motion.select 
                    id="subject" 
                    style={styles.select}
                    whileFocus={{ boxShadow: '0 0 0 2px rgba(27, 59, 98, 0.3)' }}
                  >
                    <option value="">Select a service</option>
                    <option value="diagnostics">Diagnostics</option>
                    <option value="pathways">Pathways</option>
                    <option value="behavior">Behavior Mastery Program</option>
                    <option value="other">Other</option>
                  </motion.select>
                </div>
                
                <div style={styles.formGroup}>
                  <label htmlFor="message" style={styles.label}>Message</label>
                  <motion.textarea 
                    id="message" 
                    rows="5" 
                    placeholder="How can we help you?"
                    style={styles.textarea}
                    whileFocus={{ boxShadow: '0 0 0 2px rgba(27, 59, 98, 0.3)' }}
                  ></motion.textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  style={styles.submitButton}
                  whileHover={{ scale: 1.03, backgroundColor: colors.darkMed }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              style={styles.contactInfo}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 style={styles.sectionTitle}>Get in Touch</h2>
              <p style={styles.sectionText}>
                Early diagnosis changes outcomes. Let's get started today.
              </p>
              
              <div style={styles.infoCards}>
                <motion.div 
                  style={styles.infoCard}
                  whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
                >
                  <div style={styles.iconContainer}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill={colors.accent}/>
                    </svg>
                  </div>
                  <h3 style={styles.infoTitle}>Email</h3>
                  <a href="mailto:diagnostics@navarabehavioralgroup.com" style={styles.infoLink}>
                    diagnostics@navarabehavioralgroup.com
                  </a>
                </motion.div>
                
                <motion.div 
                  style={styles.infoCard}
                  whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
                >
                  <div style={styles.iconContainer}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5ZM19 12H21C21 7 17 3 12 3V5C15.9 5 19 8.1 19 12ZM15 12H17C17 9.2 14.8 7 12 7V9C13.7 9 15 10.3 15 12Z" fill={colors.accent}/>
                    </svg>
                  </div>
                  <h3 style={styles.infoTitle}>Phone</h3>
                  <a href="tel:+1234567890" style={styles.infoLink}>
                    (123) 456-7890
                  </a>
                </motion.div>
                
                <motion.div 
                  style={styles.infoCard}
                  whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
                >
                  <div style={styles.iconContainer}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill={colors.accent}/>
                    </svg>
                  </div>
                  <h3 style={styles.infoTitle}>Location</h3>
                  <address style={styles.address}>
                    123 Healthcare Avenue<br />
                    Suite 456<br />
                    Wellness City, WC 12345
                  </address>
                </motion.div>
                
                <motion.div 
                  style={styles.infoCard}
                  whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
                >
                  <div style={styles.iconContainer}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill={colors.accent}/>
                    </svg>
                  </div>
                  <h3 style={styles.infoTitle}>Hours</h3>
                  <p style={styles.hours}>
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </motion.div>
              </div>
              
              <motion.div 
                style={styles.mapContainer}
                whileHover={{ boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
              >
                {/* Placeholder for map - in a real app, you'd use Google Maps or similar */}
                <div style={styles.mapPlaceholder}>
                  <div style={styles.mapPin}></div>
                  <p style={styles.mapText}>Map Location</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <motion.div 
          style={styles.faqSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
          
          <div style={styles.faqGrid}>
            {[
              {
                question: "How long does the diagnostic process take?",
                answer: "Our diagnostic process is streamlined for efficiency. From initial consultation to receiving your final report, the process typically takes 2-3 weeks, significantly faster than traditional wait times."
              },
              {
                question: "Do you accept insurance?",
                answer: "We are a direct-pay practice, which allows us to eliminate waitlists and provide faster service. However, we can provide documentation that you may submit to your insurance for potential reimbursement."
              },
              {
                question: "What age groups do you work with?",
                answer: "We provide diagnostic and behavioral services for individuals ages 2 and up. Our Pathways program is designed for adolescents and young adults exploring career options."
              },
              {
                question: "How is the Behavior Mastery Program different from traditional ABA?",
                answer: "Our program focuses on parent training and empowerment rather than direct therapy with your child. We teach you the same techniques behavior analysts use, allowing you to implement them consistently across all environments."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                style={styles.faqCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
              >
                <h3 style={styles.faqQuestion}>{faq.question}</h3>
                <p style={styles.faqAnswer}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          style={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Ready to Get Started?</h2>
            <p style={styles.ctaText}>
              Take the first step toward clarity, support, and positive change for your family.
            </p>
            <motion.button 
              style={styles.ctaButton}
              whileHover={{ scale: 1.05, backgroundColor: colors.darkMed }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: colors.white,
    color: colors.dark,
  },
  // Hero Section
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '40vh',
    padding: '80px 5% 40px',
    backgroundColor: '#F0F7FF',
    borderBottomLeftRadius: '50px',
    borderBottomRightRadius: '50px',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: colors.dark,
  },
  heroText: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: colors.neutral,
    maxWidth: '80%',
    margin: '0 auto',
  },
  // Content Container
  contentContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 5%',
  },
  // Contact Section
  contactSection: {
    padding: '80px 0',
  },
  twoColumnGrid: {
    display: 'flex',
    gap: '50px',
    flexWrap: 'wrap',
  },
  // Form Styles
  formContainer: {
    flex: '1',
    minWidth: '300px',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: colors.dark,
  },
  sectionText: {
    fontSize: '1rem',
    lineHeight: 1.7,
    color: colors.neutral,
    marginBottom: '25px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: colors.dark,
  },
  input: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #E0E0E0',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  select: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #E0E0E0',
    fontSize: '1rem',
    backgroundColor: colors.white,
    transition: 'all 0.3s ease',
  },
  textarea: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #E0E0E0',
    fontSize: '1rem',
    resize: 'vertical',
    minHeight: '100px',
    transition: 'all 0.3s ease',
  },
  submitButton: {
    backgroundColor: colors.dark,
    color: colors.text,
    border: 'none',
    padding: '15px 30px',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginTop: '10px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  // Contact Info Styles
  contactInfo: {
    flex: '1',
    minWidth: '300px',
  },
  infoCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  infoCard: {
    backgroundColor: colors.white,
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(203, 217, 197, 0.2)', // Using accent color with transparency
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15px',
  },
  infoTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: '10px',
  },
  infoLink: {
    color: colors.darkMed,
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease',
    ':hover': {
      color: colors.dark,
    },
  },
  address: {
    fontSize: '0.95rem',
    color: colors.neutral,
    lineHeight: 1.6,
    fontStyle: 'normal',
  },
  hours: {
    fontSize: '0.95rem',
    color: colors.neutral,
    lineHeight: 1.6,
  },
  mapContainer: {
    width: '100%',
    height: '250px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    marginTop: '30px',
    transition: 'all 0.3s ease',
  },
  mapPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F7FF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPin: {
    width: '30px',
    height: '30px',
    backgroundColor: colors.darkMed,
    borderRadius: '50% 50% 50% 0',
    transform: 'rotate(-45deg)',
    marginBottom: '10px',
  },
  mapText: {
    color: colors.dark,
    fontSize: '1rem',
    fontWeight: '500',
  },
  // FAQ Section
  faqSection: {
    padding: '80px 0',
    backgroundColor: '#F9FAFB',
    margin: '0 -5%',
    padding: '80px 5%',
  },
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  },
  faqCard: {
    backgroundColor: colors.white,
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
  },
  faqQuestion: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: '15px',
  },
  faqAnswer: {
    fontSize: '1rem',
    lineHeight: 1.7,
    color: colors.neutral,
  },
  // Call to Action
  ctaSection: {
    backgroundColor: colors.dark,
    borderRadius: '15px',
    padding: '60px 40px',
    textAlign: 'center',
    marginTop: '40px',
    marginBottom: '80px',
  },
  ctaContent: {
    maxWidth: '700px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: '20px',
  },
  ctaText: {
    fontSize: '1.1rem',
    lineHeight: 1.7,
    color: colors.text,
    marginBottom: '30px',
  },
  ctaButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: colors.text,
    border: '2px solid rgba(255, 255, 255, 0.5)',
    padding: '14px 35px',
    borderRadius: '30px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },
};

export default Contact; 