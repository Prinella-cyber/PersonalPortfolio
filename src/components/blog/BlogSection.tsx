import React from 'react';
import BlogCard from './BlogCard';
import { blogPosts } from '../../data/blog';

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="blog">
      <h2 className="section-title">Personal Blog</h2>
      <p className="section-subtitle">Thoughts and insights on technology</p>
      
      <div className="blog-posts">
        {blogPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;