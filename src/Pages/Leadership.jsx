import { Link } from "react-router-dom"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { FaEnvelope, FaPhone, FaGraduationCap, FaHeart } from "react-icons/fa"
import Img3 from "../assets/img3.jpeg"
import img2 from "../assets/leadership1.jpg"
import img3 from "../assets/leadership2.jpg"
import img4 from "../assets/mrbola.jpeg"


const Leadership = () => {
  const leaders = [
    // {
    //   id: 1,
    //   name: "Pastor Michael Rodriguez",
    //   title: "Youth Pastor & Director",
    //   bio: "Pastor Michael has been leading youth ministry for over 8 years. He's passionate about developing young leaders and helping them discover their God-given purpose. He holds a Master's in Youth Ministry and loves mentoring the next generation.",
    //   image: img2,
    //   email: "michael@leadershipflock.org",
    //   phone: "(555) 123-4567",
    //   specialties: ["Leadership Development", "Biblical Teaching", "Mentorship"],
    // },
{
  id: 4,
  name: "Most Venerable Bola Osinbowale",
  title: "Spiritual Leader",
  bio: `Most Venerable Bola Osinbowale was born on 26th February 1942 to the late Most Venerable J. O. Osinbowale, former Spiritual Leader of the Holy Flock of Christ, and Mrs. Dorcas Olayinka Osinbowale (née Adesanya), a Deaconess of the Church.

Educated at St. James’s School Okebola, Children’s Home School Ibadan, King’s College Lagos, and Ibadan Grammar School, he excelled academically and later pursued further studies in the United Kingdom. A gifted sportsman, he represented Nigeria in international tournaments and became a respected expert in sports facility construction.

A lifelong member of Ikoyi Club, he remains celebrated as one of its longest-standing squash champions.

Spiritually, he grew through the Afunpe Sect of the Holy Flock of Christ, rising from Superintendent (Ateno Igbala) to Senior Elder (Alagba Agba), and now serves faithfully as the worldwide Spiritual Leader (Asiwaju). He is married, blessed with children, and continues to serve God and humanity with dedication and grace.`,
  image: img4,
 specialties: [
  "Spiritual Leadership",
  "Faith Development",
  "Community Service",
  "Sports Ministry",
]
}
,
    
{
  id: 2,
  name: "Sorinwa A Adedayo John",
  title: "National Youth President / coordinator",
  bio: "Adedayo John Shorinwa is a devoted servant of God, a dynamic leader, and a passionate voice for the emerging generation. He holds a Bachelor’s degree in Accounting and is currently advancing his academic pursuit at the postgraduate level. A data analyst.\n\nA gifted music minister, he serves as both a music director and a versatile multi-instrumentalist, using his talents to glorify God and inspire worship. He is the visionary convener of Divine Encounter Through Praise and Worship(D.E.T.P.A.W), a powerful gathering that draws thousands of worshippers, creating an atmosphere of deep spiritual connection and revival.\n\nHe is also the Chief Executive Officer of Peculiar Breeds, a music band committed to excellence in church ministry and event performances, as well as the CEO of Royal Home Going Funerals, where he brings dignity and honor to life’s final journey and celebrations.\n\nCurrently serving as the President of the National Youth of The Holy Flock of Christ, Adedayo John Shorinwa stands as a beacon of hope and direction for young people. His passion for the next generation is evident in his commitment to guiding them onto the right path,\n\nraising leaders who will carry the banner of faith higher and brighter.\n\nA man of peace, unity, and vision, he deeply invests in nurturing potential, building capacity,\nshaping individuals into ambitious and impactful leaders who uphold God's standard.\n\nHis life and ministry remains a shining light, illuminating the path for others to follow in faith, purpose and excellence.",
  image: img2, // make sure img2 is imported/defined
  // email: "sorinwaj@gmail.com",
  // phone: "(123) 802-976-0061",
  specialties: ["Worship Leading", "Small Groups", "Community Building"],
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6"> Our Leadership Team</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
           Meet the passionate leaders who are dedicated to guiding and mentoring our youth community
          </p>
        </div>
      </section>
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
         


          {/* Leaders grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leaders.map((leader, index) => (
              <div
                key={leader.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-62 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    <p className="text-green-600 font-semibold mb-4">{leader.title}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{leader.bio}</p>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.specialties.map((specialty) => (
                          <span key={specialty} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        {/* <FaEnvelope className="w-4 h-4" /> */}
                        <Link
                          to={`mailto:${leader.email}`}
                          className="hover:text-green-600 transition-colors duration-300"
                        >
                          {leader.email}
                        </Link>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        {/* <FaPhone className="w-4 h-4" /> */}
                        <Link
                          to={`tel:${leader.phone}`}
                          className="hover:text-green-600 transition-colors duration-300"
                        >
                          {leader.phone}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership Philosophy */}
          <div className="mt-20 bg-gray-50 rounded-lg p-8 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Philosophy</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in leading by example, serving with humility, and empowering the next generation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Servant Leadership</h3>
                <p className="text-gray-600">
                  We lead by serving others, following Christ's example of humility and love
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGraduationCap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mentorship Focus</h3>
                <p className="text-gray-600">
                  Every leader is committed to mentoring and developing the next generation
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Authentic Community</h3>
                <p className="text-gray-600">We create safe spaces where young people can be real and grow together</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Leadership
