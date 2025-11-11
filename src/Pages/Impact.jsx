import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { FaHeart, FaUsers, FaGift, FaStar, FaChartLine } from "react-icons/fa"
import Img3 from "../assets/charity.jpg"
import charity1 from "../assets/soapMaking1.jpg"
import catering from "../assets/catering.jpg"
import Img4 from "../assets/img3.jpeg"



const Impact = () => {
  const impactStats = [
    { number: "500+", label: "Lives Transformed", icon: FaHeart },
    { number: "50+", label: "Community Projects", icon: FaUsers },
    { number: "1000+", label: "Meals Served", icon: FaGift },
    { number: "25+", label: "Youth Leaders Trained", icon: FaStar },
  ]

  const impactStories = [
    {
      id: 1,
      title: "Entrepreneurship Skills",
      description:
        "Our youth team serves hot meals every Saturday to the homeless community downtown. We've served over 1,000 meals and built lasting relationships with those we serve.",
      image: charity1,
      impact: "200+ people served monthly",
      category: "Community Service",
    },
    {
      id: 2,
      title: "Entrepreneurship Skills",
      description:
        "We partner with local schools to provide mentorship and tutoring for at-risk students. Our youth leaders serve as positive role models and academic support.",
      image: catering,
      impact: "50+ students mentored",
      category: "Education",
    },
    {
      id: 3,
      title: "humanitarian aid",
      description:
        "We transformed an empty lot into a thriving community garden that provides fresh produce to local food banks and teaches sustainable living practices.",
      image: Img4,
      impact: "500+ lbs of produce donated",
      category: "Environmental",
    },
    {
      id: 4,
      title: "Evangelism and Charity Outreach",
      description:
        "Following our evangelism mission, the youth group extended kindness by distributing foodstuffs to the community, demonstrating God’s love in action.",
      image: Img3,
      impact: "25+ leaders equipped",
      category: "Leadership Development",
    },
  ]

  const testimonials = [
    {
      name: "Maria Gonzalez",
      role: "Community Member",
      quote:
        "The youth from Leadership of the Flock have been a blessing to our neighborhood. Their weekly food distribution has helped so many families, including mine.",
    },
    {
      name: "Principal Johnson",
      role: "Lincoln High School",
      quote:
        "The mentorship program has made a tremendous difference in our students' lives. Test scores have improved and dropout rates have decreased significantly.",
    },
    {
      name: "City Councilman Davis",
      role: "District 3 Representative",
      quote:
        "This youth ministry is a shining example of how faith communities can make a real difference. Their community garden project has transformed our entire neighborhood.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

         


{/* Hero Section with Background Image */}
      <section
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${Img4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Community Impact</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            See how God is using our youth ministry to transform lives and strengthen our community
          </p>
        </div>
      </section>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-lg shadow-lg p-6 hover-lift animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Impact Stories */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in">Our Impact Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {impactStories.map((story, index) => (
                <div
                  key={story.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img src={story.image || "/placeholder.svg"} alt={story.title} className="w-full h-80 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {story.category}
                      </span>
                      <span className="text-green-600 font-semibold text-sm">
                        <FaChartLine className="inline w-4 h-4 mr-1" />
                        {story.impact}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{story.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Community Testimonials */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in">
              What the Community Says
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <div className="flex text-green-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center bg-green-50 rounded-lg p-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Us in Making a Difference</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Be part of something bigger than yourself. Join our youth ministry and help us continue transforming lives
              and strengthening our community through God's love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-300 hover-lift">
                <FaUsers className="mr-2 w-5 h-5" />
                Join Our Team
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 hover-lift">
                <FaHeart className="mr-2 w-5 h-5" />
                Support Our Mission
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Impact
