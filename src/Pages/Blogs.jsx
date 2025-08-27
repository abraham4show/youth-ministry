import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { FaCalendarAlt, FaUser, FaTag } from "react-icons/fa"
import Img3 from "../assets/img3.jpeg"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Youth Leadership Summit 2025",
      excerpt:
        "Join us for three days of intensive leadership training, worship, and fellowship as we prepare the next generation of Christian leaders.",
      author: "Pastor Michael",
      date: "March 15, 2025",
      category: "Upcoming Event",
      image: "/youth-leadership-conference.png",
      featured: true,
    },
    {
      id: 2,
      title: "How God Changed My Heart - Sarah's Testimony",
      excerpt:
        "Sarah shares her powerful journey from doubt to faith, and how joining our youth ministry transformed her relationship with God.",
      author: "Sarah Johnson",
      date: "March 10, 2025",
      category: "Testimony",
      image: "/young-woman-praying.png",
    },
    {
      id: 3,
      title: "Feeding the Homeless Initiative Success",
      excerpt:
        "Our youth team served over 200 meals to the homeless community, showing Christ's love through action and service.",
      author: "Youth Team",
      date: "March 8, 2025",
      category: "Community Impact",
      image: "/youth-serving-homeless.png",
    },
    {
      id: 4,
      title: "Finding Your Purpose in God's Plan",
      excerpt:
        "Discover how to align your passions and talents with God's calling on your life through prayer and community discernment.",
      author: "Pastor Lisa",
      date: "March 5, 2025",
      category: "Spiritual Growth",
      image: "/young-person-reading-bible.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      
         
           {/* Hero Section with Background Image */}
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
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
                  {/* Hero content */}
                  <div className="relative z-10 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Blog</h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                      Stay connected with upcoming events, inspiring testimonies, and stories of God's work in our community
                    </p>
                  </div>
                </section>
                <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden hover-lift animate-slide-up mb-8 ${
                    post.featured ? "border-2 border-green-200" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img src={Img3} alt={post.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="inline-flex items-center gap-1">
                        <FaTag className="w-4 h-4" />
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <FaCalendarAlt className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <FaUser className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <button className="text-green-600 hover:text-green-700 font-medium transition-colors duration-300">
                      Read Full Post →
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 mb-8 animate-fade-in">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {["Upcoming Events", "Testimonies", "Community Impact", "Spiritual Growth", "Leadership Tips"].map(
                    (category) => (
                      <button
                        key={category}
                        className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-all duration-300"
                      >
                        {category}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 animate-fade-in">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Subscribe to Updates</h3>
                <p className="text-gray-600 mb-4">Get notified about new blog posts and upcoming events.</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Blog
