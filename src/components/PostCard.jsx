import { useState } from "react";
import { FaHeart, FaComment, FaShare, FaQuoteLeft, FaUserCircle } from "react-icons/fa";

export function PostCard({ post }) {
  // Safety check: if post or fields missing, show nothing (or loading)
  if (!post || !post.fields) {
    return null;
  }

  const { fields } = post;

  // Use correct field names (adjust if your Contentful model differs)
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(fields.Likes || 0); // Note capital L
  const [comments, setComments] = useState([]); // Start empty – comments are local only
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Format date nicely
  const formattedDate = fields.date
    ? new Date(fields.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : '';

  // Split content into paragraphs (assuming double newline or just split by \n)
  const contentParagraphs = fields.content
    ? fields.content.split('\n').filter(p => p.trim() !== '')
    : [];

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    setIsSubmitting(true);
    setTimeout(() => {
      const comment = {
        id: comments.length + 1,
        author: "Guest User",
        text: newComment,
        timestamp: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        avatar: "GU"
      };
      setComments([...comments, comment]);
      setNewComment("");
      setIsSubmitting(false);
      if (!showComments) setShowComments(true);
    }, 500);
  };

  const formatCommentTime = (timestamp) => {
    const commentDate = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now - commentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return timestamp;
  };

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
              {fields.author ? fields.author.charAt(0) : '?'}
            </div>
            <div>
              <span className="text-gray-700 font-medium">By {fields.author || 'Unknown'}</span>
              <p className="text-xs text-gray-500">Youth Ministry Member</p>
            </div>
          </div>
        </div>

        {/* Content with styling */}
        <div className="prose prose-lg max-w-none">
          {contentParagraphs.map((paragraph, idx) => (
            <div key={idx} className="mb-6">
              {paragraph.includes("Questions like,") ? (
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                  <p className="text-gray-700 whitespace-pre-line font-medium">
                    {paragraph}
                  </p>
                </div>
              ) : (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {paragraph}
                </p>
              )}
            </div>
          ))}

          {/* Bullet Points */}
          {fields.bulletPoints && fields.bulletPoints.length > 0 && (
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

         {/* Closing Message with special styling */}
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
          {fields.hashtags && fields.hashtags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-200">
              {fields.hashtags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-sm text-green-600 bg-green-50 px-3 py-1.5 rounded-full hover:bg-green-100 cursor-pointer transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-200">
          <button 
            onClick={handleLike}
            className={`flex items-center gap-2 transition-all group ${
              liked ? "text-red-600" : "text-gray-500 hover:text-green-600"
            }`}
          >
            <FaHeart className={`${liked ? "text-red-600" : "group-hover:scale-110"} transition-transform`} size={18} />
            <span className="font-medium">{likesCount}</span>
          </button>
          
          <button 
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors group"
          >
            <FaComment className="group-hover:scale-110 transition-transform" size={18} />
            <span className="font-medium">{comments.length}</span>
          </button>
          
         // Inside PostCard.jsx, replace the share button with:
<button 
  onClick={() => {
    const url = window.location.href; // full post URL
    const text = `Check out this motivational post: ${fields.title}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
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
              <FaUserCircle className="text-gray-400 text-4xl flex-shrink-0" />
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
                  <div key={comment.id} className="flex gap-3 group">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-semibold text-sm flex-shrink-0">
                      {comment.avatar || comment.author.charAt(0)}
                    </div>
                    <div className="flex-1 bg-gray-50 p-4 rounded-lg group-hover:bg-gray-100 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-gray-900">{comment.author}</span>
                        <span className="text-xs text-gray-500">
                          {formatCommentTime(comment.timestamp)}
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