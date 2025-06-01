import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import colors from '../colors';

const TopNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  // Toggle services dropdown
  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  // Update active section based on URL hash
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
    } else {
      setActiveSection('home');
    }
  }, [location]);

  // Smooth scroll to section when hash changes
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <nav style={styles.navbar}>
      {/* Logo positioned absolutely at top left */}
      <div style={styles.logoContainer}>
        <Link to="/#home" onClick={handleLinkClick}>
          <img 
            src="/Logo.png" 
            alt="Navara Logo" 
            style={styles.logo}
            className="logo-multiply" 
          />
        </Link>
      </div>

      {/* Centered pill-shaped navigation bar */}
      <div style={styles.navPill}>
        {/* Mobile menu button */}
        <button 
          style={styles.menuButton} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Navigation links */}
        <div style={{
          ...styles.navLinks,
          ...(isMenuOpen ? styles.navLinksOpen : styles.navLinksClosed)
        }}>
          <Link 
            to="/#home" 
            style={{
              ...styles.navLink,
              ...(activeSection === 'home' ? styles.activeLink : {})
            }}
            onClick={handleLinkClick}
          >
            Home
          </Link>

          {/* Services dropdown */}
          <div style={styles.dropdownContainer}>
            <button 
              style={{
                ...styles.navLink,
                ...styles.dropdownButton,
                ...(activeSection === 'services' || 
                   activeSection === 'diagnostics' || 
                   activeSection === 'pathways' || 
                   activeSection === 'behavior-mastery-program' 
                  ? styles.activeLink : {})
              }}
              onClick={toggleServices}
            >
              Services 
              <FontAwesomeIcon 
                icon={isServicesOpen ? faChevronUp : faChevronDown} 
                style={styles.dropdownIcon} 
              />
            </button>
            
            {/* Dropdown menu */}
            <div style={{
              ...styles.dropdownMenu,
              ...(isServicesOpen ? styles.dropdownMenuOpen : styles.dropdownMenuClosed)
            }}>
              <Link 
                to="/#diagnostics" 
                style={styles.dropdownLink}
                onClick={handleLinkClick}
              >
                Diagnostics
              </Link>
              <Link 
                to="/#pathways" 
                style={styles.dropdownLink}
                onClick={handleLinkClick}
              >
                Pathways
              </Link>
              <Link 
                to="/#behavior-mastery-program" 
                style={styles.dropdownLink}
                onClick={handleLinkClick}
              >
                Behavior Mastery Program
              </Link>
            </div>
          </div>

          <Link 
            to="/#about" 
            style={{
              ...styles.navLink,
              ...(activeSection === 'about' ? styles.activeLink : {})
            }}
            onClick={handleLinkClick}
          >
            About
          </Link>
          
          <Link 
            to="/#contact" 
            style={{
              ...styles.navLink,
              ...(activeSection === 'contact' ? styles.activeLink : {})
            }}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  logoContainer: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    zIndex: 1001,
  },
  logo: {
    height: '50px',
    mixBlendMode: 'multiply',
    objectFit: 'contain',
    filter: 'brightness(1)',
  },
  navPill: {
    backgroundColor: colors.dark,
    borderRadius: '50px', // Full pill shape
    display: 'flex',
    justifyContent: 'center', // Center the nav items
    alignItems: 'center',
    padding: '0.5rem 1.5rem',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px', // Limit width for better appearance
    margin: '0 auto', // Center the pill
  },
  menuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: colors.text,
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  },
  navLink: {
    color: colors.text,
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    margin: '0 0.25rem',
    borderRadius: '50px', // Pill-shaped buttons
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
  },
  activeLink: {
    backgroundColor: colors.darkMed,
    color: colors.accent,
  },
  dropdownContainer: {
    position: 'relative',
  },
  dropdownButton: {
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    fontSize: '1rem',
    fontFamily: 'inherit',
  },
  dropdownIcon: {
    marginLeft: '0.5rem',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: colors.darkMed,
    borderRadius: '15px', // Rounded corners for dropdown
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    minWidth: '200px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    marginTop: '0.5rem',
    zIndex: 1002,
  },
  dropdownMenuOpen: {
    maxHeight: '500px',
    opacity: 1,
  },
  dropdownMenuClosed: {
    maxHeight: '0',
    opacity: 0,
    pointerEvents: 'none',
  },
  dropdownLink: {
    display: 'block',
    color: colors.text,
    textDecoration: 'none',
    padding: '0.75rem 1rem',
    transition: 'background-color 0.3s ease',
  },
  // Media queries for responsive design
  navLinksOpen: {
    display: 'flex',
  },
  navLinksClosed: {
    display: 'flex',
  },
};

// Add media query styles
if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
  styles.menuButton.display = 'block';
  styles.navPill.justifyContent = 'space-between';
  styles.navLinks.flexDirection = 'column';
  styles.navLinks.alignItems = 'flex-start';
  styles.navLinks.position = 'absolute';
  styles.navLinks.top = '100%';
  styles.navLinks.right = 0;
  styles.navLinks.backgroundColor = colors.dark;
  styles.navLinks.width = '200px';
  styles.navLinks.padding = '1rem';
  styles.navLinks.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  styles.navLinks.borderRadius = '15px';
  styles.navLinks.marginTop = '0.5rem';
  styles.navLinksOpen.display = 'flex';
  styles.navLinksClosed.display = 'none';
  styles.dropdownMenu.position = 'relative';
  styles.dropdownMenu.boxShadow = 'none';
  styles.dropdownMenu.width = '100%';
  styles.dropdownLink.paddingLeft = '2rem';
}

export default TopNavBar;
