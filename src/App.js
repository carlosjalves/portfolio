import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './routes/About/About';
import Work from './routes/Work/Work';
import Project from './routes/Work/Project';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeSetup } from "./styles/theme";
import 'react-photo-view/dist/react-photo-view.css';

function App() {


  return (
    <div className="App">
      <ThemeSetup>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Work />} />
            <Route path="/:slug" element={<Project />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeSetup>
    </div>
  );
}

export default App;
