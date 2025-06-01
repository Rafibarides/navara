import React from 'react';
import { motion } from 'framer-motion';
import colors from '../colors';

const About = () => {
  return (
    <section id="about" style={styles.section}>
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
          <h1 style={styles.heroTitle}>About Navara</h1>
          <p style={styles.heroText}>
            Navara was founded to bridge the gap between families and the support they actually need. 
            We provide high-quality diagnostic evaluations, evidence-based behavior support, and guided 
            career exploration—all under one streamlined, client-focused model.
          </p>
        </motion.div>
      </motion.div>

      {/* Mission vision section */}
      <div style={styles.contentContainer}>
        <motion.div 
          style={styles.missionSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div style={styles.twoColumnGrid}>
            <motion.div 
              style={styles.missionContent}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 style={styles.sectionTitle}>Our Mission</h2>
              <p style={styles.sectionText}>
                We exist to simplify the process of getting help. Whether it's understanding a child's development, 
                managing challenging behaviors, or navigating early career decisions, our goal is to give families 
                and young adults the tools, clarity, and confidence they need to move forward.
              </p>
              <motion.button 
                style={styles.learnMoreButton}
                whileHover={{ scale: 1.05, backgroundColor: colors.darkMed }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div 
              style={styles.missionImage}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div style={styles.imageContainer}>
                <motion.div 
                  style={styles.floatingElement}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <img src="/art1.png" alt="Our mission" style={styles.image} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Team Section */}
        <motion.div 
          style={styles.teamSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={styles.sectionTitle}>Our Team</h2>
          <p style={styles.teamDescription}>
            Our dedicated team of professionals is committed to providing you with the best care and support.
          </p>
          
          <div style={styles.teamGrid}>
            {/* Team Member 1 */}
            <motion.div 
              style={styles.teamCard}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' 
              }}
            >
              <motion.div 
                style={styles.memberImageContainer}
                whileHover={{ scale: 1.05 }}
              >
                <div style={styles.memberAvatar}></div>
              </motion.div>
              <h3 style={styles.memberName}>Dr. Sarah Johnson</h3>
              <p style={styles.memberRole}>Lead Psychologist</p>
              <p style={styles.memberBio}>
                Dr. Johnson specializes in developmental evaluations with over 15 years of experience.
              </p>
              <div style={styles.socialLinks}>
                <div style={styles.socialIcon}></div>
                <div style={styles.socialIcon}></div>
                <div style={styles.socialIcon}></div>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div 
              style={styles.teamCard}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' 
              }}
            >
              <motion.div 
                style={styles.memberImageContainer}
                whileHover={{ scale: 1.05 }}
              >
                <div style={styles.memberAvatar}></div>
              </motion.div>
              <h3 style={styles.memberName}>Michael Rodriguez</h3>
              <p style={styles.memberRole}>Behavior Specialist</p>
              <p style={styles.memberBio}>
                Michael is a BCBA with expertise in developing effective behavior support plans.
              </p>
              <div style={styles.socialLinks}>
                <div style={styles.socialIcon}></div>
                <div style={styles.socialIcon}></div>
                <div style={styles.socialIcon}></div>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div 
              style={styles.teamCard}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' 
              }}
            >
              <motion.div 
                style={styles.memberImageContainer}
                whileHover={{ scale: 1.05 }}
              >
                <div style={styles.memberAvatar}></div>
              </motion.div>
              <h3 style={styles.memberName}>Dr. Amelia Chen</h3>
              <p style={styles.memberRole}>Career Counselor</p>
              <p style={styles.memberBio}>
                Dr. Chen guides young adults through career exploration and development.
              </p>
              <div style={styles.socialLinks}>
                <div style={styles.socialIcon}></div>
                <div style={styles.socialIcon}></div>
                <div style={styles.socialIcon}></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          style={styles.valuesSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={styles.sectionTitle}>Our Core Values</h2>
          
          <div style={styles.valuesGrid}>
            {/* Value 1 */}
            <motion.div 
              style={styles.valueCard}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div style={styles.valueIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM18 11.09C18 15.09 15.45 18.79 12 19.92C8.55 18.79 6 15.1 6 11.09V6.39L12 4.14L18 6.39V11.09Z" fill={colors.accent}/>
                  <path d="M10 13L7 10L5.5 11.5L10 16L18 8L16.5 6.5L10 13Z" fill={colors.accent}/>
                </svg>
              </div>
              <h3 style={styles.valueTitle}>Excellence</h3>
              <p style={styles.valueText}>
                We are committed to the highest standards of clinical and professional practice.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div 
              style={styles.valueCard}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div style={styles.valueIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill={colors.accent}/>
                </svg>
              </div>
              <h3 style={styles.valueTitle}>Integrity</h3>
              <p style={styles.valueText}>
                We operate with honesty, transparency, and the highest ethical standards.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div 
              style={styles.valueCard}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div style={styles.valueIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 13H13V3H11V13H8L12 17L16 13ZM4 19V21H20V19H4Z" fill={colors.accent}/>
                </svg>
              </div>
              <h3 style={styles.valueTitle}>Accessibility</h3>
              <p style={styles.valueText}>
                We believe quality care should be accessible, timely, and straightforward.
              </p>
            </motion.div>

            {/* Value 4 */}
            <motion.div 
              style={styles.valueCard}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div style={styles.valueIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V18H6V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H24V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" fill={colors.accent}/>
                </svg>
              </div>
              <h3 style={styles.valueTitle}>Family-Centered</h3>
              <p style={styles.valueText}>
                We partner with families, recognizing them as the most important influence in their child's life.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials section */}
        <motion.div 
          style={styles.testimonialsSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={styles.sectionTitle}>What Families Say</h2>
          
          <div style={styles.testimonialCards}>
            {/* Testimonial 1 */}
            <motion.div 
              style={styles.testimonialCard}
              whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div style={styles.quoteIcon}>❝</div>
              <p style={styles.testimonialText}>
                The diagnostic process was so straightforward and helpful. For the first time, we feel 
                like we really understand our child's needs and have a clear path forward.
              </p>
              <div style={styles.testimonialAuthor}>
                <div style={styles.authorAvatar}></div>
                <div>
                  <h4 style={styles.authorName}>Jessica & Mark</h4>
                  <p style={styles.authorRelation}>Parents of 7-year-old</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              style={styles.testimonialCard}
              whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div style={styles.quoteIcon}>❝</div>
              <p style={styles.testimonialText}>
                The behavior program gave us practical tools we could implement right away. Within 
                weeks, we saw significant improvements in our home environment.
              </p>
              <div style={styles.testimonialAuthor}>
                <div style={styles.authorAvatar}></div>
                <div>
                  <h4 style={styles.authorName}>David T.</h4>
                  <p style={styles.authorRelation}>Father of 10-year-old</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div 
              style={styles.testimonialCard}
              whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div style={styles.quoteIcon}>❝</div>
              <p style={styles.testimonialText}>
                Navara Pathways helped me figure out what I actually want to do with my career. 
                The assessments and mentorship were invaluable in my decision making.
              </p>
              <div style={styles.testimonialAuthor}>
                <div style={styles.authorAvatar}></div>
                <div>
                  <h4 style={styles.authorName}>Alex R.</h4>
                  <p style={styles.authorRelation}>College Student</p>
                </div>
              </div>
            </motion.div>
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
    minHeight: '50vh',
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
  // Mission Section
  missionSection: {
    padding: '80px 0',
  },
  twoColumnGrid: {
    display: 'flex',
    gap: '50px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  missionContent: {
    flex: '1',
    minWidth: '300px',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '25px',
    color: colors.dark,
  },
  sectionText: {
    fontSize: '1rem',
    lineHeight: 1.7,
    color: colors.neutral,
    marginBottom: '25px',
  },
  learnMoreButton: {
    backgroundColor: colors.dark,
    color: colors.text,
    border: 'none',
    padding: '12px 30px',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  missionImage: {
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '350px',
    borderRadius: '20px',
    overflow: 'hidden',
    backgroundColor: colors.darkMed,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingElement: {
    width: '80%',
    height: '80%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  // Team Section
  teamSection: {
    padding: '80px 0',
    textAlign: 'center',
  },
  teamDescription: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: colors.neutral,
    maxWidth: '700px',
    margin: '0 auto 40px',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  },
  teamCard: {
    backgroundColor: colors.white,
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
    padding: '30px',
    transition: 'all 0.3s ease',
    textAlign: 'center',
  },
  memberImageContainer: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: colors.darkMed,
    margin: '0 auto 20px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  memberAvatar: {
    width: '80%',
    height: '80%',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  memberName: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: '5px',
  },
  memberRole: {
    color: colors.darkMed,
    marginBottom: '15px',
    fontWeight: '500',
  },
  memberBio: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: colors.neutral,
    marginBottom: '20px',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '20px',
  },
  socialIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#F0F0F0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  // Values Section
  valuesSection: {
    padding: '80px 0',
    backgroundColor: '#F9FAFB',
    margin: '0 -5%',
    padding: '80px 5%',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '25px',
    marginTop: '40px',
  },
  valueCard: {
    backgroundColor: colors.white,
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease',
  },
  valueIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(203, 217, 197, 0.2)', // Using accent color with transparency
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  valueTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: '15px',
  },
  valueText: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: colors.neutral,
  },
  // Testimonials Section
  testimonialsSection: {
    padding: '80px 0',
  },
  testimonialCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  },
  testimonialCard: {
    backgroundColor: colors.white,
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    position: 'relative',
  },
  quoteIcon: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '40px',
    color: 'rgba(203, 217, 197, 0.7)', // Using accent color with transparency
    fontFamily: 'serif',
  },
  testimonialText: {
    fontSize: '1rem',
    lineHeight: 1.7,
    color: colors.neutral,
    marginBottom: '20px',
    paddingTop: '30px',
  },
  testimonialAuthor: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  authorAvatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#F0F0F0',
  },
  authorName: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: '2px',
  },
  authorRelation: {
    fontSize: '0.85rem',
    color: colors.neutral,
  },
};

export default About; 