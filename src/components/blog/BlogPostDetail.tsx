"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../../data/blog'
import { BlogPost, WorkExperience } from '../../types';
import { formatDate } from '../../utils/helpers';
import ReactMarkdown from 'react-markdown';
import './blog-post-detail.css';

type BlogPostDetailProps = {
  post: BlogPost;
  relatedExperience: WorkExperience | null;
};

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, relatedExperience }) => {
  return (
    <main className="blog-post-container">
      <article className="blog-post">
        <header className="blog-post-header">
          <div className="blog-post-meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="blog-post-read-time">{post.readTime}</span>
          </div>
          
          <h1 className="blog-post-title">{post.title}</h1>
          
          <p className="blog-post-excerpt">{post.excerpt}</p>
          
          <div className="blog-post-tags">
            {post.tags.map(tag => (
              <span key={tag} className="blog-post-tag">{tag}</span>
            ))}
          </div>
        </header>
        
        <div className="blog-post-featured-image">
          <Image 
            src={post.image || '/blog/default.jpg'} 
            alt={post.title} 
            width={1200} 
            height={600} 
            className="featured-image" 
          />
        </div>
        
        <div className="blog-post-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
      
      <aside className="blog-post-sidebar">
        <div className="blog-post-author">
          <Image 
            src="/profile-picture.jpg" 
            alt="Prisca Onyebuchi" 
            width={80} 
            height={80} 
            className="author-image" 
          />
          <div className="author-info">
            <h3 className="author-name">Prisca Onyebuchi</h3>
            <p className="author-bio">Software Developer and Computer Science student at Trent University.</p>
          </div>
        </div>
        
        {relatedExperience && (
          <div className="blog-post-related-experience">
            <h3 className="sidebar-heading">Related Experience</h3>
            <Link href={`/experience/${relatedExperience.id}`} className="related-experience-card">
              <div className="related-experience-logo">
                {relatedExperience.logo ? (
                  <Image 
                    src={relatedExperience.logo} 
                    alt={`${relatedExperience.company} logo`} 
                    width={40} 
                    height={40} 
                    className="experience-logo" 
                  />
                ) : (
                  <div className="experience-logo-text">
                    {relatedExperience.company.substring(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="related-experience-info">
                <h4 className="related-experience-role">{relatedExperience.role}</h4>
                <p className="related-experience-company">{relatedExperience.company}</p>
                <p className="related-experience-period">{relatedExperience.period}</p>
              </div>
              <div className="related-experience-arrow">→</div>
            </Link>
          </div>
        )}
        
        <div className="blog-post-more-posts">
          <h3 className="sidebar-heading">More Posts</h3>
          <div className="more-posts-list">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map(relatedPost => (
                <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id} className="more-post-item">
                  <h4 className="more-post-title">{relatedPost.title}</h4>
                  <p className="more-post-date">{formatDate(relatedPost.date)}</p>
                </Link>
              ))}
          </div>
        </div>
      </aside>
    </main>
  );
};

export default BlogPostDetail;