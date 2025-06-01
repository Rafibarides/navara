import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import colors from '../colors';

const TopNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(''); // Initialize with empty or derive from location
  const location = useLocation();

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    // Let Services dropdown stay open if a sub-link is clicked,
    // but close if a main nav link is clicked.
    // This specific handleLinkClick is for main items, so close services.
    setIsServicesOpen(false);
  };

  const handleServiceLinkClick = () => {
    setIsMenuOpen(false); // Close mobile menu
    // setIsServicesOpen(false); // Keep services dropdown open for sub-navigation if preferred
  };

  // Toggle services dropdown
  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  // Update active section based on URL path and hash
  useEffect(() => {
    const pathname = location.pathname;
    const hash = location.hash.replace('#', '');

    if (pathname === '/') {
      setActiveSection(hash || 'home');
    } else if (pathname === '/services') {
      setActiveSection(hash || 'services'); // 'services' if no hash, else the specific section
    } else if (pathname === '/about') {
      setActiveSection('about');
    } else if (pathname === '/contact') {
      setActiveSection('contact');
    } else {
      // Fallback or default active section if path is not recognized
      setActiveSection('');
    }
  }, [location]);

  // Smooth scroll to section when hash changes
  useEffect(() => {
    if (location.pathname === '/services' && location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/' && location.hash === '#home') {
        // Optional: smooth scroll to top for home if #home is explicitly linked
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
    <nav style={styles.navbar}>
      {/* Logo positioned absolutely at top left */}
      <div style={styles.logoContainer}>
        <Link to="/" onClick={handleLinkClick}>
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
            to="/"
            style={{
              ...styles.navLink,
              ...(activeSection === 'home' || (location.pathname === '/' && !location.hash) ? styles.activeLink : {})
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
                ...(location.pathname === '/services' ? styles.activeLink : {})
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
                to="/services#diagnostics"
                style={styles.dropdownLink}
                onClick={handleServiceLinkClick} // Use specific handler if needed
              >
                Diagnostics
              </Link>
              <Link 
                to="/services#pathways" // Note: ID 'pathways' might not exist yet in Services.jsx
                style={styles.dropdownLink}
                onClick={handleServiceLinkClick}
              >
                Pathways
              </Link>
              <Link 
                to="/services#behavior-mastery" // Matching the ID in Services.jsx
                style={styles.dropdownLink}
                onClick={handleServiceLinkClick}
              >
                Behavior Mastery Program
              </Link>
            </div>
          </div>

          <Link 
            to="/about"
            style={{
              ...styles.navLink,
              ...(activeSection === 'about' ? styles.activeLink : {})
            }}
            onClick={handleLinkClick}
          >
            About
          </Link>
          
          <Link 
            to="/contact"
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
    // mixBlendMode: 'multiply', // Keep if it looks good on the new background
    objectFit: 'contain',
  },
  navPill: {
    backgroundColor: colors.navBarBackground, // Glass background
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)', // Safari
    borderRadius: '50px', // Full pill shape
    border: `1px solid ${colors.glassBorder}`,
    display: 'flex',
    justifyContent: 'center', // Center the nav items
    alignItems: 'center',
    padding: '0.5rem 1.5rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', // Adjusted shadow for glass
    maxWidth: '600px', // Limit width for better appearance
    margin: '0 auto', // Center the pill
  },
  menuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: colors.navBarText, // Use new navbar text color
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  },
  navLink: {
    color: colors.navBarText, // Use new navbar text color
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    margin: '0 0.25rem',
    borderRadius: '50px', // Pill-shaped buttons
    transition: 'background-color 0.3s ease, color 0.3s ease',
    cursor: 'pointer',
    border: '1px solid transparent', // Prepare for hover/active border
  },
  activeLink: {
    backgroundColor: colors.navBarHoverBkg, // Subtle background for active
    color: colors.navBarActiveText, // Distinct active text color
    // border: `1px solid ${colors.navBarActiveText}`, // Optional: border for active
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
    top: 'calc(100% + 0.5rem)', // Ensure a little space
    left: 0,
    backgroundColor: colors.navBarBackground, // Glass background for dropdown
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)', // Safari
    border: `1px solid ${colors.glassBorder}`,
    borderRadius: '15px', // Rounded corners for dropdown
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', // Adjusted shadow
    minWidth: '220px', // Adjusted minWidth
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    // marginTop: '0.5rem', // Handled by top calc
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
    color: colors.navBarText, // Use new navbar text color
    textDecoration: 'none',
    padding: '0.75rem 1.25rem', // Adjusted padding
    transition: 'background-color 0.3s ease, color 0.3s ease',
    ':hover': { // Explicit hover style for dropdown items
      backgroundColor: colors.navBarHoverBkg,
      color: colors.navBarActiveText,
    }
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
  styles.navLinks.top = 'calc(100% + 0.5rem)'; // Position below the pill
  styles.navLinks.right = 0;
  // Glassmorphism for mobile dropdown menu
  styles.navLinks.backgroundColor = colors.navBarBackground;
  styles.navLinks.backdropFilter = 'blur(10px)';
  styles.navLinks.WebkitBackdropFilter = 'blur(10px)';
  styles.navLinks.border = `1px solid ${colors.glassBorder}`;
  styles.navLinks.width = '200px';
  styles.navLinks.padding = '1rem';
  styles.navLinks.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  styles.navLinks.borderRadius = '15px';
  // styles.navLinks.marginTop = '0.5rem'; // Handled by top calc
  styles.navLinksOpen.display = 'flex';
  styles.navLinksClosed.display = 'none';
  styles.dropdownMenu.position = 'relative';
  styles.dropdownMenu.boxShadow = 'none';
  styles.dropdownMenu.width = '100%';
  styles.dropdownLink.paddingLeft = '2rem';
}

export default TopNavBar;
