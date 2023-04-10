import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Link from 'next/link';

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
  };
}

interface Props {
  posts: Post[];
}

const BlogPage = ({ posts }: Props) => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} passHref>
              <span>
                {post.frontmatter.title} ({post.frontmatter.date})
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((filename) => {
    const markdown = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data } = matter(markdown);
    return {
      slug: filename.replace('.md', ''),
      frontmatter: data,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
