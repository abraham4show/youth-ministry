import { Link } from "react-router-dom"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { FaEnvelope, FaPhone, FaGraduationCap, FaHeart } from "react-icons/fa"
import Img3 from "../assets/img3.jpeg"
import img2 from "../assets/leaderShip1.jpg"
import img3 from "../assets/leaderShip2.jpg"
import img4 from "../assets/leaderShip3.jpg"


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
      bio: "Mr Bola has a heart for helping young youth navigate life's challenges through faith. He leads our youths' small groups and provides biblical counseling. Her gentle spirit and wisdom make her a trusted mentor.",
      image: img4,
      email: "Osinbowale@leadershipflock.org",
      phone: "(234) 803 455-2106",
      specialties: ["Women's Ministry", "Biblical Counseling", "Life Coaching"],
    },
    
    {
      id: 2,
      name: "Sorinwa A Adedayo John",
      title: "National Youth President / coordinator",
      bio: "Pastor Lisa brings energy and creativity to our ministry. She specializes in worship leading and small group facilitation. Her heart for authentic community has helped countless young people find their place in God's family.",
      image: img2,
      email: "sorinwaj@gmail.com",
      phone: "(123) 802-976-0061",
      specialties: ["Worship Leading", "Small Groups", "Community Building"],
    },
    {
      id: 3,
      name: " Venerable Jide Coker",
      title: "Youth Leader & Outreach Coordinator",
      bio: "Mr Jide Coker is a former youth group member who now serves as a leader. His testimony of transformation through Christ inspires many. He coordinates our community outreach programs and mission trips.",
      image: img3,
      email: "david@leadershipflock.org",
      phone: "(234) 803-786-0784",
      specialties: ["Outreach Programs", "Mission Trips", "Peer Mentoring"],
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
                        <FaEnvelope className="w-4 h-4" />
                        <Link
                          to={`mailto:${leader.email}`}
                          className="hover:text-green-600 transition-colors duration-300"
                        >
                          {leader.email}
                        </Link>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaPhone className="w-4 h-4" />
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
