import React from 'react';
import { motion } from 'framer-motion';
import colors from '../colors';

const Home = () => {
  return (
    <section id="home" style={styles.section}>
      {/* Hero section */}
      <motion.div 
        style={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          style={styles.heroContent}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 style={styles.heroTitle}>Healthcare<br />Solutions</h1>
          <p style={styles.heroText}>
            Navara bridges the gap between families and the support they actually need. 
            We provide high-quality diagnostic evaluations, evidence-based behavior support, 
            and guided career exploration.
          </p>
          <motion.button 
            style={styles.heroButton}
            whileHover={{ scale: 1.05, backgroundColor: colors.darkMed }}
            whileTap={{ scale: 0.95 }}
          >
            Find Doctors
          </motion.button>
        </motion.div>
        <motion.div 
          style={styles.heroImage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img src="/art1.png" alt="Healthcare professionals" style={styles.image} />
        </motion.div>
      </motion.div>

      {/* Features section */}
      <div style={styles.featuresContainer}>
        <motion.div 
          className="feature-grid"
          style={styles.featureGrid}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Opening Hours */}
          <motion.div 
            style={{...styles.featureCard, ...styles.featureHours}}
            whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
          >
            <div style={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z" fill="white"/>
              </svg>
            </div>
            <h3 style={styles.featureTitle}>Opening Hours</h3>
            <div style={styles.hoursContent}>
              <p>Monday - Friday: 9:00AM - 5:00PM</p>
              <p>Saturday: 9:00AM - 12:00PM</p>
              <p>Sunday: Closed</p>
            </div>
          </motion.div>

          {/* Appointment */}
          <motion.div 
            style={{...styles.featureCard, ...styles.featureAppointment}}
            whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
          >
            <div style={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM12 10H17V15H12V10Z" fill="white"/>
              </svg>
            </div>
            <h3 style={styles.featureTitle}>Make Appointment</h3>
            <p style={styles.featureText}>Schedule a consultation with our experts today</p>
            <motion.button 
              style={styles.featureButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </motion.div>

          {/* Find Doctors */}
          <motion.div 
            style={{...styles.featureCard, ...styles.featureFind}}
            whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
          >
            <div style={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13ZM18 18H6V17.01C6.2 16.29 9.3 15 12 15C14.7 15 17.8 16.29 18 17V18Z" fill="white"/>
              </svg>
            </div>
            <h3 style={styles.featureTitle}>Find Doctors</h3>
            <p style={styles.featureText}>Search for specialized healthcare professionals</p>
            <motion.button 
              style={styles.featureButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find Now
            </motion.button>
          </motion.div>

          {/* Find Locations */}
          <motion.div 
            style={{...styles.featureCard, ...styles.featureLocations}}
            whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
          >
            <div style={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white"/>
              </svg>
            </div>
            <h3 style={styles.featureTitle}>Find Locations</h3>
            <p style={styles.featureText}>Locate our healthcare centers near you</p>
            <motion.button 
              style={styles.featureButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Section */}
      <motion.div 
        style={styles.servicesSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.sectionTitle}>Our Medical Services</h2>
        
        <div style={styles.serviceDetail}>
          <motion.div 
            style={styles.serviceImage}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <img src="/art2.png" alt="Medical professional" style={styles.doctorImage} />
          </motion.div>
          
          <motion.div 
            style={styles.serviceContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 style={styles.serviceTitle}>Dental Care Service</h3>
            <p style={styles.serviceText}>
              At Navara Diagnostics, we specialize in high-quality psychological and developmental 
              assessments tailored to your child's needs. Our streamlined, parent-focused approach 
              eliminates long wait times and confusing reports—delivering clear answers and practical next steps.
            </p>
            <motion.button 
              style={styles.learnMoreButton}
              whileHover={{ scale: 1.05, backgroundColor: colors.darkMed }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Speciality Section */}
      <motion.div 
        style={styles.specialitySection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.sectionTitle}>Our Speciality</h2>
        
        <motion.div 
          style={styles.specialityCard}
          whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
        >
          <div style={styles.specialityIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM11 17H13V13H17V11H13V7H11V11H7V13H11V17Z" fill="white"/>
            </svg>
          </div>
          <div style={styles.specialityContent}>
            <h3 style={styles.specialityTitle}>Online Appointment</h3>
            <p style={styles.specialityText}>
              Book your online consultation with our specialized healthcare professionals.
              Get expert advice from the comfort of your home.
            </p>
            <motion.button 
              style={styles.appointmentButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Appointment Schedules */}
      <motion.div 
        style={styles.schedulesSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div style={styles.schedulesContent}>
          <h2 style={styles.scheduleTitle}>Appointment Schedules</h2>
          <p style={styles.scheduleText}>
            Book your appointment today and take the first step towards better health.
            Our healthcare professionals are ready to provide you with the best care.
          </p>
          <motion.button 
            style={styles.scheduleButton}
            whileHover={{ scale: 1.05, backgroundColor: colors.darkMed }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </div>
        <motion.div 
          style={styles.scheduleImage}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <img src="/art3.png" alt="Calendar" style={styles.calendarImage} />
        </motion.div>
      </motion.div>

      {/* Doctors Section */}
      <motion.div 
        style={styles.doctorsSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.sectionTitle}>Our Doctors</h2>
        
        <div style={styles.doctorsGrid}>
          {/* Doctor 1 */}
          <motion.div 
            style={styles.doctorCard}
            whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
          >
            <div style={styles.doctorImageContainer}>
              <div style={styles.doctorAvatar}></div>
            </div>
            <h3 style={styles.doctorName}>Mamman Bo</h3>
            <p style={styles.doctorSpecialty}>Cardiologist</p>
          </motion.div>

          {/* Doctor 2 */}
          <motion.div 
            style={styles.doctorCard}
            whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
          >
            <div style={styles.doctorImageContainer}>
              <div style={styles.doctorAvatar}></div>
            </div>
            <h3 style={styles.doctorName}>Boda Siana</h3>
            <p style={styles.doctorSpecialty}>Neurologist</p>
          </motion.div>

          {/* Doctor 3 */}
          <motion.div 
            style={styles.doctorCard}
            whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
          >
            <div style={styles.doctorImageContainer}>
              <div style={styles.doctorAvatar}></div>
            </div>
            <h3 style={styles.doctorName}>Yaroslav Hanna</h3>
            <p style={styles.doctorSpecialty}>Pediatrician</p>
          </motion.div>
        </div>

        <motion.button 
          style={styles.seeAllButton}
          whileHover={{ scale: 1.05, backgroundColor: colors.darkMed }}
          whileTap={{ scale: 0.95 }}
        >
          See All
        </motion.button>
      </motion.div>
    </section>
  );
};

const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.white,
    color: colors.dark,
  },
  // Hero Section
  hero: {
    display: 'flex',
    minHeight: '90vh',
    padding: '0 5%',
    backgroundColor: '#F0F7FF',
    borderBottomLeftRadius: '50px',
    borderBottomRightRadius: '50px',
    overflow: 'hidden',
    position: 'relative',
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      padding: '70px 5% 40px',
    }
  },
  heroContent: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '40px 0',
    zIndex: 2,
    '@media (max-width: 768px)': {
      padding: '20px 0',
    }
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: colors.dark,
    lineHeight: 1.2,
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
    }
  },
  heroText: {
    fontSize: '1.1rem',
    marginBottom: '30px',
    maxWidth: '600px',
    color: colors.neutral,
    lineHeight: 1.6,
  },
  heroButton: {
    backgroundColor: colors.dark,
    color: colors.text,
    border: 'none',
    padding: '12px 30px',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  heroImage: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    '@media (max-width: 768px)': {
      marginTop: '30px',
    }
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '20px',
  },
  // Features Section
  featuresContainer: {
    padding: '40px 5%',
    marginTop: '-80px',
    zIndex: 3,
    '@media (max-width: 768px)': {
      marginTop: '-40px',
    }
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    '@media (max-width: 992px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 576px)': {
      gridTemplateColumns: '1fr',
    }
  },
  featureCard: {
    borderRadius: '20px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    color: colors.text,
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    height: '100%',
  },
  featureHours: {
    backgroundColor: colors.dark,
  },
  featureAppointment: {
    backgroundColor: colors.darkMed,
  },
  featureFind: {
    backgroundColor: colors.darkMed,
  },
  featureLocations: {
    backgroundColor: colors.dark,
  },
  featureIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  featureText: {
    marginBottom: '20px',
    flex: 1,
  },
  hoursContent: {
    marginTop: '10px',
  },
  featureButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: colors.text,
    border: 'none',
    padding: '10px 20px',
    borderRadius: '30px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    marginTop: 'auto',
  },
  // Services Section
  servicesSection: {
    padding: '80px 5%',
    backgroundColor: colors.white,
  },
  sectionTitle: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '50px',
    color: colors.dark,
  },
  serviceDetail: {
    display: 'flex',
    alignItems: 'center',
    gap: '50px',
    flexWrap: 'wrap',
    '@media (max-width: 992px)': {
      flexDirection: 'column',
      gap: '30px',
    }
  },
  serviceImage: {
    flex: '1',
    minWidth: '300px',
    '@media (max-width: 992px)': {
      width: '100%',
    }
  },
  doctorImage: {
    maxWidth: '100%',
    borderRadius: '20px',
  },
  serviceContent: {
    flex: '1',
    minWidth: '300px',
  },
  serviceTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: colors.dark,
  },
  serviceText: {
    marginBottom: '30px',
    lineHeight: 1.6,
    color: colors.neutral,
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
  // Speciality Section
  specialitySection: {
    padding: '80px 5%',
    backgroundColor: '#F9FAFB',
  },
  specialityCard: {
    display: 'flex',
    backgroundColor: colors.darkMed,
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    gap: '30px',
    alignItems: 'center',
    maxWidth: '900px',
    margin: '0 auto',
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    }
  },
  specialityIcon: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  specialityContent: {
    flex: 1,
    color: colors.text,
  },
  specialityTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  specialityText: {
    marginBottom: '20px',
    lineHeight: 1.6,
  },
  appointmentButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: colors.text,
    border: 'none',
    padding: '10px 25px',
    borderRadius: '30px',
    fontSize: '0.95rem',
    cursor: 'pointer',
  },
  // Schedules Section
  schedulesSection: {
    padding: '80px 5%',
    backgroundColor: colors.white,
    display: 'flex',
    alignItems: 'center',
    gap: '50px',
    flexWrap: 'wrap',
    '@media (max-width: 992px)': {
      flexDirection: 'column-reverse',
    }
  },
  schedulesContent: {
    flex: 1,
    minWidth: '300px',
  },
  scheduleTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: colors.dark,
  },
  scheduleText: {
    marginBottom: '30px',
    lineHeight: 1.6,
    color: colors.neutral,
    maxWidth: '600px',
  },
  scheduleButton: {
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
  scheduleImage: {
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
  },
  calendarImage: {
    maxWidth: '100%',
    height: 'auto',
  },
  // Doctors Section
  doctorsSection: {
    padding: '80px 5%',
    backgroundColor: '#F9FAFB',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  doctorsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    width: '100%',
    maxWidth: '1200px',
    '@media (max-width: 992px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 576px)': {
      gridTemplateColumns: '1fr',
    }
  },
  doctorCard: {
    backgroundColor: colors.white,
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    transition: 'all 0.3s ease',
  },
  doctorImageContainer: {
    width: '100%',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    backgroundColor: colors.darkMed,
    borderRadius: '15px',
  },
  doctorAvatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  doctorName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: '5px',
  },
  doctorSpecialty: {
    color: colors.neutral,
    fontSize: '0.9rem',
  },
  seeAllButton: {
    backgroundColor: colors.dark,
    color: colors.text,
    border: 'none',
    padding: '12px 30px',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    marginTop: '40px',
  },
};

export default Home; 