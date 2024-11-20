import './App.css';
import { Routes, Route } from "react-router-dom";
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
        <Navbar />
        <Routes>
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio" element={<Work />} />
          <Route path="/portfolio/:slug" element={<Project />} />
        </Routes>
        <Footer />
      </ThemeSetup>
    </Box>
  );
}

export default App;
