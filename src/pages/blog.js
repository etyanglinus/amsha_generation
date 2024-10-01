import React from 'react';
import BlogPost from '../components/BlogPost';
import styles from '../styles/Blog.module.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Understanding React Hooks',
      content: 'React Hooks allow you to use state and other React features without writing a class.',
      initialLikes: 0,
      image: 'path/to/react-hooks-image.jpg', // Make sure the path is correct
    },
    {
      title: 'Next.js - The React Framework',
      content: 'Next.js is a React framework that enables server-side rendering and generating static websites.',
      initialLikes: 0,
      image: 'path/to/nextjs-image.jpg', // Make sure the path is correct
    },
  ];

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogPosts}>
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            content={post.content}
            initialLikes={post.initialLikes}
            image={post.image} // Ensure the image is passed correctly
          />
        ))}
      </div>
      <aside className={styles.sidebar}>
        <h2>Categories</h2>
        <ul>
          <li>Financial Tips</li>
          <li>Budgeting</li>
          <li>Investment Strategies</li>
        </ul>
      </aside>
    </div>
  );
};

export default Blog;
