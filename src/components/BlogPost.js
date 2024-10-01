import React, { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component

const BlogPost = ({ title, content, initialLikes, image }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleShare = () => {
    alert(`Share this blog: ${title}`); // Simple share function
  };

  return (
    <div className="blog-post">
      {image && <Image src={image} alt={title} width={600} height={400} />} {/* Replaced <img> with <Image> */}
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="blog-actions">
        <button onClick={handleLike}>Like ({likes})</button>
        <button onClick={handleShare}>Share</button>
      </div>
      <div className="comments-section">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Add a comment"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <style jsx>{`
        .blog-post {
          border: 1px solid #ddd;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
          background-color: #fff;
        }
        .blog-actions {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
        }
        .comments-section {
          margin-top: 20px;
        }
        .comments-section ul {
          list-style-type: none;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
