// import Navigation from "../components/navigation"
// import Footer from "../components/footer"
// import { Play, Calendar } from "lucide-react"

// export default function GalleryPage() {
//   const galleryItems = [
//     {
//       id: 1,
//       type: "image",
//       title: "Leadership Summit 2023",
//       date: "December 2023",
//       src: "/youth-leadership-conference.png",
//       alt: "Youth at leadership summit",
//     },
//     {
//       id: 2,
//       type: "video",
//       title: "Community Service Day",
//       date: "November 2023",
//       src: "/young-volunteers-community-service.png",
//       alt: "Youth volunteering in community",
//     },
//     {
//       id: 3,
//       type: "image",
//       title: "Monthly Leadership Circle",
//       date: "October 2023",
//       src: "/youth-discussion-circle.png",
//       alt: "Youth in discussion circle",
//     },
//     {
//       id: 4,
//       type: "image",
//       title: "Worship & Prayer Night",
//       date: "September 2023",
//       src: "/youth-worship-prayer.png",
//       alt: "Youth in worship",
//     },
//     {
//       id: 5,
//       type: "video",
//       title: "Leadership Workshop Series",
//       date: "August 2023",
//       src: "/youth-leadership-workshop.png",
//       alt: "Leadership workshop",
//     },
//     {
//       id: 6,
//       type: "image",
//       title: "Summer Retreat 2023",
//       date: "July 2023",
//       src: "/placeholder.svg?height=300&width=400",
//       alt: "Summer retreat activities",
//     },
//     {
//       id: 7,
//       type: "image",
//       title: "Graduation Celebration",
//       date: "June 2023",
//       src: "/placeholder.svg?height=300&width=400",
//       alt: "Graduation celebration",
//     },
//     {
//       id: 8,
//       type: "video",
//       title: "Testimonies & Stories",
//       date: "May 2023",
//       src: "/placeholder.svg?height=300&width=400",
//       alt: "Youth sharing testimonies",
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/5">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Community Gallery</h1>
//           <p className="text-xl text-muted-foreground mb-8">
//             Relive the memories and see the impact of our youth leadership community through photos and videos from our
//             past activities.
//           </p>
//         </div>
//       </section>

//       {/* Gallery Grid */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {galleryItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow group cursor-pointer border border-gray-200"
//               >
//                 <div className="relative">
//                   <img
//                     src={item.src || "/placeholder.svg"}
//                     alt={item.alt}
//                     className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   {item.type === "video" && (
//                     <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
//                       <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
//                         <Play className="w-8 h-8 text-primary-foreground ml-1" />
//                       </div>
//                     </div>
//                   )}
//                   {/* Badge replacement */}
//                   <div className="absolute top-4 left-4">
//                     <span
//                       className={`px-3 py-1 text-xs font-semibold rounded-full ${
//                         item.type === "video"
//                           ? "bg-primary text-white"
//                           : "bg-gray-200 text-gray-800"
//                       }`}
//                     >
//                       {item.type === "video" ? "Video" : "Photo"}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
//                   <div className="flex items-center space-x-2 text-sm text-muted-foreground">
//                     <Calendar className="w-4 h-4" />
//                     <span>{item.date}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-foreground mb-6">Be Part of Our Story</h2>
//           <p className="text-lg text-muted-foreground mb-8">
//             Join our community and create memories that will last a lifetime. Your leadership journey starts here.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
//               Join Our Next Event
//             </button>
//             <button className="border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors">
//               Share Your Photos
//             </button>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }












// import Video1 from "../assets/video1.mp4";
// import Img1 from "../assets/img1.jpeg";
// import Img2 from "../assets/img2.jpeg";

// import gallery1 from "../assets/gallery1.jpg";
// import gallery2 from "../assets/gallery2.jpg";
// import gallery3 from "../assets/gallery3.jpg";
// import gallery4 from "../assets/gallery4.jpg";
// import gallery5 from "../assets/gallery5.jpg";
// import gallery6 from "../assets/gallery6.jpg";
// import gallery7 from "../assets/gallery7.jpg";
// import gallery8 from "../assets/gallery8.jpg";
// import gallery9 from "../assets/gallery9.jpg";
// import gallery10 from "../assets/gallery10.jpg";
// import gallery11 from "../assets/gallery11.jpg";
// import gallery12 from "../assets/gallery12.jpg";
// import gallery13 from "../assets/gallery13.jpg";
// import gallery14 from "../assets/gallery14.jpg";
// import gallery15 from "../assets/gallery15.jpg";
// import gallery16 from "../assets/gallery16.jpg";
// import Video3 from "../assets/video3.mp4";
// import Video2 from "../assets/video2.mp4";
// import Video4 from "../assets/video4.mp4";



// export default function GalleryPage() {
//   const galleryItems = [
//     {
//       id: 1,
//       type: "image",
//       title: "Leadership Summit 2025",
//       date: "",
//       src: Img1,
//       alt: "Youth at leadership summit",
//     },
//     {
//       id: 2,
//       type: "video",
//       title: "youth summit 2025",
//       date: "November 2023",
//       src: Video1,
//       alt: "Youth volunteering in community",
//     },
//     {
//       id: 3,
//             title: "youth convention at kogi state 2023",
//       date: " august 2025",
//       src: Img2,
//       alt: "Youth in discussion circle",
//     },
//     {
//       id: 4,
//       type: "image",
//       title: "youth convention at kogi state 2023",
//       date: "november 2023",
//       src: gallery1,
//       alt: "Youth in worship",
//     },
//     {
//       id: 5,
//       type: "video",
//       title: "Leadership summit",
//       date: "August 2025",
//       src: Video2,
//       alt: "youth in dicussion circle",
//     },
//     {
//       id: 6,
//       type: "image",
//       title: "youth conference 2024",
//       date: "july 2024",
//       src: gallery2,
//       alt: "youth week activities activities",
//     },
//     {
//       id: 7,
//       type: "image",
//       title: "youth conference 2024",
//       date: "July 2024",
//       src: gallery3,
//       alt: "youth week activities ",
//     },
//     {
//       id: 8,
//       type: "video",
//       title: "youth summit",
//       date: "august 2025",
//       src: Video4,
//       alt: "Youth sharing testimonies",
//     },
    
//     {
//       id: 9,
//       type: "image",
//       title: "youth retreat 2024",
//       date: "september 2024",
//       src: gallery4,
//       alt: "skill acqusition",
//     },
//     {
//       id: 10,
//       type: "video",
//       title: "youth summit",
//       date: "august 2025",
//       src: Video4,
//       alt: "Youth sharing testimonies",
//     },
//     {
//       id: 11,
//       type: "image",
//       title: "bible quiz",
//       date: "septemeber 2025",
//       src: gallery5,
//       alt: "youth retreat",
//     },
//     {
//       id: 12,
//       type: "image",
//       title: "Graduation Celebration",
//       date: "June 2023",
//       src: gallery6,
//       alt: "Graduation celebration",
//     },
//     {
//       id: 13,
//       type: "image",
//       title: "Graduation Celebration",
//       date: "June 2023",
//       src: gallery7,
//       alt: "Graduation celebration",
//     },
//     {
//       id: 14,
//       type: "image",
//       title: "Graduation Celebration",
//       date: "June 2023",
//       src: gallery8,
//       alt: "Graduation celebration",
//     },
//     {
//       id: 15,
//       type: "image",
//       title: "Graduation Celebration",
//       date: "June 2023",
//       src: gallery9,
//       alt: "Graduation celebration",
//     },
//     {
//       id: 16,
//       type: "image",
//       title: "youth conference",
//       date: "July 2025",
//       src: gallery10,
//       alt: "Graduation celebration",
//     },
//     {
//       id: 17,
//       type: "image",
//       title: "youth anniversary",
//       date: "july 2025",
//       src: gallery11,
//       alt: "Graduation celebration",
//     },
//     {
//       id: 18,
//       type: "image",
//       title: "youth retreat",
//       date: "september 2024",
//       src: gallery12,
//       alt: "Graduation celebration",
//     },
//     {
//       id: 19,
//       type: "image",
//       title: "youth retreat",
//       date: "september 2024",
//       src: gallery13,
//       alt: "certificate presentation",
//     },
//     {
//       id: 20,
//       type: "image",
//       title: "youth week 2025",
//       date: "July 2025",
//       src: gallery14,
//       alt: "Graduation celebration",
//     },
//     {
//       id: 21,
//       type: "image",
//       title: "hfc oshodi 75th anniversary",
//       date: "may 2025",
//       src: gallery15,
//       alt: "Graduation celebration",
//     },
//     {
//     id: 21,
//       type: "image",
//       title: "2025 beach retreat ",
//       date: "June 2023",
//       src: gallery16,
//       alt: "Graduation celebration",
//     },
//   ];







import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { FaCalendarAlt } from "react-icons/fa"
import Img7 from "../assets/img7.jpg"
import Video3 from "../assets/video3.mp4"
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { client } from '../contentful';

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contentTypeId, setContentTypeId] = useState(''); // Store the discovered content type ID

  useEffect(() => {
    const debugAndFetchContent = async () => {
      try {
        // First, debug to find the correct content type
        console.log('🔍 Debugging Contentful content types...');
        
        const contentTypes = await client.getContentTypes();
        console.log('📋 Available content types:');
        contentTypes.items.forEach(ct => {
          console.log('ID:', ct.sys.id, '| Name:', ct.name, '| Published:', !!ct.sys.publishedAt);
        });

        // Also check what entries exist and their content types
        const allEntries = await client.getEntries({ limit: 10 });
        console.log('📦 Sample entries:');
        allEntries.items.forEach(item => {
          if (item.sys.contentType && item.fields.title) {
            console.log('Entry:', item.fields.title, '| Content Type ID:', item.sys.contentType.sys.id);
          }
        });

        // Try to find the correct content type ID
        const possibleContentTypes = [
          'hfcYouthMinistry',
          'hfc-youth-ministry', 
          'hfc_youth_ministry',
          'youthMinistry',
          'galleryItem',
          'gallery',
          'HFC-youth-ministry' // Try with capital letters too
        ];

        let correctContentType = null;
        
        for (const contentType of possibleContentTypes) {
          try {
            const testResponse = await client.getEntries({ 
              content_type: contentType,
              limit: 1
            });
            
            if (testResponse.items.length > 0) {
              console.log(`✅ Found content type: ${contentType}`);
              correctContentType = contentType;
              break;
            }
          } catch (error) {
            console.log(`❌ Not found or error with: ${contentType}`);
          }
        }

        if (correctContentType) {
          setContentTypeId(correctContentType);
          
          // Now fetch the actual gallery items
          const response = await client.getEntries({
            content_type: correctContentType,
            include: 2
          });
          
          console.log('✅ Contentful connection successful!');
          console.log('Found items:', response.items);

          // Transform Contentful data
          const items = response.items.map(item => {
            let mediaUrl = '';
            let mediaType = item.fields.type || 'image';
            
            if (item.fields.media && item.fields.media.fields && item.fields.media.fields.file) {
              mediaUrl = `https:${item.fields.media.fields.file.url}`;
              
              // Determine type from file extension if not specified
              if (!item.fields.type) {
                const fileUrl = item.fields.media.fields.file.url.toLowerCase();
                mediaType = fileUrl.includes('.mp4') || fileUrl.includes('.mov') || fileUrl.includes('.webm') 
                  ? 'video' 
                  : 'image';
              }
            }

            return {
              id: item.sys.id,
              type: mediaType,
              title: item.fields.title || 'Untitled',
              date: item.fields.date || '',
              src: mediaUrl,
              alt: item.fields.discription || item.fields.title || 'Gallery item'
            };
          });

          setGalleryItems(items);
        } else {
          console.error('❌ Could not find the correct content type');
        }

      } catch (error) {
        console.error('❌ Contentful error:', error);
      } finally {
        setLoading(false);
      }
    };

    debugAndFetchContent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Loading gallery...</p>
            {contentTypeId && <p className="text-sm text-gray-500">Using content type: {contentTypeId}</p>}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Background Image */}
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
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Community Gallery</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Relive the memories and see the impact of our youth leadership community through photos and videos from our past activities.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {galleryItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No gallery items found.</p>
              <p className="text-gray-500">Add some items in Contentful to see them here.</p>
              {contentTypeId && <p className="text-sm text-gray-400">Content type ID: {contentTypeId}</p>}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow group cursor-pointer border border-gray-200"
                >
                  <div className="relative flex items-center justify-center bg-black min-h-64">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        controls
                        className="w-full h-64 object-cover"
                        onError={(e) => {
                          console.error('Video failed to load:', item.src);
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <img
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          console.error('Image failed to load:', item.src);
                          e.target.src = "/placeholder.svg";
                        }}
                      />
                    )}

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          item.type === "video" ? "bg-primary text-white" : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {item.type === "video" ? "Video" : "Photo"}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    {item.date && (
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-fixed">
        {/* Background video */}
        <video
          src={Video3}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Be Part of Our Story</h2>
          <p className="text-lg md:text-xl mb-8">
            Join our community and create memories that will last a lifetime. Your leadership journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Join Our Next Event
            </Link>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors">
              Share Your Photos
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}