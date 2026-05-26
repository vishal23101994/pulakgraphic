import Link from 'next/link';

const posts = [
  { slug: 'first-post', title: 'First Blog Post' },
  { slug: 'media-trends', title: 'Media Trends 2026' },
];

export default function Blog() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}