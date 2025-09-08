// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/HomePage";
// import About from "./Pages/AboutPage";
// import Events from "./Pages/events";
// import Resources from "./Pages/ResourcesPage";
// import Gallery from "./Pages/gallery";
// import Contact from "./Pages/ContactPage";
// import Join from "./Pages/joinUsPage";
// import Blog from "./Pages/Blogs";
// import Impact from "./Pages/Impact";
// import Testimonies from "./Pages/Testimonies";
// import Leadership from "./Pages/Leadership";



// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/resources" element={<Resources />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/join" element={<Join />} />
//            <Route path="/blog" element={<Blog />} />
//            <Route path="/impact" element={<Impact />} />
//            <Route path="/testimonies" element={<Testimonies />} />
//            <Route path="/leadership" element={<Leadership />} />

//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;






import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
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
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to check if all images are loaded
    const checkImagesLoaded = () => {
      const images = document.images;
      let loadedCount = 0;
      const totalCount = images.length;

      if (totalCount === 0) {
        setLoading(false);
        return;
      }

      // Check each image
      const imageLoaded = () => {
        loadedCount++;
        if (loadedCount === totalCount) {
          setLoading(false);
        }
      };

      for (let i = 0; i < totalCount; i++) {
        const img = images[i];
        if (img.complete) {
          loadedCount++;
        } else {
          img.addEventListener("load", imageLoaded);
          img.addEventListener("error", imageLoaded); // Also count errors as loaded
        }
      }

      if (loadedCount === totalCount) {
        setLoading(false);
      }
    };

    // Check images when component mounts
    checkImagesLoaded();

    // Also check on window load
    window.addEventListener("load", checkImagesLoaded);

    return () => {
      window.removeEventListener("load", checkImagesLoaded);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        {loading && <Loader />}
        <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
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
      </div>
    </Router>
  );
}

export default App;