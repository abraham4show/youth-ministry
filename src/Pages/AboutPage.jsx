// import Navigation from "../components/navigation"
// import Footer from "../components/footer"
// import { HiUsers, HiFlag, HiHeart, HiLightBulb } from "react-icons/hi"

// const About = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />

//       <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Leadership of the Flock</h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Empowering the next generation of Christian leaders through faith-based development and community
//               engagement.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//             <div className="animate-slide-up">
//               <img
//                 src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//                 alt="Youth Ministry"
//                 className="w-full rounded-lg shadow-lg hover-lift"
//               />
//             </div>
//             <div className="animate-slide-up animate-stagger-1">
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
//               <p className="text-gray-600 mb-6">
//                 To develop young Christian leaders who will impact their communities and the world through servant
//                 leadership, biblical principles, and authentic relationships. We believe that every young person has the
//                 potential to lead and make a difference in God's kingdom.
//               </p>
//               <p className="text-gray-600">
//                 Through mentorship, training, and practical experience, we equip youth with the tools they need to
//                 become effective leaders in their churches, schools, and communities.
//               </p>
//             </div>
//           </div>

//           <div className="mb-16 animate-fade-in">
//             <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Vision</h2>
//             <div className="bg-green-50 p-8 rounded-lg">
//               <p className="text-lg text-gray-700 text-center italic">
//                 "To see a generation of young leaders who are passionate about God, committed to excellence, and
//                 dedicated to serving others with integrity and love."
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//             <div className="text-center animate-bounce-in group">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
//                 <HiUsers className="w-8 h-8 text-green-600" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Community</h3>
//               <p className="text-gray-600">Building lasting relationships</p>
//             </div>
//             <div className="text-center animate-bounce-in animate-stagger-1 group">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
//                 <HiFlag className="w-8 h-8 text-green-600" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Purpose</h3>
//               <p className="text-gray-600">Discovering God's calling</p>
//             </div>
//             <div className="text-center animate-bounce-in animate-stagger-2 group">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
//                 <HiHeart className="w-8 h-8 text-green-600" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Service</h3>
//               <p className="text-gray-600">Leading through serving</p>
//             </div>
//             <div className="text-center animate-bounce-in animate-stagger-3 group">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
//                 <HiLightBulb className="w-8 h-8 text-green-600" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Growth</h3>
//               <p className="text-gray-600">Continuous development</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }

// export default About




import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { FaUsers, FaFlag, FaHeart, FaLightbulb } from "react-icons/fa"
import Img8 from "../assets/img8.jpg"
import Img7 from "../assets/img7.jpg"

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Fullscreen Hero Section */}
     <section
             className="relative h-screen flex items-center justify-center text-center"
             style={{
               backgroundImage: `url(${Img7})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundAttachment: "fixed",
             }}
           > 
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text content */}
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Leadership of the Flock
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Empowering the next generation of Christian leaders through
            faith-based development and community engagement.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-slide-up">
              <img
                src={Img8}
                alt="Youth Ministry"
                className="w-full rounded-lg shadow-lg hover-lift"
              />
            </div>
            <div className="animate-slide-up animate-stagger-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
               Our mission is to provide a spirit-filled, dynamic and supportive environment where young people can explore their faith, develop their gifts, and build meaningful relationships with others. We aim to empower our youth to become leaders, servants, and ambassadors of Christ in their families, work place, schools, communities, and beyond.
              </p>
              <p className="text-gray-600">
                Through mentorship, training, and practical experience, we equip
                youth with the tools they need to become effective leaders in
                their churches, schools, and communities.
              </p>
            </div>
          </div>

          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Vision
            </h2>
            <div className="bg-green-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 text-center italic">
                "Our vision is to equip and empower the next generation of leaders to know, love and serve God. People who are passionate about their faith, committed to their stewardship, and equipped to make a difference in the world."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center animate-bounce-in group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                <FaUsers className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Building lasting relationships</p>
            </div>
            <div className="text-center animate-bounce-in animate-stagger-1 group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                <FaFlag className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Purpose</h3>
              <p className="text-gray-600">Discovering God's calling</p>
            </div>
            <div className="text-center animate-bounce-in animate-stagger-2 group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                <FaHeart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Service</h3>
              <p className="text-gray-600">Leading through serving</p>
            </div>
            <div className="text-center animate-bounce-in animate-stagger-3 group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                <FaLightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="text-gray-600">Continuous development</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About

