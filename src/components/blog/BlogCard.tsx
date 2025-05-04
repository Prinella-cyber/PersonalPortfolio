import React from 'react';
import Link from 'next/link';
import { BlogPost } from '../../types';
import { formatDate } from '../../utils/helpers';

type BlogCardProps = {
  post: BlogPost;
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <div className="blog-image-placeholder" />
      </div>
      <div className="blog-content">
        <span className="blog-date">{formatDate(post.date)}</span>
        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-excerpt">{post.excerpt}</p>
        <Link href={`#blog-${post.id}`} className="blog-read-more">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;