// import Navigation from "../components/navigation"
// import Footer from "../components/footer"
// import { HiBookOpen, HiDownload, HiHeart, HiLightBulb } from "react-icons/hi"

// const Resources = () => {
//   const resources = [
//     {
//       id: 1,
//       title: "Leadership Principles for Young Leaders",
//       type: "Article",
//       description: "Essential principles every young leader should know and practice.",
//       downloadUrl: "#",
//       icon: HiLightBulb,
//     },
//     {
//       id: 2,
//       title: "Bible Verses for Leadership",
//       type: "PDF Guide",
//       description: "A collection of inspiring Bible verses about leadership and service.",
//       downloadUrl: "#",
//       icon: HiHeart,
//     },
//     {
//       id: 3,
//       title: "Servant Leadership Workbook",
//       type: "Workbook",
//       description: "Interactive exercises to develop your servant leadership skills.",
//       downloadUrl: "#",
//       icon: HiBookOpen,
//     },
//   ]

//   const bibleVerses = [
//     {
//       verse: "But among you it will be different. Whoever wants to be a leader among you must be your servant.",
//       reference: "Matthew 20:26 (NLT)",
//     },
//     {
//       verse:
//         "Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.",
//       reference: "1 Timothy 4:12 (NIV)",
//     },
//     {
//       verse:
//         "For even the Son of Man came not to be served but to serve others and to give his life as a ransom for many.",
//       reference: "Mark 10:45 (NLT)",
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />

//       <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Leadership Resources</h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Access articles, Bible verses, and downloadable content to support your leadership journey.
//             </p>
//           </div>

//           {/* Downloadable Resources */}
//           <div className="mb-16">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-slide-up">Downloadable Resources</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {resources.map((resource, index) => {
//                 const IconComponent = resource.icon
//                 return (
//                   <div
//                     key={resource.id}
//                     className={`bg-white p-6 rounded-lg shadow-lg hover-lift animate-bounce-in ${index > 0 ? `animate-stagger-${index}` : ""} group`}
//                   >
//                     <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
//                       <IconComponent className="w-6 h-6 text-green-600" />
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
//                     <p className="text-sm text-green-600 mb-3">{resource.type}</p>
//                     <p className="text-gray-600 mb-4">{resource.description}</p>
//                     <a
//                       href={resource.downloadUrl}
//                       className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors duration-300"
//                     >
//                       <HiDownload className="w-4 h-4 mr-2" />
//                       Download
//                     </a>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>

//           {/* Bible Verses */}
//           <div className="mb-16">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-slide-up">Inspirational Bible Verses</h2>
//             <div className="space-y-8">
//               {bibleVerses.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`bg-green-50 p-8 rounded-lg animate-fade-in ${index > 0 ? `animate-stagger-${index}` : ""}`}
//                 >
//                   <blockquote className="text-lg md:text-xl text-gray-700 mb-4 italic">"{item.verse}"</blockquote>
//                   <cite className="text-green-600 font-medium">- {item.reference}</cite>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Leadership Tips */}
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-slide-up">Leadership Tips</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="animate-slide-up">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">Listen More Than You Speak</h3>
//                 <p className="text-gray-600">
//                   Great leaders are great listeners. Take time to understand others' perspectives before sharing your
//                   own.
//                 </p>
//               </div>
//               <div className="animate-slide-up animate-stagger-1">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">Lead by Example</h3>
//                 <p className="text-gray-600">
//                   Your actions speak louder than your words. Model the behavior you want to see in others.
//                 </p>
//               </div>
//               <div className="animate-slide-up animate-stagger-2">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">Embrace Humility</h3>
//                 <p className="text-gray-600">
//                   True leadership comes from a place of humility and service, not from a desire for power or
//                   recognition.
//                 </p>
//               </div>
//               <div className="animate-slide-up animate-stagger-3">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">Never Stop Learning</h3>
//                 <p className="text-gray-600">
//                   Great leaders are lifelong learners. Stay curious and open to new ideas and perspectives.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }

// export default Resources




import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { FaBookOpen, FaDownload, FaHeart, FaLightbulb,FaMusic } from "react-icons/fa"
import Img3 from "../assets/resoursesHero.jpg" // ✅ reuse same background image

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "Hymn Book App",
      type: "Mobile App",
      description: "Download our official Hymn Book app from the Google Play Store.",
      downloadUrl: "https://play.google.com/store/apps/details?id=com.hfc.eministry&hl=en",
      icon: FaMusic,
    },
    {
      id: 2,
      title: "Bible Verses for Leadership",
      type: "PDF Guide",
      description: "A collection of inspiring Bible verses about leadership and service.",
      downloadUrl: "#",
      icon: FaHeart,
    },
    {
      id: 3,
      title: "Servant Leadership Workbook",
      type: "Workbook",
      description: "Interactive exercises to develop your servant leadership skills.",
      downloadUrl: "#",
      icon: FaBookOpen,
    },
  ]

  const bibleVerses = [
    {
      verse: "But among you it will be different. Whoever wants to be a leader among you must be your servant.",
      reference: "Matthew 20:26 (NLT)",
    },
    {
      verse:
        "Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.",
      reference: "1 Timothy 4:12 (NIV)",
    },
    {
      verse:
        "For even the Son of Man came not to be served but to serve others and to give his life as a ransom for many.",
      reference: "Mark 10:45 (NLT)",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Title content */}
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Leadership Resources</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Access articles, Bible verses, and downloadable content to support your leadership journey.
          </p>
        </div>
      </section>

      {/* Content sections */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Downloadable Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-slide-up">Downloadable Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon
                return (
                  <div
                    key={resource.id}
                    className={`bg-white p-6 rounded-lg shadow-lg hover-lift animate-bounce-in ${
                      index > 0 ? `animate-stagger-${index}` : ""
                    } group`}
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-sm text-green-600 mb-3">{resource.type}</p>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <a
                      href={resource.downloadUrl}
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors duration-300"
                    >
                      <FaDownload className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Bible Verses */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-slide-up">Inspirational Bible Verses</h2>
            <div className="space-y-8">
              {bibleVerses.map((item, index) => (
                <div
                  key={index}
                  className={`bg-green-50 p-8 rounded-lg animate-fade-in ${
                    index > 0 ? `animate-stagger-${index}` : ""
                  }`}
                >
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-4 italic">"{item.verse}"</blockquote>
                  <cite className="text-green-600 font-medium">- {item.reference}</cite>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Tips */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-slide-up">Leadership Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-slide-up">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Listen More Than You Speak</h3>
                <p className="text-gray-600">
                  Great leaders are great listeners. Take time to understand others' perspectives before sharing your
                  own.
                </p>
              </div>
              <div className="animate-slide-up animate-stagger-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lead by Example</h3>
                <p className="text-gray-600">
                  Your actions speak louder than your words. Model the behavior you want to see in others.
                </p>
              </div>
              <div className="animate-slide-up animate-stagger-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Embrace Humility</h3>
                <p className="text-gray-600">
                  True leadership comes from a place of humility and service, not from a desire for power or
                  recognition.
                </p>
              </div>
              <div className="animate-slide-up animate-stagger-3">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Never Stop Learning</h3>
                <p className="text-gray-600">
                  Great leaders are lifelong learners. Stay curious and open to new ideas and perspectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Resources

