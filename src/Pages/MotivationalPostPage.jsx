import { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { deliveryClient } from "../contentful";
import { PostCard } from "../components/PostCard";
import { FaArrowLeft } from "react-icons/fa";
import { useUser } from '../hooks/useUser';
import { Helmet } from 'react-helmet-async';

export default function MotivationalPostPage() {
  const user = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate(`/join?returnTo=${encodeURIComponent(location.pathname)}`);
    }
  }, [user, navigate, location]);

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await deliveryClient.getEntry(slug);
        setPost(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    if (slug) loadPost();
  }, [slug]);

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

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="text-6xl mb-4">😔</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Post Not Found</h2>
            <p className="text-gray-600 mb-6">
              The motivational post you're looking for doesn't exist or has been moved.
            </p>
            <Link 
              to="/motivational" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <FaArrowLeft size={16} />
              Back to Motivational Posts
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { fields, sys } = post;
  // Replace with your actual domain
  const siteUrl = "https://hfc-youth-ministry.netlify.app"; // your Netlify domain
  const postUrl = `${siteUrl}/motivational/${sys.id}`;

  // If you have an image field in Contentful, use it; otherwise use a default
  const imageUrl = fields.image?.fields?.file?.url 
    ? `https:${fields.image.fields.file.url}` 
    : `${siteUrl}/default-og-image.jpg`; // make sure you have a default image

  const description = fields.content
    ? fields.content.split('\n')[0].substring(0, 160) + '...'
    : 'Read this motivational message from our community.';

  return (
    <>
      <Helmet>
        <title>{fields.title} | Motivational Messages</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:title" content={fields.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fields.title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="bg-gray-50 border-b border-gray-200 mt-16 md:mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              to="/motivational" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors group"
            >
              <FaArrowLeft className="text-sm transition-transform duration-300 group-hover:-translate-x-1" />
              Back to all posts
            </Link>
          </div>
        </div>
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20 md:pt-24">
          <PostCard post={post} />
        </main>
        <Footer />
      </div>
    </>
  );
}