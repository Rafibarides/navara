import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router basename="/navara">
      <div style={styles.app}>
        <TopNavBar />
        <div style={styles.content}>
          <Home />
          <Services />
          <About />
          <Contact />
        </div>
        <Routes>
          <Route path="/" element={null} />
          <Route path="*" element={null} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#F9FAFB',
  },
  content: {
    paddingTop: '70px', // Adjust based on navbar height
  }
};

export default App;
