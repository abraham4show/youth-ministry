import { useState, useEffect } from "react";
import { FaHeart, FaComment, FaShare, FaQuoteLeft, FaUserCircle } from "react-icons/fa";
import { useUser } from "../hooks/useUser";

export function PostCard({ post }) {
  const user = useUser();
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://hfc-youth-leadership-backend.onrender.com";

  // Fetch comments and likes
  useEffect(() => {
    if (!post?.sys?.id) return;
    const fetchData = async () => {
      try {
        const commentsRes = await fetch(`${backendUrl}/api/posts/${post.sys.id}/comments`);
        const commentsData = await commentsRes.json();
        setComments(commentsData);

        const likesUrl = user?._id
          ? `${backendUrl}/api/posts/${post.sys.id}/likes?userId=${user._id}`
          : `${backendUrl}/api/posts/${post.sys.id}/likes`;
        const likesRes = await fetch(likesUrl);
        const likesData = await likesRes.json();
        setLikesCount(likesData.count);
        setLiked(likesData.liked);
      } catch (error) {
        console.error("Error fetching post data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [post?.sys?.id, user?._id]);

  const handleLike = async () => {
    if (!user) return alert("Please log in to like posts.");
    try {
      const res = await fetch(`${backendUrl}/api/posts/${post.sys.id}/likes/toggle`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user._id })
      });
      const data = await res.json();
      setLiked(data.liked);
      setLikesCount(prev => data.liked ? prev + 1 : prev - 1);
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const handleAddComment = async () => {
    if (!user) return alert("Please log in to comment.");
    if (newComment.trim() === "") return;
    setIsSubmitting(true);
    try {
      const res = await fetch(`${backendUrl}/api/posts/${post.sys.id}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user._id, text: newComment })
      });
      const comment = await res.json();
      setComments([comment, ...comments]);
      setNewComment("");
      if (!showComments) setShowComments(true);
    } catch (error) {
      console.error("Error posting comment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCommentTime = (timestamp) => new Date(timestamp).toLocaleString();

  // Content from Contentful
  const { fields } = post;
  const formattedDate = fields.date
    ? new Date(fields.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';
  const contentParagraphs = fields.content
    ? fields.content.split('\n').filter(p => p.trim() !== '')
    : [];

  if (loading) return <div>Loading comments...</div>;

  return (
    <article className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
      <div className="p-8">
        {/* Meta info */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
            Personal Growth
          </span>
          <time className="text-sm text-gray-500">{formattedDate}</time>
        </div>

        {/* Title and author */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {fields.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
              {fields.author?.charAt(0) || '?'}
            </div>
            <div>
              <span className="text-gray-700 font-medium">By {fields.author || 'Unknown'}</span>
              <p className="text-xs text-gray-500">Youth Ministry Member</p>
            </div>
          </div>
        </div>

        {/* Content – restored from old version */}
        <div className="prose prose-lg max-w-none">
          {contentParagraphs.map((paragraph, idx) => (
            <div key={idx} className="mb-6">
              {paragraph.includes("Questions like,") ? (
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                  <p className="text-gray-700 whitespace-pre-line font-medium">{paragraph}</p>
                </div>
              ) : (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{paragraph}</p>
              )}
            </div>
          ))}

          {/* Bullet Points */}
          {fields.bulletPoints?.length > 0 && (
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Steps to embrace your worth:</h3>
              <ul className="space-y-3">
                {fields.bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-600 font-bold text-lg">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Closing Message */}
          {fields.closingMessage && (
            <div className="my-8 p-6 bg-gradient-to-r from-green-50 to-green-100/50 rounded-lg border border-green-200">
              <FaQuoteLeft className="text-green-400 text-2xl mb-3" />
              <p className="text-gray-800 whitespace-pre-line italic leading-relaxed">
                {typeof fields.closingMessage === 'string'
                  ? fields.closingMessage
                  : fields.closingMessage.text || ''}
              </p>
            </div>
          )}

          {/* Hashtags */}
          {fields.hashtags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-200">
              {fields.hashtags.map((tag, idx) => (
                <span key={idx} className="text-sm text-green-600 bg-green-50 px-3 py-1.5 rounded-full hover:bg-green-100 cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-200">
          <button onClick={handleLike} className={`flex items-center gap-2 transition-all group ${liked ? "text-red-600" : "text-gray-500 hover:text-green-600"}`}>
            <FaHeart className={`${liked ? "text-red-600" : "group-hover:scale-110"} transition-transform`} size={18} />
            <span className="font-medium">{likesCount}</span>
          </button>
          <button onClick={() => setShowComments(!showComments)} className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors group">
            <FaComment className="group-hover:scale-110 transition-transform" size={18} />
            <span className="font-medium">{comments.length}</span>
          </button>
         <button 
  onClick={() => {
    const url = window.location.href; // full post URL
    const text = `Check out this motivational post: ${fields.title}`;
    const fullMessage = `${text} ${url}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
  }}
  className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors ml-auto group"
>
  <FaShare className="group-hover:scale-110 transition-transform" size={18} />
  <span>Share</span>
</button>
        </div>

       {/* Comments Section */}
{showComments && (
  <div className="mt-8 pt-6 border-t border-gray-200">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-900">
        Comments ({comments.length})
      </h3>
      <button 
        onClick={() => setShowComments(false)}
        className="text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>
    </div>

    {/* Comment Input */}
    <div className="flex gap-3 mb-6">
      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-semibold text-sm flex-shrink-0">
        {user?.name?.charAt(0) || '?'}
      </div>
      <div className="flex-1">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts..."
          rows="3"
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
          disabled={isSubmitting}
        />
        <div className="flex justify-end mt-2">
          <button
            onClick={handleAddComment}
            disabled={!newComment.trim() || isSubmitting}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin">⏳</span>
                Posting...
              </>
            ) : (
              'Post Comment'
            )}
          </button>
        </div>
      </div>
    </div>

    {/* Comments List */}
    <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
      {comments.length === 0 ? (
        <p className="text-center text-gray-500 py-8 bg-gray-50 rounded-lg">
          No comments yet. Be the first to share your thoughts!
        </p>
      ) : (
        comments.map((comment) => (
          <div key={comment._id} className="flex gap-3 group">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-semibold text-sm flex-shrink-0">
              {comment.userId?.name?.charAt(0) || '?'}
            </div>
            <div className="flex-1 bg-gray-50 p-4 rounded-lg group-hover:bg-gray-100 transition-colors">
              <div className="flex justify-between items-start mb-1">
                <span className="font-semibold text-gray-900">{comment.userId?.name || 'Anonymous'}</span>
                <span className="text-xs text-gray-500">
                  {formatCommentTime(comment.createdAt)}
                </span>
              </div>
              <p className="text-gray-700">{comment.text}</p>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
)}
      </div>
    </article>
  );
}