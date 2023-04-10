import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { Post, getPostBySlug, getAllPostSlugs } from '../../lib/posts';

type Props = {
  post: Post;
};

const PostPage: React.FC<Props> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={post.frontmatter.title}>
      <article>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs().map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPostBySlug(slug);

  return {
    props: { post },
  };
};

export default PostPage;
