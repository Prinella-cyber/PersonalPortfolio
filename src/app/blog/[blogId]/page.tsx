import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../../data/blog';
import { experiences } from '../../../data/experiences';
import BlogPostDetail from '../../../components/blog/BlogPostDetail';

export async function generateMetadata({ params }: { params: { blogId: string } }): Promise<Metadata> {
  const { blogId } = await params;
  const post = blogPosts.find(post => post.id === blogId);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Prisca Onyebuchi`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
  };
}

export function generateStaticParams() {
  return blogPosts.map(post => ({
    blogId: post.id,
  }));
}

export default async function BlogPostPage({ params }: { params: { blogId: string } }) {
  const { blogId } = await params;
  const post = blogPosts.find(post => post.id === blogId);
  
  if (!post) {
    notFound();
  }
  
  // Get related experience if exists
  const relatedExperience = post.relatedExperienceId
  ? experiences.find(exp => exp.id === post.relatedExperienceId) || null
  : null;
  
  return <BlogPostDetail post={post} relatedExperience={relatedExperience} />;
}