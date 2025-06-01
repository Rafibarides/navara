import React from 'react';
import { motion } from 'framer-motion';
import colors from '../colors';

const Services = () => {
  return (
    <section id="services" style={styles.section}>
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
          <h1 style={styles.heroTitle}>Our Services</h1>
          <p style={styles.heroText}>
            We provide high-quality diagnostic evaluations, evidence-based behavior support, 
            and guided career exploration—all under one streamlined, client-focused model.
          </p>
        </motion.div>
      </motion.div>

      {/* Diagnostics Section */}
      <div id="diagnostics" style={styles.contentContainer}>
        <motion.div 
          style={styles.serviceSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.sectionTitle}>Diagnostics</h2>
          <div style={styles.serviceContent}>
            <motion.div 
              style={styles.serviceInfo}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 style={styles.serviceSubtitle}>Comprehensive Psychological & Developmental Diagnostics</h3>
              <h4 style={styles.serviceTagline}>Clarity. Direction. Action.</h4>
              <p style={styles.serviceText}>
                At Navara Behavioral Group, we specialize in high-quality psychological and developmental 
                assessments that empower families, schools, and treatment providers to move forward with confidence.
              </p>
              
              <div style={styles.serviceFeatures}>
                <h3 style={styles.featuresTitle}>Why Choose Navara Diagnostics?</h3>
                <motion.ul style={styles.featuresList}>
                  {[
                    "Fast Turnaround – Get results in days, not months.",
                    "Clear, Actionable Reports – No fluff. Every report includes detailed findings and specific recommendations.",
                    "Multidisciplinary Expertise – Licensed psychologists, BCBAs, and medical collaboration where needed.",
                    "Parent-Friendly Process – We guide you step-by-step, from intake to feedback.",
                    "School & Treatment Collaboration – We liaise directly with providers (when authorized) to support services like IEPs, ABA, or therapy."
                  ].map((feature, index) => (
                    <motion.li 
                      key={index} 
                      style={styles.featureItem}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              
              <motion.button 
                style={styles.serviceButton}
                whileHover={{ scale: 1.05, backgroundColor: colors.darkMed }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
            
            <motion.div 
              style={styles.serviceImageContainer}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div style={styles.imageWrapper}>
                <motion.div 
                  style={styles.floatingElement}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <img src="/art1.png" alt="Diagnostics" style={styles.serviceImage} />
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <div style={styles.infoCards}>
            <motion.div 
              style={styles.infoCard}
              whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h3 style={styles.cardTitle}>What We Test For</h3>
              <ul style={styles.cardList}>
                <li>Autism Spectrum Disorder (ASD)</li>
                <li>ADHD & Executive Functioning</li>
                <li>Learning Disabilities</li>
                <li>Anxiety, OCD, Mood Disorders</li>
                <li>Behavior & Emotional Regulation</li>
                <li>Intellectual & Cognitive Functioning</li>
                <li>School Readiness & Giftedness</li>
              </ul>
            </motion.div>
            
            <motion.div 
              style={styles.infoCard}
              whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 style={styles.cardTitle}>Who We Serve</h3>
              <ul style={styles.cardList}>
                <li>Children, Adolescents and Adults (ages 2 and up)</li>
                <li>Parents seeking answers</li>
                <li>Schools and ABA agencies</li>
                <li>Pediatricians and therapists</li>
              </ul>
            </motion.div>
            
            <motion.div 
              style={styles.infoCard}
              whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 style={styles.cardTitle}>What to Expect</h3>
              <ul style={styles.cardList}>
                <li>Free 15-minute phone consult</li>
                <li>Initial intake session</li>
                <li>Testing day(s)</li>
                <li>Results meeting</li>
                <li>Support for next steps</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            style={styles.pricingSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 style={styles.pricingTitle}>Packages & Pricing</h3>
            <p style={styles.pricingText}>
              We offer direct-pay diagnostic packages. No waiting lists. No insurance roadblocks.
            </p>
            <div style={styles.pricingCards}>
              <motion.div 
                style={styles.pricingCard}
                whileHover={{ scale: 1.03, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
              >
                <h4 style={styles.pricingCardTitle}>Standard Evaluation</h4>
                <p style={styles.pricingCardPrice}>$1,500–$2,200</p>
                <div style={styles.pricingCardDivider}></div>
                <p style={styles.pricingCardDescription}>
                  Comprehensive evaluation for specific concerns.
                </p>
              </motion.div>
              
              <motion.div 
                style={styles.pricingCard}
                whileHover={{ scale: 1.03, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
              >
                <h4 style={styles.pricingCardTitle}>Autism Diagnostic Package</h4>
                <p style={styles.pricingCardPrice}>$2,000–$2,500</p>
                <div style={styles.pricingCardDivider}></div>
                <p style={styles.pricingCardDescription}>
                  Specialized assessment for autism spectrum disorder.
                </p>
              </motion.div>
              
              <motion.div 
                style={styles.pricingCard}
                whileHover={{ scale: 1.03, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
              >
                <h4 style={styles.pricingCardTitle}>Full Psychoeducational Battery</h4>
                <p style={styles.pricingCardPrice}>$2,500–$3,200</p>
                <div style={styles.pricingCardDivider}></div>
                <p style={styles.pricingCardDescription}>
                  Complete assessment of cognitive, academic, and psychological functioning.
                </p>
              </motion.div>
            </div>
            <p style={styles.pricingNote}>Payment plans available. HSA/FSA eligible.</p>
          </motion.div>
        </motion.div>
        
        {/* Pathways Section */}
        <motion.div 
          id="pathways" 
          style={styles.serviceSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.sectionTitle}>Navara Pathways</h2>
          <div style={styles.serviceContent}>
            <motion.div 
              style={styles.serviceImageContainer}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div style={styles.imageWrapper}>
                <motion.div 
                  style={styles.floatingElement}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <img src="/art2.png" alt="Pathways" style={styles.serviceImage} />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              style={styles.serviceInfo}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 style={styles.serviceSubtitle}>Guided Career Exploration Program</h3>
              <p style={styles.serviceText}>
                Navara Pathways is a guided career exploration program for young adults seeking clarity 
                about their future. Through expert-led assessments, one-on-one coaching, and short-term 
                mentorships or shadowing experiences, we help individuals identify their strengths, 
                interests, and best-fit career paths.
              </p>
              
              <div style={styles.serviceFeatures}>
                <h3 style={styles.featuresTitle}>Program Components</h3>
                <motion.ul style={styles.featuresList}>
                  {[
                    "Comprehensive assessments to identify strengths, interests, and aptitudes",
                    "One-on-one coaching sessions with experienced career counselors",
                    "Structured exploration of potential career paths and educational requirements",
                    "Mentorship and shadowing opportunities in fields of interest",
                    "Development of actionable next steps"
                  ].map((feature, index) => (
                    <motion.li 
                      key={index} 
                      style={styles.featureItem}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              
              <motion.button 
                style={styles.serviceButton}
                whileHover={{ scale: 1.05, backgroundColor: colors.darkMed }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Behavior Mastery Section */}
        <motion.div 
          id="behavior-mastery-program" 
          style={styles.serviceSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.sectionTitle}>Behavior Mastery Program</h2>
          <div style={styles.serviceContent}>
            <motion.div 
              style={styles.serviceInfo}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 style={styles.serviceSubtitle}>You Are the Most Important Part of the Solution</h3>
              <h4 style={styles.serviceTagline}>Learn BCBA Essentials in Just 8 Weeks</h4>
              <p style={styles.serviceText}>
                We help parents reduce challenging behaviors and improve quality of life at home. 
                You'll learn how to respond effectively, teach new skills, and build a relationship that works.
              </p>
              
              <div style={styles.serviceFeatures}>
                <h3 style={styles.featuresTitle}>Program Benefits</h3>
                <motion.ul style={styles.featuresList}>
                  {[
                    "Learn to identify the function of challenging behaviors",
                    "Develop effective strategies tailored to your child's specific needs",
                    "Implement behavior plans consistently across home and school settings",
                    "Build skills to prevent future challenging behaviors",
                    "Ongoing support from experienced behavior specialists"
                  ].map((feature, index) => (
                    <motion.li 
                      key={index} 
                      style={styles.featureItem}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              
              <motion.button 
                style={styles.serviceButton}
                whileHover={{ scale: 1.05, backgroundColor: colors.darkMed }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
            
            <motion.div 
              style={styles.serviceImageContainer}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div style={styles.imageWrapper}>
                <motion.div 
                  style={styles.floatingElement}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <img src="/art3.png" alt="Behavior Mastery" style={styles.serviceImage} />
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            style={styles.programStructure}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 style={styles.structureTitle}>Program Structure</h3>
            <div style={styles.timelineContainer}>
              <div style={styles.timeline}>
                {[
                  { week: "Week 1-2", title: "Assessment & Planning", description: "Identify behavior patterns and develop initial strategies" },
                  { week: "Week 3-4", title: "Implementation & Coaching", description: "Put strategies into practice with expert guidance" },
                  { week: "Week 5-6", title: "Refinement & Adjustment", description: "Evaluate progress and fine-tune your approach" },
                  { week: "Week 7-8", title: "Mastery & Long-term Planning", description: "Ensure sustainable results and plan for future success" }
                ].map((phase, index) => (
                  <motion.div 
                    key={index} 
                    style={styles.timelineItem}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <div style={styles.timelineDot}></div>
                    <h4 style={styles.timelineWeek}>{phase.week}</h4>
                    <h5 style={styles.timelineTitle}>{phase.title}</h5>
                    <p style={styles.timelineDescription}>{phase.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
    padding: '40px 5%',
  },
  // Service Section
  serviceSection: {
    marginBottom: '80px',
    paddingTop: '40px',
    scrollMarginTop: '100px', // For smooth scrolling to anchors
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: colors.dark,
    position: 'relative',
    paddingBottom: '15px',
  },
  serviceContent: {
    display: 'flex',
    gap: '50px',
    flexWrap: 'wrap',
    marginBottom: '50px',
  },
  serviceInfo: {
    flex: '1',
    minWidth: '300px',
  },
  serviceSubtitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: colors.dark,
  },
  serviceTagline: {
    fontSize: '1.2rem',
    fontWeight: '500',
    marginBottom: '20px',
    color: colors.darkMed,
  },
  serviceText: {
    fontSize: '1rem',
    lineHeight: 1.7,
    color: colors.neutral,
    marginBottom: '30px',
  },
  serviceButton: {
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
  serviceImageContainer: {
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
  },
  imageWrapper: {
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
  serviceImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  // Features
  serviceFeatures: {
    marginBottom: '30px',
  },
  featuresTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: colors.dark,
  },
  featuresList: {
    paddingLeft: '20px',
  },
  featureItem: {
    marginBottom: '10px',
    color: colors.neutral,
    lineHeight: 1.6,
  },
  // Info Cards
  infoCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '25px',
    marginBottom: '50px',
  },
  infoCard: {
    backgroundColor: colors.white,
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: colors.dark,
    borderBottom: `2px solid ${colors.accent}`,
    paddingBottom: '10px',
  },
  cardList: {
    paddingLeft: '20px',
    color: colors.neutral,
    lineHeight: 1.6,
  },
  // Pricing Section
  pricingSection: {
    backgroundColor: '#F9FAFB',
    padding: '40px',
    borderRadius: '15px',
    marginBottom: '50px',
  },
  pricingTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: colors.dark,
  },
  pricingText: {
    fontSize: '1rem',
    lineHeight: 1.7,
    color: colors.neutral,
    marginBottom: '30px',
  },
  pricingCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '25px',
    marginBottom: '20px',
  },
  pricingCard: {
    backgroundColor: colors.white,
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    textAlign: 'center',
  },
  pricingCardTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: colors.dark,
  },
  pricingCardPrice: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: colors.darkMed,
    marginBottom: '15px',
  },
  pricingCardDivider: {
    width: '50px',
    height: '3px',
    backgroundColor: colors.accent,
    margin: '0 auto 15px',
  },
  pricingCardDescription: {
    fontSize: '0.9rem',
    color: colors.neutral,
    lineHeight: 1.6,
  },
  pricingNote: {
    fontSize: '0.9rem',
    color: colors.neutral,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  // Program Structure
  programStructure: {
    marginBottom: '50px',
  },
  structureTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: colors.dark,
    textAlign: 'center',
  },
  timelineContainer: {
    padding: '20px 0',
  },
  timeline: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position: 'relative',
  },
  timelineItem: {
    flex: '1',
    minWidth: '220px',
    padding: '20px',
    position: 'relative',
    backgroundColor: colors.white,
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    margin: '0 10px 20px',
    transition: 'all 0.3s ease',
  },
  timelineDot: {
    width: '20px',
    height: '20px',
    backgroundColor: colors.accent,
    borderRadius: '50%',
    position: 'absolute',
    top: '-10px',
    left: '30px',
  },
  timelineWeek: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: colors.darkMed,
    marginBottom: '10px',
  },
  timelineTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: '10px',
  },
  timelineDescription: {
    fontSize: '0.9rem',
    color: colors.neutral,
    lineHeight: 1.6,
  },
  // Call to Action
  ctaSection: {
    backgroundColor: colors.dark,
    borderRadius: '15px',
    padding: '60px 40px',
    textAlign: 'center',
    marginTop: '80px',
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

export default Services; 