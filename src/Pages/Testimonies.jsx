// import React from "react"
// import Navigation from "../components/navigation"
// import Footer from "../components/footer"
// import { HiPlay, HiHeart, HiStar } from "react-icons/hi"
// import Img3 from "../assets/img3.jpeg"
// import Video3 from "../assets/video3.mp4";
// import Video2 from "../assets/video2.mp4";
// import Video4 from "../assets/video4.mp4";

// const Testimonies = () => {
//   const videoTestimonies = [
//     {
//       id: 1,
//       name: "Marcus Thompson",
//       title: "From Doubt to Faith",
//       thumbnail: Video2,
//       duration: "3:45",
//       description:
//         "Marcus shares how joining the youth ministry helped him overcome doubt and find his purpose in Christ.",
//     },
//     {
//       id: 2,
//       name: "Jessica Rivera",
//       title: "Finding My Calling",
//       thumbnail: Video3,
//       duration: "4:12",
//       description:
//         "Jessica talks about discovering her calling to serve others through the leadership program.",
//     },
//     {
//       id: 3,
//       name: "David Kim",
//       title: "Overcoming Addiction",
//       thumbnail: Video4,
//       duration: "5:30",
//       description:
//         "David's powerful story of overcoming addiction through faith and community support.",
//     },
//   ]

//   const writtenTestimonies = [
//     {
//       id: 1,
//       name: "Emily Chen",
//       title: "A Heart Transformed",
//       content:
//         "When I first walked into Leadership of the Flock, I was broken and lost. The love and acceptance I found here changed everything. Through the mentorship and biblical teaching, I discovered who God created me to be. Now I'm leading a small group and helping other young women find their identity in Christ.",
//       date: "February 2024",
//     },
//     {
//       id: 2,
//       name: "Carlos Martinez",
//       title: "From Follower to Leader",
//       content:
//         "I used to be the guy who just went along with whatever everyone else was doing. But this ministry taught me what true leadership looks like - serving others and following Christ's example. I've learned to stand up for what's right and lead by example in my school and community.",
//       date: "January 2024",
//     },
//     {
//       id: 3,
//       name: "Aisha Johnson",
//       title: "Finding My Voice",
//       content:
//         "As a shy teenager, I never thought I could make a difference. But the leadership training here helped me find my voice and confidence. I've spoken at youth conferences and even started a prayer group at my school. God has used this ministry to bring out gifts I never knew I had.",
//       date: "December 2023",
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />


//  {/* Fullscreen Hero Section */}
//      <section
//              className="relative h-screen flex items-center justify-center text-center"
//              style={{
//                backgroundImage: `url(${Img3})`,
//                backgroundSize: "cover",
//                backgroundPosition: "center",
//                backgroundAttachment: "fixed",
//              }}
//            >
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         {/* Text content */}
//         <div className="relative z-10 text-center px-4 animate-fade-in">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Testimonies
//           </h1>
//           <p className="text-xl text-gray-200 max-w-3xl mx-auto">
//            Hear the powerful stories of transformation and growth from our youth community
//           </p>
//         </div>
//       </section>
          

//       <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Video Testimonies */}
//           <section className="mb-20">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in text-center">Video Testimonies</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {videoTestimonies.map((video, index) => (
//                 <div
//                   key={video.id}
//                   className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift animate-slide-up group"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="relative">
//                     <video
//                 src={videoTestimonies[index].thumbnail}
//                 controls
//                 className="w-full h-64 object-cover object-center"
//               />
//                     <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <button className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all duration-300 hover:scale-110">
//                         <HiPlay className="w-8 h-8 text-green-600" />
//                       </button>
//                     </div>
//                     <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
//                       {video.duration}
//                     </span>
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
//                     <p className="text-green-600 font-medium mb-3">{video.name}</p>
//                     <p className="text-gray-600">{video.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Written Testimonies */}
//           <section>
//             <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in">Written Stories</h2>
//             <div className="space-y-8">
//               {writtenTestimonies.map((testimony, index) => (
//                 <div
//                   key={testimony.id}
//                   className="bg-gray-50 rounded-lg p-8 hover-lift animate-slide-up"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="flex items-start gap-4 mb-4">
//                     <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                       <HiHeart className="w-6 h-6 text-green-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-gray-900">{testimony.title}</h3>
//                       <p className="text-green-600 font-medium">{testimony.name}</p>
//                       <p className="text-sm text-gray-500">{testimony.date}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-700 leading-relaxed italic">"{testimony.content}"</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Call to Action */}
//           <div className="text-center mt-16 animate-fade-in">
//             <div className="bg-green-50 rounded-lg p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Your Story</h3>
//               <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//                 Has God been working in your life through our ministry? We'd love to hear your testimony and share it
//                 with others who might be encouraged by your story.
//               </p>
//               <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-300 hover-lift">
//                 <HiStar className="mr-2 w-5 h-5" />
//                 Submit Your Testimony
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }

// export default Testimonies










import React, { useRef, useEffect, useState } from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { FaPlay, FaHeart, FaStar } from "react-icons/fa"
import Img3 from "../assets/img3.jpeg" // Fixed import - make sure this file exists
import { client } from '../contentful';

const Testimonies = () => {
  const [videoTestimonies, setVideoTestimonies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoTestimonies = async () => {
      try {
        console.log('🔍 Fetching video testimonies from Contentful...');
        
        const response = await client.getEntries({
          content_type: 'videoTestimony',
          include: 2
        });
        
        console.log('✅ Contentful response:', response);
        console.log('📦 Items found:', response.items);

        // Debug: Log the raw video data structure
        response.items.forEach((item, index) => {
          console.log(`--- Item ${index + 1} ---`);
          console.log('Title:', item.fields.title);
          console.log('Video field structure:', item.fields.video);
          if (item.fields.video && item.fields.video.fields) {
            console.log('Video file details:', item.fields.video.fields.file);
          }
        });

        const testimonies = response.items.map(item => {
          // Get video URL from Contentful
          let videoUrl = '';
          if (item.fields.video && 
              item.fields.video.fields && 
              item.fields.video.fields.file && 
              item.fields.video.fields.file.url) {
            videoUrl = `https:${item.fields.video.fields.file.url}`;
            console.log('✅ Video URL:', videoUrl);
          } else {
            console.log('❌ No video found for:', item.fields.title);
          }

          return {
            id: item.sys.id,
            name: item.fields.name || 'Anonymous',
            title: item.fields.title || 'Testimony',
            videoUrl: videoUrl,
            duration: item.fields.duration || '0:00',
            description: item.fields.description || 'A powerful testimony of transformation.'
          };
        });

        console.log('🔄 Processed testimonies:', testimonies);
        setVideoTestimonies(testimonies);

      } catch (error) {
        console.error('❌ Error fetching video testimonies:', error);
        // Empty fallback instead of local videos
        setVideoTestimonies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoTestimonies();
  }, []);

  const writtenTestimonies = [
    {
      id: 1,
      name: "Emily Chen",
      title: "A Heart Transformed",
      content: "When I first walked into Leadership of the Flock, I was broken and lost. The love and acceptance I found here changed everything. Through the mentorship and biblical teaching, I discovered who God created me to be. Now I'm leading a small group and helping other young women find their identity in Christ.",
      date: "February 2024",
    },
    {
      id: 2,
      name: "Carlos Martinez",
      title: "From Follower to Leader",
      content: "I used to be the guy who just went along with whatever everyone else was doing. But this ministry taught me what true leadership looks like - serving others and following Christ's example. I've learned to stand up for what's right and lead by example in my school and community.",
      date: "January 2024",
    },
    {
      id: 3,
      name: "Aisha Johnson",
      title: "Finding My Voice",
      content: "As a shy teenager, I never thought I could make a difference. But the leadership training here helped me find my voice and confidence. I've spoken at youth conferences and even started a prayer group at my school. God has used this ministry to bring out gifts I never knew I had.",
      date: "December 2023",
    },
  ]




  // Video Player Component
  const VideoPlayer = ({ video, index }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);



  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden animate-slide-up group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative">
        {video.videoUrl ? (
          <>
            <video
              ref={videoRef}
              src={video.videoUrl}
              className="w-full h-64 object-cover object-center cursor-pointer"
              controls={false}
              preload="metadata"
              onClick={handlePlayPause}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            
            {/* Play/Pause overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={handlePlayPause}
                className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all duration-300 hover:scale-110"
              >
                {isPlaying ? (
                  // Pause icon
                  <div className="flex space-x-1">
                    <div className="w-2 h-8 bg-green-600 rounded"></div>
                    <div className="w-2 h-8 bg-green-600 rounded"></div>
                  </div>
                ) : (
                  <FaPlay className="w-8 h-8 text-green-600 ml-1" />
                )}
              </button>
            </div>

            {/* Duration badge */}
            <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
              {video.duration}
            </span>
          </>
        ) : (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Video coming soon</p>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
        <p className="text-green-600 font-medium mb-3">{video.name}</p>
        <p className="text-gray-600">{video.description}</p>
      </div>
    </div>
  );
};

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Loading testimonies...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${Img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Testimonies
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Hear the powerful stories of transformation and growth from our youth community
          </p>
        </div>
      </section>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Video Testimonies */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in text-center">
              Video Testimonies
            </h2>
            {videoTestimonies.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">No video testimonies available yet.</p>
                <p className="text-sm text-gray-500">Check back soon for inspiring stories!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videoTestimonies.map((video, index) => (
                  <VideoPlayer key={video.id} video={video} index={index} />
                ))}
              </div>
            )}
          </section>

          {/* Written Testimonies */}           
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in text-center">Written Stories</h2>
            <div className="space-y-8">
              {writtenTestimonies.map((testimony, index) => (
                <div
                  key={testimony.id}
                  className="bg-gray-50 rounded-lg p-8 hover-lift animate-slide-up m-10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <FaHeart className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{testimony.title}</h3>
                      <p className="text-green-600 font-medium">{testimony.name}</p>
                      <p className="text-sm text-gray-500">{testimony.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">"{testimony.content}"</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Your Story</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Has God been working in your life through our ministry? We'd love to hear your testimony and share it
                with others who might be encouraged by your story.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-300 hover-lift">
                <FaStar className="mr-2 w-5 h-5" />
                Submit Your Testimony
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Testimonies;