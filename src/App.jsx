import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Events from "./Pages/events";
import Resources from "./Pages/ResourcesPage";
import Gallery from "./Pages/gallery";
import Contact from "./Pages/ContactPage";
import Join from "./Pages/joinUsPage";
import Blog from "./Pages/Blogs";
import Impact from "./Pages/Impact";
import Testimonies from "./Pages/Testimonies";
import Leadership from "./Pages/Leadership";



function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
           <Route path="/blog" element={<Blog />} />
           <Route path="/impact" element={<Impact />} />
           <Route path="/testimonies" element={<Testimonies />} />
           <Route path="/leadership" element={<Leadership />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
