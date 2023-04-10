import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export type Post = {
  slug: string;
  frontmatter: {
    [key: string]: any;
    title: string;
    date: string;
    description: string;
  };
  content: string;
};

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: {
      ...data,
      title: data.title || '',
      date: data.date || '',
      description: data.description || '',
    },
    content,
  };
}

export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
}

export function getAllPosts(): Post[] {
  const slugs = getAllPostSlugs();

  return slugs.map((slug) => getPostBySlug(slug));
}
