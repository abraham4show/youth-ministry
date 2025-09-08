// import { Link } from "react-router-dom"
// import Navigation from "../components/navigation"
// import Footer from "../components/footer"
// import { HiUsers, HiFlag, HiHeart, HiArrowRight, HiCalendar, HiBookOpen, HiPhotograph } from "react-icons/hi"

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-green-50 via-white to-green-25 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden mt-16">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full animate-pulse"></div>
//           <div
//             className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-50 rounded-full animate-pulse"
//             style={{ animationDelay: "1s" }}
//           ></div>
//         </div>

//         <div className="max-w-7xl mx-auto text-center relative z-10">
//           <div className="mb-8 animate-fade-in">
//             <img
//               src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//               alt="Youth Leadership"
//               className="w-full max-w-4xl mx-auto rounded-lg shadow-lg hover-lift"
//             />
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
//             Leadership of the <span className="text-green-600 animate-pulse">Flock</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up animate-stagger-1">
//             Empowering young leaders through faith, community, and purpose. Join us as we grow together in leadership
//             and service.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-stagger-2">
//             <Link
//               to="/join"
//               className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-300 hover-lift pulse-glow"
//             >
//               Join Our Community
//               <HiArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>
//             <Link
//               to="/about"
//               className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 hover-lift"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Inspirational Quote */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-4xl mx-auto text-center animate-fade-in">
//           <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 animate-scale-in">
//             "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the
//             people to do the greatest things."
//           </blockquote>
//           <cite className="text-lg text-gray-600 animate-fade-in animate-stagger-1">- Ronald Reagan</cite>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Building tomorrow's leaders through timeless principles and modern approaches
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover-lift animate-bounce-in group">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
//                 <HiUsers className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:scale-110" />
//               </div>
//               <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-green-600">
//                 Community
//               </h3>
//               <p className="text-gray-600">
//                 Building strong relationships and supporting one another in our journey of faith and leadership.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover-lift animate-bounce-in animate-stagger-1 group">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
//                 <HiFlag className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:scale-110" />
//               </div>
//               <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-green-600">
//                 Purpose
//               </h3>
//               <p className="text-gray-600">
//                 Discovering and pursuing God's calling in our lives with intentionality and passion.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover-lift animate-bounce-in animate-stagger-2 group">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
//                 <HiHeart className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:scale-110" />
//               </div>
//               <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-green-600">
//                 Service
//               </h3>
//               <p className="text-gray-600">
//                 Leading through serving others and making a positive impact in our communities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Access */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Explore opportunities to grow, learn, and lead in our community
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-lg hover-lift animate-slide-up group">
//               <HiCalendar className="w-8 h-8 text-green-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
//               <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-green-600">
//                 Upcoming Events
//               </h3>
//               <p className="text-gray-600 mb-6">Join our workshops, seminars, and community gatherings</p>
//               <Link
//                 to="/events"
//                 className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 hover-lift"
//               >
//                 View Events
//                 <HiArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-lg hover-lift animate-slide-up animate-stagger-1 group">
//               <HiBookOpen className="w-8 h-8 text-green-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
//               <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-green-600">
//                 Leadership Resources
//               </h3>
//               <p className="text-gray-600 mb-6">Access articles, Bible verses, and downloadable content</p>
//               <Link
//                 to="/resources"
//                 className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 hover-lift"
//               >
//                 Explore Resources
//                 <HiArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-lg hover-lift animate-slide-up animate-stagger-2 group">
//               <HiPhotograph className="w-8 h-8 text-green-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
//               <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-green-600">
//                 Community Gallery
//               </h3>
//               <p className="text-gray-600 mb-6">See photos and videos from our past activities</p>
//               <Link
//                 to="/gallery"
//                 className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 hover-lift"
//               >
//                 View Gallery
//                 <HiArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default Home




// import { Link } from "react-router-dom";
// import Navigation from "../components/navigation";
// import Footer from "../components/footer";
// import Img3 from "../assets/img3.jpeg"

// import {
//   FaUsers,
//   FaFlag,
//   FaHeart,
//   FaArrowRight,
//   FaCalendarAlt,
//   FaBook,
//   FaPhotoVideo,
// } from "react-icons/fa";

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-green-50 via-white to-green-25 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full animate-pulse"></div>
//           <div
//             className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-50 rounded-full animate-pulse"
//             style={{ animationDelay: "1s" }}
//           ></div>
//         </div>

//         <div className="max-w-7xl mx-auto text-center relative z-10">
//           <div className="mb-8 animate-fade-in">
//             <img
//               src={Img3}
//               alt="Youth Leadership"
//               className="w-full max-w-4xl mx-auto rounded-lg shadow-lg hover-lift"
//             />
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
//             The Holy Flock Of Christ <span className="text-green-600 animate-pulse">Youth Ministry</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up animate-stagger-1">
//             Empowering young leaders through faith, community, and purpose. Join us as we grow together in leadership
//             and service.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-stagger-2">
//             <Link
//               to="/join"
//               className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-300 hover-lift pulse-glow"
//             >
//               Join Our Community
//               <FaArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>
//             <Link
//               to="/about"
//               className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 hover-lift"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Inspirational Quote */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-4xl mx-auto text-center animate-fade-in">
//           <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 animate-scale-in">
//             "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the
//             people to do the greatest things."
//           </blockquote>
//           <cite className="text-lg text-gray-600 animate-fade-in animate-stagger-1">- Ronald Reagan</cite>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Building tomorrow's leaders through timeless principles and modern approaches
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover-lift animate-bounce-in group">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
//                 <FaUsers className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:scale-110" />
//               </div>
//               <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-green-600">
//                 Community
//               </h3>
//               <p className="text-gray-600">
//                 Building strong relationships and supporting one another in our journey of faith and leadership.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover-lift animate-bounce-in animate-stagger-1 group">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
//                 <FaFlag className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:scale-110" />
//               </div>
//               <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-green-600">
//                 Purpose
//               </h3>
//               <p className="text-gray-600">
//                 Discovering and pursuing God's calling in our lives with intentionality and passion.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover-lift animate-bounce-in animate-stagger-2 group">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
//                 <FaHeart className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:scale-110" />
//               </div>
//               <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-green-600">
//                 Service
//               </h3>
//               <p className="text-gray-600">
//                 Leading through serving others and making a positive impact in our communities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Access */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Explore opportunities to grow, learn, and lead in our community
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-lg hover-lift animate-slide-up group">
//               <FaCalendarAlt className="w-8 h-8 text-green-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
//               <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-green-600">
//                 Upcoming Events
//               </h3>
//               <p className="text-gray-600 mb-6">Join our workshops, seminars, and community gatherings</p>
//               <Link
//                 to="/events"
//                 className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 hover-lift"
//               >
//                 View Events
//                 <FaArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-lg hover-lift animate-slide-up animate-stagger-1 group">
//               <FaBook className="w-8 h-8 text-green-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
//               <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-green-600">
//                 Leadership Resources
//               </h3>
//               <p className="text-gray-600 mb-6">Access articles, Bible verses, and downloadable content</p>
//               <Link
//                 to="/resources"
//                 className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 hover-lift"
//               >
//                 Explore Resources
//                 <FaArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-lg hover-lift animate-slide-up animate-stagger-2 group">
//               <FaPhotoVideo className="w-8 h-8 text-green-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
//               <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-green-600">
//                 Community Gallery
//               </h3>
//               <p className="text-gray-600 mb-6">See photos and videos from our past activities</p>
//               <Link
//                 to="/gallery"
//                 className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 hover-lift"
//               >
//                 View Gallery
//                 <FaArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;





import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Img7 from "../assets/img3.jpeg";
import Img1 from "../assets/contactHero.jpg";
import Img2 from "../assets/resoursesHero.jpg";
import Img3 from "../assets/gallery3.jpg";
import Img4 from "../assets/gallery6.jpg";

import {
  FaUsers,
  FaFlag,
  FaHeart,
  FaArrowRight,
  FaCalendarAlt,
  FaBook,
  FaPhotoVideo,
} from "react-icons/fa";

// HeroSection Component
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array of hero images for the carousel
  const heroImages = [Img1, Img2, Img3, Img4, Img7];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              // Remove fixed attachment for mobile
              backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
            }}
          ></div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-2 md:px-6">
          Welcome to The Holy Flock of Christ{" "}
          <span className="text-green-500 animate-pulse"> Youth Ministry</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-200 mb-4 md:mb-6">
          We are a vibrant, Christ-centered youth community passionate about
          raising leaders who influence their world with Godly values.
        </p>
        <blockquote className="italic text-lg sm:text-xl text-green-400 font-semibold mb-6 md:mb-10">
          2 Timothy 2:22 — "So flee youthful passions and pursue righteousness,
          faith, love, and peace, along with those who call on the Lord from a
          pure heart."
        </blockquote>
        <Link
          to="/about"
          className="inline-block px-5 py-2 md:px-6 md:py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
        >
          Learn More About Us
        </Link>
      </div>

      {/* Navigation dots (optional) */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-green-500 scale-125" : "bg-white/60"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

// The rest of your Home component remains the same...

// Home Page
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Use the HeroSection component */}
      <HeroSection />

      {/* Inspirational Quote */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 animate-scale-in">
            "The greatest leader is not necessarily the one who does the
            greatest things. He is the one that gets the people to do the
            greatest things."
          </blockquote>
          <cite className="text-lg text-gray-600 animate-fade-in">
            - Ronald Reagan
          </cite>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building tomorrow's leaders through timeless principles and modern
              approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover-lift animate-bounce-in group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                <FaUsers className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-green-600">
                Community
              </h3>
              <p className="text-gray-600">
                Building strong relationships and supporting one another in our
                journey of faith and leadership.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover-lift animate-bounce-in group" style={{animationDelay: "0.2s"}}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                <FaFlag className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-green-600">
                Purpose
              </h3>
              <p className="text-gray-600">
                Discovering and pursuing God's calling in our lives with
                intentionality and passion.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover-lift animate-bounce-in group" style={{animationDelay: "0.4s"}}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                <FaHeart className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-green-600">
                Service
              </h3>
              <p className="text-gray-600">
                Leading through serving others and making a positive impact in
                our communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Involved
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to grow, learn, and lead in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift animate-slide-up group">
              <FaCalendarAlt className="w-8 h-8 text-green-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-green-600">
                Upcoming Events
              </h3>
              <p className="text-gray-600 mb-6">
                Join our workshops, seminars, and community gatherings
              </p>
              <Link
                to="/events"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 hover-lift"
              >
                View Events
                <FaArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift animate-slide-up group" style={{animationDelay: "0.2s"}}>
              <FaBook className="w-8 h-8 text-green-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-green-600">
                Leadership Resources
              </h3>
              <p className="text-gray-600 mb-6">
                Access articles, Bible verses, and downloadable content
              </p>
              <Link
                to="/resources"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 hover-lift"
              >
                Explore Resources
                <FaArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift animate-slide-up group" style={{animationDelay: "0.4s"}}>
              <FaPhotoVideo className="w-8 h-8 text-green-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-green-600">
                Community Gallery
              </h3>
              <p className="text-gray-600 mb-6">
                See photos and videos from our past activities
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 hover-lift"
              >
                View Gallery
                <FaArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;