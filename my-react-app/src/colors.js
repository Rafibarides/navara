const colors = {
  // Core Palette for Glassmorphism
  primary: '#333333', // Dark grey for main text
  secondary: '#4A90E2', // A muted, clear blue as an accent
  background: '#F0F4F8', // Light, slightly desaturated cool grey-blue for site background
  glassBkg: 'rgba(255, 255, 255, 0.65)', // Semi-transparent white for glass elements
  glassBorder: 'rgba(255, 255, 255, 0.3)', // Lighter border for glass elements
  textLight: '#FFFFFF', // Pure white for text on dark/glassy backgrounds
  textDark: '#2c3e50',  // Dark slate blue for text on light backgrounds

  // Specific UI Elements
  navBarBackground: 'rgba(44, 62, 80, 0.8)', // Darker, semi-transparent for navbar glass
  navBarText: '#ECF0F1', // Light text for navbar
  navBarActiveText: '#5DADE2', // Brighter blue for active nav link
  navBarHoverBkg: 'rgba(255, 255, 255, 0.1)', // Subtle hover for nav items

  // Status & Alerts (optional, but good to have)
  success: '#2ECC71',
  warning: '#F39C12',
  error: '#E74C3C',

  // Keeping some of the old placeholders for now, can be cleaned up later
  // These might be used by components not yet themed.
  dark: '#1A2A40',    // Deep blue
  darkMed: '#1B3B62', // Medium blue
  accent: '#CBD9C5',  // Soft green (can be replaced by 'secondary' or a new accent)
  neutral: '#595959', // Gray (can be replaced by 'primary' or 'textDark')
  white: '#FFFFFF',   // White (use textLight or part of glassBkg)
  lightGray: '#d3d3d3', // For subtle borders or dividers
  light: '#f8f9fa'     // For non-glass card backgrounds or alternate page backgrounds
};

export default colors;