// import Navigation from "../components/navigation"
// import Footer from "../components/footer"

// const Gallery = () => {
//   const galleryItems = [
//     {
//       id: 1,
//       type: "image",
//       src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       alt: "Youth Leadership Workshop",
//       title: "Leadership Workshop 2024",
//     },
//     {
//       id: 2,
//       type: "image",
//       src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       alt: "Community Service Day",
//       title: "Community Service Day",
//     },
//     {
//       id: 3,
//       type: "image",
//       src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       alt: "Prayer Night",
//       title: "Youth Prayer Night",
//     },
//     {
//       id: 4,
//       type: "image",
//       src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       alt: "Team Building",
//       title: "Team Building Activities",
//     },
//     {
//       id: 5,
//       type: "image",
//       src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       alt: "Bible Study",
//       title: "Weekly Bible Study",
//     },
//     {
//       id: 6,
//       type: "image",
//       src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       alt: "Youth Conference",
//       title: "Annual Youth Conference",
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />

//       <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Community Gallery</h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               See photos and videos from our past youth activities, workshops, and community events.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {galleryItems.map((item, index) => (
//               <div
//                 key={item.id}
//                 className={`group cursor-pointer animate-bounce-in ${index > 0 ? `animate-stagger-${Math.min(index, 3)}` : ""}`}
//               >
//                 <div className="relative overflow-hidden rounded-lg shadow-lg hover-lift">
//                   <img
//                     src={item.src || "/placeholder.svg"}
//                     alt={item.alt}
//                     className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
//                     <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <h3 className="text-lg font-semibold">{item.title}</h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12 animate-fade-in">
//             <p className="text-gray-600 mb-6">
//               Want to see more photos or share your own? Follow us on social media or contact us directly.
//             </p>
//             <div className="flex justify-center space-x-4">
//               <a href="#" className="text-green-600 hover:text-green-700 transition-colors duration-300">
//                 Facebook
//               </a>
//               <a href="#" className="text-green-600 hover:text-green-700 transition-colors duration-300">
//                 Instagram
//               </a>
//               <a href="#" className="text-green-600 hover:text-green-700 transition-colors duration-300">
//                 YouTube
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }

// export default Gallery





      // src/pages/EventsPage.jsx
import React from "react";
import Img3 from "../assets/img3.jpeg";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

//  Navigation component
<Navigation/>


export default function EventsPage() {
  
   const upcomingEvents = [
  {
    id: 1,
    title: "2025 ANNUAL CONVENTION - OPEN AIR SERVICE",
    date: "Thursday, 4th December 2025",
    time: "5:00 PM",
    location: "Amute Playing Ground, Lagos",
    description:
      "DIVINE SERVICE & THANKSGIVING. Preacher: Ven. J. O. Bailey (Hqtrs).",
    category: "Convention",
    spots: "Open to all",
  },
  {
    id: 2,
    title: "2025 ANNUAL CONVENTION - OPEN AIR SERVICE",
    date: "Sunday, 7th December 2025",
    time: "3:00 PM",
    location: "Adeniji Adele Phase 2 Car Park",
    description:
      "Preacher: Snr. Supt. Pastor E. O. Oyelana (Irolu).",
    category: "Convention",
    spots: "Open to all",
  },
  {
    id: 3,
    title: "2025 ANNUAL CONVENTION - OPEN AIR SERVICE",
    date: "Thursday, 11th December 2025",
    time: "5:00 PM",
    location: "Evans Square Playground",
    description:
      "Preacher: Pastor Muyiwa Ojo (Ijeshatedo).",
    category: "Convention",
    spots: "Open to all",
  },
  {
    id: 4,
    title: "2025 ANNUAL CONVENTION - REVIVAL THANKSGIVING SERVICE",
    date: "Sunday, 14th December 2025",
    time: "10:00 AM",
    location: "House of Prayer, 45 Okepopo Street, Lagos",
    description:
      "Preacher: Ven. Olawale Tubi (Hqtrs).",
    category: "Thanksgiving",
    spots: "Open to all",
  },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

            {/* ✅ Fullscreen background hero */}
    <section
            className="relative h-screen flex items-center justify-center text-center"
            style={{
              backgroundImage: `url(${Img3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Title */}
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Upcoming Events</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join us for workshops, seminars, and community gatherings designed
            to develop your leadership skills and deepen your faith.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                    {event.category}
                  </span>
                  <span className="text-sm text-gray-500">{event.spots}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <FaClock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Link to="/join" className="w-full flex justify-center items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition">
                  Register Now <FaArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <FaUsers className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Don't Miss Out!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with our latest events and leadership opportunities.
            Join our community to receive notifications about upcoming programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Join Our Community
            </button>
            <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



 
