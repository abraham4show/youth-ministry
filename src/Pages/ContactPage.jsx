// "use client"

// import { useState } from "react"
// import Navigation from "../components/navigation"
// import Footer from "../components/footer"
// import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi"

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle form submission here
//     console.log("Form submitted:", formData)
//     alert("Thank you for your message! We'll get back to you soon.")
//     setFormData({ name: "", email: "", subject: "", message: "" })
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />

//       <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Have questions or want to get involved? We'd love to hear from you!
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Information */}
//             <div className="animate-slide-up">
//               <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <HiMail className="w-6 h-6 text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
//                     <p className="text-gray-600">info@leadershipflock.org</p>
//                     <p className="text-gray-600">youth@leadershipflock.org</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <HiPhone className="w-6 h-6 text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
//                     <p className="text-gray-600">+1 (555) 123-4567</p>
//                     <p className="text-gray-600">WhatsApp: +1 (555) 987-6543</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <HiLocationMarker className="w-6 h-6 text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
//                     <p className="text-gray-600">123 Faith Street</p>
//                     <p className="text-gray-600">City, State 12345</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h3>
//                 <div className="space-y-2 text-gray-600">
//                   <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
//                   <p>Saturday: 10:00 AM - 2:00 PM</p>
//                   <p>Sunday: After Service</p>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="animate-slide-up animate-stagger-1">
//               <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Your full name"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                     placeholder="What's this about?"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Tell us more about your inquiry..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 hover-lift pulse-glow font-medium"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }

// export default Contact




"use client"

import { useState } from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,FaCheckCircle } from "react-icons/fa"
import Img4 from "../assets/contactHero.jpg"

const Contact = () => {
  const [status, setStatus] = useState("idle") // idle | sending | success | error

  const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus("sending")
  const form = e.target
  const data = new FormData(form)

  // Prepare plain object for backend
  const payload = {
    name: data.get("name"),
    email: data.get("email"),
    subject: data.get("subject"),
    message: data.get("message"),
  }

  try {
    // 1️⃣ Send to your backend (MongoDB)
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    // 2️⃣ Send to Formspree
    await fetch("https://formspree.io/f/xwpqdbva", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })

    if (res.ok) {
      setStatus("success")
      form.reset()
    } else {
      setStatus("error")
    }
  } catch (err) {
    console.error("❌ Error submitting contact:", err)
    setStatus("error")
  }
}

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header background section */}
      <div className="relative h-[90vh] flex items-center justify-center">
        <img
          src={Img4}
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </div>
      </div>

      {/* Contact content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@leadershipflock.org</p>
                  <p className="text-gray-600">youth@leadershipflock.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">WhatsApp: +1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">123 Faith Street</p>
                  <p className="text-gray-600">City, State 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium"
              >
                {status === "success" ? (
                  <>
                    <FaCheckCircle className="w-5 h-5 text-white" />
                    Message Sent!
                  </>
                ) : status === "sending" ? (
                  "Sending..."
                ) : (
                  "Send Message"
                )}
              </button>

              {status === "error" && (
                <p className="text-red-600 mt-2 text-sm">❌ Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
