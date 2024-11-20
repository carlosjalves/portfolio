import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';

import About from './routes/About/About';
import Work from './routes/Work/Work';
import Project from './routes/Work/Project';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeSetup } from "./styles/theme";
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <Box sx={{
      margin: "0 30px",
      letterSpacing: "normal"
    }}>
      <ThemeSetup>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Work />} />
            <Route path="/:slug" element={<Project />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeSetup>
    </Box>
  );
}

export default App;
