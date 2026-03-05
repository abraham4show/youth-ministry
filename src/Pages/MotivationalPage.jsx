import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { getAllMotivationalPosts } from "../contentful";
import { FaHeart, FaComment, FaShare, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

export default function MotivationalPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const fetchedPosts = await getAllMotivationalPosts();
        console.log("Fetched posts:", fetchedPosts);
        setPosts(fetchedPosts);
      } catch (err) {
        setError("Failed to load posts");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  // Calculate totals from fetched data
  const totalLikes = posts.reduce((acc, post) => acc + (post.fields.Likes || 0), 0);
  const totalComments = posts.reduce((acc, post) => acc + (post.fields.comments?.length || 0), 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="text-center py-20 text-red-600">{error}</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with stats */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Motivational Messages
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
            Inspirational content to uplift your spirit and guide your journey
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <FaHeart className="text-green-300" />
              <span>{totalLikes} likes</span>
            </div>
            <div className="flex items-center gap-2">
              <FaComment className="text-green-300" />
              <span>{totalComments} comments</span>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts yet. Check back soon!</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => {
              const { fields, sys } = post;
              const postId = sys.id;
              const date = new Date(fields.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
              // Get first paragraph for preview
              const previewText = fields.content
                ? fields.content.split('\n')[0].substring(0, 120) + '...'
                : '';

              return (
                <Link 
                  key={postId}
                  to={`/motivational/${postId}`}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        Personal Growth
                      </span>
                      <time className="text-xs text-gray-500">{date}</time>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                      {fields.title}
                    </h2>

                    <p className="text-sm text-gray-600 mb-4">By {fields.author}</p>

                    <div className="relative mb-4">
                      <FaQuoteLeft className="absolute -top-2 -left-1 text-green-200 text-xl" />
                      <p className="text-gray-600 text-sm pl-6 line-clamp-3">
                        {previewText}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-gray-500 text-sm mt-4 pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-1 hover:text-green-600 transition-colors">
                        <FaHeart className="text-green-500" size={14} />
                        <span>{fields.Likes || 0}</span>
                      </span>
                      <span className="flex items-center gap-1 hover:text-green-600 transition-colors">
                        <FaComment className="text-green-500" size={14} />
                        <span>{fields.comments?.length || 0}</span>
                      </span>
                      <span className="flex items-center gap-1 ml-auto hover:text-green-600 transition-colors">
                        <FaShare className="text-green-500" size={14} />
                      </span>
                    </div>

                    <div className="mt-4 flex items-center text-green-600 font-medium text-sm group-hover:text-green-700">
                      Read more 
                      <FaArrowRight className="ml-2 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}