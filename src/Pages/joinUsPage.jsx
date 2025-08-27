// "use client"

// import { useState } from "react"
// import Navigation from "../components/navigation"
// import Footer from "../components/footer"
// import { HiUserAdd, HiHeart, HiAcademicCap } from "react-icons/hi"

// const Join = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     age: "",
//     interests: [],
//     experience: "",
//     motivation: "",
//     availability: "",
//   })

//   const interestOptions = [
//     "Leadership Development",
//     "Community Service",
//     "Bible Study",
//     "Worship & Music",
//     "Event Planning",
//     "Mentoring Others",
//     "Social Media & Communications",
//     "Youth Counseling",
//   ]

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target

//     if (type === "checkbox") {
//       setFormData((prev) => ({
//         ...prev,
//         interests: checked ? [...prev.interests, value] : prev.interests.filter((interest) => interest !== value),
//       }))
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }))
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     alert("Thank you for your interest! We'll contact you soon with next steps.")
//     // Reset form
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       age: "",
//       interests: [],
//       experience: "",
//       motivation: "",
//       availability: "",
//     })
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />

//       <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Community</h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Ready to grow as a leader and make a difference? Sign up to become a member or volunteer with Leadership
//               of the Flock.
//             </p>
//           </div>

//           {/* Membership Options */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//             <div className="text-center p-6 bg-green-50 rounded-lg animate-bounce-in group">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
//                 <HiUserAdd className="w-8 h-8 text-green-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">New Member</h3>
//               <p className="text-gray-600">Join our community and start your leadership journey</p>
//             </div>

//             <div className="text-center p-6 bg-green-50 rounded-lg animate-bounce-in animate-stagger-1 group">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
//                 <HiHeart className="w-8 h-8 text-green-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Volunteer</h3>
//               <p className="text-gray-600">Help organize events and mentor other youth</p>
//             </div>

//             <div className="text-center p-6 bg-green-50 rounded-lg animate-bounce-in animate-stagger-2 group">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
//                 <HiAcademicCap className="w-8 h-8 text-green-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Leader</h3>
//               <p className="text-gray-600">Take on leadership roles and guide others</p>
//             </div>
//           </div>

//           {/* Sign-up Form */}
//           <div className="bg-white p-8 rounded-lg shadow-lg animate-slide-up">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sign Up Form</h2>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
//                     First Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Your first name"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
//                     Last Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Your last name"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address *
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
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                     placeholder="(555) 123-4567"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
//                   Age *
//                 </label>
//                 <select
//                   id="age"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                 >
//                   <option value="">Select your age range</option>
//                   <option value="13-15">13-15 years</option>
//                   <option value="16-18">16-18 years</option>
//                   <option value="19-21">19-21 years</option>
//                   <option value="22-25">22-25 years</option>
//                   <option value="26+">26+ years</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-4">
//                   Areas of Interest (select all that apply)
//                 </label>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   {interestOptions.map((interest) => (
//                     <label key={interest} className="flex items-center space-x-3 cursor-pointer">
//                       <input
//                         type="checkbox"
//                         value={interest}
//                         checked={formData.interests.includes(interest)}
//                         onChange={handleChange}
//                         className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
//                       />
//                       <span className="text-gray-700">{interest}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
//                   Previous Leadership Experience
//                 </label>
//                 <textarea
//                   id="experience"
//                   name="experience"
//                   value={formData.experience}
//                   onChange={handleChange}
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                   placeholder="Tell us about any leadership roles or experiences you've had..."
//                 />
//               </div>

//               <div>
//                 <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
//                   Why do you want to join? *
//                 </label>
//                 <textarea
//                   id="motivation"
//                   name="motivation"
//                   value={formData.motivation}
//                   onChange={handleChange}
//                   required
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                   placeholder="Share your motivation for joining Leadership of the Flock..."
//                 />
//               </div>

//               <div>
//                 <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
//                   Availability
//                 </label>
//                 <select
//                   id="availability"
//                   name="availability"
//                   value={formData.availability}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                 >
//                   <option value="">Select your availability</option>
//                   <option value="weekends">Weekends only</option>
//                   <option value="weekdays">Weekday evenings</option>
//                   <option value="flexible">Flexible schedule</option>
//                   <option value="limited">Limited availability</option>
//                 </select>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-green-600 text-white py-4 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 hover-lift pulse-glow font-medium text-lg"
//               >
//                 Submit Application
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }

// export default Join







import { useState } from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { FaUserPlus, FaHeart, FaGraduationCap, FaCheckCircle } from "react-icons/fa"
import HeroImg from "../assets/joinUs.jpg" // <-- change if you prefer a different image

const Join = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    church: "",
    involvement: "member",
    interests: [],
    experience: "",
    goals: "",
    agreement: false,
    updates: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const interestOptions = [
    "Leadership Development",
    "Community Service",
    "Bible Study",
    "Worship & Music",
    "Event Planning",
    "Mentoring Others",
    "Media & Communications",
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === "checkbox" && name === "interests") {
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((i) => i !== value),
      }))
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   if (!formData.agreement) return

  //   try {
  //     setIsSubmitting(true)

  //     const payload = new FormData()
  //     payload.append("First Name", formData.firstName)
  //     payload.append("Last Name", formData.lastName)
  //     payload.append("Email", formData.email)
  //     payload.append("Phone", formData.phone)
  //     payload.append("Age", formData.age)
  //     payload.append("Church", formData.church)
  //     payload.append("Involvement", formData.involvement)
  //     payload.append("Interests", formData.interests.join(", "))
  //     payload.append("Experience", formData.experience)
  //     payload.append("Goals", formData.goals)
  //     payload.append("Wants Updates", formData.updates ? "Yes" : "No")
  //     payload.append("_subject", "New Join Application - Leadership of the Flock")

  //     const res = await fetch("https://formspree.io/f/xwpqdboa", {
  //       method: "POST",
  //       body: payload,
  //       headers: { Accept: "application/json" },
  //     })

  //     if (res.ok) {
  //       setIsSent(true)
        
  //       setFormData({
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         phone: "",
  //         age: "",
  //         church: "",
  //         involvement: "member",
  //         interests: [],
  //         experience: "",
  //         goals: "",
  //         agreement: false,
  //         updates: false,
  //       })
        

  //       setTimeout(() => setIsSent(false), 10000)
  //     } else {
  //       const data = await res.json().catch(() => ({}))
  //       alert(data?.error || "Something went wrong submitting the form.")
  //     }
  //   } catch (err) {
  //     alert("Network error submitting the form.")
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.agreement) return;

  try {
    setIsSubmitting(true);

    // 1️⃣ Send to your Node.js API (MongoDB)
    const res = await fetch("http://localhost:5000/api/joinus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    let data;
    let text = await res.text();
    try {
      data = JSON.parse(text);
    } catch {
      data = { message: text };
    }
    console.log("📡 API Response:", res.status, data);

    if (res.ok) {
      // 2️⃣ Also send to Formspree
      const payload = new FormData();
      payload.append("First Name", formData.firstName);
      payload.append("Last Name", formData.lastName);
      payload.append("Email", formData.email);
      payload.append("Phone", formData.phone);
      payload.append("Age", formData.age);
      payload.append("Church", formData.church);
      payload.append("Involvement", formData.involvement);
      payload.append("Interests", formData.interests.join(", "));
      payload.append("Experience", formData.experience);
      payload.append("Goals", formData.goals);

      await fetch("https://formspree.io/f/xwpqdboa", {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      // ✅ Reset + Success
      setIsSent(true);
      
      // Define initialState inline instead of using an undefined variable
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: "",
        church: "",
        involvement: "member",
        interests: [],
        experience: "",
        goals: "",
        agreement: false,
        updates: false,
      });
      
      setTimeout(() => setIsSent(false), 10000);
      alert("✅ Application submitted successfully!");
    } else {
      console.error("❌ Server error:", data);
      alert(data.error || "Something went wrong. Please try again.");
    }
  } catch (err) {
    console.error("❌ Network error:", err);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO HEADER with background image */}
      <section className="relative h-[90vh] w-full flex items-center justify-center">
        <img
          src={HeroImg}
          alt="Join us background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Community</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Ready to grow as a leader and make a difference? Become a member or volunteer with Leadership of the Flock.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Membership Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserPlus className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">New Member</h3>
              <p className="text-gray-600">Join our community and start your leadership journey</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Volunteer</h3>
              <p className="text-gray-600">Help organize events and mentor other youth</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Leader</h3>
              <p className="text-gray-600">Take on leadership roles and guide others</p>
            </div>
          </div>

          {/* Sign-up Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sign Up Form</h2>

            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your first name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your last name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                      Age *
                    </label>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      min="13"
                      max="30"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      placeholder="Enter your age"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="church" className="block text-sm font-medium text-gray-700">
                      Church/Organization (Optional)
                    </label>
                    <input
                      id="church"
                      name="church"
                      value={formData.church}
                      onChange={handleChange}
                      placeholder="Your church or organization"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Involvement Type */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">How would you like to get involved?</h3>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="involvement"
                    value="member"
                    checked={formData.involvement === "member"}
                    onChange={handleChange}
                  />
                  <span>Member - Participate in events, workshops, and community activities</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="involvement"
                    value="volunteer"
                    checked={formData.involvement === "volunteer"}
                    onChange={handleChange}
                  />
                  <span>Volunteer - Help organize events and support ministry activities</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="involvement"
                    value="leader"
                    checked={formData.involvement === "leader"}
                    onChange={handleChange}
                  />
                  <span>Leadership Team - Take on leadership responsibilities and mentor others</span>
                </label>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Areas of Interest</h3>
                <p className="text-gray-600">Select all that apply:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {interestOptions.map((label) => (
                    <label key={label} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name="interests"
                        value={label}
                        checked={formData.interests.includes(label)}
                        onChange={handleChange}
                        className="w-4 h-4"
                      />
                      <span className="text-gray-800">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Tell Us About Yourself</h3>
                <div className="space-y-2">
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                    Previous Leadership Experience (Optional)
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={3}
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Tell us about any leadership roles or experiences you've had..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-700">
                    What are your goals for joining our community?
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={3}
                    value={formData.goals}
                    onChange={handleChange}
                    placeholder="Share what you hope to achieve or contribute..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
              </div>

              {/* Agreement */}
              <div className="space-y-3">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="agreement"
                    checked={formData.agreement}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the community guidelines and commit to participating respectfully in Leadership of the
                    Flock activities.
                  </span>
                </label>
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="updates"
                    checked={formData.updates}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    I would like to receive updates about events, resources, and opportunities via email and text
                    messages.
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 ${
                  isSent
                    ? "bg-green-500"
                    : isSubmitting
                    ? "bg-green-600 opacity-90"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {isSent ? (
                  <>
                    <FaCheckCircle className="w-5 h-5" />
                    Application Sent
                  </>
                ) : isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FaCheckCircle className="w-5 h-5" />
                    Submit Application
                  </>
                )}
              </button>
            </form>


            
          </div>
        </div>
      </div>

      {/* Next Steps */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div className="text-center">
        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
          1
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Application Review</h3>
        <p className="text-gray-600">We'll review your application within 2-3 business days.</p>
      </div>

      <div className="text-center">
        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
          2
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Welcome Call</h3>
        <p className="text-gray-600">
          A team member will contact you to welcome you and answer questions.
        </p>
      </div>

      <div className="text-center">
        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
          3
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Get Started</h3>
        <p className="text-gray-600">Join your first event and start your leadership journey with us!</p>
      </div>

    </div>
  </div>
</section>

      <Footer />
    </div>
  )
}

export default Join
