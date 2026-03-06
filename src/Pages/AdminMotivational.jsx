import { useState } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { createMotivationalPost } from "../contentfulManagement";

export default function AdminMotivational() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    bulletPoints: "",
    closingMessage: "",
    hashtags: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    // Change this password or use an environment variable
    if (password === "motivate2026") {
      setIsAuthenticated(true);
      setMessage({ type: "", text: "" });
    } else {
      setMessage({ type: "error", text: "Incorrect password" });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      bulletPoints: "",
      closingMessage: "",
      hashtags: "",
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setMessage({ type: "", text: "" });

  try {
    // Basic validation
    if (!formData.title.trim() || !formData.content.trim()) {
      throw new Error("Title and Content are required.");
    }

    // Split bullet points by line
    const bulletPointsArray = formData.bulletPoints
      .split('\n')
      .map(line => line.trim())
      .filter(line => line !== '');

    // Split hashtags: first by commas, if none, split by spaces and clean
    let hashtagsRaw = formData.hashtags.trim();
    let hashtagsArray = [];
    if (hashtagsRaw.includes(',')) {
      hashtagsArray = hashtagsRaw
        .split(',')
        .map(tag => tag.trim().replace(/^#/, '').replace(/\s+/g, ''))
        .filter(tag => tag !== '');
    } else {
      // If no commas, split by spaces (assuming user typed like "tag1 tag2 tag3")
      hashtagsArray = hashtagsRaw
        .split(/\s+/)
        .map(tag => tag.trim().replace(/^#/, ''))
        .filter(tag => tag !== '');
    }

    // Prepare closingMessage as an object (since Contentful expects a JSON object)
    const closingMessageText = formData.closingMessage.trim();
    const closingMessage = closingMessageText ? { text: closingMessageText } : {};

    const postData = {
      title: formData.title.trim(),
      date: new Date().toISOString(),
      author: "Ebun's Diary",
      content: formData.content.trim(),
      bulletPoints: bulletPointsArray,
      closingMessage: closingMessage, // Now an object
      hashtags: hashtagsArray,
      Likes: 0, // Capital L to match Contentful model
    };

    await createMotivationalPost(postData);
    setMessage({ type: "success", text: "Post published successfully!" });
    // Reset form
    setFormData({
      title: "",
      content: "",
      bulletPoints: "",
      closingMessage: "",
      hashtags: "",
    });
  } catch (error) {
    console.error("Submission error:", error);
    setMessage({
      type: "error",
      text: error.message || "Failed to publish. Check console.",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="max-w-md w-full mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Admin Access
              </h2>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter password"
                    required
                  />
                </div>
                {message.text && (
                  <p
                    className={`text-sm mb-4 ${
                      message.type === "error" ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {message.text}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-green-500 to-green-600"></div>

          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Create New Motivational Post
              </h1>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-sm text-gray-600 hover:text-green-600"
              >
                Logout
              </button>
            </div>

            {message.text && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  message.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="EMBRACING YOUR BEST SELF"
                  required
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Main Content *
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows="8"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Write your motivational message here..."
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  You can use bullet points with dashes (-)
                </p>
              </div>

              {/* Bullet Points */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bullet Points (one per line)
                </label>
                <textarea
                  name="bulletPoints"
                  value={formData.bulletPoints}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Recognizing your worth...\nLetting go of comparison...\nSpeak kindly to yourself..."
                />
              </div>

              {/* Closing Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Closing Message
                </label>
                <textarea
                  name="closingMessage"
                  value={formData.closingMessage}
                  onChange={handleChange}
                  rows="6"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Real growth begins when you look in the mirror..."
                />
              </div>

              {/* Hashtags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hashtags (comma-separated)
                </label>
                <input
                  type="text"
                  name="hashtags"
                  value={formData.hashtags}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="motivationalpublications, Ebunsdiary, growth"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Publishing...
                    </>
                  ) : (
                    "Publish Post"
                  )}
                </button>
              </div>
// Inside AdminMotivational.jsx, after successful creation, show:
{message.type === "success" && (
  <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-center justify-between">
    <span className="text-sm text-blue-700">Post published! Share it:</span>
    <button
      onClick={() => {
        const postUrl = `${window.location.origin}/motivational/${newPostId}`;
        navigator.clipboard.writeText(postUrl);
        alert('Link copied!');
      }}
      className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
    >
      Copy Link
    </button>
  </div>
)}
              <p className="text-xs text-gray-500 text-center">
                Your post will appear immediately on the motivational page.
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}