import React from 'react';
import { blogPosts } from '../../data/blog';
import BlogCard from '../../components/blog/BlogCard';

export default function BlogPage() {
  return (
    <main>
      <section className="blog">
        <h1 className="section-title">Blog</h1>
        <p className="section-subtitle">Thoughts and insights on technology</p>
        
        <div className="blog-posts">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}