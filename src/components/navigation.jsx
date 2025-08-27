// "use client"

// import { useState, useEffect } from "react"
// import { Link, useLocation } from "react-router-dom"
// import { HiMenu, HiX } from "react-icons/hi"

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Events", path: "/events" },
//     { name: "Resources", path: "/resources" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "Contact", path: "/contact" },
//     { name: "Join Us", path: "/join" },
//   ]

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="flex items-center space-x-2 hover-lift">
//             <span className="text-xl font-bold text-primary">Leadership of the Flock</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
//                   location.pathname === item.path
//                     ? "text-primary border-b-2 border-primary"
//                     : "text-gray-700 hover:text-primary"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-primary transition-colors duration-300 hover:scale-110"
//             >
//               {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 animate-fade-in">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   onClick={() => setIsOpen(false)}
//                   className={`block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary rounded-md ${
//                     location.pathname === item.path ? "text-primary bg-primary/10" : "text-gray-700"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navigation



"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"  // ✅ Changed here

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
  ]

  const dropdownMenus = [
    {
      name: "Ministry",
      items: [
        { name: "Testimonies", path: "/testimonies" },
        { name: "Leadership", path: "/leadership" },
        { name: "Impact", path: "/impact" },
      ],
    },
    {
      name: "Resources",
      items: [
        { name: "Blog", path: "/blog" },
        { name: "Resources", path: "/resources" },
        { name: "Gallery", path: "/gallery" },
      ],
    },
  ]

  const endNavItems = [
    { name: "Contact", path: "/contact" },
    { name: "Join Us", path: "/join" },
  ]

  const isDropdownActive = (items) => {
    return items.some((item) => location.pathname === item.path)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover-lift">
            <span className=" font-bold text-primary">THE HOLY FLOCK OF CHRIST YOUTH MINISTRY</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                  location.pathname === item.path
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {dropdownMenus.map((dropdown) => (
              <div
                key={dropdown.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(dropdown.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-1 text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                    isDropdownActive(dropdown.items)
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  <span>{dropdown.name}</span>
                  <FaChevronDown   // ✅ Changed icon
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === dropdown.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown menu */}
                {activeDropdown === dropdown.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200 animate-fade-in">
                    <div className="py-2">
                      {dropdown.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`block px-4 py-2 text-sm transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                            location.pathname === item.path ? "text-primary bg-primary/10" : "text-gray-700"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {endNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                  location.pathname === item.path
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary transition-colors duration-300 hover:scale-110"
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Main nav items */}
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary rounded-md ${
                    location.pathname === item.path ? "text-primary bg-primary/10" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Dropdown sections */}
              {dropdownMenus.map((dropdown) => (
                <div key={dropdown.name} className="border-t border-gray-200 pt-2 mt-2">
                  <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {dropdown.name}
                  </div>
                  {dropdown.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-2 text-base font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary rounded-md ${
                        location.pathname === item.path ? "text-primary bg-primary/10" : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}

              {/* End nav items */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                {endNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary rounded-md ${
                      location.pathname === item.path ? "text-primary bg-primary/10" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
